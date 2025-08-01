import emailjs from '@emailjs/nodejs';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { name, email, subject, message } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email || !subject || !message) {
        console.error('❌ Thiếu trường bắt buộc:', { name, email, subject, message });
        return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('📨 Nhận dữ liệu:', { name, email, subject, message });
    console.log('🔐 Keys:', {
        SERVICE: process.env.EMAILJS_SERVICE_ID,
        TEMPLATE: process.env.EMAILJS_TEMPLATE_ID,
        PUBLIC: process.env.EMAILJS_PUBLIC_KEY,
        PRIVATE: process.env.EMAILJS_PRIVATE_KEY,
    });

    try {
        const result = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            {
                user_name: name,
                user_email: email,
                subject,
                message,
            },
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY,
                privateKey: process.env.EMAILJS_PRIVATE_KEY,
            }
        );

        console.log('✅ Email sent:', result);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('❌ Lỗi gửi email:', error.message, error.stack);
        return res.status(500).json({ error: 'Send failed', details: error.message });
    }
}