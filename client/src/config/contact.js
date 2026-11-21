export const CONTACT = {
    phoneDisplay: "+91 9417195558",
    phoneTel: "+919417195558",
    email: "sharma1995@gmail.com",
    location: "Area",
    whatsapp: "+91 9417195558"
};

export const whatsappLink = (
 message = " Hello! I'm interested in maths coaching for my child."
) => "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(message);
