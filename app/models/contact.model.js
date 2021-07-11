module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {

        nome: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cognome: {
            type: Sequelize.STRING
        },
        telefono_ufficio: {
            type: Sequelize.STRING
        },
        nome_azienda: {
            type: Sequelize.STRING
        },
        cellulare: {
            type: Sequelize.STRING
        },
        telefono_casa: {
            type: Sequelize.STRING
        },
        telefono_secondario: {
            type: Sequelize.STRING
        },
        email_principale: {
            type: Sequelize.STRING
        },
        codice_fiscale: {
            type: Sequelize.STRING
        },
        compleanno: {
            type: Sequelize.DATE
        },
        // orario_modifica: {
        //     type: Sequelize.STRING
        // },
        assegnato_a: {
            type: Sequelize.STRING
        },
        last_modified_by: {
            type: Sequelize.STRING
        },
        note_importazione: {
            type: Sequelize.STRING
        },
        primo_contatto: {
            type: Sequelize.STRING
        },
        numero_documento: {
            type: Sequelize.STRING
        },
        rilasciato_da: {
            type: Sequelize.STRING
        },
        rilasciato_il: {
            type: Sequelize.DATE
        },
        nato_a: {
            type: Sequelize.STRING
        },
        nome_lista: {
            type: Sequelize.STRING
        },
        tipo_attivita: {
            type: Sequelize.STRING
        },
        referente: {
            type: Sequelize.STRING
        },
        consulente_interno: {
            type: Sequelize.STRING
        },
        fornitore_luce: {
            type: Sequelize.STRING
        },
        fornitore_gas: {
            type: Sequelize.STRING
        },
        fornitore_telefonia: {
            type: Sequelize.STRING
        },
        ultimo_contatto: {
            type: Sequelize.STRING
        },
        note_operatrice: {
            type: Sequelize.STRING(1234)
        },
        esito_chiamata: {
            type: Sequelize.STRING
        },
        esito_appuntamento: {
            type: Sequelize.STRING
        },
        assegnato_da: {
            type: Sequelize.STRING
        },
        altra_via: {
            type: Sequelize.STRING
        },
        città_spedizione: {
            type: Sequelize.STRING
        },
        provincia_spedizione: {
            type: Sequelize.STRING
        },
        altra_provincia: {
            type: Sequelize.STRING
        },
        cap_spedizione: {
            type: Sequelize.INTEGER
        },
        stato_spedizione: {
            type: Sequelize.STRING
        },
        nome_offerta_gas: {
            type: Sequelize.STRING
        },
        pdr: {
            type: Sequelize.STRING
        },
        matricola_contatore: {
            type: Sequelize.STRING
        },
        consumo_annuo: {
            type: Sequelize.FLOAT
        },
        attuale_fornitore: {
            type: Sequelize.STRING
        },
        indirizzo_di_fornitura: {
            type: Sequelize.STRING
        },
        numero: {
            type: Sequelize.STRING
        },
        città: {
            type: Sequelize.STRING
        },
        provincia: {
            type: Sequelize.STRING
        },
        cap: {
            type: Sequelize.INTEGER
        },
        nome_offerta_luce: {
            type: Sequelize.STRING
        },
        pod: {
            type: Sequelize.STRING
        },
        tensione_fornitura: {
            type: Sequelize.FLOAT
        },
        potenza_disponibile: {
            type: Sequelize.FLOAT
        },
        consumo_annuo_energia: {
            type: Sequelize.FLOAT
        },
        attuale_fornitore_energia: {
            type: Sequelize.STRING
        },
        indirizzo_di_fornitura_energia: {
            type: Sequelize.STRING
        },
        civico: {
            type: Sequelize.STRING
        },
        città_en: {
            type: Sequelize.STRING
        },
        provincia_en: {
            type: Sequelize.STRING
        },
        cap_en: {
            type: Sequelize.STRING
        },
        id_contratto: {
            type: Sequelize.STRING
        },
        codice_fiscale_firmatario: {
            type: Sequelize.STRING
        },
        modalità: {
            type: Sequelize.STRING
        },
        iban: {
            type: Sequelize.STRING
        },

    });

    return Contact;
};