$(function () {
    $("#tabs").tabs().find(".ui-tabs-nav").sortable({ axis: "x" });
});


/* MY DDL THINGY THINGY
==========================*/

        var defaultArray = ["Select a Locality", "Select a State First"];

        var abiaArray = ["Select a Locality", "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Osisioma", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umu Nneochi", "Umuahia North", "Umuahia South"];

        var adamawaArray = ["Select a Locality", "Demsa", "Fufore", "Ganye", "Gayuk", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"];

        var akwaIbomArray = ["Select a Locality", "Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesiko Asutan", "Ika", "Ikono", "Ikot Ekpene", "Ikot-Abasi", "Ikot-Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot-Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offiong-Oruko", "Uyo"];

        var anambraArray = ["Select a Locality", "Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemlili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"];

        var bauchiArray = ["Select a Locality", "Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas-Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"];

        var bayelsaArray = ["Select a Locality", "Brass", "Ekeremor", "Kolokuma-Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"];

        var benueArray = ["Select a Locality", "Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"];

        var bornoArray = ["Select a Locality", "Abadam", "Askira-Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala-Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"];

        var crossRiverArray = ["Select a Locality", "Abi", "Akamkpa", "Akpabuyo", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"];

        var deltaArray = ["Select a Locality", "Aniocha North", "Aniocha South", "Asaba", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani People", "Uvwie", "Warri", "Warri North", "Warri South", "Warri South West"];

        var ebonyiArray = ["Select a Locality", "Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi People", "Ohaozara", "Ohakwu", "Onicha"];

        var edoArray = ["Select a Locality", "Akoko Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"];

        var ekitiArray = ["Select a Locality", "Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido-Osi", "Ijero", "Ikere-Ekiti", "Ikole", "Ilejemeje", "Irepodun-Ifelodun", "Ise-Orun", "Moba", "Oye"];

        var enuguArray = ["Select a Locality", "Aninri", "Awgu", "Edem", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"];

        var gombeArray = ["Select a Locality", "Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu-Deba"];

        var imoArray = ["Select a Locality", "Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte-Mbase", "Ideato North", "Ideato South", "Ihitte-Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji-Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West", "Umuaka"];

        var jigawaArray = ["Select a Locality", "Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadeija", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"];

        var kadunaArray = ["Select a Locality", "Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"];

        var kanoArray = ["Select a Locality", "Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minijibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"];

        var katsinaArray = ["Select a Locality", "Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dan Musa", "Dandume", "Danja", "Daura", "Dutsi", "Dutsin-Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"];

        var kebbiArray = ["Select a Locality", "Aleiro", "Arewa Dandi", "Argungu", "Argie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko-Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu-Danko", "Yauri", "Zuru"];

        var kogiArray = ["Select a Locality", "Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba-Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"];

        var kwaraArray = ["Select a Locality", "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"];

        var lagosArray = ["Select a Locality", "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Eti-Osa East", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Ojuwoye", "Oshodi-Isolo", "Somolu", "Surulere"];

        var nasarawaArray = ["Select a Locality", "Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa Egon", "Nasarawa", "Obi", "Toto", "Wamba"];

        var nigerArray = ["Select a Locality", "Agaie", "Agwara", "Bida", "Borgu", "Borgu LGA", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Munya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"];

        var ogunArray = ["Select a Locality", "Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Iperu Remo", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Sagamu", "Yewa North", "Yewa South"];

        var ondoArray = ["Select a Locality", "Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"];

        var osunArray = ["Select a Locality", "Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"];

        var oyoArray = ["Select a Locality", "Afijio", "Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorusogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"];

        var plateauArray = ["Select a Locality", "Barki Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"];

        var riversArray = ["Select a Locality", "Abua-Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emohua", "Etche", "Gokana", "Ikwerre", "Khana", "Obio-Akpor", "Ogba-Egbema-Ndoni", "Ogu-Bolo", "Okrika", "Omuma", "Opobo-Nkoro", "Oyigbo", "Port-Harcourt", "Tai"];

        var sokotoArray = ["Select a Locality", "Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"];

        var tarabaArray = ["Select a Locality", "Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"];

        var yobeArray = ["Select a Locality", "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"];

        var zamfaraArray = ["Select a Locality", "Anka", "Bakura", "Birnin Magaji-Kiyaw", "Bukkuyum", "Bungudu", "Chafe", "Gummi", "Gusau", "Kaura", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Zurmi"];

        var fctArray = ["Select a Locality", "Abaji", "Abuja", "Bwari", "Kuje", "Kwali"];

//trying to append or replace content of the area ddl
function getArea() {
    var stateddl = $('#ddlState option:selected').html();
    var areaddl = $('#ddlArea');
    
    switch (stateddl) {
        case "Abia":
            areaddl.empty();
            for (i = 0; i < abiaArray.length; i++) {
                areaddl.append("<option value='" + abiaArray[i] + "'>" + abiaArray[i] + "</option>");
            }
            break;
        case "Adamawa":
            areaddl.empty();
            for (i = 0; i < adamawaArray.length; i++) {
                areaddl.append("<option value='" + adamawaArray[i] + "'>" + adamawaArray[i] + "</option>");
            }
            break;
        case "Akwa Ibom":
            areaddl.empty();
            for (i = 0; i < akwaIbomArray.length; i++) {
                areaddl.append("<option value='" + akwaIbomArray[i] + "'>" + akwaIbomArray[i] + "</option>");
            }
            break;
        case "Anambra":
            areaddl.empty();
            for (i = 0; i < anambraArray.length; i++) {
                areaddl.append("<option value='" + anambraArray[i] + "'>" + anambraArray[i] + "</option>");
            }
            break;
        case "Bauchi":
            areaddl.empty();
            for (i = 0; i < bauchiArray.length; i++) {
                areaddl.append("<option value='" + bauchiArray[i] + "'>" + bauchiArray[i] + "</option>");
            }
            break;
        case "Bayelsa":
            areaddl.empty();
            for (i = 0; i < bayelsaArray.length; i++) {
                areaddl.append("<option value='" + bayelsaArray[i] + "'>" + bayelsaArray[i] + "</option>");
            }
            break;
        case "Benue":
            areaddl.empty();
            for (i = 0; i < benueArray.length; i++) {
                areaddl.append("<option value='" + benueArray[i] + "'>" + benueArray[i] + "</option>");
            }
            break;
        case "Borno":
            areaddl.empty();
            for (i = 0; i < bornoArray.length; i++) {
                areaddl.append("<option value='" + bornoArray[i] + "'>" + bornoArray[i] + "</option>");
            }
            break;
        case "Cross River":
            areaddl.empty();
            for (i = 0; i < crossRiverArray.length; i++) {
                areaddl.append("<option value='" + crossRiverArray[i] + "'>" + crossRiverArray[i] + "</option>");
            }
            break;
        case "Delta":
            areaddl.empty();
            for (i = 0; i < deltaArray.length; i++) {
                areaddl.append("<option value='" + deltaArray[i] + "'>" + deltaArray[i] + "</option>");
            }
            break;
        case "Ebonyi":
            areaddl.empty();
            for (i = 0; i < ebonyiArray.length; i++) {
                areaddl.append("<option value='" + ebonyiArray[i] + "'>" + ebonyiArray[i] + "</option>");
            }
            break;
        case "Edo":
            areaddl.empty();
            for (i = 0; i < edoArray.length; i++) {
                areaddl.append("<option value='" + edoArray[i] + "'>" + edoArray[i] + "</option>");
            }
            break;
        case "Ekiti":
            areaddl.empty();
            for (i = 0; i < ekitiArray.length; i++) {
                areaddl.append("<option value='" + ekitiArray[i] + "'>" + ekitiArray[i] + "</option>");
            }
            break;
        case "Enugu":
            areaddl.empty();
            for (i = 0; i < enuguArray.length; i++) {
                areaddl.append("<option value='" + enuguArray[i] + "'>" + enuguArray[i] + "</option>");
            }
            break;
        case "Gombe":
            areaddl.empty();
            for (i = 0; i < gombeArray.length; i++) {
                areaddl.append("<option value='" + gombeArray[i] + "'>" + gombeArray[i] + "</option>");
            }
            break;
        case "Imo":
            areaddl.empty();
            for (i = 0; i < imoArray.length; i++) {
                areaddl.append("<option value='" + imoArray[i] + "'>" + imoArray[i] + "</option>");
            }
            break;
        case "Jigawa":
            areaddl.empty();
            for (i = 0; i < jigawaArray.length; i++) {
                areaddl.append("<option value='" + jigawaArray[i] + "'>" + jigawaArray[i] + "</option>");
            }
            break;
        case "Kaduna":
            areaddl.empty();
            for (i = 0; i < kadunaArray.length; i++) {
                areaddl.append("<option value='" + kadunaArray[i] + "'>" + kadunaArray[i] + "</option>");
            }
            break;
        case "Kano":
            areaddl.empty();
            for (i = 0; i < kanoArray.length; i++) {
                areaddl.append("<option value='" + kanoArray[i] + "'>" + kanoArray[i] + "</option>");
            }
            break;
        case "Katsina":
            areaddl.empty();
            for (i = 0; i < katsinaArray.length; i++) {
                areaddl.append("<option value='" + katsinaArray[i] + "'>" + katsinaArray[i] + "</option>");
            }
            break;
        case "Kebbi":
            areaddl.empty();
            for (i = 0; i < kebbiArray.length; i++) {
                areaddl.append("<option value='" + kebbiArray[i] + "'>" + kebbiArray[i] + "</option>");
            }
            break;
        case "Kogi":
            areaddl.empty();
            for (i = 0; i < kogiArray.length; i++) {
                areaddl.append("<option value='" + kogiArray[i] + "'>" + kogiArray[i] + "</option>");
            }
            break;
        case "Kwara":
            areaddl.empty();
            for (i = 0; i < kwaraArray.length; i++) {
                areaddl.append("<option value='" + kwaraArray[i] + "'>" + kwaraArray[i] + "</option>");
            }
            break;
        case "Lagos":
            areaddl.empty();
            for (i = 0; i < lagosArray.length; i++) {
                areaddl.append("<option value='" + lagosArray[i] + "'>" + lagosArray[i] + "</option>");
            }
            break;
        case "Nasarawa":
            areaddl.empty();
            for (i = 0; i < nasarawaArray.length; i++) {
                areaddl.append("<option value='" + nasarawaArray[i] + "'>" + nasarawaArray[i] + "</option>");
            }
            break;
        case "Niger":
            areaddl.empty();
            for (i = 0; i < nigerArray.length; i++) {
                areaddl.append("<option value='" + nigerArray[i] + "'>" + nigerArray[i] + "</option>");
            }
            break;
        case "Ogun":
            areaddl.empty();
            for (i = 0; i < ogunArray.length; i++) {
                areaddl.append("<option value='" + ogunArray[i] + "'>" + ogunArray[i] + "</option>");
            }
            break;
        case "Ondo":
            areaddl.empty();
            for (i = 0; i < ondoArray.length; i++) {
                areaddl.append("<option value='" + ondoArray[i] + "'>" + ondoArray[i] + "</option>");
            }
            break;
        case "Osun":
            areaddl.empty();
            for (i = 0; i < osunArray.length; i++) {
                areaddl.append("<option value='" + osunArray[i] + "'>" + osunArray[i] + "</option>");
            }
            break;
        case "Oyo":
            areaddl.empty();
            for (i = 0; i < oyoArray.length; i++) {
                areaddl.append("<option value='" + oyoArray[i] + "'>" + oyoArray[i] + "</option>");
            }
            break;
        case "Plateau":
            areaddl.empty();
            for (i = 0; i < plateauArray.length; i++) {
                areaddl.append("<option value='" + plateauArray[i] + "'>" + plateauArray[i] + "</option>");
            }
            break;
        case "Rivers":
            areaddl.empty();
            for (i = 0; i < riversArray.length; i++) {
                areaddl.append("<option value='" + riversArray[i] + "'>" + riversArray[i] + "</option>");
            }
            break;
        case "Sokoto":
            areaddl.empty();
            for (i = 0; i < sokotoArray.length; i++) {
                areaddl.append("<option value='" + sokotoArray[i] + "'>" + sokotoArray[i] + "</option>");
            }
            break;
        case "Taraba":
            areaddl.empty();
            for (i = 0; i < tarabaArray.length; i++) {
                areaddl.append("<option value='" + tarabaArray[i] + "'>" + tarabaArray[i] + "</option>");
            }
            break;
        case "Yobe":
            areaddl.empty();
            for (i = 0; i < yobeArray.length; i++) {
                areaddl.append("<option value='" + yobeArray[i] + "'>" + yobeArray[i] + "</option>");
            }
            break;
        case "Zamfara":
            areaddl.empty();
            for (i = 0; i < zamfaraArray.length; i++) {
                areaddl.append("<option value='" + zamfaraArray[i] + "'>" + zamfaraArray[i] + "</option>");
            }
            break;
        case "FCT":
            areaddl.empty();
            for (i = 0; i < fctArray.length; i++) {
                areaddl.append("<option value='" + fctArray[i] + "'>" + fctArray[i] + "</option>");
            }
            break;
        default:
            areaddl.empty();
            for (i = 0; i < defaultArray.length; i++) {
                areaddl.append("<option value='" + defaultArray[i] + "'>" + defaultArray[i] + "</option>");
            }
    }
};

//trying to redirect
function BtnSearch() {
    var catddl2 = $('#ddlCategory option:selected').html(); 
    var stateddl2 = $('#ddlState option:selected').html();
    var areaddl2 = $('#ddlArea option:selected').html();

    switch (catddl2) {
        case "Jobs":
            window.location.href = "Jobs/" + "Find/" + stateddl2 + "/" + areaddl2;
            break;
        case "Schools":
            window.location.href = "Schools/" + "Find/" + stateddl2 + "/" + areaddl2;
            break;
        case "Tutors":
            window.location.href = "Tutors/" + "Find/" + stateddl2 + "/" + areaddl2;
            break;
        default:
            window.location.href = "Schools/" + "Find/" + stateddl2 + "/" + areaddl2;
            break;
    }
};



//This is the code for the inner page search stuff

//trying to append or replace content of the area ddl
function getInnerArea() {
    var stateddl = $('#ddlInnerState option:selected').html();
    var areaddl = $('#ddlInnerArea');

    switch (stateddl) {
        case "Abia":
            areaddl.empty();
            for (i = 0; i < abiaArray.length; i++) {
                areaddl.append("<option value='" + abiaArray[i] + "'>" + abiaArray[i] + "</option>");
            }
            break;
        case "Adamawa":
            areaddl.empty();
            for (i = 0; i < adamawaArray.length; i++) {
                areaddl.append("<option value='" + adamawaArray[i] + "'>" + adamawaArray[i] + "</option>");
            }
            break;
        case "Akwa Ibom":
            areaddl.empty();
            for (i = 0; i < akwaIbomArray.length; i++) {
                areaddl.append("<option value='" + akwaIbomArray[i] + "'>" + akwaIbomArray[i] + "</option>");
            }
            break;
        case "Anambra":
            areaddl.empty();
            for (i = 0; i < anambraArray.length; i++) {
                areaddl.append("<option value='" + anambraArray[i] + "'>" + anambraArray[i] + "</option>");
            }
            break;
        case "Bauchi":
            areaddl.empty();
            for (i = 0; i < bauchiArray.length; i++) {
                areaddl.append("<option value='" + bauchiArray[i] + "'>" + bauchiArray[i] + "</option>");
            }
            break;
        case "Bayelsa":
            areaddl.empty();
            for (i = 0; i < bayelsaArray.length; i++) {
                areaddl.append("<option value='" + bayelsaArray[i] + "'>" + bayelsaArray[i] + "</option>");
            }
            break;
        case "Benue":
            areaddl.empty();
            for (i = 0; i < benueArray.length; i++) {
                areaddl.append("<option value='" + benueArray[i] + "'>" + benueArray[i] + "</option>");
            }
            break;
        case "Borno":
            areaddl.empty();
            for (i = 0; i < bornoArray.length; i++) {
                areaddl.append("<option value='" + bornoArray[i] + "'>" + bornoArray[i] + "</option>");
            }
            break;
        case "Cross River":
            areaddl.empty();
            for (i = 0; i < crossRiverArray.length; i++) {
                areaddl.append("<option value='" + crossRiverArray[i] + "'>" + crossRiverArray[i] + "</option>");
            }
            break;
        case "Delta":
            areaddl.empty();
            for (i = 0; i < deltaArray.length; i++) {
                areaddl.append("<option value='" + deltaArray[i] + "'>" + deltaArray[i] + "</option>");
            }
            break;
        case "Ebonyi":
            areaddl.empty();
            for (i = 0; i < ebonyiArray.length; i++) {
                areaddl.append("<option value='" + ebonyiArray[i] + "'>" + ebonyiArray[i] + "</option>");
            }
            break;
        case "Edo":
            areaddl.empty();
            for (i = 0; i < edoArray.length; i++) {
                areaddl.append("<option value='" + edoArray[i] + "'>" + edoArray[i] + "</option>");
            }
            break;
        case "Ekiti":
            areaddl.empty();
            for (i = 0; i < ekitiArray.length; i++) {
                areaddl.append("<option value='" + ekitiArray[i] + "'>" + ekitiArray[i] + "</option>");
            }
            break;
        case "Enugu":
            areaddl.empty();
            for (i = 0; i < enuguArray.length; i++) {
                areaddl.append("<option value='" + enuguArray[i] + "'>" + enuguArray[i] + "</option>");
            }
            break;
        case "Gombe":
            areaddl.empty();
            for (i = 0; i < gombeArray.length; i++) {
                areaddl.append("<option value='" + gombeArray[i] + "'>" + gombeArray[i] + "</option>");
            }
            break;
        case "Imo":
            areaddl.empty();
            for (i = 0; i < imoArray.length; i++) {
                areaddl.append("<option value='" + imoArray[i] + "'>" + imoArray[i] + "</option>");
            }
            break;
        case "Jigawa":
            areaddl.empty();
            for (i = 0; i < jigawaArray.length; i++) {
                areaddl.append("<option value='" + jigawaArray[i] + "'>" + jigawaArray[i] + "</option>");
            }
            break;
        case "Kaduna":
            areaddl.empty();
            for (i = 0; i < kadunaArray.length; i++) {
                areaddl.append("<option value='" + kadunaArray[i] + "'>" + kadunaArray[i] + "</option>");
            }
            break;
        case "Kano":
            areaddl.empty();
            for (i = 0; i < kanoArray.length; i++) {
                areaddl.append("<option value='" + kanoArray[i] + "'>" + kanoArray[i] + "</option>");
            }
            break;
        case "Katsina":
            areaddl.empty();
            for (i = 0; i < katsinaArray.length; i++) {
                areaddl.append("<option value='" + katsinaArray[i] + "'>" + katsinaArray[i] + "</option>");
            }
            break;
        case "Kebbi":
            areaddl.empty();
            for (i = 0; i < kebbiArray.length; i++) {
                areaddl.append("<option value='" + kebbiArray[i] + "'>" + kebbiArray[i] + "</option>");
            }
            break;
        case "Kogi":
            areaddl.empty();
            for (i = 0; i < kogiArray.length; i++) {
                areaddl.append("<option value='" + kogiArray[i] + "'>" + kogiArray[i] + "</option>");
            }
            break;
        case "Kwara":
            areaddl.empty();
            for (i = 0; i < kwaraArray.length; i++) {
                areaddl.append("<option value='" + kwaraArray[i] + "'>" + kwaraArray[i] + "</option>");
            }
            break;
        case "Lagos":
            areaddl.empty();
            for (i = 0; i < lagosArray.length; i++) {
                areaddl.append("<option value='" + lagosArray[i] + "'>" + lagosArray[i] + "</option>");
            }
            break;
        case "Nasarawa":
            areaddl.empty();
            for (i = 0; i < nasarawaArray.length; i++) {
                areaddl.append("<option value='" + nasarawaArray[i] + "'>" + nasarawaArray[i] + "</option>");
            }
            break;
        case "Niger":
            areaddl.empty();
            for (i = 0; i < nigerArray.length; i++) {
                areaddl.append("<option value='" + nigerArray[i] + "'>" + nigerArray[i] + "</option>");
            }
            break;
        case "Ogun":
            areaddl.empty();
            for (i = 0; i < ogunArray.length; i++) {
                areaddl.append("<option value='" + ogunArray[i] + "'>" + ogunArray[i] + "</option>");
            }
            break;
        case "Ondo":
            areaddl.empty();
            for (i = 0; i < ondoArray.length; i++) {
                areaddl.append("<option value='" + ondoArray[i] + "'>" + ondoArray[i] + "</option>");
            }
            break;
        case "Osun":
            areaddl.empty();
            for (i = 0; i < osunArray.length; i++) {
                areaddl.append("<option value='" + osunArray[i] + "'>" + osunArray[i] + "</option>");
            }
            break;
        case "Oyo":
            areaddl.empty();
            for (i = 0; i < oyoArray.length; i++) {
                areaddl.append("<option value='" + oyoArray[i] + "'>" + oyoArray[i] + "</option>");
            }
            break;
        case "Plateau":
            areaddl.empty();
            for (i = 0; i < plateauArray.length; i++) {
                areaddl.append("<option value='" + plateauArray[i] + "'>" + plateauArray[i] + "</option>");
            }
            break;
        case "Rivers":
            areaddl.empty();
            for (i = 0; i < riversArray.length; i++) {
                areaddl.append("<option value='" + riversArray[i] + "'>" + riversArray[i] + "</option>");
            }
            break;
        case "Sokoto":
            areaddl.empty();
            for (i = 0; i < sokotoArray.length; i++) {
                areaddl.append("<option value='" + sokotoArray[i] + "'>" + sokotoArray[i] + "</option>");
            }
            break;
        case "Taraba":
            areaddl.empty();
            for (i = 0; i < tarabaArray.length; i++) {
                areaddl.append("<option value='" + tarabaArray[i] + "'>" + tarabaArray[i] + "</option>");
            }
            break;
        case "Yobe":
            areaddl.empty();
            for (i = 0; i < yobeArray.length; i++) {
                areaddl.append("<option value='" + yobeArray[i] + "'>" + yobeArray[i] + "</option>");
            }
            break;
        case "Zamfara":
            areaddl.empty();
            for (i = 0; i < zamfaraArray.length; i++) {
                areaddl.append("<option value='" + zamfaraArray[i] + "'>" + zamfaraArray[i] + "</option>");
            }
            break;
        case "FCT":
            areaddl.empty();
            for (i = 0; i < fctArray.length; i++) {
                areaddl.append("<option value='" + fctArray[i] + "'>" + fctArray[i] + "</option>");
            }
            break;
        default:
            areaddl.empty();
            for (i = 0; i < defaultArray.length; i++) {
                areaddl.append("<option value='" + defaultArray[i] + "'>" + defaultArray[i] + "</option>");
            }
    }
};


//trying to redirect in the Inner pages
function BtnInnerSearch() {
    var stateddl2 = $('#ddlInnerState option:selected').html();
    var areaddl2 = $('#ddlInnerArea option:selected').html();


    if (window.location.href.endsWith = "/" ) {
        window.location.href = window.location.href + stateddl2 + "/" + "Area=" + areaddl2;
    }
    else {
        window.location.href = window.location.href + "/" + stateddl2 + "/" + "Area=" + areaddl2;
    }
};