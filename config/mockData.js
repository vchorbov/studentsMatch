import styles from "../styles/Profile.module.css"
import Link from 'next/link';

export const interestsData = [

    {
        name: "Sport",
        icon: "/interests/sport.jfif",
        sub: [
            {
                name: "Ballsport",
                icon: "/interests/ballsport.jpg",
                sub: [
                    {
                        name: "Tennis",
                        icon: "/interests/tennis.webp"
                    },
                    {
                        name: "Fußball",
                        icon: "/interests/soccer.jpg"
                    }
                ]
            },
            {
                name: "Wassersport",
                icon: "/interests/watersport.jfif",
                sub: [
                    {
                        name: "Wind Surfing",
                        icon: "/interests/windsurfing.jfif"
                    },
                    {
                        name: "Wakeboarding",
                        icon: "/interests/wakeboarding.jfif"
                    }
                ]
            },
            {
                name: "Fitness",
                icon: "/interests/fitness.jfif"
            }
        ]
    },
    {
        name: "Musik",
        icon: "/interests/musik.jfif",
        sub: [
            {
                name: "Klassik",
                icon: "/interests/classical_music.jfif"
            },
            {
                name: "Gitarre",
                icon: "/interests/guitar.jfif"
            },
            {
                name: "Klavier",
                icon: "/interests/piano.webp"
            }
        ]
    },
    {
        name: "Spiele",
        icon: "/interests/games.jfif",
        sub: [
            {
                name: "Computerspiele",
                icon: "/interests/pc_game.jfif"
            },
            {
                name: "Brettspiele",
                icon: "/interests/board_game.jfif"
            }
        ]
    },
    {
        name: "Filme",
        icon: "/interests/filme.jfif"
    },
    {
        name: "Mode",
        icon: "/interests/fashion.jfif"
    },
    {
        name: "Pflanzen",
        icon: "/interests/plants.jfif"
    },
    {
        name: "Informatik",
        icon: "/interests/it.jfif"
    }

]

export const groups = [
    {
        name: "Video Spiele",
        picture: "/groupchatImages/vg_icon.jpg",
        numberOfMember: 5,
        members: [
            1,2,3,0
        ],
        messages: [
            {
                sender: 0,
                message: "Wer hat lust auf ein Spiel?"
            },
        ]
    }


]

export const chats = [
    {
        userId: 1,
        messages: [
            {
                sender: 0,
                message: "Hast Du heute bock auf Tennis?"
            },
            {
                sender: 1,
                message: "Klar, wann willst du starten?"
            }
        ]
    },
    {
        userId: 2,
        messages: [
            {
                sender: 0,
                message: "Hi Lisa-Marie"
            }
        ]
    },
    {
        userId: 3,
        messages: [
            {
                sender: 1,
                message: "Bist du schon mit der Übung fertig?"
            }
        ]
    }
]


export const users = [
    {
        picture: "/lisa-marie.jfif",
        name: "Lisa-Marie",
        lastName: "Müller",
        birthday: new Date(2002, 1, 17),
        pitch: "Mit  18 habe ich mein Abitur gemacht an der Wagenburg Schule in Stuttgard und bin danach ein Jahr nach Australien gegangen. Ich kenne noch nicht so viele Leute in der Stadt und freue mich auf neue Kontakte :)",
        university: "Uni zu Köln",
        studyProgram: "Betriebswirtschaftslehre",
        email: "lmmueller@smail.uni-koeln.de",
        phone: "+49 198 1234 567",
        semester: 1,
        interests: [
            "Sport",
            "Tennis",
            "Musik",
            "Gitarre"
        ],
        button: <Link href = {'/profile/edit?edit=true'} passHref><button className={`btn btn-outline-primary mx-auto ${styles.blockBtn}`}>Bearbeiten</button></Link>
    },
    {
        picture: "/chatsImages/tim.jpg",
        name: "Tim",
        lastName: "Schuster",
        birthday: new Date(2000, 4, 1),
        pitch: "Mit  18 habe ich mein Abitur gemacht an der Wagenburg Schule in Stuttgard und bin danach ein Jahr nach Australien gegangen. Ich kenne noch nicht so viele Leute in der Stadt und freue mich auf neue Kontakte :)",
        university: "Uni zu Köln",
        studyProgram: "Wirtschaftsinformatik",
        email: "tschuster@smail.uni-koeln.de",
        phone: "+49 198 1234 567",
        semester: 4,
        interests: [
            "Sport",
            "Tennis",
            "Windsurfen",
            "Klavier"
        ],
        button: <button className={`btn btn-outline-danger mx-auto ${styles.blockBtn}`}>Blockieren</button>
    },
    {
        picture: "/chatsImages/marie.jpg",
        name: "Marie",
        lastName: "Lehman",
        birthday: new Date(2001, 6, 5),
        pitch: "Mit  18 habe ich mein Abitur gemacht an der Wagenburg Schule in Stuttgard und bin danach ein Jahr nach Australien gegangen. Ich kenne noch nicht so viele Leute in der Stadt und freue mich auf neue Kontakte :)",
        university: "Uni zu Köln",
        studyProgram: "Betriebswirtschaftslehre",
        email: "mlehman@smail.uni-koeln.de",
        phone: "+49 198 1234 567",
        semester: 2,
        interests: [
            "Sport",
            "Tennis",
            "Windsurfen",
            "Klavier"
        ],
        button: <button className={`btn btn-outline-danger mx-auto ${styles.blockBtn}`}>Blockieren</button>
    },
    {
        picture: "/chatsImages/lisa.jfif",
        name: "Lisa",
        lastName: "Haman",
        birthday: new Date(2001, 6, 5),
        pitch: "Mit  18 habe ich mein Abitur gemacht an der Wagenburg Schule in Stuttgard und bin danach ein Jahr nach Australien gegangen. Ich kenne noch nicht so viele Leute in der Stadt und freue mich auf neue Kontakte :)",
        university: "Uni zu Köln",
        studyProgram: "Betriebswirtschaftslehre",
        email: "mlehman@smail.uni-koeln.de",
        phone: "+49 198 1234 567",
        semester: 5,
        interests: [
            "Musik",
            "Fußball",
            "Klavier"
        ],
        button: <button className={`btn btn-outline-danger mx-auto ${styles.blockBtn}`}>Blockieren</button>
    }
]