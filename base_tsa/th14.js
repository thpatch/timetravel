{
	"binhacks": {
		"buffer_overflow_spell": {
			"code": "8b452090",
			"title": "Fix buffer overflow in spell name rendering (replace pointer)"
		},
		"sprintf_call": {
			"code": "50e8[strings_vsprintf]8944e434",
			"title": "Safe sprintf (short, call)"
		},
		"sprintf_long_call": {
			"code": "50e8[strings_vsprintf]8985fcfeffff",
			"title": "Safe sprintf (long, call)"
		},
		"sprintf_rep": {
			"code": "8b44e428",
			"title": "Safe sprintf (short, replace pointer)"
		},
		"sprintf_long_rep": {
			"code": "8b",
			"title": "Safe sprintf (long, replace pointer)"
		},
		"log_restore": {
			"code": "e9[log_printf]",
			"title": "Restore the game's built-in logging"
		},
		"ddc_textbox_size": {
			"code": "53e8[GetTextExtent]f30f101583e81c730331c090",
			"title": "Correct text length calculation for the DDC variety of Fairy Wars-style text boxes"
		},
		"ddc_textbox_size_full": {
			"code": "53e8[GetTextExtent]f30f100d83e81c730331c090",
			"title": "Correct text length calculation for the DDC variety of Fairy Wars-style text boxes"
		},
		"spell_name_fetch": {
			"code": "8b4d0c5131c9515151",
			"title": "Prepare deferred spell name fetching"
		},
		"spell_align": {
			"code": "8b451c8d1c008b461cc1e80b83e0018944e414ff35ff7520e8[GetTextExtentForFont]83c008d1e08b562ceb1e909090909090909090909090909090909090909090909090909090909090",
			"title": "Spell card alignment"
		},
		"result_spell_align": {
			"code": "8944e4148b430831d2eb1990909090909090909090909090909090909090909090909090",
			"title": "Remove spell \"alignment\" in the result screen"
		},
		"music_title_prepare": {
			"code": "8b4ce41c5131c05050505068ffffff0056ff35cc564f0090",
			"title": "Prepare music room title fetching"
		},
		"thcrap_migrate_jump": {
			"code": "e9599b0200",
			"title": "Update notification for 2014-01-03 (jump)"
		},
		"thcrap_migrate_msg": {
			"code": "41206e65772076657273696f6e2028323031342d30312d323729206f662074686520257320697320617661696c61626c652e0a0a49742063616e20626520646f776e6c6f616465642066726f6d0a0a09687474703a2f2f746870617463682e6e65742f50726f6a6563743a446f776e6c6f61640000e8[PROJECT_VERSION]3d270114207d17e8[PROJECT_NAME]50683c0f4b006a406a00e8[log_mboxf]83c410e86d1cfeffe97a64fdff",
			"title": "Update notification for 2014-01-03 (check and message)"
		}
	},
	"title": "東方輝針城　～  Double Dealing Character",
	"latest": [
		"v0.01b",
		"v1.00b"
	],
	"url_trial": "http://www16.big.or.jp/~zun/html/th14dl.html",
	"url_update": "http://www16.big.or.jp/~zun/html/th14dl.html",
	"formats": {
		"msg": "msg11",
		"end": "end10",
		"anm": "anm11"
	},
	"breakpoints": {
		"file_size": {
			"file_size": "eax",
			"file_name": "ebx",
			"cavesize": "6"
		},
		"file_load": {
			"file_buffer": "eax",
			"stack_clear_size": "8",
			"cavesize": "5"
		},
		"file_loaded": {
			"cavesize": "5"
		},
		"spell_id": {
			"spell_id": "eax",
			"cavesize": "6"
		},
		"spell_id#real": {
			"spell_id_real": "ecx",
			"cavesize": "6"
		},
		"spell_name": {
			"spell_name": "ecx",
			"cavesize": "5"
		},
		"spell_id#result": {
			"spell_id_real": "esi",
			"spell_rank": "eax",
			"cavesize": "6"
		},
		"spell_name#result": {
			"spell_name": "eax",
			"cavesize": "7"
		},
		"spell_name#practice": {
			"spell_id_real": "edi",
			"spell_rank": "ebx",
			"spell_name": "eax",
			"cavesize": "8"
		},
		"music_title": {
			"str": "ecx",
			"track": "eax",
			"format_id": "Music Room Numbered Title",
			"cavesize": "5"
		},
		"music_cmt#line_first": {
			"line_num": "eax",
			"cavesize": "5"
		},
		"music_cmt#first": {
			"str": "eax",
			"track": "edx",
			"format_id": "Music Room Note Title",
			"cavesize": "5"
		},
		"music_cmt#line": {
			"line_num": "eax",
			"cavesize": "5"
		},
		"music_cmt": {
			"str": "eax",
			"track": "edx",
			"format_id": "Music Room Note Title",
			"cavesize": "5"
		},
		"ruby_offset": {
			"str": "esi",
			"offset": "eax",
			"cavesize": "5"
		},
		"update_poll": {
			"cavesize": "5"
		}
	}
}