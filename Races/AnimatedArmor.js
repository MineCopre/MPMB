if (sheetVersion < 13001013) {
    throw "This script was made for a newer version of the sheet (v13.1.13). Please use the latest version and try again.\nI can get the latest version at www.flapkan.com.";
}

var iFileName = "AnimatedArmor.js";

SourceList["DanDw"] = {
    name: "D\u0026D Wiki",
    abbreviation: "D\u0026Dwiki",
    group: "homebrew",
    url: "https://www.dandwiki.com/wiki/Animated_Armor_(5e_Race)"
};

var ANIMATED_ARMOR_COMMON_TRAITS = {
    regExpSearch: /^(?=.*(animated|armor))/i,
    source: [["DanDw", 0]],
    size: 3,
    languageProfs: ["Common", 1],
    vision: [["Blindsight", 60]],
    height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
    weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
    heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
    weightMetric: " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
    toNotesPage: [{
            name: "Race Traits",
            note: [
                "\u2022 Antimagic Susceptibility:\n" +
                "     You have disadvantage in skill checks and attack rolls while in the area of an antimagic field. If targeted by dispel magic, you must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
                "\u2022 False Appearance:\n" +
                "     While you remain motionless, you are indistinguishable from a normal suit of armor.",
                "\u2022 Construct:\n" +
                "     You are a suit of armor made of a variety of durable materials. Your creature type is construct instead of humanoid. As such, spells like cure wounds don't affect you, and you are immune to spells like crown of madness or dominate person because they specifically target humanoids. You are immune to poison damage, being poisoned, and diseases. You do not need to eat or breathe, and any food you do attempt to eat falls through the space where your head would be and into the bottom of your armor. Rather than sleeping, you enter an inactive state for 6 hours each day. You do not dream in this state; you are fully aware of your surroundings and notice approaching enemies and other events as normal.",
                "\u2022 Mendable:\n" +
                "     When the mending spell is cast on you, it has the following alterations: It has a casting time of 1 action. If you have 0 hit points you become stable. As part of the casting of mending the caster may expend any level of spell slot to cause you to regain a number of hit points equal to 1d8, plus their spellcasting ability modifier. For each level of the spell slot expended you regain an additional 1d8 hit points.",
                "\u2022 Soul Transfer:\n" +
                "     You can transfer your consciousness into another suit of armor over the course of a short or long rest. During that time you or another creature performs an hour-long ritual. Over the course of that hour, you must remain within 5 feet of the armor, or the ritual fails. This change may alter your subrace accordingly, based on the desired armor's type. If you are not proficient in the armor you transfer yourself into, you will receive all the detriments that someone normally would by wearing a set of armor they are not proficient with, as well as a -2 penalty to your Armor Class. If you use your Soul Transfer trait to transfer yourself to another piece of armor then the formula for calculating your Armor Class becomes that of the armor you transfer yourself to. You are also affected by any other additional properties of the armor such as a Strength requirement, a disadvantage on Stealth checks, a bonus to your Armor Class or even a curse.",

            ],
        }
    ],
    savetxt: {
        text: ["Disadvantage inside Antimagic Field.", "Must succeed Con save if target by Dispel Magic or fall unconscious."],
        immune: ["poison", "poisoned", "disease"]
    },
}

RaceList["animated armor heavy"] = {
    name: "Animated Armor, Heavy",
    regExpSearch: ANIMATED_ARMOR_COMMON_TRAITS.regExpSearch,
    source: ANIMATED_ARMOR_COMMON_TRAITS.source,
    size: ANIMATED_ARMOR_COMMON_TRAITS.size,
    languageProfs: ANIMATED_ARMOR_COMMON_TRAITS.languageProfs,
    vision: ANIMATED_ARMOR_COMMON_TRAITS.vision,
    height: ANIMATED_ARMOR_COMMON_TRAITS.heigt,
    weight: ANIMATED_ARMOR_COMMON_TRAITS.weight,
    heightMetric: ANIMATED_ARMOR_COMMON_TRAITS.heightMetric,
    weightMetric: ANIMATED_ARMOR_COMMON_TRAITS.weightMetric,
    toNotesPage: ANIMATED_ARMOR_COMMON_TRAITS.toNotesPage,
    savetxt: ANIMATED_ARMOR_COMMON_TRAITS.savetxt,
    scores: [2, 0, 1, 0, 0, 0],
    armorAdd: "Chain Mail",
    armorOptions: [{
            regExpSearch: /^(?=.*chain)(?=.*mail).*$/i,
            name: "Chain Mail",
            source: ANIMATED_ARMOR_COMMON_TRAITS.source,
            type: "heavy",
            ac: 16,
            weight: 55,
        }
    ],
    addarmor: "Chain Mail",
    speed: {
        walk: {
            spd: 25,
            enc: 15
        }
    },
    calcChanges: {
        atkCalc: [
            function (fields, v, output) {
                if (v.baseWeaponName == "unarmed strike") {
                    output.die = "1d6";
                }
            }, ""
        ]
    },
    trait: "Heavy (+1 Constitution, +2 Strength)\n" +
    "Innate Heavy Armor: The armor your soul inhabits is chain mail, making your Armor Class 16\n" +
    "Heavy Hitter: Your fists are as heavy as your steps. When you hit with an unarmed strike, you can deal 1d6 + your Strength modifier bludgeoning damage, instead of the normal damage for an unarmed strike."
};

