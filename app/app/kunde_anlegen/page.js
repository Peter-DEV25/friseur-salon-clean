"use client"

import { useState } from "react"
import { createKunde } from "../actions/datenbank"


const KundeAnlegen = () => {



    const [kundenInformationen, setKundenInformationen] = useState({
        vorname: "",
        nachname: "",
        email: "",
        telefon: "",
        adresse: "",
        sonstiges: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // hier wird alles im frontend oberfläche gemacht 
        // wenn alles passt dann übermitteln wir das an die datenbank  
        await createKunde(kundenInformationen)

        setKundenInformationen({
            vorname: "",
            nachname: "",
            email: "",
            telefon: "",
            adresse: "",
            sonstiges: ""
    
        })
    }


    return (
        <div>
            <h1>Kunde Anlegen</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Vorname" value={kundenInformationen.vorname} onChange={(e) => setKundenInformationen({ ...kundenInformationen, vorname: e.target.value })} />
                <input type="text" placeholder="Nachname" value={kundenInformationen.nachname} onChange={(e) => setKundenInformationen({ ...kundenInformationen, nachname: e.target.value })} />
                <input type="email" placeholder="Email" value={kundenInformationen.email} onChange={(e) => setKundenInformationen({ ...kundenInformationen, email: e.target.value })} />
                <input type="text" placeholder="Telefon" value={kundenInformationen.telefon} onChange={(e) => setKundenInformationen({ ...kundenInformationen, telefon: e.target.value })} />
                <input type="text" placeholder="Adresse" value={kundenInformationen.adresse} onChange={(e) => setKundenInformationen({ ...kundenInformationen, adresse: e.target.value })} />
                <input type="text" placeholder="Sonstiges" value={kundenInformationen.sonstiges} onChange={(e) => setKundenInformationen({ ...kundenInformationen, sonstiges: e.target.value })} />
                <button type="submit">Kunde anlegen</button>
            </form>
        </div>
    )
}

export default KundeAnlegen;
