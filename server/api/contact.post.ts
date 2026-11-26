import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Anti-spam : si le champ caché est rempli, c'est un robot
  if (body._honey) {
    console.warn('[contact] Honeypot rempli : message ignoré')
    return { ok: true }
  }

  const name = String(body.name || '').trim().slice(0, 100)
  const email = String(body.email || '').trim().slice(0, 150)
  const phone = String(body.phone || '').trim().slice(0, 30)
  const secteur = String(body.secteur || '').trim().slice(0, 60)
  const message = String(body.message || '').trim().slice(0, 3000)

  if (!name || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Nom et message obligatoires.' })
  }
  if (!email && !phone) {
    throw createError({ statusCode: 400, statusMessage: 'Renseigne un email ou un téléphone.' })
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Email invalide.' })
  }

  const config = useRuntimeConfig()

  const missingConfig = [
    !config.smtpHost && 'NUXT_SMTP_HOST',
    !config.smtpPort && 'NUXT_SMTP_PORT',
    !config.smtpUser && 'NUXT_SMTP_USER',
    !config.smtpPass && 'NUXT_SMTP_PASS',
    !config.mailTo && 'NUXT_MAIL_TO'
  ].filter(Boolean)

  if (missingConfig.length) {
    console.error(`[contact] Configuration manquante : ${missingConfig.join(', ')}`)
    throw createError({ statusCode: 500, statusMessage: "L'envoi du message n'est pas configuré." })
  }

  const smtpPort = Number(config.smtpPort)
  if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    console.error('[contact] Configuration invalide : NUXT_SMTP_PORT')
    throw createError({ statusCode: 500, statusMessage: "La configuration de l'envoi du message est invalide." })
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: config.smtpUser, pass: config.smtpPass }
  })

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio" <${config.smtpUser}>`,
      to: config.mailTo,
      replyTo: email || undefined,
      subject: `Nouvelle demande de ${name}`,
      text: [
        `Nom : ${name}`,
        `Email : ${email || '-'}`,
        `Téléphone : ${phone || '-'}`,
        `Secteur : ${secteur || '-'}`,
        '',
        message
      ].join('\n')
    })
    if (info.accepted.length === 0) {
      throw new Error(`Le serveur SMTP n'a accepté aucun destinataire : ${info.rejected.join(', ')}`)
    }
    console.log('[contact] Accepté par le serveur SMTP :', {
      messageId: info.messageId,
      response: info.response,
      acceptedCount: info.accepted.length
    })
  } catch (e) {
    console.error('Erreur envoi mail :', e)
    throw createError({ statusCode: 500, statusMessage: "Impossible d'envoyer le message pour le moment." })
  }

  return { ok: true }
})