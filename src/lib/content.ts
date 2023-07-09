export interface IVariantContent {
    intro: string[],
    subject: string,
    body: string[]
}

export interface IContent {
    common: {
        mobile: string[],
        desktop: string[],
        all: string[],
        email_id: string
    },
    variants: {
        [key: string]: IVariantContent
    }
}

const Content = {
    common: {
        mobile: [
            "Looks like you are viewing this on a mobile device.",
            "When you click the Send Email button, the letter will be copied into your default email app with the email address of the Law Commission already filled in. All you have to do is click send."
        ],
        desktop: [
            "Looks like you are viewing this on a desktop or laptop.",
            "Please make sure you are using Chrome or Firefox, and that you are logged into your Gmail account in that browser (Chrome or Firefox) before clicking on the Send Email button",
            "When you click the Send Email button, the letter will be copied into your Gmail Compose with the email address of the Law Commission already filled in. All you have to do is click send."
        ],
        all: [
            "The default sign off is “a concerned citizen.” If you would like to edit this to reflect your name and the organisation you belong to, feel free to edit this within your email app before hitting send!",
            "If it doesn't work, please copy the letter and send it to membersecretary-lci@gov.in",
            "~~PS: We don't collect any information about who is using this app. Once you click on the Send Email button, the email goes directly from your account to the Law Commission. We don't get to know your Email Address or Name or anything else."
        ],
        email_id: "membersecretary-lci@gov.in"
    },
    variants: {
        queertrans: {
        intro: [
            "The 22nd Law Commission has called for suggestions on the Uniform Civil Code. As queer and trans people, we think this is a crucial moment to emphasise that there can be no conversation about personal laws without talking about queer and trans lived realities.",
            "What has changed significantly since the 21st Law Commission in 2018, the same year Section 377 was read down by the Supreme Court, is that queer and trans lived realities and relationships have become recognized and become part of the debates on marriage and families.",
            "We share this draft response for other queer and trans persons and allies to use and submit their responses to the Law Commission, to make sure our voices are heard."
        ],
        subject: "Response to Law Commission on Uniform Civil Code (UCC)",
        body: [
            "To,",
            "The Chairperson,",
            "22nd Law Commission of India",
            "~~Dear Sir/Madam,",
            "We write this as queer and trans individuals, independent or affiliated to LGBTQIA+ collectives, organizations and networks, and allies, to draw attention to our position in relation to any reforms that may be sought in personal laws. We wish to emphasise that there can be no conversation about personal laws without talking about queer and trans lived realities. Since the 21st Law Commission in 2018, the year Section 377 was read down by the Supreme Court, what has changed is that queer and trans lived realities and relationships have become recognized and become part of the debates on marriage and families.",
            "LGBTQIA+ people throughout India make many forms of family and community support, both within and outside of normative family structures. The ongoing debates around the Marriage Equality hearings in the Supreme Court make it clear that queer and trans individuals and communities have a significant stake in any decision with regard to issues of marriage, divorce, custody, guardianship, adoption, maintenance, succession and others which may fall under the purview of family laws.",
            "In 2018, the 21st Law Commission issued a Consultation Paper on Reform of Family Law, in which it argued unequivocally that a UCC was ‘neither necessary nor desirable at this stage.’ The Commission also drew attention to the various aspects mentioned above that need to be addressed before taking any steps further. Queer trans families or living arrangements and their rights vis a vis their natal families, however, did not get addressed there apart from a footnote on page 34, that states:",
            "“At a later stage the possibility of a civil partnership must be assessed. It needs to be debated alongside the moves to enact a ‘transgender bill’. The broader definitions of ‘man‘ and ‘woman‘ that the law now presumes, should now imply that matrimonial rights must also be accessible to all persons inhabiting these legal definitions. We urge deeper consultation with the LGBTQI communities to take this conversation forward.”",
            "After the consultation paper of the 21st Law Commission, the Transgender Persons (Protection of Rights) Act was enacted in 2019. This has severe implications for family law whose whole conception is not only within the binary but also in a limited imagination of a patrilineal, patrilocal, patriarchal family for the most part.",
            "Rather than ‘deliberating afresh,’ the logical step at this point for the 22nd Law Commission is to discuss changes in all laws related to families so that they become inclusive and just for all citizens of this country. It is in this context that we as queer and trans people want to draw your attention that these deliberations cannot happen without including us, in all the geographical, linguistic, cultural, ethnic, etc diversity of our communities.",
            "Any change in family law that does not reflect these lived realities is unacceptable to us.",
            "~~Sincerely,",
            "A concerned citizen"
        ]
    },
        feminists: {
            intro: "",
            subject: "",
            body: []
        }
    }
}

export default Content