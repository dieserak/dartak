<template>
	<div v-if="checkout < 171">
		Checkout:
		<span
			v-for="(finishing, i) in checkouttable[checkout]"
			:key="i"
		>
			{{ finishing }}
		</span>
	</div>
</template>

<script>
export default {
	name:'Checkout',
	props:{
		checkout: {type: Number, required: true}
	},
	data(){
		return{
			checkouttable: {}
		};
	},
	mounted(){
		this.checkouttable[170] = ["T20", "T20", "BULL"];
		this.checkouttable[167] = ["T20", "T19", "BULL"];
		this.checkouttable[164] = ["T20", "T18", "BULL"];
		this.checkouttable[161] = ["T20", "T17", "BULL"];
		this.checkouttable[160] = ["T20", "T20", "D20"];
		this.checkouttable[158] = ["T20", "T20", "D19"];
		this.checkouttable[157] = ["T20", "T19", "D20"];
		this.checkouttable[156] = ["T20", "T20", "D18"];
		this.checkouttable[155] = ["T20", "T19", "D19"];
		this.checkouttable[154] = ["T20", "T18", "D20"];
		this.checkouttable[153] = ["T20", "T19", "D18"];
		this.checkouttable[152] = ["T20", "T20", "D16"];
		this.checkouttable[151] = ["T20", "T17", "D20"];
		this.checkouttable[150] = ["T20", "T20", "D15"];
		this.checkouttable[149] = ["T20", "T19", "D16"];
		this.checkouttable[148] = ["T20", "T16", "D20"];
		this.checkouttable[147] = ["T20", "T17", "D18"];
		this.checkouttable[146] = ["T20", "T18", "D16"];
		this.checkouttable[145] = ["T20", "T15", "D20"];
		this.checkouttable[144] = ["T20", "T20", "D12"];
		this.checkouttable[143] = ["T20", "T17", "D16"];
		this.checkouttable[142] = ["T20", "T14", "D20"];
		this.checkouttable[141] = ["T20", "T19", "D12"];
		this.checkouttable[140] = ["T20", "T20", "D10"];
		this.checkouttable[139] = ["T19", "T14", "D20"];
		this.checkouttable[138] = ["T20", "T18", "D12"];
		this.checkouttable[137] = ["T20", "T19", "D10"];
		this.checkouttable[136] = ["T20", "T20", "D8"];
		this.checkouttable[135] = ["T20", "T17", "D12"];
		this.checkouttable[134] = ["T20", "T14", "D16"];
		this.checkouttable[133] = ["T20", "T19", "D8"];
		this.checkouttable[132] = ["T20", "T16", "D12"];
		this.checkouttable[131] = ["T20", "T13", "D16"];
		this.checkouttable[130] = ["T20", "T20", "D5"];
		this.checkouttable[129] = ["T19", "T16", "D12"];
		this.checkouttable[128] = ["T18", "T14", "D16"];
		this.checkouttable[127] = ["T20", "T17", "D8"];
		this.checkouttable[126] = ["T19", "T19", "D6"];
		this.checkouttable[125] = ["25", "T20", "D20"];
		this.checkouttable[124] = ["T20", "T16", "D8"];
		this.checkouttable[123] = ["T19", "T16", "D9"];
		this.checkouttable[122] = ["T20", "T18", "D4"];
		this.checkouttable[121] = ["T20", "T11", "D14"];
		this.checkouttable[120] = ["T20", "20", "D20"];
		this.checkouttable[119] = ["T20", "19", "D20"];
		this.checkouttable[118] = ["T20", "18", "D20"];
		this.checkouttable[117] = ["T20", "17", "D20"];
		this.checkouttable[116] = ["T20", "16", "D20"];
		this.checkouttable[115] = ["T20", "15", "D20"];
		this.checkouttable[114] = ["T20", "14", "D20"];
		this.checkouttable[113] = ["T20", "13", "D20"];
		this.checkouttable[112] = ["T20", "12", "D20"];
		this.checkouttable[111] = ["T20", "19", "D16"];
		this.checkouttable[110] = ["T20", "18", "D16"];
		this.checkouttable[109] = ["T19", "20", "D16"];
		this.checkouttable[108] = ["T20", "16", "D16"];
		this.checkouttable[107] = ["T19", "18", "D16"];
		this.checkouttable[106] = ["T20", "14", "D16"];
		this.checkouttable[105] = ["T20", "13", "D16"];
		this.checkouttable[104] = ["T20", "12", "D16"];
		this.checkouttable[103] = ["T20", "3", "D20"];
		this.checkouttable[102] = ["T20", "10", "D16"];
		this.checkouttable[101] = ["T20", "1", "D20"];
		this.checkouttable[100] = ["T20", "D20"];
		this.checkouttable[99] = ["T19", "10", "D16"];
		this.checkouttable[98] = ["T20", "D19"];
		this.checkouttable[97] = ["T19", "D20"];
		this.checkouttable[96] = ["T20", "D18"];
		this.checkouttable[95] = ["T19", "D19"];
		this.checkouttable[94] = ["T18", "D20"];
		this.checkouttable[93] = ["T19", "D18"];
		this.checkouttable[92] = ["T20", "D16"];
		this.checkouttable[91] = ["T17", "D20"];
		this.checkouttable[90] = ["T20", "D15"];
		this.checkouttable[89] = ["T19", "D16"];
		this.checkouttable[88] = ["T20", "D14"];
		this.checkouttable[87] = ["T17", "D18"];
		this.checkouttable[86] = ["T18", "D16"];
		this.checkouttable[85] = ["T15", "D20"];
		this.checkouttable[84] = ["T20", "D12"];
		this.checkouttable[83] = ["T17", "D16"];
		this.checkouttable[82] = ["T14", "D20"];
		this.checkouttable[81] = ["T19", "D12"];
		this.checkouttable[80] = ["T20", "D10"];
		this.checkouttable[79] = ["T19", "D11"];
		this.checkouttable[78] = ["T18", "D12"];
		this.checkouttable[77] = ["T19", "D10"];
		this.checkouttable[76] = ["T20", "D8"];
		this.checkouttable[75] = ["T17", "D12"];
		this.checkouttable[74] = ["T14", "D16"];
		this.checkouttable[73] = ["T19", "D8"];
		this.checkouttable[72] = ["T16", "D12"];
		this.checkouttable[71] = ["T13", "D16"];
		this.checkouttable[70] = ["T10", "D20"];
		this.checkouttable[69] = ["T15", "D12"];
		this.checkouttable[68] = ["T20", "D4"];
		this.checkouttable[67] = ["T17", "D8"];
		this.checkouttable[66] = ["T10", "D18"];
		this.checkouttable[65] = ["25", "D20"];
		this.checkouttable[64] = ["T16", "D8"];
		this.checkouttable[63] = ["T13", "D12"];
		this.checkouttable[62] = ["T10", "D16"];
		this.checkouttable[61] = ["T7", "D20"];
		this.checkouttable[60] = ["20", "D20"];
		this.checkouttable[59] = ["19", "D20"];
		this.checkouttable[58] = ["18", "D20"];
		this.checkouttable[57] = ["17", "D20"];
		this.checkouttable[56] = ["16", "D20"];
		this.checkouttable[55] = ["15", "D20"];
		this.checkouttable[54] = ["14", "D20"];
		this.checkouttable[53] = ["13", "D20"];
		this.checkouttable[52] = ["20", "D16"];
		this.checkouttable[51] = ["19", "D16"];
		this.checkouttable[50] = ["BULL"];
		this.checkouttable[49] = ["17", "D16"];
		this.checkouttable[48] = ["16", "D16"];
		this.checkouttable[47] = ["15", "D16"];
		this.checkouttable[46] = ["14", "D16"];
		this.checkouttable[45] = ["13", "D16"];
		this.checkouttable[44] = ["12", "D16"];
		this.checkouttable[43] = ["11", "D16"];
		this.checkouttable[42] = ["10", "D16"];
		this.checkouttable[41] = ["9 ", "16"];
		this.checkouttable[40] = ["D20"];
		this.checkouttable[39] = ["7", "D16"];
		this.checkouttable[38] = ["D19"];
		this.checkouttable[37] = ["5", "D16"];
		this.checkouttable[36] = ["D18"];
		this.checkouttable[35] = ["3", "D16"];
		this.checkouttable[34] = ["D17"];
		this.checkouttable[33] = ["1", "D16"];
		this.checkouttable[32] = ["D16"];
		this.checkouttable[31] = ["15", "D8"];
		this.checkouttable[30] = ["D15"];
		this.checkouttable[29] = ["13", "D8"];
		this.checkouttable[28] = ["D14"];
		this.checkouttable[27] = ["11", "D8"];
		this.checkouttable[26] = ["D13"];
		this.checkouttable[25] = ["9", "D8"];
		this.checkouttable[24] = ["D12"];
		this.checkouttable[23] = ["7", "D8"];
		this.checkouttable[22] = ["D11"];
		this.checkouttable[21] = ["5", "D8"];
		this.checkouttable[20] = ["D10"];
		this.checkouttable[19] = ["3", "D8"];
		this.checkouttable[18] = ["D9"];
		this.checkouttable[17] = ["1", "D8"];
		this.checkouttable[16] = ["D8"];
		this.checkouttable[15] = ["7", "D4"];
		this.checkouttable[14] = ["D7"];
		this.checkouttable[13] = ["5", "D4"];
		this.checkouttable[12] = ["D6"];
		this.checkouttable[11] = ["3", "D4"];
		this.checkouttable[10] = ["D5"];
		this.checkouttable[9] = ["1", "D4"];
		this.checkouttable[8] = ["D4"];
		this.checkouttable[7] = ["3", "D2"];
		this.checkouttable[6] = ["D3"];
		this.checkouttable[5] = ["1", "D2"];
		this.checkouttable[4] = ["D2"];
		this.checkouttable[3] = ["1", "D1"];
		this.checkouttable[2] = ["D1"];
	}
};
</script>