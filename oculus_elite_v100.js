// Simple Language Switcher
// Record start time of the application
const appStartTime = new Date().toISOString();
console.log('Application start time:', appStartTime);
if (typeof localStorage !== 'undefined') {
  localStorage.setItem('appStartTime', appStartTime);
}

const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_about: "Nosotros",
        nav_beneficios: "Beneficios",
        nav_membresia: "Membresía",
        nav_dashboard: "Partners",
        nav_signin: "Sign In",
        invite_only: "Por Invitación Solamente",
        hero_landing_kicker: "MEMBRESÍA PRIVADA",
        hero_landing_title: "<span class=\"text-3xl md:text-[3.8rem] block mb-2 opacity-90 tracking-widest uppercase\">Acceso Privado a las</span><span class=\"italic font-normal text-[#d2b581] text-5xl md:text-[6.5rem]\">Mejores Experiencias.</span>",
        hero_landing_sub: "Una red exclusiva de restaurantes, hoteles y destinos para un<br>grupo selecto de miembros.",
        curated_partners_kicker: "SOCIOS CURADOS",
        btn_solicitar: "SOLICITAR INVITACIÓN",
        btn_beneficios: "Ver Beneficios",
        landing_ben_kicker: "BENEFICIOS PARA MIEMBROS",
        landing_ben_title: "Una Membresía.<br><span class=\"text-[#d2b581] italic font-normal\">Beneficios Ilimitados.</span>",
        landing_ben1_name: "Gastronomía",
        landing_ben1_desc: "Reservas prioritarias, degustaciones de cortesía y eventos culinarios exclusivos.",
        ben1_showing: "mostrando 3 de 22",
        landing_ben2_name: "Viajes",
        landing_ben2_desc: "Tarifas preferenciales y mejoras en hoteles boutique seleccionados.",
        ben2_showing: "mostrando 3 de 18",
        landing_ben3_name: "Estilo de Vida",
        landing_ben3_desc: "Acceso a eventos exclusivos y concierge dedicado.",
        ben3_showing: "mostrando 3 de 15",
        about_kicker: "SOBRE OCULUS CARD",
        about_title: "Una Membresía Diseñada para Quienes<br>Buscan lo Excepcional",
        about_desc: "Oculus Card es una membresía privada que otorga a sus titulares beneficios preferenciales y acceso exclusivo.",
        about_quote: "\"No es solo una tarjeta — es la llave a un mundo de experiencias refinadas.\"",
        how_kicker: "CÓMO FUNCIONA",
        how_title: "Tres Simples Pasos",
        step1_tag: "Paso 01",
        step1_name: "Solicitud",
        step1_desc: "Envía tu solicitud a través de nuestro sencillo formulario en línea. Cuéntanos sobre ti y tus intereses.",
        step2_tag: "Paso 02",
        step2_name: "Aprobación",
        step2_desc: "Nuestro comité de membresía revisa cada solicitud para asegurar la alineación con nuestros valores comunitarios.",
        step3_tag: "Paso 03",
        step3_name: "Acceso",
        step3_desc: "Recibe tu Oculus Card y desbloquea acceso inmediato a nuestra red completa de socios y experiencias.",
        partner_kicker: "ALIANZAS ELITE",
        partner_title: "Conviértete en Socio",
        partner_desc: "Oculus Card evalúa selectivamente negocios que ofrecen un valor excepcional y servicios de clase mundial.",
        btn_partner_inquiry: "SOLICITAR VALUACIÓN DE ALIANZA",
        form_title: "Solicitud de Membresía",
        form_submit: "Enviar Solicitud"
    },
    en: {
        nav_inicio: "Home",
        nav_about: "About",
        nav_beneficios: "Benefits",
        nav_membresia: "Membership",
        nav_dashboard: "Partners",
        nav_signin: "Sign In",
        invite_only: "By Invitation Only",
        hero_landing_kicker: "PRIVATE MEMBERSHIP",
        hero_landing_title: "<span class=\"text-3xl md:text-[3.8rem] block mb-2 opacity-90 tracking-widest uppercase\">Private Access to the</span><span class=\"italic font-normal text-[#d2b581] text-5xl md:text-[6.5rem]\">Finest Experiences.</span>",
        hero_landing_sub: "A curated network of restaurants, hotels and lifestyle destinations for a<br>select group of members.",
        curated_partners_kicker: "CURATED PARTNERS",
        btn_solicitar: "REQUEST INVITATION",
        btn_beneficios: "See Benefits",
        landing_ben_kicker: "MEMBER BENEFITS",
        landing_ben_title: "One Membership.<br><span class=\"text-[#d2b581] italic font-normal\">Unlimited Benefits.</span>",
        landing_ben1_name: "Dining",
        landing_ben1_desc: "Priority reservations, complimentary tastings, and exclusive dining events.",
        ben1_showing: "showing 3 of 22",
        landing_ben2_name: "Travel",
        landing_ben2_desc: "Preferred rates and upgrades at handpicked boutique hotels.",
        ben2_showing: "showing 3 of 18",
        landing_ben3_name: "Lifestyle",
        landing_ben3_desc: "Access to members-only events and concierge service.",
        ben2_showing: "showing 3 of 15",
        about_kicker: "ABOUT OCULUS CARD",
        about_title: "A Membership Designed for Those<br>Who Seek the Exceptional",
        about_desc: "Oculus Card is a private membership that grants its holders preferred benefits and exclusive access.",
        about_quote: "\"Not just a card — a key to a world of refined experiences.\"",
        how_kicker: "HOW IT WORKS",
        how_title: "Three Simple Steps",
        step1_tag: "Step 01",
        step1_name: "Apply",
        step1_desc: "Submit your application through our simple online form. Tell us about yourself and your interests.",
        step2_tag: "Step 02",
        step2_name: "Approval",
        step2_desc: "Our membership committee reviews each application to ensure alignment with our community values.",
        step3_tag: "Step 03",
        step3_name: "Access",
        step3_desc: "Receive your Oculus Card and unlock immediate access to our entire network of partners and experiences.",
        partner_kicker: "ELITE PARTNERSHIP",
        partner_title: "Become a Partner",
        partner_desc: "Oculus Card selectively evaluates businesses that offer exceptional value and world-class services.",
        btn_partner_inquiry: "SUBMIT PARTNERSHIP INQUIRY",
        form_title: "Membership Application",
        form_submit: "Submit Application"
    },
    it: {
        nav_inicio: "Inizio",
        nav_about: "Chi Siamo",
        nav_beneficios: "Vantaggi",
        nav_membresia: "Affiliazione",
        nav_dashboard: "Partner",
        nav_signin: "Accedi",
        invite_only: "Solo Su Invito",
        hero_landing_kicker: "AFFILIAZIONE PRIVATA",
        hero_landing_title: "<span class=\"text-3xl md:text-[3.8rem] block mb-2 opacity-90 tracking-widest uppercase\">Accesso Privato alle</span><span class=\"italic font-normal text-[#d2b581] text-5xl md:text-[6.5rem]\">Migliori Esperienze.</span>",
        hero_landing_sub: "Una rete curata di ristoranti, hotel e destinazioni lifestyle per un<br>grupo esclusivo di membri.",
        curated_partners_kicker: "PARTNER SELEZIONATI",
        btn_solicitar: "RICHIEDI INVITO",
        btn_beneficios: "Vedi Vantaggi",
        landing_ben_kicker: "VANTAGGI PER I MEMBRI",
        landing_ben_title: "Un'Affiliazione.<br><span class=\"text-[#d2b581] italic font-normal\">Vantaggi Illimitati.</span>",
        landing_ben1_name: "Ristorazione",
        landing_ben1_desc: "Prenotaciones prioritarie e degustaciones gratuitas.",
        ben1_showing: "mostrando 3 de 22",
        landing_ben2_name: "Viaggi",
        landing_ben2_desc: "Tarifas preferenciales e upgrade en boutique hotel.",
        ben2_showing: "mostrando 3 de 18",
        landing_ben3_name: "Stile di Vita",
        landing_ben3_desc: "Accesso a eventos riservati e concierge dedicado.",
        ben3_showing: "mostrando 3 de 15",
        about_kicker: "SU OCULUS CARD",
        about_title: "Un'Affiliazione Progettata per Chi<br>Cerca l'Eccezionale",
        about_desc: "Oculus Card è un'affiliazione privada que garantiza ai suoi titolari vantaggi preferenciales e accesso esclusivo.",
        about_quote: "\"Non solo una carta — una chiave per un mondo di experiencias raffinate.\"",
        how_kicker: "COME FUNZIONA",
        how_title: "Tre Semplici Passaggi",
        step1_tag: "Passo 01",
        step1_name: "Candidatura",
        step1_desc: "Invia la tua candidatura tramite il nostro modulo online. Raccontaci di te e dei tuoi intereses.",
        step2_tag: "Passo 02",
        step2_name: "Approvazione",
        step2_desc: "Il nostro comitato esamina ogni domanda per garantire l'allineamento con i nostri valores comunitarios.",
        step3_tag: "Passo 03",
        step3_name: "Accesso",
        step3_desc: "Ricevi la tua Oculus Card e sblocca l'accesso immediato a tutta la nuestra rete di partner ed experienze.",
        partner_kicker: "PARTNERSHIP ÉLITE",
        partner_title: "Diventa un Partner",
        partner_desc: "Oculus Card valuta selettivamente le aziende que ofrecen un valor excepcional y servicios de clase mundial.",
        btn_partner_inquiry: "INVIA RICHIESTA DI VALUTAZIONE",
        form_title: "Richiesta de Affiliazione",
        form_submit: "Invia Domanda"
    }
};