RaceList["animated armor medium"] = {
    name: "Animated Armor, Medium",
    regExpSearch: ANIMATED_ARMOR_COMMON_TRAITS.regExpSearch,
    source: ANIMATED_ARMOR_COMMON_TRAITS.source,
    size: ANIMATED_ARMOR_COMMON_TRAITS.size,
    languageProfs: ANIMATED_ARMOR_COMMON_TRAITS.languageProfs,
    vision: ANIMATED_ARMOR_COMMON_TRAITS.vision,
    height: ANIMATED_ARMOR_COMMON_TRAITS.heigt,
    weight: ANIMATED_ARMOR_COMMON_TRAITS.weight,
    heightMetric: ANIMATED_ARMOR_COMMON_TRAITS.heightMetric,
    weightMetric: ANIMATED_ARMOR_COMMON_TRAITS.weightMetric,
    toNotesPage: ANIMATED_ARMOR_COMMON_TRAITS.toNotesPage,
    savetxt: ANIMATED_ARMOR_COMMON_TRAITS.savetxt,
    scores: [1, 1, 1, 0, 0, 0],
    armorOptions: [{
            regExpSearch: /^(?=.*scale)(?=.*mail).*$/i,
            name: "Scale Mail",
            source: ANIMATED_ARMOR_COMMON_TRAITS.source,
            type: "medium",
            ac: 14,
            weight: 55,
            select: "scale mail",
        }
    ],
    armorAdd: "scale mail",
    addarmor: "scale mail",
    speed: {
        walk: {
            spd: 30,
            enc: 20
        }
    },
    trait: "Medium (+1 Constitution, +1 Strength, +1 Dexterity)\n" +
    "Innate Light The armor your soul inhabits is chain mail, making your Armor Class 11 + your Dexterity modifier, to a maximum Dexterity bonus of 2"
};

RaceList["animated armor light"] = {
    name: "Animated Armor, Light",
    regExpSearch: ANIMATED_ARMOR_COMMON_TRAITS.regExpSearch,
    source: ANIMATED_ARMOR_COMMON_TRAITS.source,
    size: ANIMATED_ARMOR_COMMON_TRAITS.size,
    languageProfs: ANIMATED_ARMOR_COMMON_TRAITS.languageProfs,
    vision: ANIMATED_ARMOR_COMMON_TRAITS.vision,
    height: ANIMATED_ARMOR_COMMON_TRAITS.heigt,
    weight: ANIMATED_ARMOR_COMMON_TRAITS.weight,
    heightMetric: ANIMATED_ARMOR_COMMON_TRAITS.heightMetric,
    weightMetric: ANIMATED_ARMOR_COMMON_TRAITS.weightMetric,
    toNotesPage: ANIMATED_ARMOR_COMMON_TRAITS.toNotesPage,
    savetxt: ANIMATED_ARMOR_COMMON_TRAITS.savetxt,
    scores: [0, 2, 1, 0, 0, 0],
    armorAdd: {
        select: "Leather Armor",
    },
    speed: {
        walk: {
            spd: 35,
            enc: 25
        }
    },
    trait: "Light (+2 Dexterity, +2 Strength)\n" +
    "Innate Light Armor: The armor your soul inhabits is chain mail, making your Armor Class 11 + your Dexterity modifier"
};
