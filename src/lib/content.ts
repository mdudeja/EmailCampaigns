export interface IVariantContent {
    intro: string[]
    subject: string
    body: string[]
    email_body?: string[]
}

export interface IContent {
    common: {
        mobile: string[]
        desktop: string[]
        all: string[]
        email_id: string
    }
    variants: {
        [key: string]: IVariantContent
    }
}

const Content = {
    common: {
        mobile: [
            'Looks like you are viewing this on a mobile device.',
            'When you click the Send Email button, the letter will be copied into your default email app with the email address of the Law Commission already filled in. All you have to do is click send.',
        ],
        desktop: [
            'Looks like you are viewing this on a desktop or laptop.',
            'Please make sure you are using Chrome or Firefox, and that you are logged into your Gmail account in that browser (Chrome or Firefox) before clicking on the Send Email button',
            'When you click the Send Email button, the letter will be copied into your Gmail Compose with the email address of the Law Commission already filled in. All you have to do is click send.',
        ],
        all: [
            'The default sign off is “a concerned individual.” If you would like to edit this to reflect your name and the organisation you belong to, feel free to edit this within your email app before hitting send!',
            "If it doesn't work, please copy the letter and send it to membersecretary-lci@gov.in",
            "~~PS: We don't collect any information about who is using this app. Once you click on the Send Email button, the email goes directly from your account to the Law Commission. We don't get to know your Email Address or Name or anything else.",
        ],
        email_id: 'membersecretary-lci@gov.in',
    },
    variants: {
        queertrans: {
            intro: [
                'The 22nd Law Commission has called for suggestions on the Uniform Civil Code. As queer and trans people, we think this is a crucial moment to emphasise that there can be no conversation about personal laws without talking about queer and trans lived realities.',
                'What has changed significantly since the 21st Law Commission in 2018, the same year Section 377 was read down by the Supreme Court, is that queer and trans lived realities and relationships have become recognized and become part of the debates on marriage and families.',
                'We share this draft response for other queer and trans persons and allies to use and submit their responses to the Law Commission, to make sure our voices are heard.',
            ],
            subject: 'Response to Law Commission on Uniform Civil Code (UCC)',
            body: [
                'To,',
                'The Chairperson,',
                '22nd Law Commission of India',
                '~~Dear Sir/Madam,',
                'We write this as queer and trans individuals, independent or affiliated to LGBTQIA+ collectives, organizations and networks, and allies, to draw attention to our position in relation to any reforms that may be sought in personal laws. We wish to emphasise that there can be no conversation about personal laws without talking about queer and trans lived realities. Since the 21st Law Commission in 2018, the year Section 377 was read down by the Supreme Court, what has changed is that queer and trans lived realities and relationships have become recognized and become part of the debates on marriage and families.',
                'LGBTQIA+ people throughout India make many forms of family and community support, both within and outside of normative family structures. The ongoing debates around the Marriage Equality hearings in the Supreme Court make it clear that queer and trans individuals and communities have a significant stake in any decision with regard to issues of marriage, divorce, custody, guardianship, adoption, maintenance, succession and others which may fall under the purview of family laws.',
                'In 2018, the 21st Law Commission issued a Consultation Paper on Reform of Family Law, in which it argued unequivocally that a UCC was ‘neither necessary nor desirable at this stage.’ The Commission also drew attention to the various aspects mentioned above that need to be addressed before taking any steps further. Queer trans families or living arrangements and their rights vis a vis their natal families, however, did not get addressed there apart from a footnote on page 34, that states:',
                '“At a later stage the possibility of a civil partnership must be assessed. It needs to be debated alongside the moves to enact a ‘transgender bill’. The broader definitions of ‘man‘ and ‘woman‘ that the law now presumes, should now imply that matrimonial rights must also be accessible to all persons inhabiting these legal definitions. We urge deeper consultation with the LGBTQI communities to take this conversation forward.”',
                'After the consultation paper of the 21st Law Commission, the Transgender Persons (Protection of Rights) Act was enacted in 2019. This has severe implications for family law whose whole conception is not only within the binary but also in a limited imagination of a patrilineal, patrilocal, patriarchal family for the most part.',
                'Rather than ‘deliberating afresh,’ the logical step at this point for the 22nd Law Commission is to discuss changes in all laws related to families so that they become inclusive and just for all citizens of this country. It is in this context that we as queer and trans people want to draw your attention that these deliberations cannot happen without including us, in all the geographical, linguistic, cultural, ethnic, etc diversity of our communities.',
                'Any change in family law that does not reflect these lived realities is unacceptable to us.',
                '~~Sincerely,',
                'A concerned citizen',
            ],
        },
        feminists: {
            intro: [
                'Dear friends',
                'The 22nd Law Commission has called for suggestions on the Uniform Civil Code. Some of us were able to meet in Delhi on the 4th and 5th of July, 2023. This response has emerged from the discussions at that meeting where we tried to keep in mind, both, our long histories of conversations and work on the issue, and current day concerns.',
                '##THE ISSUES THAT WE WISH TO HIGHLIGHT ARE AS FOLLOWS:$$',
                '##We critique the opaque process by which the law commission of India has called for public opinion on the matter of the UCC, without offering any concrete proposal, outline or framework; or adequate time for the public to respond.$$',
                '##Given deeply ingrained socially sanctioned hierarchies of gender, caste, religion and ethnicity, we challenge the claim that uniformity can bring equality.$$',
                '##We call out the contradictory positions of the central government on laws relating to marriage.$$',
                '##We assert unequivocally that those to be most impacted by any legal changes must be part of the consultations – this especially includes women within and outside the institution of marriage, especially those from marginalised and minority communities, queer and transgender persons, persons with special needs.$$',
                '##Rights secured by law, must be ensured with corresponding state responsibilities that secure civil, political, social, economic, and cultural rights to all women, especially those from marginalised communities and locations.$$',
                '##We seek immediate stop to targeting of minorities in the name of gender justice.$$',
                '##We call for an end to the disinformation campaigns by vested interests.$$',
                '##We seek meaningful public consultations across the country to reconceive what gender equality would look like in the face of all the widely varying laws, customs and practices across the country.$$',
                '##In conclusion, we frame guiding principles that must govern all efforts towards gender justice and equality.$$',
                'Please see a draft of the email prepared and send an email to the Law Commission. If you agree with this, please send an email with any changes that you may want to make.',
                '~~##Feminist Working Group on Law Commission submission on the UCC.$$',
            ],
            subject:
                'Response of feminist, queer and women’s rights groups on the Uniform Civil Code (UCC).',
            body: [
                'To',
                'The Hon’ble Chairperson and members ',
                'Law Commission of India',
                '4th Floor, B Wing, Lok Nayak Bhawan',
                'Khan Market',
                'New Delhi - 110 003',
                '~~Respected Chairperson and members of the Law Commission of India,',
                'We, the undersigned, write to you as representatives of feminist, queer and women’s rights groups, as well as concerned citizens, who have been working on issues related to gender justice and equality for women from diverse communities across the country. We draw upon our collective experience over many decades, as we respond to the current discussion on the proposed Uniform Civil Code.',
                '~~##Our submission is in three parts:$$',
                '1. Concerns related to the procedure adopted to initiate these discussions by the Law Commission of India (LCI).',
                '2. Comments on substantive issues of uniformity, equality and non-discrimination vis à vis gender justice.',
                '3. Governing principles for any efforts towards gender justice for all.',
                '~~##1. CONCERNS RELATED TO PROCEDURE, ITS INTENT AND IMPACT$$',
                '##We write to express our grave concern regarding the public notice issued by the LCI soliciting views and ideas of the “public at large and recognised religious organisations on the UCC.” Our concerns are as follows:$$',
                'a. ##Ironically, despite the call of the LCI inviting ‘views’ from the public, there is complete lack of information about$$ (i) what would actually constitute this Uniform Civil Code (ii) how it would conceive of “uniformity” in matters of marriage, divorce, custody, adoption, maintenance, inheritance, etc across diverse communities, historico-geographic locations, and irrespective of marital status, and (iii) how the LCI envisions its implementation.',
                'b. ##In the absence of any concrete proposal, outline or framework or adequate time for the public to respond, what should have been a serious public engagement, has been reduced to an opaque process marked by political rhetoric and social media campaigns.$$ Vested interests, ranging from temple associations to Resident Welfare Associations, and others ##are spreading a highly communalised campaign in favour of the idea of a UCC that specifically targets religious minority communities$$. Given the track record of the BJP-led government in power, serious apprehensions are being expressed by religious minority groups, tribal and Adivasi communities across the country about the intent and remit of the proposed exercise. It is extremely disappointing that the LCI, the foremost statutory body for legal deliberation in India, with an almost 200 year old history of law reform, has issued this notice in such a casual and cavalier manner. Initiating an ill-informed and undemocratic process on an issue that is complex, sensitive, and that has been contested for decades.',
                '##It is even more worrisome that the current LCI has raised this topic without any substantial reference to the 21st LCI report of 2018 on the very same issue.$$ In its Consultation Paper on “Reforms of Family Law,” the 21st LCI made several recommendations on the matter of gender equality and concluded that, “Uniform Civil Code is neither necessary nor desirable at this stage as it would be counter-productive for the harmony of the nation,” and suggested that “reforms in personal laws should be done by amendments and not by replacement.” Further, by identifying that “discrimination and not difference that lies at the root of inequality the 21st LCI had prioritised ‘gender equality within each religious community, rather than between communities.”',
                '##Therefore, the current notice dated 14/06/2023 that simply states the 22nd LCI ‘considered it expedient to deliberate afresh’ without clarifying what warrants a rethink, betrays a complete lack of seriousness on a matter that impacts the life of many, particularly women.$$ It only carries a vague reference to ‘various court orders’, without even bothering to specify which court orders and what issues they raise. In the absence of clear terms of reference, it appears that the present endeavour is more of a ‘political exercise’ than a ‘legal’ one.',
                'c. ##It is deeply troubling that the LCI has specifically sought “views from the public at large and recognised religious organisations” to the UCC.$$ This reveals the erroneous presumption that the Indian people can be divided en masse only into religious groupings; and that these groupings can only be represented by religious leaders and so called “recognised religious organisations.” Consequently, the notice fails to recognise or acknowledge that the primary members who are impacted by such laws are women from across religious, caste, Adivasi, and tribal communities, gender minorities, atheists, and agnostics. Hence such a call only serves to reinforce the patriarchal belief that they are not the primary stakeholders in gender-just family law reforms - which makes this a deeply discriminatory process. Pertinently, the term “recognised religious organisations” finds no reference in the Constitution or any other statute, that governs the secular constitutional Republic of India.',
                '##Amplifying the confusion surrounding the UCC have been contradictory and conflicting public declarations by the government.$$ In Bhopal on 2 July 2023, Prime Minister Narendra Modi claimed that India needed a UCC as the country could not run with the dual system of “separate laws for separate communities.” Then on 7 July, 2023, Home Minister Amit Shah assured the Chief Minister of Nagaland that, “the government is actively considering exempting Christians and certain tribal areas from the proposed Uniform Civil Code (UCC).” The Chairperson of the Parliamentary Committee on Law and Justice, Sushil K Modi has also stated that the exemption would extend to states under Article 371 such as Maharashtra, Gujarat, Nagaland, Assam, Manipur, Andhra Pradesh, Sikkim, Mizoram and Arunachal Pradesh. ##If that is so, what parts of the nation and which communities is the proposed UCC meant to bring ‘uniformity’ to? Who will it protect with gender justice?$$',
                '~~##2. COMMENTS REGARDING UNIFORMITY, EQUALITY AND NON-DISCRIMINATION VIS À VIS GENDER JUSTICE.$$',
                '##a. It is important to reiterate that in a country as plural and diverse as India, the lived realities of people within and across communities are very varied.$$',
                [
                    'Exceptions accommodative of customary laws and practices are found and included within most religious laws. ',
                    'Contrary to popular perception, the UCC if drafted adhering to the principle of uniformity, will have implications for and impact on all religious personal laws for Hindus, Muslims, Christians, Parsis, etc as well as the secular law. ',
                    'It will have ramifications on all customary laws, as well as tribal and Adivasi community practices protected under Schedule V and VI of the Indian Constitution - practices that are not only around family and marriage, but also around how land and resources are held and used as shared by communities. ',
                    'Additionally, any new UCC will also affect the existing UCC already in force in Goa - which in itself requires more analysis and understanding.',
                ],
                'b. The rights of those marginalised by gender vis à vis the state and the economy, in the familial, social, legal and political domains remain deeply unequal, determined as they are not only by religion, but also by caste, class, ethnicity, dis/ability and sexuality. ##The very idea that uniformity, applied across such hierarchies, can guarantee or imply equality is fallacious and misleading, and insidiously opens the door for majoritarian tendencies.$$',
                'c. ##In relation to laws relating to marriage, the position of the Central government remains contradictory.$$',
                [
                    'The Solicitor General of India, representing the Union of India in hearings of Supriyo @ Supriya Chakraborty v. Union of India, WP(C) No. 1011/2022 on the matter of marriage equality, vehemently argued against any change or interference with marriage laws, stating that it would impact more than 157 legal provisions, across statutes that govern the domains of family, marriage, inheritance, adoption, etc. ',
                    'Further, the Central Government in the marriage equality matter before the Supreme Court also asserted that marriage is a religious institution and despite codification of personal laws, it is a “sacrament” and thus, the “sanctity” of personal laws must not be interfered with.',
                ],
                '##It is indeed an irony that the same Union of India which argued against the changes to the marriage laws stating that the legal domain is too diverse to homogenise, is now doing so in the name of uniformity, and proposing one omnibus law to address all issues relating to gender equality in the domain of the family!$$',
                'd. ##On the matter of ending unequal rights/discrimination against women, the present government’s stance continues to be selective, problematic and lacking credibility.$$ Take for instance the much-discussed issue of polygamy among Muslim communities, around which much of the current propaganda around UCC is centred. The National Family Health Survey - 5 (2019-20) reveals the prevalence of polygamy is 2.1% among Christians, 1.9% among Muslims, 1.3% among Hindus, and 1.6% among other religious groups. Yet, the focus remains on prohibiting polygamy within Muslim communities, without any apparent intent to secure the rights of women in such bi- or polygamous marriages across communities. Therefore we question whether the government is propounding the UCC to ensure justice for all women, or use this as an occasion to target one community as being discriminatory to women, even though data reveals a different reality.',
                'e. ##Additionally, there is no indication of how the proposed UCC intends to address legal changes since 2018 to ensure non-discrimination in matters in the private domain, such as:$$',
                [
                    'The recognition of the rights of transgender persons, through the NALSA Judgment, 2014, and the consequent Transgender Persons (Protection of Rights) Act, 2019.',
                    'Emerging and changing concepts of marriage, family, and kinship as being articulated in society and through the courts by those most affected by family laws across community identity.',
                    'Petitions challenging the constitutionality of restitution of conjugal rights as a matrimonial remedy, and the practice of nikah halala as well as those related to marriage equality, which are pending before the Supreme Court of India.',
                ],
                '##As women, our lives and our freedoms are in myriad ways impacted by growing political majoritarianism, as well as the disturbing growth of community and state conservatism in which inter caste, inter religious and even intra gender partnerships, friendships and marriages are being violently opposed. As feminists from diverse locations, we are uncompromisingly committed to a notion of equality not uniformity and affirm women’s autonomy within and outside the structures of marriage and family.$$',
                '~~##3. GOVERNING PRINCIPLES TO ENSURE GENDER EQUALITY AND JUSTICE$$',
                'It is crucial that all efforts of law reform recognise, and are based upon the understanding that: ',
                [
                    '##Taking into consideration patriarchal forms of gender imbalances and discrimination the domain of marriage and family must be one in which marginalised/minoritized stakeholders in the family and community,$$ such as women within and outside the institution of marriage, queer and transgender persons, persons with special needs, etc must have equal rights, accruing from marriage, divorce, guardianship, inheritance and other matters related to family laws and the rights so secured must be accessible and protected, so that the same can be enjoyed.',
                    '##Further, rights secured by law, must be ensured with corresponding state responsibilities. The role of the state is crucial and critical$$ in securing civil, political, social, economic and cultural rights to all women, especially women from marginalised communities and locations. Without an assurance of a robust and respectable social security granted to citizens, especially those in conflict with their families, there can be no access to, and implementation of, gender justice. Basic entitlements of food, shelter, education, health, livelihood, pensions, etc., are a mandate and obligation that the State has to assure through substantive positive measures and enactment as evidence that it is serious about gender justice. ',
                    'Any reforms towards gender just family laws must draw upon the ##best gender just practices from across diverse religious laws and customary practices, harmonised with present day lived realities.$$',
                    '##The legal system must be based on principles of accessibility and affordability for$$ gender justice and equality to be realised, especially for those from marginalised communities. ',
                    '##The personal autonomy, bodily integrity and capability for independent decision making of all adult persons must be respected.$$',
                ],
                '~~##We urge the Law Commission of India to re-consider this deeply problematic, and opaque process on a matter of deep import.$$ Such an extraordinary rush to complete the process in 30 days after a whole five years since its last findings in 2018, seems to point to the process being guided more by political considerations and malafide intent, rather than gender justice, as is being claimed.',
                '##We urge the Law Commission to call for a series of meaningful public consultations across the country$$ to reconceive what gender equality would look like in the face of all the widely varying laws, customs and practices across the country. Given the cultural and religious diversity, any changes in personal and customary laws are bound to be complex, and need to be done in an open, transparent, democratic and inclusive manner within the framework of the Indian Constitution. These consultations could then inform much needed changes in all discriminatory personal as well as secular civil laws.',
                '##As the 21st Law Commission rightly stated,$$ “The issue of family law reform does not need to be approached as a policy that is against the religious sensibilities of individuals but simply as one promoting harmony between religion and constitutionalism, in a way that no citizen is left disadvantaged on account of their religion and at the same time every citizen’s right to freedom of religion is equally protected.”',
                'Given the deep polarisation on the issue and the systematic targeting of specific communities, the onus is on the LCI to create an atmosphere conducive to reasonable dialogue and consultations with a wide spectrum of all those who will be most impacted by any such legal amendments. ##Without that, women and other vulnerable stakeholders in whose name this exercise is purportedly being conducted, will be silenced and invisibilised yet again and the entire exercise will simply serve some vested political interests.$$',
                'Sd/-',
                'A concerned individual',
            ],
            email_body: [
                'To',
                'The Hon’ble Chairperson and members ',
                'Law Commission of India',
                '4th Floor, B Wing, Lok Nayak Bhawan',
                'Khan Market',
                'New Delhi - 110 003',
                '~~Respected Chairperson and members of the Law Commission of India,',
                'We, the undersigned, write to you in response to the Public Notice of the Law Commission of India dated 14/06/2023, as representatives of feminist, queer and women’s rights groups, as well as concerned citizens, who have been working on issues related to gender justice and equality for women from diverse communities across the country. We draw upon our collective experience over many decades, as we respond to the current discussion on the proposed Uniform Civil Code.',
                '~~OUR DETAILED SUBMISSION IS IN THREE PARTS:',
                '   1. Concerns related to the procedure adopted to initiate these discussions by the Law Commission of India (LCI).',
                '   2. Comments on substantive issues of uniformity, equality and non-discrimination vis à vis gender justice.',
                '   3. Governing principles for any efforts towards gender justice for all.',
                '~~Across these aspects, the key concerns we raise are as follows:',
                'We critique the opaque process by which the law commission of India has called for public opinion on the matter of the UCC, without offering any concrete proposal, outline or framework; or adequate time for the public to respond.',
                'Given deeply ingrained socially sanctioned hierarchies of gender, caste, religion and ethnicity, we challenge the claim that uniformity can bring equality.',
                'We assert unequivocally that those to be most impacted by any legal changes must be part of the consultations – this especially includes women within and outside the institution of marriage, especially those from marginalised and minority communities, queer and transgender persons, persons with special needs.',
                'We call out the contradictory positions of the central government on laws relating to marriage. ',
                'Rights secured by law, must be ensured with corresponding state responsibilities that secure civil, political, social, economic and cultural rights to all women, especially those from marginalised communities and locations.',
                'We seek immediate stop to targeting of minorities in the name of gender justice. ',
                'We call for an end to the disinformation campaigns by vested interests.',
                'We seek meaningful public consultations across the country to reconceive what gender equality would look like in the face of all the widely varying laws, customs and practices across the country.',
                'In conclusion, we frame guiding principles that must govern all efforts towards gender justice and equality.',
                'Please find the complete text of the submission at this link: https://responseto22ndlawcommission.vercel.app/ucc.pdf',
                '~~Sd/-',
                'A concerned individual',
            ],
        },
    },
}

export default Content
