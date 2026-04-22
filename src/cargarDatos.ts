/**
 * BULK DATA UPLOAD SCRIPT (SEEDING) - ARAPERFUL PROJECT
 * * * Purpose:
 * This script was created to automate the migration of the perfume catalog
 * from a local environment (asyncMock) to the Cloud Firestore database.
 * * * Utility:
 * It avoids the manual upload of all 30 perfumes through the Firebase console,
 * ensuring that all products maintain the correct data structure (names, 
 * prices, stock, and categories) efficiently and without human error.
 * * * Instructions:
 * 1. Execute once by calling the subirDatos() function in App.tsx.
 * 2. Once success is confirmed in the Firebase console, comment out the execution 
 * line to prevent duplicate entries.
 */

/* SCRIPT DE CARGA MASIVA (SEEDING) - PROYECTO ARAPERFUL
 * * Este script fue creado para automatizar la migración del catálogo de perfumes
 * desde un entorno local (asyncMock) hacia la base de datos Cloud Firestore.
 * * Utilidad: 
 * Evita la carga manual de los 30 perfumes a través de la consola de Firebase,
 * garantizando que todos los productos mantengan la estructura de datos correcta
 * (nombres, precios, stock y categorías) de manera eficiente y sin errores humanos.
 * * Instrucciones:
 * 1. Ejecutar una sola vez llamando a la función subirDatos() en App.tsx.
 * 2. Una vez confirmado el éxito en la consola de Firebase, comentar la ejecución.
 */


