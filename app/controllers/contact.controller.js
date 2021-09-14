const { user } = require("../models");
const db = require("../models");
const Contact = db.contact;
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Contact
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cognome) {
        res.status(400).send({
            message: "Campo richiesto!"
        });
        return;
    }
    // Create a Contact
    const contact = {
        formula_di_saluto: req.body.formula_di_saluto,
        nome: req.body.nome,
        contatto_id: req.body.contatto_id,
        id: req.body.id,
        cognome: req.body.cognome,
        telefono_ufficio: req.body.telefono_ufficio,
        nome_azienda: req.body.nome_azienda,
        cellulare: req.body.cellulare,
        origine_lead: req.body.origine_lead,
        numerazione_interna: req.body.numerazione_interna,
        telefono_casa: req.body.telefono_casa,
        titolo: req.body.titolo,
        telefono_secondario: req.body.telefono_secondario,
        email_principale: req.body.email_principale,
        fax: req.body.fax,
        blocca_email: req.body.blocca_email,
        codice_fiscale: req.body.codice_fiscale,
        riferimento: req.body.riferimento,
        compleanno: req.body.compleanno,
        orario_creazione: req.body.orario_creazione,
        riporta_a: req.body.riporta_a,
        orario_modifica: req.body.orario_modifica,
        non_chiamare: req.body.non_chiamare,
        fonte: req.body.fonte,
        viene_convertito_da_piombo: req.body.viene_convertito_da_piombo,
        notificare_il_proprietario: req.body.notificare_il_proprietario,
        assegnato_a: req.body.assegnato_a,
        last_modified_by: req.body.last_modified_by,
        note_importazione: req.body.note_importazione,
        fornitore: req.body.fornitore,
        vecchio_consulente: req.body.vecchio_consulente,
        primo_contatto: req.body.primo_contatto,
        numero_documento: req.body.numero_documento,
        rilasciato_da: req.body.rilasciato_da,
        rilasciato_il: req.body.rilasciato_il,
        nato_a: req.body.nato_a,
        nome_lista: req.body.nome_lista,
        tipo_attivita: req.body.tipo_attivita,
        referente: req.body.referente,
        consulente_interno: req.body.consulente_interno,
        fornitore_luce: req.body.fornitore_luce,
        fornitore_gas: req.body.fornitore_gas,
        fornitore_telefonia: req.body.fornitore_telefonia,
        ultimo_contatto: req.body.ultimo_contatto,
        note_operatrice: req.body.note_operatrice,
        esito_chiamata: req.body.esito_chiamata,
        esito_appuntamento: req.body.esito_appuntamento,
        assegnato_da: req.body.assegnato_da,
        contattato: req.body.contattato,
        utente_portale: req.body.utente_portale,
        supporto_data_di_inizio: req.body.supporto_data_di_inizio,
        data_di_supporto_end: req.body.data_di_supporto_end,
        via_spedizione: req.body.via_spedizione,
        altra_via: req.body.altra_via,
        città_spedizione: req.body.città_spedizione,
        altra_città: req.body.altra_città,
        provincia_spedizione: req.body.provincia_spedizione,
        altra_provincia: req.body.altra_provincia,
        cap_spedizione: req.body.cap_spedizione,
        altro_cap: req.body.altro_cap,
        stato_spedizione: req.body.stato_spedizione,
        altro_stato: req.body.altro_stato,
        immagine_contatto: req.body.immagine_contatto,
        descrizione: req.body.descrizione,
        nome_offerta_gas: req.body.nome_offerta_gas,
        pdr: req.body.pdr,
        matricola_contatore: req.body.matricola_contatore,
        consumo_annuo: req.body.consumo_annuo,
        attuale_fornitore: req.body.attuale_fornitore,
        indirizzo_di_fornitura: req.body.indirizzo_di_fornitura,
        numero: req.body.numero,
        città: req.body.città,
        provincia: req.body.provincia,
        cap: req.body.cap,
        nome_offerta_luce: req.body.nome_offerta_luce,
        pod: req.body.pod,
        tensione_fornitura: req.body.tensione_fornitura,
        potenza_disponibile: req.body.potenza_disponibile,
        consumo_annuo_energia: req.body.consumo_annuo_energia,
        attuale_fornitore_energia: req.body.attuale_fornitore_energia,
        indirizzo_di_fornitura_energia: req.body.indirizzo_di_fornitura_energia,
        civico: req.body.civico,
        città_en: req.body.città_en,
        provincia_en: req.body.provincia_en,
        cap_en: req.body.cap_en,
        id_contratto: req.body.id_contratto,
        codice_fiscale_firmatario: req.body.codice_fiscale_firmatario,
        modalità: req.body.modalità,
        iban: req.body.iban
    };

    // Save Contact in the database
    Contact.create(contact)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Errore nella creazione del nuovo contatto"
            });
        });
};

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
    var condition = { assegnato_a: { [Op.or]: [{ [Op.iLike]: req.query.unome }, { [Op.iLike]: req.query.ucognome }] } };
    console.log(req.query);
    switch (req.query.head) {
        case "nome": { var condition = { [Op.and]: [{ ...condition }, { nome: { [Op.iLike]: `%${req.query.value}%` } }] }; }; break;
        case "cognome": var condition = { [Op.and]: [{ ...condition }, { cognome: { [Op.iLike]: `%${req.query.value}%` } }] }; break;
        case "nomea": var condition = { [Op.and]: [{ ...condition }, { nome_azienda: { [Op.iLike]: `%${req.query.value}%` } }] }; break;
        case "referente": var condition = { [Op.and]: [{ ...condition }, { referente: { [Op.iLike]: `%${req.query.value}%` } }] }; break;
        case "fornitore_luce": var condition = { [Op.and]: [{ ...condition }, { fornitore_luce: { [Op.iLike]: `%${req.query.value}%` } }] }; break;
        case "fornitore_gas": var condition = { [Op.and]: [{ ...condition }, { fornitore_gas: { [Op.iLike]: `%${req.query.value}%` } }] }; break;
    }
    Contact.findAll({ where: condition })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Contacts."
            });
        });
};

// Find a single Contact with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contact.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contact with id=" + id
            });
        });
};

// Update a Contact by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Contact.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Contact with id=${id}. Maybe Contact was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Contact with id=" + id
            });
        });
};

// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Contact.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Contact with id=" + id
            });
        });
};

// Delete all Contacts from the database.
exports.deleteAll = (req, res) => {
    Contact.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Contacts were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Contacts."
            });
        });
};

// find all published Contact
exports.findAllPublished = (req, res) => {
    Contact.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Contacts."
            });
        });
};
