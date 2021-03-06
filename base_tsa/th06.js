{
	"binhacks": {
		"buffer_overflow_rem": {
			"code": "eb1990",
			"title": "Fix buffer overflows (remove copy)"
		},
		"buffer_overflow_rep_eax": {
			"code": "8b4518",
			"title": "Fix buffer overflows (replace EAX)"
		},
		"buffer_overflow_rep_ecx": {
			"code": "8b4d18",
			"title": "Fix buffer overflows (replace ECX)"
		},
		"boss_title_align": {
			"code": "8b451850e8[GetTextExtent]83c004503edb04e458",
			"title": "Boss title alignment"
		},
		"spell_align": {
			"code": "eb25909090909090909090909090909090909090909090909090909090909090909090909090908b450c50e8[GetTextExtent]503edb04e458eb0b",
			"title": "Spell card and bomb text alignment"
		},
		"stage_title_align": {
			"code": "8b451850e8[GetTextExtent]d1f883c004503edb04e458eb18",
			"title": "Stage title alignment"
		},
		"spell_align_sillyness": {
			"code": "909090909090909090909090",
			"title": "Fix spell align sillyness"
		},
		"spell_prepare": {
			"code": "8b75e489f183c10c894de80fbf460490",
			"title": "Prepare ECL instruction register for spell ID fetching"
		},
		"spell_fetch_id": {
			"code": "0fbf4e0e89f083c010500fbf560c",
			"title": "Fetch spell ID"
		},
		"unpatch_result_spell": {
			"code": "89c1c1e10681c1e8bc6900516a0068ffffff00",
			"title": "Remove English patch spell translation lookup in the Result screen"
		}
	},
	"title": "東方紅魔郷　～ the Embodiment of Scarlet Devil",
	"url_update": "http://www16.big.or.jp/~zun/html/th06.html",
	"url_trial": "http://www16.big.or.jp/~zun/html/th06.html",
	"latest": [
		"v0.13",
		"v1.02h"
	],
	"formats": {
		"msg": "msg06"
	},
	"breakpoints": {
		"file_name": {
			"cavesize": "5"
		},
		"file_size": {
			"file_size": "eax",
			"cavesize": "5"
		},
		"file_load": {
			"file_buffer": "eax",
			"eip_jump_dist": "0x277",
			"cavesize": "5"
		},
		"file_loaded": {
			"cavesize": "7"
		},
		"spell_name": {
			"spell_id": "ecx",
			"spell_name": "eax",
			"cavesize": "5"
		},
		"spell_name#result": {
			"spell_id_real": "eax",
			"spell_name": "ecx",
			"cavesize": "8"
		},
		"th06_time_fix": {
			"time": "eax",
			"cavesize": "10"
		}
	}
}