/**
 * OCULUS ELITE PARTNERS
 * Simply add your partners here. All will be rendered with Impeccable White aesthetics.
 */
const partners = [
    { name: 'Oculus Partner', logo: 'partner_circle.png', height: 'h-24' },
    { name: 'Face & Body', logo: 'partner_facebody.png', height: 'h-20' },
    { name: 'Luxury Villas', logo: 'data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 80' fill='white'><text x='10' y='50' font-family='serif' font-size='30' font-weight='bold'>LUXURY VILLAS</text><text x='10' y='70' font-family='sans-serif' font-size='12' letter-spacing='8'>COSTA RICA</text></svg>', height: 'h-14' },
    { name: 'Kura Boutique', text: 'KURA BOUTIQUE' },
    { name: 'Furca Elite', text: 'FURCA ELITE' }
];

function setLanguage(lang) {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Highlight active language in UI
    ['en', 'es', 'it'].forEach(l => {
        const el = document.getElementById('lang-' + l);
        if (el) {
            if (l === lang) {
                el.classList.add('text-white');
                el.classList.remove('text-zinc-500');
            } else {
                el.classList.remove('text-white');
                el.classList.add('text-zinc-500');
            }
        }
    });
}

function renderMarquee() {
    const container = document.getElementById('marquee-inner');
    if (!container) return;

    // Clear previous items to avoid duplications
    container.innerHTML = '';

    // Build the HTML for one set
    const buildSetHtml = () => {
        let html = '<div class="flex gap-32 items-center shrink-0">';
        partners.forEach(p => {
            if (p.logo) {
                const imgFilter = p.filter || 'brightness-0 invert';
                const style = p.filter ? `filter: ${imgFilter}; mix-blend-mode: screen;` : `filter: ${imgFilter};`;
                html += `<img src="${p.logo}" alt="${p.name}" class="${p.height || 'h-20'} w-auto object-contain" style="${style}">`;
            } else if (p.text) {
                html += `<span class="font-serif text-2xl tracking-widest whitespace-nowrap text-white">${p.text}</span>`;
            }
        });
        html += '</div>';
        return html;
    };

    const oneSet = buildSetHtml();
    // Inject twice for seamless loop
    container.innerHTML = oneSet + oneSet;
}

// Initial Load
if(typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
    
    // Initial marquee build
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderMarquee);
    } else {
        renderMarquee();
    }
}
