<template>
<div>
    <div id="container" v-for="(field,idx) in fields" v-bind:key="field">
        <div class="w-1/2 h-56 flex overflow-hidden shadow-lg ml-5 bg-black">
            <span class="rounded-md shadow-sm">
                <div class="px-1 p-4 ml-2">
                    <button type="button" v-on:click="enableOptions(field,idx)" class="inline-flex justify-center w-32 border-b border-white px-2 py-1 p-4 leading-5 font-medium text-white hover:text-white focus:outline-none focus:border-gray-700 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        {{field.selectedAddressType}}
                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div v-if="field.showAddressTypes" class="origin-top absolute mt-1 w-32 rounded-md shadow-lg">

                        <div class="rounded-md bg-gray-900 shadow-xs">
                            <div class="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" class="block px-4 py-1 text-sm leading-5 text-white hover:bg-gray-100 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-white" v-on:click="bindAddress(field,item.name,idx)" v-for="item in adressTypes" v-bind:key="item.id" v-bind:value="item.name">{{item.name}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </span>

            <div class="px-5 p-3 w-50">
                <div class="flex items-center">
                    <input :id="field.searchTextFieldId" v-on:input="triggerAutoFieldChange(field.id,field.searchTextFieldId,field.searchResultBorderId,field.addressNumberBorderId,field.addressNumberTextFieldId)" class="appearance-none font-medium bg-transparent no-border text-sm text-white placeholder-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Address" />

                    <div v-on:click="clearField(idx,field.searchTextFieldId,field.searchResultBorderId)" v-if="field.showCancelButton">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="#000000" />
                                <g fill="#ffffff">
                                    <path d="M86,8.0625c-20.82812,0 -40.44687,8.0625 -55.09375,22.84375c-14.78125,14.64688 -22.84375,34.26563 -22.84375,55.09375c0,20.82813 8.0625,40.44687 22.84375,55.09375c14.78125,14.78125 34.26563,22.84375 55.09375,22.84375c20.82813,0 40.44687,-8.0625 55.09375,-22.84375c14.78125,-14.78125 22.84375,-34.26562 22.84375,-55.09375c0,-20.82812 -8.0625,-40.44687 -22.84375,-55.09375c-14.64688,-14.78125 -34.26562,-22.84375 -55.09375,-22.84375zM86,16.125c18.67813,0 36.14792,7.2552 49.45105,20.42395c13.30312,13.16875 20.42395,30.77292 20.42395,49.45105c0,18.67813 -7.2552,36.14792 -20.42395,49.45105c-13.30312,13.16875 -30.77292,20.42395 -49.45105,20.42395c-18.67812,0 -36.14792,-7.2552 -49.45105,-20.42395c-13.30312,-13.16875 -20.42395,-30.77292 -20.42395,-49.45105c0,-18.67812 7.2552,-36.14792 20.42395,-49.45105c13.16875,-13.30312 30.77292,-20.42395 49.45105,-20.42395zM67.94336,63.82813c-1.02461,0 -2.03242,0.40365 -2.77148,1.2099c-1.6125,1.6125 -1.6125,4.16457 0,5.6427l15.18542,15.31928l-15.31927,15.18542c-1.6125,1.6125 -1.6125,4.16458 0,5.6427c0.80625,0.80625 1.88072,1.2099 2.82135,1.2099c0.94062,0 2.0151,-0.40365 2.82135,-1.2099l15.31928,-15.18542l15.18542,15.18542c0.80625,0.80625 1.88073,1.2099 2.82135,1.2099c0.94062,0 2.0151,-0.40365 2.82135,-1.2099c1.6125,-1.6125 1.6125,-4.16458 0,-5.6427l-15.18542,-15.18542l15.18542,-15.18542c1.6125,-1.6125 1.61197,-4.16405 0.13385,-5.77655c-1.6125,-1.6125 -4.16457,-1.6125 -5.6427,0l-15.31928,15.31927l-15.18542,-15.31927c-0.80625,-0.80625 -1.84661,-1.2099 -2.87122,-1.2099z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

                <div v-if="field.searchResult">
                    <h1 :id="field.searchResultBorderId" class="text-white text-sm font-medium hover:text-white focus:bg-gray-100 focus:text-white" style="line-height: 1.7;color:white">
                        ADDRESS

                    </h1>
                </div>
                <div v-else>
                    <h1 :id="field.searchResultBorderId" class="text-white text-sm font-medium hover:text-white focus:bg-gray-100 focus:text-white" style="line-height: 1.7;" :style="{color:field.color}">
                        ADDRESS

                    </h1>
                </div>

            </div>
            <div class="mt-6 py-3" v-if="field.showPlusButton" v-on:click="addField(field.id)">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="11" height="11" viewBox="0 0 172 172" style=" fill:#000000;">
                    <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="#000000" fill-rule="nonzero" />
                        <g fill="#ffffff" fill-rule="evenodd">
                            <path d="M78.83333,14.33333v64.5h-64.5v14.33333h64.5v64.5h14.33333v-64.5h64.5v-14.33333h-64.5v-64.5z" />
                        </g>
                    </g>
                </svg>
            </div>

            <div class="px-5 p-3 w-32 " v-if="field.showAddressNumberTextField" @mouseleave="addAddressNumber(idx,field.searchTextFieldId,field.addressNumberTextFieldId)">
                <div class="flex items-center">
                    <input :id="field.addressNumberTextFieldId" :v-model="field.addressNumberResult" class="appearance-none font-medium bg-transparent no-border text-sm text-white placeholder-gray-700 mr-3 leading-tight focus:outline-none" type="text" />

                </div>

                <h1 :id="field.addressNumberBorderId" class="text-white text-sm font-medium hover:text-white focus:bg-gray-100 focus:text-white" style="line-height: 1.8">N</h1>

            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            fields: [{
                "id": 0,
                "showAddressTypes": false,
                "selectedAddressType": "Residential",
                "searchResultBorderId": "searchResultBorder0",
                "color": "#2d3748",
                "searchTextFieldId": "searchTextField0",
                "addressNumberBorderId": "adressNumberBorder0",
                "addressNumberTextFieldId": "addressNumberTextField0",
                "addressNumberResult": "",
                "showCancelButton": false,
                "showPlusButton": false,
                "showAddressNumberTextField": false,
                "autocomplete": ""
            }],
            adressTypes: [{
                    name: "Residential",
                    id: "residential"
                },
                {
                    name: "Domicile",
                    id: "domicile"
                },
                {
                    name: "Legal",
                    id: "legal"
                },
                {
                    name: "Operational",
                    id: "operational"
                }
            ],
            showOptions: false,
            selectedAddressType: "Residential",
            searchResult: "",

            result: ""
        };
    },

    mounted() {
        this.triggerAutoFieldChange(0, "searchTextField0", "searchResultBorder0", "adressNumberBorder0", "addressNumberTextField0")

    },
    methods: {
        enableOptions: function (field, idx) {
            this.fields[idx].showAddressTypes = !field.showAddressTypes;
        },
        bindAddress: function (field, value, idx) {
            this.fields[idx].selectedAddressType = value;
            this.fields[idx].showAddressTypes = !field.showAddressTypes;
        },
        clearField: function (idx, searchTextFieldId, searchResultBorderId) {
            document.getElementById(searchTextFieldId).value = "";
            document.getElementById(searchResultBorderId).style.color = "#2d3748";
            this.fields[idx].showCancelButton = false
            this.fields[idx].showPlusButton = false
        },
        addAddressNumber: function (idx, searchTextFieldId, addressNumberTextFieldId) {
            if (document.getElementById(addressNumberTextFieldId).value != "" && document.getElementById(addressNumberTextFieldId).value != null) {
                document.getElementById(searchTextFieldId).value =
                    document.getElementById(addressNumberTextFieldId).value + "," + document.getElementById(searchTextFieldId).value;
                this.fields[idx].showAddressNumberTextField = false
                this.fields[idx].showCancelButton = true
                this.fields[idx].showPlusButton = true
            }
        },
        addField: function (id) {
            let newField = {
                "id": id + 1,
                "showAddressTypes": false,
                "selectedAddressType": "Residential",
                "searchResultBorderId": "searchResultBorder" + (id + 1),
                "color": "#2d3748",
                "searchResult": "",
                "showCancelButton": false,
                "autocomplete": "",
                "searchTextFieldId": "searchTextField" + (id + 1),
                "addressNumberBorderId": "addressNumberBorderId" + (id + 1),
                "showPlusButton": false,
                "addressNumberTextFieldId": "addressNumberTextField" + (id + 1),
                "addressNumberResult": "",
                "showAddressNumberTextField": false,
            }
            this.fields.push(newField)
            let fieldId = "searchTextField" + (id + 1)
        },

        triggerAutoFieldChange: function (idx, fieldId, searchResultBorderId, addressNumberBorderId, addressNumberTextFieldId) {
            if (document.getElementById(fieldId).value != "") {
                this.fields[idx].showCancelButton = true
                this.fields[idx].showAddressNumberTextField = true
                document.getElementById(searchResultBorderId).style.color = "white";
                this.setBorderColor(addressNumberBorderId)

            } else {
                this.fields[idx].showCancelButton = false
                this.fields[idx].showAddressNumberTextField = false
                document.getElementById(searchResultBorderId).style.color = "#d3748";
                this.setBorderColor(addressNumberBorderId)
            }
            if (this.fields[idx].autocomplete == "" || document.getElementById(fieldId).value != "") {
                var input = document.getElementById(fieldId);
                var options = {
                    types: ["address"]
                };
                this.fields[idx].autocomplete = new google.maps.places.Autocomplete(input, options);
            }

        },
        setBorderColor: function (addressNumberBorderId) {
            if (document.getElementById(addressNumberBorderId)) {
                document.getElementById(addressNumberBorderId).style.color = "#2d3748";
            }
        }
    },

};
</script>

<style scoped>
h1 {
    overflow: hidden;
    text-align: center;
    font-weight: 300;
    color: #2d3748;
}

h1:before,
h1:after {
    content: "";
    display: inline-block;
    width: 50%;
    margin: 0 0.5em 0 -55%;
    vertical-align: middle;
    border-bottom: 1px solid;
}

h1:after {
    margin: 0 -55% 0 0.5em;
}

span {
    display: inline-block;
    vertical-align: middle;
}
</style>
