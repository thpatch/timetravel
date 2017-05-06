{
	"title": "東方紺珠伝　～ Legacy of Lunatic Kingdom",
	"formats": {
		"msg": "msg11",
		"end": "end10",
		"anm": "anm11"
	},
	"binhacks": {
		"music_title_prepare": {
			"title": "Prepare music room title fetching",
			"code": "8b 4c 24 18 51 31 c0 50 50 50 50 68 ff ff ff 00 56 ff 35 18 3c 50 00 90"
		}
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
		"music_title": {
			"str": "ecx",
			"track": "eax",
			"format_id": "Music Room Numbered Title",
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
		}
	}
}
