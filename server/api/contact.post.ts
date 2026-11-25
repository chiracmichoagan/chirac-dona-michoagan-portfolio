import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Anti-spam : si le champ caché est rempli, c'est un robot
  if (body._honey) return { ok: true }

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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: config.mailUser, pass: config.mailPass }
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${config.mailUser}>`,
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
  } catch (e) {
    console.error('Erreur envoi mail :', e)
    throw createError({ statusCode: 500, statusMessage: "Impossible d'envoyer le message pour le moment." })
  }

  return { ok: true }
})