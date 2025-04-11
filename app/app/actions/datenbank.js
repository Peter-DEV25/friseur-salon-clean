"use server"

import { PrismaClient } from "@prisma/client"


// verbinden uns mit der Datenbak
const prisma = new PrismaClient()

export async function createKunde(kundenInformationen) {

    // Paramter enhtält alle kundeninformationen  die wir der Funktion vom frontend übergeben haben  
    console.log(kundenInformationen, "KUNDENINFORMATIONEN")


    /// die daten und übergeben es der Datenbank tabelle mit den entsprechendden Feldnenrn
    const resp = await prisma.kunde.create({
        data: {
            vorname: kundenInformationen.vorname,
            nachname: kundenInformationen.nachname,
            email: kundenInformationen.email,
            telefon: kundenInformationen.telefon,
            adresse: kundenInformationen.adresse,
            sonstiges: kundenInformationen.sonstiges    
        }
    })

    console.log(resp, "ANTWORT VON PRISMA")
}
