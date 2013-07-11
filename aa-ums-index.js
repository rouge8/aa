﻿function ums_get_img_url ( page) {
	if ( page < 1) page=1;
	if ( page > ums.length - 1) page=ums.length - 1;
	cur_ums_page=page;
	var p=page;
  var str = "" + p;
  var pad = "0000";
  prefixed_page = pad.substring(0, pad.length - str.length) + str;
	return "ums/" + Math.floor(page/100) + "/ums-" + prefixed_page + ".png";
	// return "ums/ums-" + prefixed_page + ".png";
}

var ums=[];

ums[1] = ""
ums[2] = ""
ums[3] = ""
ums[4] = ""
ums[5] = ""
ums[6] = ""
ums[7] = ""
ums[8] = ""
ums[9] = ""
ums[10] = ""
ums[11] = ""
ums[12] = ""
ums[13] = ""
ums[14] = "ا"
ums[15] = "ابز"
ums[16] = "ابل"
ums[17] = "ابو"
ums[18] = "اتي"
ums[19] = "اثر"
ums[20] = "اثم"
ums[21] = "اجص"
ums[22] = "احد"
ums[23] = "اخو"
ums[24] = "اخذ"
ums[25] = "اخر"
ums[26] = "ادم"
ums[27] = "اذ"
ums[28] = "اذا"
ums[29] = "اذن"
ums[30] = "ارج"
ums[31] = "ارض"
ums[32] = "ازر"
ums[33] = "ازم"
ums[34] = "اسر"
ums[35] = "اسم"
ums[36] = "اشر"
ums[37] = "اصل"
ums[38] = "افك"
ums[39] = "اكل"
ums[40] = "الا"
ums[41] = "الف"
ums[42] = "اله"
ums[43] = "اله"
ums[44] = "الي"
ums[45] = "امر"
ums[46] = "امل"
ums[47] = "امم"
ums[48] = "امم"
ums[49] = "امن"
ums[50] = "انث"
ums[51] = "انف"
ums[52] = "انن"
ums[53] = "انن"
ums[54] = "انن"
ums[55] = "اهب"
ums[56] = "او"
ums[57] = "اوصد"
ums[58] = "اول"
ums[59] = "اوي"
ums[60] = "ايا"
ums[61] = "ايم"
ums[62] = "ايه"
ums[63] = "ايي"
ums[64] = "ايي"
ums[65] = "ب"
ums[66] = "ببل"
ums[67] = "بتت"
ums[68] = "بثن"
ums[69] = "بحر"
ums[70] = "بخص"
ums[71] = "بدر"
ums[72] = "بدع"
ums[73] = "بدن"
ums[74] = "بذل"
ums[75] = "برج"
ums[76] = "برد"
ums[77] = "برذع"
ums[78] = "برر"
ums[79] = "برص"
ums[80] = "برق"
ums[81] = "برنس"
ums[82] = "بزر"
ums[83] = "بسس"
ums[84] = "بسق"
ums[85] = "بشر"
ums[86] = "بصر"
ums[87] = "بصل"
ums[88] = "بطح"
ums[89] = "بطل"
ums[90] = "بطن"
ums[91] = "بعد"
ums[92] = "بعل"
ums[93] = "بغي"
ums[94] = "بقق"
ums[95] = "بقم"
ums[96] = "بكر"
ums[97] = "بكك"
ums[98] = "بلج"
ums[99] = "بلعم"
ums[100] = "بلل"
ums[101] = "بلل"
ums[102] = "بلي"
ums[103] = "بني"
ums[104] = "بهج"
ums[105] = "بهق"
ums[106] = "بوا"
ums[107] = "بور"
ums[108] = "بول"
ums[109] = "بيد"
ums[110] = "بيض"
ums[111] = "بيع"
ums[112] = "بين"
ums[113] = "بيي"
ums[114] = "بيي"
ums[115] = "ت"
ums[116] = "تبر"
ums[117] = "تبع"
ums[118] = "ترب"
ums[119] = "ترع"
ums[120] = "تعس"
ums[121] = "تلع"
ums[122] = "تمم"
ums[123] = "تهم"
ums[124] = "تيس"
ums[125] = "تيه"
ums[126] = "ثبج"
ums[127] = "ثدا"
ums[128] = "ثطط"
ums[129] = "ثقب"
ums[130] = "ثقل"
ums[131] = "ثلث"
ums[132] = "ثمر"
ums[133] = "ثمن"
ums[134] = "ثني"
ums[135] = "ثني"
ums[136] = "ثوب"
ums[137] = "ثيب"
ums[138] = "جبت"
ums[139] = "جبر"
ums[140] = "جبن"
ums[141] = "جثي"
ums[142] = "جخف"
ums[143] = "جدد"
ums[144] = "جدد"
ums[145] = "جدع"
ums[146] = "جذب"
ums[147] = "جذم"
ums[148] = "جرب"
ums[149] = "جرر"
ums[150] = "جرس"
ums[151] = "جرم"
ums[152] = "جري"
ums[153] = "جرز"
ums[154] = "جزز"
ums[155] = "جزي"
ums[156] = "جشا"
ums[157] = "جعد"
ums[158] = "جفف"
ums[159] = "جق"
ums[160] = "جلد"
ums[161] = "جلل"
ums[162] = "جلو"
ums[163] = "جمر"
ums[164] = "جمع"
ums[165] = "جمع"
ums[166] = "جمل"
ums[167] = "جمم"
ums[168] = "جنب"
ums[169] = "جنن"
ums[170] = "جني"
ums[171] = "جهز"
ums[172] = "جو"
ums[173] = "جود"
ums[174] = "جوز"
ums[175] = "جول"
ums[176] = "جيش"
ums[177] = "جيل"
ums[178] = "حبب"
ums[179] = "حبس"
ums[180] = "حبك"
ums[181] = "حتت"
ums[182] = "حثا"
ums[183] = "حجج"
ums[184] = "حجر"
ums[185] = "حجم"
ums[186] = "حدث"
ums[187] = "حدد"
ums[188] = "حدق"
ums[189] = "حذق"
ums[190] = "حرب"
ums[191] = "حرد"
ums[192] = "حرر"
ums[193] = "حرص"
ums[194] = "حرف"
ums[195] = "حرك"
ums[196] = "حرم"
ums[197] = "حري"
ums[198] = "حزق"
ums[199] = "حزو"
ums[200] = "حسر"
ums[201] = "حسك"
ums[202] = "حسن"
ums[203] = "حشر"
ums[204] = "حشم"
ums[205] = "حشي"
ums[206] = "حصر"
ums[207] = "حصل"
ums[208] = "حضب"
ums[209] = "حضب"
ums[210] = "حطط"
ums[211] = "حظي"
ums[212] = "حفش"
ums[213] = "حفل"
ums[214] = "حفي"
ums[215] = "حقق"
ums[216] = "حقل"
ums[217] = "حكم"
ums[218] = "حلا"
ums[219] = "حلف"
ums[220] = "حلق"
ums[221] = "حلل"
ums[222] = "حلل"
ums[223] = "حلم"
ums[224] = "حلي"
ums[225] = "حمد"
ums[226] = "حمس"
ums[227] = "حمل"
ums[228] = "حمل"
ums[229] = "حمل"
ums[230] = "حمم"
ums[231] = "حمي"
ums[232] = "حنا"
ums[233] = "حنك"
ums[234] = "حني"
ums[235] = "حوج"
ums[236] = "حور"
ums[237] = "حوض"
ums[238] = "حول"
ums[239] = "حول"
ums[240] = "حوي"
ums[241] = "حيس"
ums[242] = "حيل"
ums[243] = "حيي"
ums[244] = "حيي"
ums[245] = "خبر"
ums[246] = "خبط"
ums[247] = "ختل"
ums[248] = "خجل"
ums[249] = "خدع"
ums[250] = "خردل"
ums[251] = "خرز"
ums[252] = "خرف"
ums[253] = "خرق"
ums[254] = "خزن"
ums[255] = "خسف"
ums[256] = "خشن"
ums[257] = "خصر"
ums[258] = "خصم"
ums[259] = "خضب"
ums[260] = "خضض"
ums[261] = "خطب"
ums[262] = "خطط"
ums[263] = "خطي"
ums[264] = "خفض"
ums[265] = "خفي"
ums[266] = "خلج"
ums[267] = "خلص"
ums[268] = "خلف"
ums[269] = "خلف"
ums[270] = "خلف"
ums[271] = "خلق"
ums[272] = "خلل"
ums[273] = "خلو"
ums[274] = "خمر"
ums[275] = "خمس"
ums[276] = "خمع"
ums[277] = "خنس"
ums[278] = "خور"
ums[279] = "خول"
ums[280] = "خوي"
ums[281] = "خير"
ums[282] = "خيف"
ums[283] = "خيل"
ums[284] = "خيم"
ums[285] = "دبر"
ums[286] = "دبر"
ums[287] = "دجج"
ums[288] = "دحر"
ums[289] = "دخل"
ums[290] = "دخل"
ums[291] = "درب"
ums[292] = "درر"
ums[293] = "درع"
ums[294] = "درك"
ums[295] = "دسر"
ums[296] = "دعر"
ums[297] = "دعو"
ums[298] = "دفتر"
ums[299] = "دفن"
ums[300] = "دقق"
ums[301] = "دلج"
ums[302] = "دلل"
ums[303] = "دمر"
ums[304] = "دمو"
ums[305] = "دنف"
ums[306] = "دهر"
ums[307] = "دهم"
ums[308] = "دوح"
ums[309] = "دور"
ums[310] = "دول"
ums[311] = "دون"
ums[312] = "دين"
ums[313] = "دين"
ums[314] = "دين"
ums[315] = "ذ"
ums[316] = "ذبح"
ums[317] = "ذرا"
ums[318] = "ذرع"
ums[319] = "ذعر"
ums[320] = "ذكي"
ums[321] = "ذمم"
ums[322] = "ذو"
ums[323] = "ذوي"
ums[324] = "ذيم"
ums[325] = "راي"
ums[326] = "راي"
ums[327] = "ربب"
ums[328] = "ربث"
ums[329] = "ربط"
ums[330] = "ربع"
ums[331] = "ربع"
ums[332] = "ربو"
ums[333] = "رتع"
ums[334] = "رتو"
ums[335] = "رجج"
ums[336] = "رجع"
ums[337] = "رجف"
ums[338] = "رجم"
ums[339] = "رجو"
ums[340] = "رحض"
ums[341] = "رحم"
ums[342] = "رخص"
ums[343] = "ردد"
ums[344] = "ردن"
ums[345] = "رزق"
ums[346] = "رزم"
ums[347] = "رسل"
ums[348] = "رسم"
ums[349] = "رشش"
ums[350] = "رصد"
ums[351] = "رضب"
ums[352] = "رضي"
ums[353] = "رعب"
ums[354] = "رعف"
ums[355] = "رعي"
ums[356] = "رغم"
ums[357] = "رغي"
ums[358] = "رفع"
ums[359] = "رفق"
ums[360] = "رفو"
ums[361] = "رقش"
ums[362] = "رقق"
ums[363] = "رقم"
ums[364] = "ركب"
ums[365] = "ركك"
ums[366] = "ركن"
ums[367] = "رمض"
ums[368] = "رمم"
ums[369] = "رمي"
ums[370] = "رنق"
ums[371] = "رهط"
ums[372] = "رهن"
ums[373] = "روب"
ums[374] = "روح"
ums[375] = "روح"
ums[376] = "روض"
ums[377] = "روق"
ums[378] = "روي"
ums[379] = "ريب"
ums[380] = "رين"
ums[381] = "ريي"
ums[382] = "زبر"
ums[383] = "زبن"
ums[384] = "زجي"
ums[385] = "زخخ"
ums[386] = "زرع"
ums[387] = "زري"
ums[388] = "زفت"
ums[389] = "زقم"
ums[390] = "زلق"
ums[391] = "زمع"
ums[392] = "زمهر"
ums[393] = "زنم"
ums[394] = "زهق"
ums[395] = "زوج"
ums[396] = "زور"
ums[397] = "زون"
ums[398] = "زيد"
ums[399] = "زين"
ums[400] = "سال"
ums[401] = "سبح"
ums[402] = "سبد"
ums[403] = "سبط"
ums[404] = "سبك"
ums[405] = "سبهل"
ums[406] = "ستر"
ums[407] = "سجد"
ums[408] = "سجل"
ums[409] = "سحت"
ums[410] = "سحر"
ums[411] = "سحو"
ums[412] = "سخم"
ums[413] = "سخي"
ums[414] = "سدد"
ums[415] = "سدل"
ums[416] = "سرج"
ums[417] = "سردق"
ums[418] = "سرر"
ums[419] = "سرط"
ums[420] = "سرق"
ums[421] = "سري"
ums[422] = "سري"
ums[423] = "سطع"
ums[424] = "سعر"
ums[425] = "سعي"
ums[426] = "سفر"
ums[427] = "سفف"
ums[428] = "سفل"
ums[429] = "سفه"
ums[430] = "سقط"
ums[431] = "سقع"
ums[432] = "سقي"
ums[433] = "سكت"
ums[434] = "سكف"
ums[435] = "سكن"
ums[436] = "سكن"
ums[437] = "سلح"
ums[438] = "سلف"
ums[439] = "سلك"
ums[440] = "سلم"
ums[441] = "سلم"
ums[442] = "سمج"
ums[443] = "سمر"
ums[444] = "سمع"
ums[445] = "سمك"
ums[446] = "سمن"
ums[447] = "سمو"
ums[448] = "سند"
ums[449] = "سنن"
ums[450] = "سنه"
ums[451] = "سهل"
ums[452] = "سوا"
ums[453] = "سود"
ums[454] = "سوط"
ums[455] = "سوف"
ums[456] = "سوم"
ums[457] = "سوي"
ums[458] = "سوي"
ums[459] = "سيح"
ums[460] = "سيع"
ums[461] = "سيي"
ums[462] = "شبب"
ums[463] = "شبع"
ums[464] = "شبو"
ums[465] = "شتا"
ums[466] = "شجع"
ums[467] = "شجي"
ums[468] = "شحن"
ums[469] = "شدد"
ums[470] = "شذر"
ums[471] = "شرح"
ums[472] = "شرس"
ums[473] = "شرع"
ums[474] = "شرق"
ums[475] = "شرك"
ums[476] = "شسع"
ums[477] = "شطن"
ums[478] = "شعث"
ums[479] = "شعر"
ums[480] = "شعف"
ums[481] = "شغل"
ums[482] = "شفع"
ums[483] = "شفي"
ums[484] = "شقق"
ums[485] = "شكر"
ums[486] = "شكل"
ums[487] = "شلل"
ums[488] = "شمر"
ums[489] = "شمل"
ums[490] = "شمل"
ums[491] = "شنف"
ums[492] = "شهد"
ums[493] = "شهق"
ums[494] = "شرر"
ums[495] = "شوق"
ums[496] = "شوه"
ums[497] = "شيد"
ums[498] = "شيم"
ums[499] = "شين"
ums[500] = "صبح"
ums[501] = "صبع"
ums[502] = "صحب"
ums[503] = "صحر"
ums[504] = "صخخ"
ums[505] = "صدر"
ums[506] = "صدف"
ums[507] = "صدق"
ums[508] = "صرخ"
ums[509] = "صرر"
ums[510] = "صرف"
ums[511] = "صرع"
ums[512] = "صعق"
ums[513] = "صفح"
ums[514] = "صفر"
ums[515] = "صفق"
ums[516] = "صفو"
ums[517] = "صكك"
ums[518] = "صلع"
ums[519] = "صلو"
ums[520] = "صمت"
ums[521] = "صمم"
ums[522] = "صنج"
ums[523] = "صنن"
ums[524] = "صوب"
ums[525] = "صور"
ums[526] = "صول"
ums[527] = "صيح"
ums[528] = "صيف"
ums[529] = "صيي"
ums[530] = "ضبع"
ums[531] = "ضحك"
ums[532] = "ضحي"
ums[533] = "ضدد"
ums[534] = "ضرر"
ums[535] = "ضرط"
ums[536] = "ضري"
ums[537] = "ضعف"
ums[538] = "ضفر"
ums[539] = "ضلع"
ums[540] = "ضلل"
ums[541] = "ضمم"
ums[542] = "ضنن"
ums[543] = "ضوي"
ums[544] = "ضيف"
ums[545] = "ضيم"
ums[546] = "طبق"
ums[547] = "طحن"
ums[548] = "طرد"
ums[549] = "طرف"
ums[550] = "طرق"
ums[551] = "طسج"
ums[552] = "طعم"
ums[553] = "طغي"
ums[554] = "طفق"
ums[555] = "طلس"
ums[556] = "طلع"
ums[557] = "طلل"
ums[558] = "طلي"
ums[559] = "طمن"
ums[560] = "طهر"
ums[561] = "طود"
ums[562] = "طوف"
ums[563] = "طول"
ums[564] = "طيب"
ums[565] = "طير"
ums[566] = "طين"
ums[567] = "طين"
ums[568] = "ظفر"
ums[569] = "ظلل"
ums[570] = "ظلم"
ums[571] = "ظهر"
ums[572] = "ظهر"
ums[573] = "عبد"
ums[574] = "عبر"
ums[575] = "عبقر"
ums[576] = "عتب"
ums[577] = "عتق"
ums[578] = "عتم"
ums[579] = "عثي"
ums[580] = "عجج"
ums[581] = "عجز"
ums[582] = "عجل"
ums[583] = "عجم"
ums[584] = "عجن"
ums[585] = "عدد"
ums[586] = "عدل"
ums[587] = "عدم"
ums[588] = "عدي"
ums[589] = "عذر"
ums[590] = "عذر"
ums[591] = "عرب"
ums[592] = "عرج"
ums[593] = "عرس"
ums[594] = "عرش"
ums[595] = "عرض"
ums[596] = "عرض"
ums[597] = "عرض"
ums[598] = "عرف"
ums[599] = "عرف"
ums[600] = "عرك"
ums[601] = "عري"
ums[602] = "عزر"
ums[603] = "عزز"
ums[604] = "عزي"
ums[605] = "عسس"
ums[606] = "عسل"
ums[607] = "عشر"
ums[608] = "عشر"
ums[609] = "عشي"
ums[610] = "عصر"
ums[611] = "عصعص"
ums[612] = "عصم"
ums[613] = "عضب"
ums[614] = "عضم"
ums[615] = "عطس"
ums[616] = "عطل"
ums[617] = "عظم"
ums[618] = "عفر"
ums[619] = "عفو"
ums[620] = "عقب"
ums[621] = "عقب"
ums[622] = "عقد"
ums[623] = "عقر"
ums[624] = "عقق"
ums[625] = "عقل"
ums[626] = "عقل"
ums[627] = "عقم"
ums[628] = "عكز"
ums[629] = "علس"
ums[630] = "علق"
ums[631] = "علل"
ums[632] = "علم"
ums[633] = "علي"
ums[634] = "علي"
ums[635] = "عمر"
ums[636] = "عمل"
ums[637] = "عمم"
ums[638] = "عمي"
ums[639] = "عندل"
ums[640] = "عنق"
ums[641] = "عنن"
ums[642] = "عني"
ums[643] = "عوج"
ums[644] = "عود"
ums[645] = "عور"
ums[646] = "عوط"
ums[647] = "عول"
ums[648] = "عون"
ums[649] = "عير"
ums[650] = "عيش"
ums[651] = "عين"
ums[652] = "عين"
ums[653] = "عيي"
ums[654] = "غبط"
ums[655] = "غتم"
ums[656] = "غدف"
ums[657] = "غرب"
ums[658] = "غرر"
ums[659] = "غرس"
ums[660] = "غرم"
ums[661] = "غزل"
ums[662] = "غسل"
ums[663] = "غشي"
ums[664] = "غضب"
ums[665] = "غفر"
ums[666] = "غلب"
ums[667] = "غلظ"
ums[668] = "غلق"
ums[669] = "غلل"
ums[670] = "غلي"
ums[671] = "غمز"
ums[672] = "غمم"
ums[673] = "غنم"
ums[674] = "غني"
ums[675] = "غور"
ums[676] = "غول"
ums[677] = "غيث"
ums[678] = "غيض"
ums[679] = "غيل"
ums[680] = "غيي"
ums[681] = "فال"
ums[682] = "فتح"
ums[683] = "فتن"
ums[684] = "فتي"
ums[685] = "فجو"
ums[686] = "فحم"
ums[687] = "فخر"
ums[688] = "فدي"
ums[689] = "فرث"
ums[690] = "فرح"
ums[691] = "فرر"
ums[692] = "فرس"
ums[693] = "فرش"
ums[694] = "فرض"
ums[695] = "فرط"
ums[696] = "فرعن"
ums[697] = "فرق"
ums[698] = "فرند"
ums[699] = "فري"
ums[700] = "فزع"
ums[701] = "فسق"
ums[702] = "فصح"
ums[703] = "فصل"
ums[704] = "فضل"
ums[705] = "فطر"
ums[706] = "فظع"
ums[707] = "فقر"
ums[708] = "فكر"
ums[709] = "فلت"
ums[710] = "فلذ"
ums[711] = "فلع"
ums[712] = "فلن"
ums[713] = "فنن"
ums[714] = "فوح"
ums[715] = "فوض"
ums[716] = "فوق"
ums[717] = "فيا"
ums[718] = "فيض"
ums[719] = "فيي"
ums[720] = "قبس"
ums[721] = "قبط"
ums[722] = "قبط"
ums[723] = "قتد"
ums[724] = "قتم"
ums[725] = "قد"
ums[726] = "قدر"
ums[727] = "قدس"
ums[728] = "قدم"
ums[729] = "قذع"
ums[730] = "قرا"
ums[731] = "قرح"
ums[732] = "قرح"
ums[733] = "قرر"
ums[734] = "قرص"
ums[735] = "قرط"
ums[736] = "قرع"
ums[737] = "قرقف"
ums[738] = "قرن"
ums[739] = "قري"
ums[740] = "قزع"
ums[741] = "قسم"
ums[742] = "قشر"
ums[743] = "قصب"
ums[744] = "قصر"
ums[745] = "قصص"
ums[746] = "قصع"
ums[747] = "قصي"
ums[748] = "قضض"
ums[749] = "قضي"
ums[750] = "قطب"
ums[751] = "قطط"
ums[752] = "قطع"
ums[753] = "قطمر"
ums[754] = "قعد"
ums[755] = "قعط"
ums[756] = "قفع"
ums[757] = "قفي"
ums[758] = "قلت"
ums[759] = "قلص"
ums[760] = "قلق"
ums[761] = "قلم"
ums[762] = "قمر"
ums[763] = "قمع"
ums[764] = "قند"
ums[765] = "قنع"
ums[766] = "قني"
ums[767] = "قوب"
ums[768] = "قود"
ums[769] = "قوف"
ums[770] = "قوم"
ums[771] = "قوم"
ums[772] = "قوي"
ums[773] = "قيس"
ums[774] = "قيل"
ums[775] = "قين"
ums[776] = "كبد"
ums[777] = "كبر"
ums[778] = "كتب"
ums[779] = "كثب"
ums[780] = "كحل"
ums[781] = "كدش"
ums[782] = "كذب"
ums[783] = "كرب"
ums[784] = "كرش"
ums[785] = "كرم"
ums[786] = "كفا"
ums[787] = "كفر"
ums[788] = "كسل"
ums[789] = "كشف"
ums[790] = "كسب"
ums[791] = "كسع"
ums[792] = "كره"
ums[793] = "كري"
ums[794] = "كمد"
ums[795] = "كمم"
ums[796] = "كلم"
ums[797] = "كلي"
ums[798] = "كلب"
ums[799] = "كلل"
ums[800] = "كفف"
ums[801] = "كفل"
ums[802] = "كنف"
ums[803] = "كني"
ums[804] = "كوب"
ums[805] = "كور"
ums[806] = "كوف"
ums[807] = "كون"
ums[808] = "كون"
ums[809] = "كيف"
ums[810] = "كين"
ums[811] = "ل"
ums[812] = "ل"
ums[813] = "لا"
ums[814] = "لبب"
ums[815] = "لبس"
ums[816] = "لبن"
ums[817] = "لبي"
ums[818] = "لجا"
ums[819] = "لحد"
ums[820] = "لحم"
ums[821] = "لحن"
ums[822] = "لحي"
ums[823] = "لدن"
ums[824] = "لذي"
ums[825] = "لسق"
ums[826] = "لطف"
ums[827] = "لعثم"
ums[828] = "لغب"
ums[829] = "لفت"
ums[830] = "لفف"
ums[831] = "لقط"
ums[832] = "لقي"
ums[833] = "لكن"
ums[834] = "لمظ"
ums[835] = "لمم"
ums[836] = "لمي"
ums[837] = "لهم"
ums[838] = "لوب"
ums[839] = "لوط"
ums[840] = "لون"
ums[841] = "لوي"
ums[842] = "ليس"
ums[843] = "ليل"
ums[844] = "ليه"
ums[845] = "ليي"
ums[846] = "ما"
ums[847] = "ما"
ums[848] = "متن"
ums[849] = "مثل"
ums[850] = "مجر"
ums[851] = "محق"
ums[852] = "محن"
ums[853] = "مخض"
ums[854] = "مدد"
ums[855] = "مدي"
ums[856] = "مرج"
ums[857] = "مرر"
ums[858] = "مرط"
ums[859] = "مري"
ums[860] = "مزق"
ums[861] = "مسس"
ums[862] = "مشش"
ums[863] = "مصص"
ums[864] = "مضض"
ums[865] = "مطي"
ums[866] = "معص"
ums[867] = "معك"
ums[868] = "مقل"
ums[869] = "مكك"
ums[870] = "مكن"
ums[871] = "ملا"
ums[872] = "ملح"
ums[873] = "ملك"
ums[874] = "ملل"
ums[875] = "ملي"
ums[876] = "من"
ums[877] = "منذ"
ums[878] = "منن"
ums[879] = "مني"
ums[880] = "مهل"
ums[881] = "مهمه"
ums[882] = "مول"
ums[883] = "ميد"
ums[884] = "ميل"
ums[885] = "ميي"
ums[886] = "نبذ"
ums[887] = "نبع"
ums[888] = "نبه"
ums[889] = "نتش"
ums[890] = "نثر"
ums[891] = "نجد"
ums[892] = "نجش"
ums[893] = "نجم"
ums[894] = "نجي"
ums[895] = "نحس"
ums[896] = "نحن"
ums[897] = "نخص"
ums[898] = "ندح"
ums[899] = "ندل"
ums[900] = "ندي"
ums[901] = "ندل"
ums[902] = "ندي"
ums[903] = "نذر"
ums[904] = "نزف"
ums[905] = "نزل"
ums[906] = "نسب"
ums[907] = "نسر"
ums[908] = "نسل"
ums[909] = "نسي"
ums[910] = "نشا"
ums[911] = "نشر"
ums[912] = "نشش"
ums[913] = "نصب"
ums[914] = "نصح"
ums[915] = "نصر"
ums[916] = "نصف"
ums[917] = "نصي"
ums[918] = "نضر"
ums[919] = "نضي"
ums[920] = "نطق"
ums[921] = "نظم"
ums[922] = "نعق"
ums[923] = "نعم"
ums[924] = "نعم"
ums[925] = "نغص"
ums[926] = "نفث"
ums[927] = "نفذ"
ums[928] = "نفس"
ums[929] = "نفش"
ums[930] = "نفف"
ums[931] = "نقب"
ums[932] = "نقر"
ums[933] = "نقص"
ums[934] = "نقع"
ums[935] = "نقل"
ums[936] = "نقي"
ums[937] = "نكر"
ums[938] = "نكه"
ums[939] = "نمق"
ums[940] = "نمي"
ums[941] = "نهر"
ums[942] = "نهم"
ums[943] = "نوا"
ums[944] = "نوح"
ums[945] = "نوس"
ums[946] = "نول"
ums[947] = "نوه"
ums[948] = "نيه"
ums[949] = "واد"
ums[950] = "وام"
ums[951] = "وبل"
ums[952] = "وتر"
ums[953] = "وثق"
ums[954] = "وجب"
ums[955] = "وجس"
ums[956] = "وجن"
ums[957] = "وحد"
ums[958] = "وحش"
ums[959] = "وحي"
ums[960] = "ودد"
ums[961] = "ودع"
ums[962] = "وذم"
ums[963] = "ورد"
ums[964] = "ورق"
ums[965] = "ورم"
ums[966] = "وزر"
ums[967] = "وزف"
ums[968] = "وسط"
ums[969] = "وسع"
ums[970] = "وسم"
ums[971] = "وسوس"
ums[972] = "وشق"
ums[973] = "وصب"
ums[974] = "وصف"
ums[975] = "وصم"
ums[976] = "وضع"
ums[977] = "وضن"
ums[978] = "وطن"
ums[979] = "وعر"
ums[980] = "وغي"
ums[981] = "وفق"
ums[982] = "وقت"
ums[983] = "وقر"
ums[984] = "وقع"
ums[985] = "وقي"
ums[986] = "وكر"
ums[987] = "وكي"
ums[988] = "ولع"
ums[989] = "ولي"
ums[990] = "وما"
ums[991] = "وهد"
ums[992] = "وهي"
ums[993] = "ويه"
ums[994] = "ويي"
ums[995] = "ه"
ums[996] = "هبط"
ums[997] = "هتا"
ums[998] = "هجع"
ums[999] = "هدد"
ums[1000] = "هدي"
ums[1001] = "هدي"
ums[1002] = "هرر"
ums[1003] = "هرم"
ums[1004] = "هشش"
ums[1005] = "هطل"
ums[1006] = "هلك"
ums[1007] = "هلل"
ums[1008] = "همس"
ums[1009] = "همي"
ums[1010] = "هنا"
ums[1011] = "هور"
ums[1012] = "هوم"
ums[1013] = "هيت"
ums[1014] = "هيم"
ums[1015] = "هيه"
ums[1016] = "ياس"
ums[1017] = "يدي"
ums[1018] = "يدي"
ums[1019] = "يسر"
ums[1020] = "يمم"
ums[1021] = "يمن"
ums[1022] = "ينع"
ums[1023] = "يوم"