import { db } from "./services/firebase"; 
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const perfumes = [
    { 
        name: 'Invictus (Paco Rabanne) 50ml', price: 40000, category: 'masculino', img: '/img/invictus.jpg', stock: 7, 
        description: `“El es un héroe en todo su esplendor, único y tan fuerte que todo lo logra y nada se rinde a sus pies, la victoria esta en sus manos”. Invictus de Rabanne es una fragancia de la familia olfativa Amaderada Acuática para Hombres. Se lanzó en 2013. Fue creada por Veronique Nyberg, Anne Flipo, Olivier Polge y Dominique Ropion. Las Notas de Salida son notas marinas, toronja (pomelo) y mandarina; las Notas de Corazón son hoja de laurel y jazmín; las Notas de Fondo son ámar gris, madera de gaiac, musgo de roble y pachulí.` 
    },
    { 
        name: 'Blue Seduction (A. Banderas) 50ml', price: 45000, category: 'masculino', img: '/img/antonio.jpg', stock: 15, 
        description: `“Es muy intuitivo y tan salvaje como las olas que cubren el alma del océano, jamás se rinde”. Blue Seduction de Antonio Banderas es una fragancia de la familia olfativa Oriental Fougère para Hombres. Se lanzó en 2007. La Nariz detrás de esta fragrancia es Olivier Cresp. Las Notas de Salida son melón, bergamota, menta y grosellas negras; las Notas de Corazón son agua de mar, manzana verde, capuchino, cardamomo y nuez moscada; las Notas de Fondo son notas amaderadas y ámar.` 
    },
    { 
        name: 'Armani Code 50ml', price: 43000, category: 'masculino', img: '/img/armani.jpg', stock: 5, 
        description: `“Su presencia evoca elegancia, total autonomía y eficacia, nadie puede ignorarlo, porque representa el Éxito puro”. Armani Code Sport Edition 2016 de Giorgio Armani es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Las Notas de Salida son menta, menta piperita, limón siciliano (lima siciliana) y mandarina; las Notas de Corazón son jengibre y geranio; las Notas de Fondo son ambroxan, romero, vetiver y ládano.` 
    },
    { 
        name: 'Sauvage (Dior) 50ml', price: 46000, category: 'masculino', img: '/img/sauvage.webp', stock: 10, 
        description: `“El es audaz, no hay nada que no pueda vencer, en medio de la selva, evoca una gran ferocidad lista para seducir a quien lo desee”. Sauvage de Dior es una fragancia de la familia olfativa Aromática Fougère para Hombres. Se lanzó en 2015. La Nariz detrás de esta fragrancia es François Demachy. Las Notas de Salida son bergamota de Calabria y pimienta; las Notas de Corazón son pimienta de Sichuan, lavanda, pimienta rosa, vetiver, pachulí, geranio y elemí; las Notas de Fondo son ambroxan, cedro y ládano.` 
    },
    { 
        name: 'Kenzo Homme 50ml', price: 42000, category: 'masculino', img: '/img/kenzo.jpg', stock: 6, 
        description: `“El se encuentra entre las profundidades del mar, apoderándose de todo el ecosistema animal, es peligroso, es muy dominante”. Kenzo Homme Eau de Toilette Intense de Kenzo es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Se lanzó en 2021. La Nariz detrás de esta fragrancia es Quentin Bisch. Las Notas de Salida son notas marinas, Calipsone, pimienta rosa y especias; las Notas de Corazón son higo, ábol de la higuera y vetiver; las Notas de Fondo son sándalo, Akigalawood y pachulí.` 
    },
    { 
        name: 'Acqua di Gio Men 50ml', price: 48000, category: 'masculino', img: '/img/acqua.jpg', stock: 5, 
        description: `“El se pierde entre el mar, y resurge como un remolino del fondo robándose y cautivando toda la atención”. Acqua di Gio de Giorgio Armani es una fragancia de la familia olfativa Aromática Acuática para Hombres. Se lanzó en 1996. Fue creada por Alberto Morillas, Annick Menardo y Christian Dussoulier. Las Notas de Salida son lima (limón verde), limón (lima ácida), bergamota, jazmín, naranja, mandarina y neroli; las Notas de Corazón son notas marinas, jazmín, calone, romero, durazno, fresia, jacinto, ciclamen, violeta, cilantro, rosa, nuez moscada y reseda; las Notas de Fondo son almizcle blanco, cedro, musgo de roble, pachulí y ámar.` 
    },
    { 
        name: 'CK One 50ml', price: 38000, category: 'masculino', img: '/img/onekelvin.webp', stock: 8, 
        description: `“Con su brillo juvenil, y dinamismo perpetuo, el se roba el corazón de todas”. CK One de Calvin Klein es una fragancia de la familia olfativa Cítrica Aromática para Hombres y Mujeres. Se lanzó en 1994. Fue creada por Alberto Morillas y Harry Fremont. Las Notas de Salida son limón (lima ácida), notas verdes, bergamota, mandarina, piña, cardamomo y papaya; las Notas de Corazón son lirio de los valles, jazmín, violeta, rosa, nuez moscada, fresia y raíz de lirio; las Notas de Fondo son acordes verdes, almizcle, cedro, té verde, sándalo, musgo de roble y ámar.` 
    },
    { 
        // 💣 CORRECCIÓN DE IMAGEN: Spicebomb ahora apunta a /img/space.webp (como tenés en tu carpeta)
        name: 'Spicebomb (Viktor&Rolf) 50ml', price: 49000, category: 'masculino', img: '/img/spice.webp', stock: 5, 
        description: `“El es una bomba de seducción, deja sus estelas de atracción, ellas corren por el, el listo para atraer”. Spicebomb de Viktor&Rolf es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Se lanzó en 2012. La Nariz detrás de esta fragrancia es Olivier Polge. Las Notas de Salida son pimienta rosa, elemí, bergamota y toronja; las Notas de Corazón son canela, pimentón dulce y azafrán; las Notas de Fondo son tabaco, cuero y vetiver.` 
    },
    { 
        name: 'Tom Ford Extreme 50ml', price: 65000, category: 'masculino', img: '/img/tomford.webp', stock: 3, 
        description: `“El es el rey de la seducción, tanto asi que ellas mueren por el”. Tom Ford for Men Extreme de Tom Ford es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Se lanzó en 2007. La fragrancia contiene trufa, pachulí, higo, cedro y limón (lima ácida).` 
    },
    { 
        name: 'Gucci Guilty 50ml', price: 52000, category: 'masculino', img: '/img/gucci.jpg', stock: 6, 
        description: `“El jamás será olvidado, porque por ella todo lo entrego, el deja una huella imposible de borrar”. Gucci Guilty Eau de Parfum de Gucci es una fragancia de la familia olfativa Oriental Floral para Mujeres. Se lanzó en 2019. Las Notas de Salida son pimienta rosa, mandarina y bergamota; las Notas de Corazón son lila, violeta, geranio y rosa; las Notas de Fondo son pachulí y ámar.` 
    },
    { 
        name: 'Cool Water (Davidoff) 50ml', price: 35000, category: 'masculino', img: '/img/cool.webp', stock: 12, 
        description: `“Como un maremoto, el inrumpe cualquier situación y enamora a la mujer que esta en su radar, para el nada e simposible, ellas mueren por el”. Cool Water de Davidoff es una fragancia de la familia olfativa Aromática Acuática para Hombres. Se lanzó en 1988. La Nariz detrás de esta fragrancia es Pierre Bourdon. Las Notas de Salida son agua de mar, lavanda, menta, notas verdes, romero, calone y cilantro; las Notas de Corazón son sándalo, neroli, geranio y jazmín; las Notas de Fondo son almizcle, musgo de roble, cedro, tabaco y ámar gris.` 
    },
    { 
        name: 'Fahrenheit (Dior) 50ml', price: 58000, category: 'masculino', img: '/img/farr.webp', stock: 4, 
        description: `“El es feroz como el fuego, se aproxima y jamás retrocede, tiene un intenso magnetismo”. Fahrenheit de Dior es una fragancia de la familia olfativa Aromática Fougère para Hombres. Se lanzó en 1988. Fue creada por Jean-Louis Sieuzac, Michel Almairac y Maurice Roger. Las Notas de Salida son flor del moscadero, lavanda, cedro, mandarina, manzanilla, bergamota, flor del espino y limón; las Notas de Corazón son hojas de violeta, nuez moscada, cedro, sándalo, clavel, madreselva, jazmín y lirio de los valles; las Notas de Fondo son cuero, vetiver, almizcle, ámar, pachulí y haba tonka.` 
    },
    { 
        name: 'Eros (Versace) 50ml', price: 54000, category: 'masculino', img: '/img/Versace.jpg', stock: 7, 
        description: `“En medio de las montañas el jamás se detiene, y con su poderosa aura terrenal envuelve el alma de la mujer que más ama”. Eros de Versace es una fragancia de la familia olfativa Aromática Fougère para Hombres. Se lanzó en 2012. La Nariz detrás de esta fragrancia es Aurélien Guichard. Las Notas de Salida son menta, manzana verde y limón; las Notas de Corazón son haba tonka, ambroxan y geranio; las Notas de Fondo son vainilla de Madagascar, cedro de Virginia, cedro del Atlas, vetiver y musgo de roble.` 
    },
    { 
        name: 'Gentleman (Givenchy) 50ml', price: 51000, category: 'masculino', img: '/img/gentle.webp', stock: 5, 
        description: `“Su presencia senioriti es única, porque no deja de imponer autoridad y respeto, ellas lo admiran profundamente”. Gentleman Eau de Parfum Boisée de Givenchy es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Se lanzó en 2020. La Nariz detrás de esta fragrancia es Olivier Cresp. Las Notas de Salida son pimienta negra, geranio y cilantro; las Notas de Corazón son iris, vaina de cacao y cedro; las Notas de Fondo son notas amaderadas, sándalo y pachulí.` 
    },
    { 
        name: 'Dolce & Gabbana K 50ml', price: 50000, category: 'masculino', img: '/img/dolce.webp', stock: 6, 
        description: `“El fluye como el aire al su alrededor, imposible detenerse, suaviza y estremece el corazón de ellas. K by Dolce & Gabbana de Dolce&Gabbana es una fragancia de la familia olfativa Amaderada Aromática para Hombres. Se lanzó en 2019. Fue creada por Daphné Bugey y Nathalie Lorson. Las Notas de Salida son bayas de enebro, cítricos, naranja sanguina y limón siciliano; las Notas de Corazón son pimienta de Jamaica, lavanda, esclarea y geranio; las Notas de Fondo son vetiver, cedro y pachulí.` 
    },
    { 
        name: '212 VIP Men 50ml', price: 49000, category: 'masculino', img: '/img/212.jpg', stock: 10, 
        description: `“El es el alma de la fiesta, desata una increíble atracción, se roba la atención de todas”. 212 VIP Men de Carolina Herrera es una fragancia de la familia olfativa Oriental Amaderada para Hombres. Se lanzó en 2011. Fue creada por Emilie Coppermann y Lucas Sieuzac. Las Notas de Salida son maracuyá, lima, pimienta y jengibre; las Notas de Corazón son vodka, ginebra, menta y especias; las Notas de Fondo son ámar, cuero y notas amaderadas.` 
    },
    { 
        name: 'Olympea (Paco Rabanne) 50ml', price: 40000, category: 'femenino', img: '/img/olimpea.jpg', stock: 6, 
        description: `“Ella es una reyna, todos le sirven”. Olympéa de Rabanne es una fragancia de la familia olfativa Oriental Floral para Mujeres. Se lanzó en 2015. Fue creada por Loc Dong, Anne Flipo y Dominique Ropion. Las Notas de Salida son jazmín de agua, mandarina verde y flor de jengibre; las Notas de Corazón son vainilla y sal; las Notas de Fondo son madera de cachemira, ámar gris y sándalo.` 
    },
    { 
        name: 'Good Girl (Carolina Herrera) 50ml', price: 42000, category: 'femenino', img: '/img/good.webp', stock: 4, 
        description: `“Ella es una chica liberal y autónoma, evoca seducción pura”. Good Girl de Carolina Herrera es una fragancia de la familia olfativa Oriental Floral para Mujeres. Se lanzó en 2016. Fue creada por Louise Turner y Quentin Bisch. Las Notas de Salida son almendra, café, bergamota y limón; las Notas de Corazón son nardos, jazmín sambac, flor de azahar, rosa de Bulgaria y raíz de lirio; las Notas de Fondo son haba tonka, cacao, vainilla, praliné, sándalo, almizcle, ámar, pachulí y cedro.` 
    },
    { 
        name: 'La Vie Est Belle (Lancôme) 50ml', price: 40000, category: 'femenino', img: '/img/lavida.webp', stock: 12, 
        description: `“Ella es única, atrae con todo su esplendor”. La Vie Est Belle de Lancôme es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Se lanzó en 2012. Fue creada por Olivier Polge, Dominique Ropion y Anne Flipo. Las Notas de Salida son grosellas negras y pera; las Notas de Corazón son iris, jazmín y flor de azahar; las Notas de Fondo son praliné, vainilla, pachulí y haba tonka.` 
    },
    { 
        name: 'La Nuit Trésor (Lancôme) 50ml', price: 40000, category: 'femenino', img: '/img/nuit.jpg', stock: 8, 
        description: `“Ella es como la Luna, brilla de noche con toda su energía, acompaña y cautiva el corazón de cualquiera”. La Nuit Trésor de Lancôme es una fragancia de la familia olfativa Oriental Vainilla para Mujeres. Se lanzó en 2015. Fue creada por Christophe Raynaud y Amandine Clerc-Marie. Las Notas de Salida son pera, naranja tangerina y bergamota; las Notas de Corazón son fresa, rosa negra, orquídea de vainilla y maracuyá; las Notas de Fondo son praliné, caramelo, vainilla, lichi, pachulí, incienso, café y regaliz.` 
    },
    { 
        name: 'Flower by Kenzo 50ml', price: 42000, category: 'femenino', img: '/img/flower.jpg', stock: 10, 
        description: `“Ella representa las flores de primavera, tibia y dulce, cautivadora, única en su especie”. Flower by Kenzo Eau de Toilette (2021) de Kenzo es una fragancia de la familia olfativa Oriental Floral para Mujeres. La Nariz detrás de esta fragrancia es Alberto Morillas. Las Notas de Salida son limón siciliano, jengibre, mandarina y lichi; las Notas de Corazón son manzanilla, rosa de Damasco, agua de rosas y mimosa; las Notas de Fondo son almizcle blanco, vainilla de Madagascar, ámar y pachulí.` 
    },
    { 
        name: 'Amor Amor (Cacharel) 50ml', price: 46000, category: 'femenino', img: '/img/cacharel.jpg', stock: 9, 
        description: `“Ella representa la ternura de las frutas y las flores, enamora con su dulzura”. Amor Amor de Cacharel es una fragancia de la familia olfativa Floral Frutal para Mujeres. Se lanzó en 2003. Fue creada por Laurent Bruyere y Dominique Ropion. Las Notas de Salida son grosellas negras, naranja, mandarina, toronja, casia y bergamota; las Notas de Corazón son rosa, chabacano, jazmín, azucena y lirio de los valles; las Notas de Fondo son vainilla, haba tonka, almizcle, ámar y cedro de Virginia.` 
    },
    { 
        name: 'Fame (Paco Rabanne) 50ml', price: 47000, category: 'femenino', img: '/img/famme.webp', stock: 8, 
        description: `“Seduccion y hermetismo, ambos juntos en una sola presencia”. Fame de Rabanne es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Se lanzó en 2022. Fue creada por Dora Baghriche, Marie Salamagne, Alberto Morillas y Fabrice Pellegrin. Las Notas de Salida son mango y bergamota; las Notas de Corazón son jazmín e incienso de olíbano; las Notas de Fondo son vainilla y sándalo.` 
    },
    { 
        name: 'Idôle (Lancôme) 50ml', price: 45000, category: 'femenino', img: '/img/idole.webp', stock: 9, 
        description: `“El atardecer y la elegancia, eso evoca una mujer única y decidida”. Idôle de Lancôme es una fragancia de la familia olfativa Chipre Floral para Mujeres. Se lanzó en 2019. Fue creada por Shyamala Maisondieu, Adriana Medina-Baez, Nadege le Garlantezec y Sonia Constant. Las Notas de Salida son pera, bergamota y pimienta rosa; las Notas de Corazón son rosa y jazmín; las Notas de Fondo son almizcle blanco, vainilla, pachulí y cedro.` 
    },
    { 
        name: 'L’Extase (Nina Ricci) 50ml', price: 44000, category: 'femenino', img: '/img/extase.webp', stock: 5, 
        description: `“La aventura de la noche la llama, sabe que es su ambiente puro de sonrisas y alegrías”. L’Extase de Nina Ricci es una fragancia de la familia olfativa Oriental Floral para Mujeres. Se lanzó en 2015. La Nariz detrás de esta fragrancia es Francis Kurkdjian. Las Notas de Salida son pimienta rosa, durazno y pera; las Notas de Corazón son rosa, frambuesa, flores blancas y jazmín; las Notas de Fondo son caramelo, benjuí de Siam, ámar, vainilla, almizcle y pachulí.` 
    },
    { 
        name: 'My Way (Armani) 50ml', price: 53000, category: 'femenino', img: '/img/myway.webp', stock: 6, 
        description: `“Ella es libre, abierta y muy activa, entre las estrellas brilla profundamente”. My Way Parfum de Giorgio Armani es una fragancia de la familia olfativa Almizcle Floral Amaderado para Mujeres. Se lanzó en 2023. Las Notas de Salida son flor de azahar, naranja amarga y bergamota de Calabria; las Notas de Corazón son Iris Pallida, nardo de la India y almizcle ambreta; las Notas de Fondo son almizcle blanco, vainilla Bourbon y cedro.` 
    },
    { 
        name: 'Scandal (JPG) 50ml', price: 56000, category: 'femenino', img: '/img/scandal.jpg', stock: 4, 
        description: `“Ella es vital para los días de un hombre, nadie lo hace mas feliz que ella, lo llena de amor y alegrías”. Scandal de Jean Paul Gaultier es una fragancia de la familia olfativa Chipre Floral para Mujeres. Se lanzó en 2017. Fue creada por Daphné Bugey, Fabrice Pellegrin y Christophe Raynaud. Las Notas de Salida son naranja sanguina y mandarina; las Notas de Corazón son miel, gardenia, flor de azahar, jazmín y durazno; las Notas de Fondo son cera de abeja, caramelo, pachulí y regaliz.` 
    },
    { 
        name: 'Pure XS For Her 50ml', price: 51000, category: 'femenino', img: '/img/xsmujer.webp', stock: 7, 
        description: `“Ella lo seduce y lo llama a un mundo perfecto de diversión e impacto”. Pure XS For Her de Rabanne es una fragancia de la familia olfativa Oriental Floral para Mujeres. Se lanzó en 2018. La Nariz detrás de esta fragrancia es Quentin Bisch. La fragrancia contiene palomitas de maíz, vainilla, ylang-ylang, coco, durazno, flor de azahar y sándalo.` 
    },
    { 
        name: 'Acqua di Gioia 50ml', price: 48000, category: 'femenino', img: '/img/acquamujer.webp', stock: 6, 
        description: `“Ella surge del interior del mar como una hermosa sirena robándose el alma de ellos”. Acqua di Gioia de Giorgio Armani es una fragancia de la familia olfativa Floral Acuática para Mujeres. Se lanzó en 2010. Fue creada por Loc Dong, Anne Flipo y Dominique Ropion. Las Notas de Salida son limón de Amalfi y menta; la Nota de Corazón es jazmín de agua; las Notas de Fondo son cedro de Virginia, azúcar moreno y ládano francés.` 
    },
    { 
        name: '212 VIP Rose 50ml', price: 49000, category: 'femenino', img: '/img/212mujer.webp', stock: 11, 
        description: `“Ella es la reyna de la noche, con su pasión de diosa se lleva toda la atención de ellos”. 212 VIP Rosé de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. Se lanzó en 2014. La Nariz detrás de esta fragrancia es Lucas Sieuzac. Las Notas de Salida son Champagne Rosé y pimienta rosa; las Notas de Corazón son flor del duraznero y rosa; las Notas de Fondo son almizcle blanco y notas amaderadas.` 
    }
];

export const subirDatos = async () => {
    const itemsCollection = collection(db, "items");
    try {
        console.log("🧹 Limpiando base de datos...");
        // 1. Buscamos todo lo que existe
        const snapshot = await getDocs(itemsCollection);
        // 2. Lo borramos uno por uno automáticamente
        const borrados = snapshot.docs.map(documento => deleteDoc(doc(db, "items", documento.id)));
        await Promise.all(borrados);
        console.log("✨ Firebase está limpio.");

        console.log("🚀 Iniciando carga masiva limpia...");
        for (const p of perfumes) {
            await addDoc(itemsCollection, p);
            console.log(`✅ Cargado: ${p.name}`);
        }
        alert("¡LISTO! Base de datos reseteada y cargada con 30 perfumes únicos.");
    } catch (error) {
        console.error("❌ Error en el proceso:", error);
    }
};