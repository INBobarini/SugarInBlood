import { c as create_ssr_component, d as each, f as add_attribute, v as validate_component, e as escape } from './ssr-PqYfa7Lv.js';

const FilterByInitial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rows } = $$props;
  let { filteredRows } = $$props;
  let { initial } = $$props;
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.filteredRows === void 0 && $$bindings.filteredRows && filteredRows !== void 0)
    $$bindings.filteredRows(filteredRows);
  if ($$props.initial === void 0 && $$bindings.initial && initial !== void 0)
    $$bindings.initial(initial);
  filteredRows = rows.filter((row) => row.name[0] === initial);
  return ``;
});
const FilterByQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rows } = $$props;
  let { filteredRows } = $$props;
  let { stringFragment } = $$props;
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.filteredRows === void 0 && $$bindings.filteredRows && filteredRows !== void 0)
    $$bindings.filteredRows(filteredRows);
  if ($$props.stringFragment === void 0 && $$bindings.stringFragment && stringFragment !== void 0)
    $$bindings.stringFragment(stringFragment);
  filteredRows = rows.filter((row) => row.name.toLowerCase().includes(stringFragment.toLowerCase()));
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let foods = [
    {
      "photo": "https://glycemic-index.net/images/ahwW0uM2TL_small.webp",
      "name": "Acerola, Barbados Cherry (fresh)",
      "GI": "20",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Yzd4f48rU6_small.webp",
      "name": "Acorns",
      "GI": "25",
      "GL": "10.3"
    },
    {
      "photo": "https://glycemic-index.net/images/3CjoGLpDIo_small.webp",
      "name": "Agave (syrup)",
      "GI": "15",
      "GL": "11.4"
    },
    {
      "photo": "https://glycemic-index.net/images/OCWai9RgtR_small.webp",
      "name": "Almond",
      "GI": "15",
      "GL": "1.9"
    },
    {
      "photo": "https://glycemic-index.net/images/ywJvDrsmJ8_small.webp",
      "name": "Almond milk",
      "GI": "30",
      "GL": "3.9"
    },
    {
      "photo": "https://glycemic-index.net/images/AOA1AylMq8_small.webp",
      "name": "Almond oil",
      "GI": "25",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/LzvegOXf0K_small.webp",
      "name": "Almond paste (sugar free)",
      "GI": "35",
      "GL": "15.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Q3vMG1G5AY_small.webp",
      "name": "Amaranth seeds (unprepared)",
      "GI": "35",
      "GL": "19.9"
    },
    {
      "photo": "https://glycemic-index.net/images/Ijd1kHiuj4_small.webp",
      "name": "Apple Juice (unsweetened)",
      "GI": "40",
      "GL": "4.9"
    },
    {
      "photo": "https://glycemic-index.net/images/BFIlOPnZz4_small.webp",
      "name": "Apple cider (brut)",
      "GI": "40",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/cCXy8qeuwb_small.webp",
      "name": "Apple juice",
      "GI": "41",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/ogjwI69crE_small.webp",
      "name": "Apple juice (sugar free)",
      "GI": "50",
      "GL": "5.7"
    },
    {
      "photo": "https://glycemic-index.net/images/4dG70P8zfH_small.webp",
      "name": "Applesauce (unsweetened)",
      "GI": "35",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/fRjqU7PTwF_small.webp",
      "name": "Apricot",
      "GI": "34",
      "GL": "3.8"
    },
    {
      "photo": "https://glycemic-index.net/images/1d4bn58WAS_small.webp",
      "name": "Artichoke",
      "GI": "20",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/aLKUM0nMUM_small.webp",
      "name": "Asparagus",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/8peopoG2xe_small.webp",
      "name": "Avocado",
      "GI": "10",
      "GL": "0.9"
    },
    {
      "photo": "https://glycemic-index.net/images/iNGuJRk9Dz_small.webp",
      "name": "Azuki Beans",
      "GI": "35",
      "GL": "22.0"
    },
    {
      "photo": "https://glycemic-index.net/images/2IvNNiERsz_small.webp",
      "name": "Balsamic vinegar",
      "GI": "5",
      "GL": "2.8"
    },
    {
      "photo": "https://glycemic-index.net/images/9Z0EIjkt2b_small.webp",
      "name": "Bamboo sprouts",
      "GI": "20",
      "GL": "1.0"
    },
    {
      "photo": "https://glycemic-index.net/images/yDbX2xGsd8_small.webp",
      "name": "Banana",
      "GI": "48",
      "GL": "10.1"
    },
    {
      "photo": "https://glycemic-index.net/images/GFjQzLnAXd_small.webp",
      "name": "Banana pie",
      "GI": "47",
      "GL": "17.1"
    },
    {
      "photo": "https://glycemic-index.net/images/OHYOEJA4T3_small.webp",
      "name": "Bananas (Dried)",
      "GI": "48",
      "GL": "42.4"
    },
    {
      "photo": "https://glycemic-index.net/images/97NoJQlzNb_small.webp",
      "name": "Barley flour",
      "GI": "30",
      "GL": "16.8"
    },
    {
      "photo": "https://glycemic-index.net/images/o29czTTbZ5_small.webp",
      "name": "Barley groats",
      "GI": "25",
      "GL": "15.8"
    },
    {
      "photo": "https://glycemic-index.net/images/2WVqoUvNGi_small.webp",
      "name": "Basil",
      "GI": "5",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/vTHpg7HtmV_small.webp",
      "name": "Basmati Rice",
      "GI": "50",
      "GL": "37.5"
    },
    {
      "photo": "https://glycemic-index.net/images/3qGP0gXQWj_small.webp",
      "name": "Beans, fava (raw)",
      "GI": "40",
      "GL": "7.2"
    },
    {
      "photo": "https://glycemic-index.net/images/lHIJawTftL_small.webp",
      "name": "Beef (steak, etc,)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/HTGRpwuPAT_small.webp",
      "name": "Beef brains",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/FSvdK8KYhi_small.webp",
      "name": "Beetroot",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/9z70lpgdHd_small.webp",
      "name": "Beetroot (fresh)",
      "GI": "30",
      "GL": "2.6"
    },
    {
      "photo": "https://glycemic-index.net/images/coYa36rEN9_small.webp",
      "name": "Black currant (fresh berry)",
      "GI": "15",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/gw0lY0Y3hx_small.webp",
      "name": "Black olives",
      "GI": "15",
      "GL": "4.8"
    },
    {
      "photo": "https://glycemic-index.net/images/uFnPRneSNu_small.webp",
      "name": "Blackberry (fresh berry)",
      "GI": "25",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/Ub9RWxuI2j_small.webp",
      "name": "Blueberries",
      "GI": "53",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/4Wfxb8Baom_small.webp",
      "name": "Blueberry",
      "GI": "25",
      "GL": "2.0"
    },
    {
      "photo": "https://glycemic-index.net/images/mga9g33N84_small.webp",
      "name": "Boiled beef tongue",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/I34w0gvAat_small.webp",
      "name": "Boiled chicken breast",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/msynRArbnh_small.webp",
      "name": "Boiled lamb",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/20C3k0VHNM_small.webp",
      "name": "Boiled lean beef",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Wso4P4c6aK_small.webp",
      "name": "Boiled veal",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/mn2tuUjdju_small.webp",
      "name": "Braised Cauliflower",
      "GI": "15",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/TJEUOQfyyD_small.webp",
      "name": "Bran (wheat, oat)",
      "GI": "15",
      "GL": "6.8"
    },
    {
      "photo": "https://glycemic-index.net/images/ZSAs6KPWMg_small.webp",
      "name": "Bread (oatmeal)",
      "GI": "47",
      "GL": "19.2"
    },
    {
      "photo": "https://glycemic-index.net/images/UWWlVUhauQ_small.webp",
      "name": "Brewer's yeast",
      "GI": "35",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/fMDfbP6BQP_small.webp",
      "name": "Broccoli",
      "GI": "15",
      "GL": "0.5"
    },
    {
      "photo": "https://glycemic-index.net/images/qidwzyYaKm_small.webp",
      "name": "Broccoli (cooked)",
      "GI": "45",
      "GL": "3.1"
    },
    {
      "photo": "https://glycemic-index.net/images/bJuS6MzOHV_small.webp",
      "name": "Brown rice",
      "GI": "50",
      "GL": "36.5"
    },
    {
      "photo": "https://glycemic-index.net/images/4zgqU2MdbX_small.webp",
      "name": "Brussels sprouts",
      "GI": "15",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/7pNHzOWyJt_small.webp",
      "name": "Brussels sprouts (fresh)",
      "GI": "15",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/asgQJCHvub_small.webp",
      "name": "Buckwheat",
      "GI": "50",
      "GL": "22.0"
    },
    {
      "photo": "https://glycemic-index.net/images/qinE6yDVOw_small.webp",
      "name": "Buckwheat Pasta",
      "GI": "40",
      "GL": "28.4"
    },
    {
      "photo": "https://glycemic-index.net/images/8zyVhyjhKg_small.webp",
      "name": "Buckwheat bread",
      "GI": "50",
      "GL": "22.9"
    },
    {
      "photo": "https://glycemic-index.net/images/lxfnzM12V1_small.webp",
      "name": "Buckwheat flour",
      "GI": "40",
      "GL": "28.2"
    },
    {
      "photo": "https://glycemic-index.net/images/z5MVnDf3oY_small.webp",
      "name": "Buckwheat pancakes",
      "GI": "40",
      "GL": "3.6"
    },
    {
      "photo": "https://glycemic-index.net/images/hHvoLuPaKi_small.webp",
      "name": "Buckwheat porridge",
      "GI": "40",
      "GL": "12.4"
    },
    {
      "photo": "https://glycemic-index.net/images/shRSHi3r4k_small.webp",
      "name": "Bulgur",
      "GI": "55",
      "GL": "41.8"
    },
    {
      "photo": "https://glycemic-index.net/images/H7tLEOzAG6_small.webp",
      "name": "Butter",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/EPkvSYaRdq_small.webp",
      "name": "Butter (high fat)",
      "GI": "14",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/22Qww81qoh_small.webp",
      "name": "Butter cookies (flour, butter, sugar)",
      "GI": "55",
      "GL": "29.1"
    },
    {
      "photo": "https://glycemic-index.net/images/6oFpcMxZOK_small.webp",
      "name": "Canned Grapefruit",
      "GI": "47",
      "GL": "4.3"
    },
    {
      "photo": "https://glycemic-index.net/images/1My2o1LNDj_small.webp",
      "name": "Canned pears",
      "GI": "55",
      "GL": "8.6"
    },
    {
      "photo": "https://glycemic-index.net/images/rfxf2bRoQD_small.webp",
      "name": "Capellini (pasta)",
      "GI": "45",
      "GL": "32.9"
    },
    {
      "photo": "https://glycemic-index.net/images/uZn1Sderew_small.webp",
      "name": "Capers",
      "GI": "20",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/sJIMOFCIts_small.webp",
      "name": "Caraway",
      "GI": "5",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/et3z2A8sk9_small.webp",
      "name": "Carob (carob powder)",
      "GI": "15",
      "GL": "11.7"
    },
    {
      "photo": "https://glycemic-index.net/images/9hGtLEN3gE_small.webp",
      "name": "Carrot (fresh)",
      "GI": "30",
      "GL": "2.0"
    },
    {
      "photo": "https://glycemic-index.net/images/5eqrtNS5W6_small.webp",
      "name": "Carrot Juice (unsweetened)",
      "GI": "40",
      "GL": "2.6"
    },
    {
      "photo": "https://glycemic-index.net/images/a3DIxo8sCL_small.webp",
      "name": "Cashew nuts",
      "GI": "15",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/2v8yfZAKst_small.webp",
      "name": "Cashew nuts",
      "GI": "25",
      "GL": "3.1"
    },
    {
      "photo": "https://glycemic-index.net/images/UGJmAwsX1B_small.webp",
      "name": "Cashew nuts (salted)",
      "GI": "22",
      "GL": "6.6"
    },
    {
      "photo": "https://glycemic-index.net/images/3VGiVVttVV_small.webp",
      "name": "Cassava (bitter, sweet)",
      "GI": "55",
      "GL": "20.9"
    },
    {
      "photo": "https://glycemic-index.net/images/BXiDyNCRUt_small.webp",
      "name": "Cauliflower",
      "GI": "15",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/5GaqMbIM19_small.webp",
      "name": "Cauliflower (fresh)",
      "GI": "15",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/u2IbC3csuZ_small.webp",
      "name": "Celery (fresh)",
      "GI": "15",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/askH6YJR1n_small.webp",
      "name": "Cereals, whole (sugar free)",
      "GI": "45",
      "GL": "27.3"
    },
    {
      "photo": "https://glycemic-index.net/images/E6v98RdRa2_small.webp",
      "name": "Chayote (Mexican cucumber), mashed from it",
      "GI": "50",
      "GL": "2.3"
    },
    {
      "photo": "https://glycemic-index.net/images/C4yjqAoOmL_small.webp",
      "name": "Cheddar",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/udYCjL4S7S_small.webp",
      "name": "Chees Feta",
      "GI": "30",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/7cLfkoPVus_small.webp",
      "name": "Cheese (Mozzarella, pressed cottage cheese, etc,)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/IlKOmNKIGc_small.webp",
      "name": "Cherry (sweet, fresh)",
      "GI": "25",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/8arwEOh4Au_small.webp",
      "name": "Cherry plum",
      "GI": "25",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/nF7TO1Z5o1_small.webp",
      "name": "Chia Seeds (Dried)",
      "GI": "30",
      "GL": "12.6"
    },
    {
      "photo": "https://glycemic-index.net/images/uuThVgsavn_small.webp",
      "name": "Chicken",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/wtk1W7DJKe_small.webp",
      "name": "Chicken (fried)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/fpOsrGKd6m_small.webp",
      "name": "Chickens",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/AskNEu0ekW_small.webp",
      "name": "Chickpea flour",
      "GI": "35",
      "GL": "23.1"
    },
    {
      "photo": "https://glycemic-index.net/images/bgFgOouWA1_small.webp",
      "name": "Chickpeas",
      "GI": "10",
      "GL": "6.1"
    },
    {
      "photo": "https://glycemic-index.net/images/hhUQfh5tMI_small.webp",
      "name": "Chickpeas (canned)",
      "GI": "35",
      "GL": "6.8"
    },
    {
      "photo": "https://glycemic-index.net/images/o3Z7xR6qlL_small.webp",
      "name": "Chicory",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/DW03Fa2ZQm_small.webp",
      "name": "Chicory (drink)",
      "GI": "40",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/tX5XQYK8of_small.webp",
      "name": "Chicory Syrup",
      "GI": "55",
      "GL": "5.2"
    },
    {
      "photo": "https://glycemic-index.net/images/4VneAgHNVe_small.webp",
      "name": "Chilli",
      "GI": "15",
      "GL": "1.4"
    },
    {
      "photo": "https://glycemic-index.net/images/t39CrMsGgS_small.webp",
      "name": "Chilli Green (Fresh)",
      "GI": "15",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/VUagXuBV2g_small.webp",
      "name": "Chinese cabbage",
      "GI": "20",
      "GL": "0.4"
    },
    {
      "photo": "https://glycemic-index.net/images/ZrKrG8Noiu_small.webp",
      "name": "Chinese noodles",
      "GI": "35",
      "GL": "23.4"
    },
    {
      "photo": "https://glycemic-index.net/images/LTFRYZCnFS_small.webp",
      "name": "Chips, corn, salted",
      "GI": "42",
      "GL": "25.6"
    },
    {
      "photo": "https://glycemic-index.net/images/NKiCThyGNc_small.webp",
      "name": "Chocolate",
      "GI": "49",
      "GL": "29.9"
    },
    {
      "photo": "https://glycemic-index.net/images/XmneFBrry6_small.webp",
      "name": "Chocolate (+ 70% cocoa)",
      "GI": "25",
      "GL": "9.0"
    },
    {
      "photo": "https://glycemic-index.net/images/ezy1Nn0KGO_small.webp",
      "name": "Chocolate candy with sweeteners",
      "GI": "23",
      "GL": "8.2"
    },
    {
      "photo": "https://glycemic-index.net/images/0FdQ7bqp5M_small.webp",
      "name": "Chocolate milk",
      "GI": "34",
      "GL": "3.7"
    },
    {
      "photo": "https://glycemic-index.net/images/yhali4p297_small.webp",
      "name": "Cinnamon",
      "GI": "5",
      "GL": "2.9"
    },
    {
      "photo": "https://glycemic-index.net/images/rbrf2L9Mf2_small.webp",
      "name": "Cloudberry (fresh berries)",
      "GI": "25",
      "GL": "1.7"
    },
    {
      "photo": "https://glycemic-index.net/images/EPFFETc4I8_small.webp",
      "name": "Cocoa Powder (Sugar Free)",
      "GI": "20",
      "GL": "4.4"
    },
    {
      "photo": "https://glycemic-index.net/images/Kcyxa6Rz3Y_small.webp",
      "name": "Coconut",
      "GI": "45",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/INdRQJZ70t_small.webp",
      "name": "Coconut Milk",
      "GI": "40",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/yke7maslEy_small.webp",
      "name": "Coconut Sugar",
      "GI": "35",
      "GL": "1.8"
    },
    {
      "photo": "https://glycemic-index.net/images/ex1paVt9fa_small.webp",
      "name": "Coconut milk (raw)",
      "GI": "40",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/LzQyrmCG7E_small.webp",
      "name": "Coffee beans",
      "GI": "50",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/S11NMCJpiu_small.webp",
      "name": "Cooked sausage",
      "GI": "34",
      "GL": "9.5"
    },
    {
      "photo": "https://glycemic-index.net/images/R4TGIv63PA_small.webp",
      "name": "Cookies (whole grain flour, sugar free)",
      "GI": "50",
      "GL": "23.4"
    },
    {
      "photo": "https://glycemic-index.net/images/6yz2XiA8zX_small.webp",
      "name": "Corn syrup",
      "GI": "15",
      "GL": "11.7"
    },
    {
      "photo": "https://glycemic-index.net/images/XtnY8OGuQN_small.webp",
      "name": "Cottage cheese",
      "GI": "30",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/cYOHYZr595_small.webp",
      "name": "Cottage cheese 9% fat",
      "GI": "30",
      "GL": "2.7"
    },
    {
      "photo": "https://glycemic-index.net/images/n3VSoZjnD1_small.webp",
      "name": "Cranberries (fresh)",
      "GI": "45",
      "GL": "5.5"
    },
    {
      "photo": "https://glycemic-index.net/images/8J3UabrTAD_small.webp",
      "name": "Cranberry Juice (unsweetened)",
      "GI": "50",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/GU9OblLc1E_small.webp",
      "name": "Cranberry juice (sugar free)",
      "GI": "50",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/wcPRYljXmn_small.webp",
      "name": "Cream",
      "GI": "30",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/NRCu0W2Vie_small.webp",
      "name": "Cream (10%)",
      "GI": "25",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/5TvXfYEeIF_small.webp",
      "name": "Cream (18%)",
      "GI": "30",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/olZpVHcQgf_small.webp",
      "name": "Cream (30%)",
      "GI": "33",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/4cXd3FsCC5_small.webp",
      "name": "Crustaceans (lobster, crab, spiny lobster)",
      "GI": "5",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/pmv9PBdU3P_small.webp",
      "name": "Cucumber",
      "GI": "15",
      "GL": "0.4"
    },
    {
      "photo": "https://glycemic-index.net/images/k6Xaw5gM9X_small.webp",
      "name": "Curd",
      "GI": "45",
      "GL": "10.3"
    },
    {
      "photo": "https://glycemic-index.net/images/jN3gGbLdow_small.webp",
      "name": "Dark Chocolate (with 85% Cocoa Content)",
      "GI": "20",
      "GL": "9.6"
    },
    {
      "photo": "https://glycemic-index.net/images/iISrbxAGPy_small.webp",
      "name": "Dark chocolate",
      "GI": "23",
      "GL": "13.8"
    },
    {
      "photo": "https://glycemic-index.net/images/EhBFZk8Hlz_small.webp",
      "name": "Dessert Banana (Green)",
      "GI": "45",
      "GL": "15.7"
    },
    {
      "photo": "https://glycemic-index.net/images/TWElHhyyLn_small.webp",
      "name": "Dijon mustard",
      "GI": "35",
      "GL": "3.3"
    },
    {
      "photo": "https://glycemic-index.net/images/16zs9SQ6vK_small.webp",
      "name": "Dill (fresh)",
      "GI": "25",
      "GL": "1.6"
    },
    {
      "photo": "https://glycemic-index.net/images/YclX8r4xmD_small.webp",
      "name": "Dill pickles",
      "GI": "15",
      "GL": "0.2"
    },
    {
      "photo": "https://glycemic-index.net/images/ELjBBC6wWT_small.webp",
      "name": "Dried Peaches",
      "GI": "35",
      "GL": "20.2"
    },
    {
      "photo": "https://glycemic-index.net/images/zxDSMNIdvK_small.webp",
      "name": "Dried apples",
      "GI": "35",
      "GL": "20.6"
    },
    {
      "photo": "https://glycemic-index.net/images/ANl1jITFeH_small.webp",
      "name": "Dried apricots",
      "GI": "35",
      "GL": "21.2"
    },
    {
      "photo": "https://glycemic-index.net/images/Q5NlMNC7lA_small.webp",
      "name": "Dried dates",
      "GI": "40",
      "GL": "27.7"
    },
    {
      "photo": "https://glycemic-index.net/images/UFfWKNL8LX_small.webp",
      "name": "Dry cider",
      "GI": "40",
      "GL": "11.6"
    },
    {
      "photo": "https://glycemic-index.net/images/tJsgZubgWS_small.webp",
      "name": "Duck",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/WPbbnZFwHN_small.webp",
      "name": "Durum wheat vermicelli",
      "GI": "35",
      "GL": "8.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Co6g9cJUJe_small.webp",
      "name": "Egg",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/O6NyLgxze9_small.webp",
      "name": "Eggplant",
      "GI": "20",
      "GL": "1.7"
    },
    {
      "photo": "https://glycemic-index.net/images/tRgdkRxZGX_small.webp",
      "name": "Eggplant Caviar",
      "GI": "40",
      "GL": "5.3"
    },
    {
      "photo": "https://glycemic-index.net/images/3BfFy2I8w4_small.webp",
      "name": "Endive",
      "GI": "15",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/u0pv5dl9HV_small.webp",
      "name": "Energy bar (sugar free)",
      "GI": "50",
      "GL": "23.4"
    },
    {
      "photo": "https://glycemic-index.net/images/8RrmKbrgkU_small.webp",
      "name": "Falafel (from beans, fava)",
      "GI": "40",
      "GL": "8.4"
    },
    {
      "photo": "https://glycemic-index.net/images/aDGqhQgmvn_small.webp",
      "name": "Fat (animal / vegetable)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/ZKDtpmsLT6_small.webp",
      "name": "Fat Pork",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Xm4emNKUan_small.webp",
      "name": "Fat-free yogurt",
      "GI": "33",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/OCIE8nECrF_small.webp",
      "name": "Fennel",
      "GI": "15",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/8dFVgZScWL_small.webp",
      "name": "Fettuccine",
      "GI": "32",
      "GL": "21.6"
    },
    {
      "photo": "https://glycemic-index.net/images/T8IdV1NjmL_small.webp",
      "name": "Fig (dried)",
      "GI": "50",
      "GL": "28.9"
    },
    {
      "photo": "https://glycemic-index.net/images/ghAX6A7H9R_small.webp",
      "name": "Fig (fresh)",
      "GI": "35",
      "GL": "6.7"
    },
    {
      "photo": "https://glycemic-index.net/images/5Ee9CIXd7j_small.webp",
      "name": "Fish (salmon, tuna, etc,)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/W3oADEugRI_small.webp",
      "name": "Flaxseed",
      "GI": "35",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/1jKUr7fk7J_small.webp",
      "name": "Foie gras, goose liver paste (canned)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/py0XoQUeh7_small.webp",
      "name": "Fresh corn",
      "GI": "35",
      "GL": "1.8"
    },
    {
      "photo": "https://glycemic-index.net/images/8Q8Ns6DtTK_small.webp",
      "name": "Fried pork",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/CuJcPbSvDE_small.webp",
      "name": "Fructose",
      "GI": "20",
      "GL": "20.0"
    },
    {
      "photo": "https://glycemic-index.net/images/wz23ObtO4B_small.webp",
      "name": "Fruit bread",
      "GI": "47",
      "GL": "24.4"
    },
    {
      "photo": "https://glycemic-index.net/images/yVMCG2tVNR_small.webp",
      "name": "Fruit yogurt",
      "GI": "52",
      "GL": "1.5"
    },
    {
      "photo": "https://glycemic-index.net/images/ARcldg6P48_small.webp",
      "name": "Garlic",
      "GI": "30",
      "GL": "9.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Eh7uL13iuv_small.webp",
      "name": "Germinated bread",
      "GI": "35",
      "GL": "12.7"
    },
    {
      "photo": "https://glycemic-index.net/images/Aybau6SglC_small.webp",
      "name": "Ginger",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/R9F0rKZWSK_small.webp",
      "name": "Goat milk",
      "GI": "24",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/fafVAim2rr_small.webp",
      "name": "Goji berries",
      "GI": "25",
      "GL": "13.3"
    },
    {
      "photo": "https://glycemic-index.net/images/MMG1jO7NNO_small.webp",
      "name": "Goose",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/YAqLKf66dx_small.webp",
      "name": "Goose fat",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/I0UK8rL0CA_small.webp",
      "name": "Grains (sprouted)",
      "GI": "15",
      "GL": "6.2"
    },
    {
      "photo": "https://glycemic-index.net/images/4dUrBbLets_small.webp",
      "name": "Grape Juice (unsweetened)",
      "GI": "45",
      "GL": "6.9"
    },
    {
      "photo": "https://glycemic-index.net/images/NY6dnPTsvF_small.webp",
      "name": "Grape juice (sugar free)",
      "GI": "55",
      "GL": "9.3"
    },
    {
      "photo": "https://glycemic-index.net/images/vO9sNEvk4b_small.webp",
      "name": "Grapefruit",
      "GI": "22",
      "GL": "2.4"
    },
    {
      "photo": "https://glycemic-index.net/images/dAshbdMr11_small.webp",
      "name": "Grapefruit juice (sugar free)",
      "GI": "45",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/nXPG3NCDo1_small.webp",
      "name": "Grapefruit juice (unsweetened)",
      "GI": "45",
      "GL": "2.7"
    },
    {
      "photo": "https://glycemic-index.net/images/v9Ohu5nPmA_small.webp",
      "name": "Grapes, green (raw)",
      "GI": "45",
      "GL": "5.4"
    },
    {
      "photo": "https://glycemic-index.net/images/v9Ohu5nPmA3Os1_small.webp",
      "name": "Grapes, red (raw)",
      "GI": "45",
      "GL": "8.1"
    },
    {
      "photo": "https://glycemic-index.net/images/kd69Bb6D5J_small.webp",
      "name": "Green apple",
      "GI": "36",
      "GL": "5.0"
    },
    {
      "photo": "https://glycemic-index.net/images/frINSFa2su_small.webp",
      "name": "Green beans",
      "GI": "30",
      "GL": "2.1"
    },
    {
      "photo": "https://glycemic-index.net/images/6g6V6jiRSm_small.webp",
      "name": "Green peas",
      "GI": "15",
      "GL": "1.5"
    },
    {
      "photo": "https://glycemic-index.net/images/bt6I8gyJUh_small.webp",
      "name": "Green peas (canned)",
      "GI": "45",
      "GL": "2.9"
    },
    {
      "photo": "https://glycemic-index.net/images/YjqRtunCMx_small.webp",
      "name": "Grilled pork",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/sTEKBo09B9_small.webp",
      "name": "Ham, sliced, sausages",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/EUhOCK64Jt_small.webp",
      "name": "Hazelnut",
      "GI": "15",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/5HlEsGXbZy_small.webp",
      "name": "Hazelnuts",
      "GI": "25",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/59filN6ayf_small.webp",
      "name": "Hemp seed (peeled)",
      "GI": "4",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/LB6VyJooF6_small.webp",
      "name": "Horseradish",
      "GI": "10",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/07ZjvSLATp_small.webp",
      "name": "Hummus",
      "GI": "25",
      "GL": "3.5"
    },
    {
      "photo": "https://glycemic-index.net/images/AlJGzrxGsh_small.webp",
      "name": "Ice cream (skim, vanilla)",
      "GI": "46",
      "GL": "13.8"
    },
    {
      "photo": "https://glycemic-index.net/images/zkM0leMEMd_small.webp",
      "name": "Ice cream (with fructose)",
      "GI": "35",
      "GL": "9.4"
    },
    {
      "photo": "https://glycemic-index.net/images/4o2BtUXloN_small.webp",
      "name": "Instant noodles",
      "GI": "52",
      "GL": "29.5"
    },
    {
      "photo": "https://glycemic-index.net/images/EA6KVk1rdP_small.webp",
      "name": "Jam",
      "GI": "51",
      "GL": "47.5"
    },
    {
      "photo": "https://glycemic-index.net/images/dSrjzfXdoR_small.webp",
      "name": "Jerusalem artichoke (fresh)",
      "GI": "50",
      "GL": "6.4"
    },
    {
      "photo": "https://glycemic-index.net/images/FinJe0M2Mt_small.webp",
      "name": "Kamut flour",
      "GI": "45",
      "GL": "32.4"
    },
    {
      "photo": "https://glycemic-index.net/images/aeu1pyoZ3V_small.webp",
      "name": "Kamut, Egyptian Wheat (cooked)",
      "GI": "40",
      "GL": "25.4"
    },
    {
      "photo": "https://glycemic-index.net/images/dN6YyIuKrg_small.webp",
      "name": "Kefir (1% fat)",
      "GI": "31",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/p07aOhgLuj_small.webp",
      "name": "Kefir (regular)",
      "GI": "36",
      "GL": "1.4"
    },
    {
      "photo": "https://glycemic-index.net/images/e36KenT2Zb_small.webp",
      "name": "Kefir low-fat",
      "GI": "25",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/xhMk9fovjP_small.webp",
      "name": "Ketchup",
      "GI": "55",
      "GL": "14.0"
    },
    {
      "photo": "https://glycemic-index.net/images/rAvbRqZfHM_small.webp",
      "name": "Kidneys (braised)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/r9UtL7fFlV_small.webp",
      "name": "Kiwi",
      "GI": "50",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/nvHQxqAQh5_small.webp",
      "name": "Kohlrabi",
      "GI": "20",
      "GL": "2.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Ti2hxz0aJk_small.webp",
      "name": "Fat",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/x1IPEqhWxo_small.webp",
      "name": "Lasagna",
      "GI": "47",
      "GL": "7.0"
    },
    {
      "photo": "https://glycemic-index.net/images/e9W8RdAnmc_small.webp",
      "name": "Lean pork",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/yF5FDesw2z_small.webp",
      "name": "Leek",
      "GI": "15",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/4HiWMteTeR_small.webp",
      "name": "Lemon (Fresh Fruit)",
      "GI": "20",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/iYbYuHuo26_small.webp",
      "name": "Lemon juice (unsweetened)",
      "GI": "20",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/XoGJb9Z365_small.webp",
      "name": "Lentil soup",
      "GI": "30",
      "GL": "2.4"
    },
    {
      "photo": "https://glycemic-index.net/images/9XEp5SRP5P_small.webp",
      "name": "Lentil soup puree",
      "GI": "44",
      "GL": "6.6"
    },
    {
      "photo": "https://glycemic-index.net/images/GsPRZnSEVI_small.webp",
      "name": "Lentil sprouts",
      "GI": "25",
      "GL": "5.5"
    },
    {
      "photo": "https://glycemic-index.net/images/AuDYcOqN67_small.webp",
      "name": "Lentils (green)",
      "GI": "25",
      "GL": "12.5"
    },
    {
      "photo": "https://glycemic-index.net/images/hA5psXgx4E_small.webp",
      "name": "Lentils (yellow)",
      "GI": "30",
      "GL": "19.6"
    },
    {
      "photo": "https://glycemic-index.net/images/zK7RYlFq6l_small.webp",
      "name": "Lettuce (fresh)",
      "GI": "15",
      "GL": "0.5"
    },
    {
      "photo": "https://glycemic-index.net/images/yU8Ddxi9e9_small.webp",
      "name": "Linen",
      "GI": "35",
      "GL": "9.7"
    },
    {
      "photo": "https://glycemic-index.net/images/hnSoheV4da_small.webp",
      "name": "Lotus (root powder)",
      "GI": "33",
      "GL": "4.1"
    },
    {
      "photo": "https://glycemic-index.net/images/9zSBsFlTI5_small.webp",
      "name": "Low-fat cottage cheese",
      "GI": "30",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/iD3g2Ugagq_small.webp",
      "name": "Lupine",
      "GI": "15",
      "GL": "6.1"
    },
    {
      "photo": "https://glycemic-index.net/images/v8gwqvOZ83_small.webp",
      "name": "Lychee (fresh fruit)",
      "GI": "50",
      "GL": "7.6"
    },
    {
      "photo": "https://glycemic-index.net/images/JAnXwX02Tj_small.webp",
      "name": "Macaroons, Coconut Flour",
      "GI": "32",
      "GL": "18.1"
    },
    {
      "photo": "https://glycemic-index.net/images/wh35gQB4zd_small.webp",
      "name": "Mandarin",
      "GI": "30",
      "GL": "3.9"
    },
    {
      "photo": "https://glycemic-index.net/images/siKCB3r6Mn_small.webp",
      "name": "Maple syrup",
      "GI": "55",
      "GL": "36.9"
    },
    {
      "photo": "https://glycemic-index.net/images/aKxzP1f1l4_small.webp",
      "name": "Margarine",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/rG5x3tQt9D_small.webp",
      "name": "Marmalade (sugar free)",
      "GI": "30",
      "GL": "22.2"
    },
    {
      "photo": "https://glycemic-index.net/images/7yqx6eo0Mt_small.webp",
      "name": "Mashed Tomato",
      "GI": "35",
      "GL": "3.1"
    },
    {
      "photo": "https://glycemic-index.net/images/bzEVMPuzl6_small.webp",
      "name": "Mayonnaise (homemade)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/3eSdDjOkXX_small.webp",
      "name": "Medlar japanese plum",
      "GI": "55",
      "GL": "5.7"
    },
    {
      "photo": "https://glycemic-index.net/images/IzGKTok2K1_small.webp",
      "name": "Melon pear (pepino)",
      "GI": "40",
      "GL": "8.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Aq4PG5y0BP_small.webp",
      "name": "Milk",
      "GI": "31",
      "GL": "1.6"
    },
    {
      "photo": "https://glycemic-index.net/images/DH95J29Bn2_small.webp",
      "name": "Milk chocolate",
      "GI": "49",
      "GL": "28.9"
    },
    {
      "photo": "https://glycemic-index.net/images/XVpup0JEP8_small.webp",
      "name": "Motley beans, borlotti, roman beans",
      "GI": "35",
      "GL": "12.4"
    },
    {
      "photo": "https://glycemic-index.net/images/fXyc7GNkSE_small.webp",
      "name": "Muesli (sugar free)",
      "GI": "50",
      "GL": "23.6"
    },
    {
      "photo": "https://glycemic-index.net/images/CJuxUSJcx0_small.webp",
      "name": "Muesli Bar, Gluten Free",
      "GI": "50",
      "GL": "37.1"
    },
    {
      "photo": "https://glycemic-index.net/images/JC61jucNub_small.webp",
      "name": "Multi Grain Cookies",
      "GI": "51",
      "GL": "33.2"
    },
    {
      "photo": "https://glycemic-index.net/images/jsX5boYUXg_small.webp",
      "name": "Mung Bean Mung",
      "GI": "25",
      "GL": "15.8"
    },
    {
      "photo": "https://glycemic-index.net/images/5Xnq0YR4LL_small.webp",
      "name": "Mushrooms",
      "GI": "15",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/dU7glVH0OI_small.webp",
      "name": "Mushrooms (cooked)",
      "GI": "36",
      "GL": "1.9"
    },
    {
      "photo": "https://glycemic-index.net/images/3Z2guoUaaT_small.webp",
      "name": "Mustard (with sugar)",
      "GI": "55",
      "GL": "5.9"
    },
    {
      "photo": "https://glycemic-index.net/images/9TdbcFeilp_small.webp",
      "name": "Mutton (Lamb)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Kr72oe7NYh_small.webp",
      "name": "Natural milk",
      "GI": "32",
      "GL": "1.3"
    },
    {
      "photo": "https://glycemic-index.net/images/3VJbiXMPqZ_small.webp",
      "name": "Nectarine (fresh fruit)",
      "GI": "35",
      "GL": "4.1"
    },
    {
      "photo": "https://glycemic-index.net/images/X6lyiSWTNA_small.webp",
      "name": "Nuts (mix with raisins)",
      "GI": "21",
      "GL": "9.8"
    },
    {
      "photo": "https://glycemic-index.net/images/8bxS3HnzAi_small.webp",
      "name": "Oat flour",
      "GI": "25",
      "GL": "3.0"
    },
    {
      "photo": "https://glycemic-index.net/images/yVd2cD06HM_small.webp",
      "name": "Oat milk (raw)",
      "GI": "69",
      "GL": "3.5"
    },
    {
      "photo": "https://glycemic-index.net/images/qb6MFYGIad_small.webp",
      "name": "Oatmeal cookies",
      "GI": "55",
      "GL": "39.5"
    },
    {
      "photo": "https://glycemic-index.net/images/OHjnvj2hLa_small.webp",
      "name": "Olive oil",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/xIop8is254_small.webp",
      "name": "Olives",
      "GI": "15",
      "GL": "0.9"
    },
    {
      "photo": "https://glycemic-index.net/images/vIOhMvy9eB_small.webp",
      "name": "Omelette",
      "GI": "49",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/JYdUyUKExr_small.webp",
      "name": "Onion (fresh)",
      "GI": "15",
      "GL": "1.6"
    },
    {
      "photo": "https://glycemic-index.net/images/7hre17eZtj_small.webp",
      "name": "Orache",
      "GI": "53",
      "GL": "34.0"
    },
    {
      "photo": "https://glycemic-index.net/images/rpaE64Cepa_small.webp",
      "name": "Orange (fresh fruit)",
      "GI": "35",
      "GL": "4.1"
    },
    {
      "photo": "https://glycemic-index.net/images/wX4P5Ns5iP_small.webp",
      "name": "Orange juice",
      "GI": "48",
      "GL": "4.8"
    },
    {
      "photo": "https://glycemic-index.net/images/ETyGQ4KY1f_small.webp",
      "name": "Orange juice (freshly squeezed and sugar free)",
      "GI": "45",
      "GL": "4.8"
    },
    {
      "photo": "https://glycemic-index.net/images/ueoIRW9iCA_small.webp",
      "name": "Oregano",
      "GI": "5",
      "GL": "3.2"
    },
    {
      "photo": "https://glycemic-index.net/images/HtdmCDweEo_small.webp",
      "name": "Palm pulp",
      "GI": "20",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/BcBvqGxyMJ_small.webp",
      "name": "Parsley",
      "GI": "15",
      "GL": "0.9"
    },
    {
      "photo": "https://glycemic-index.net/images/PPn90kZvHW_small.webp",
      "name": "Parsley (cooked)",
      "GI": "52",
      "GL": "3.3"
    },
    {
      "photo": "https://glycemic-index.net/images/kT66RpOnic_small.webp",
      "name": "Passion fruit",
      "GI": "30",
      "GL": "6.9"
    },
    {
      "photo": "https://glycemic-index.net/images/LlgZyBIdx6_small.webp",
      "name": "Passion fruit, granadilla (fresh)",
      "GI": "30",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/zUopTvrRLp_small.webp",
      "name": "Pasta",
      "GI": "50",
      "GL": "15.4"
    },
    {
      "photo": "https://glycemic-index.net/images/eJyUSxvdLq_small.webp",
      "name": "Pasta (from durum wheat)",
      "GI": "50",
      "GL": "11.6"
    },
    {
      "photo": "https://glycemic-index.net/images/HaBL3pZPpC_small.webp",
      "name": "Peach (canned in syrup)",
      "GI": "55",
      "GL": "8.1"
    },
    {
      "photo": "https://glycemic-index.net/images/FVRSYndNy8_small.webp",
      "name": "Peach (fresh fruit)",
      "GI": "35",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/5Bf7uGS5ZU_small.webp",
      "name": "Peanut",
      "GI": "15",
      "GL": "2.4"
    },
    {
      "photo": "https://glycemic-index.net/images/BeyQwLvYFp_small.webp",
      "name": "Peanut Butter (Sugar Free)",
      "GI": "25",
      "GL": "7.0"
    },
    {
      "photo": "https://glycemic-index.net/images/VropOmUwsq_small.webp",
      "name": "Peanut Oil (Sugar Free)",
      "GI": "40",
      "GL": "8.6"
    },
    {
      "photo": "https://glycemic-index.net/images/7ZMJqVeBaK_small.webp",
      "name": "Peanuts (Dry Roasted)",
      "GI": "15",
      "GL": "2.3"
    },
    {
      "photo": "https://glycemic-index.net/images/TGY0LIR1Re_small.webp",
      "name": "Pear (fresh fruit)",
      "GI": "30",
      "GL": "4.7"
    },
    {
      "photo": "https://glycemic-index.net/images/GGH43X4dE9_small.webp",
      "name": "Pear juice",
      "GI": "50",
      "GL": "5.5"
    },
    {
      "photo": "https://glycemic-index.net/images/jNPZAM6f5s_small.webp",
      "name": "Pears (dried)",
      "GI": "43",
      "GL": "26.9"
    },
    {
      "photo": "https://glycemic-index.net/images/jZhGZm8sSr_small.webp",
      "name": "Peas (frozen, boiled)",
      "GI": "51",
      "GL": "4.6"
    },
    {
      "photo": "https://glycemic-index.net/images/UoJB6GDycG_small.webp",
      "name": "Peas (green, fresh)",
      "GI": "35",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/4m8CUwhVPU_small.webp",
      "name": "Peeled peas (fresh)",
      "GI": "25",
      "GL": "15.0"
    },
    {
      "photo": "https://glycemic-index.net/images/To0S9MaQSQ_small.webp",
      "name": "Pepino, melon pear",
      "GI": "40",
      "GL": "8.0"
    },
    {
      "photo": "https://glycemic-index.net/images/VFAuFPjmr5_small.webp",
      "name": "Perlovka",
      "GI": "25",
      "GL": "18.4"
    },
    {
      "photo": "https://glycemic-index.net/images/JqxMhkTLsL_small.webp",
      "name": "Persimmon, persimmon eastern (fresh)",
      "GI": "50",
      "GL": "7.7"
    },
    {
      "photo": "https://glycemic-index.net/images/K14f4FB7GH_small.webp",
      "name": "Pesto (sauce)",
      "GI": "15",
      "GL": "0.9"
    },
    {
      "photo": "https://glycemic-index.net/images/6NC6QFHgdX_small.webp",
      "name": "Physalis",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/SmXzPntdLT_small.webp",
      "name": "Pickled Cucumber",
      "GI": "15",
      "GL": "0.7"
    },
    {
      "photo": "https://glycemic-index.net/images/0rLdgQBEjd_small.webp",
      "name": "Pine nuts",
      "GI": "15",
      "GL": "1.9"
    },
    {
      "photo": "https://glycemic-index.net/images/S3tSr3aP5R_small.webp",
      "name": "Pine nuts",
      "GI": "15",
      "GL": "2.9"
    },
    {
      "photo": "https://glycemic-index.net/images/hnzha4PdAG_small.webp",
      "name": "Pineapple Juice (unsweetened)",
      "GI": "50",
      "GL": "6.8"
    },
    {
      "photo": "https://glycemic-index.net/images/RlpJpCHZ8S_small.webp",
      "name": "Pineapple juice (sugar free)",
      "GI": "50",
      "GL": "6.4"
    },
    {
      "photo": "https://glycemic-index.net/images/Ru1KySjFE5_small.webp",
      "name": "Pistachios",
      "GI": "15",
      "GL": "4.2"
    },
    {
      "photo": "https://glycemic-index.net/images/NOL4NTt5Ht_small.webp",
      "name": "Plain / Spotted Beans (Fresh)",
      "GI": "35",
      "GL": "5.9"
    },
    {
      "photo": "https://glycemic-index.net/images/ucA2AgsKRB_small.webp",
      "name": "Plantano (Raw)",
      "GI": "45",
      "GL": "13.6"
    },
    {
      "photo": "https://glycemic-index.net/images/0whBPqr8Nz_small.webp",
      "name": "Platano (raw)",
      "GI": "45",
      "GL": "14.4"
    },
    {
      "photo": "https://glycemic-index.net/images/azVoBJd4Xb_small.webp",
      "name": "Plums (fresh)",
      "GI": "35",
      "GL": "3.9"
    },
    {
      "photo": "https://glycemic-index.net/images/1V0htLKAiH_small.webp",
      "name": "Pomegranate (fresh)",
      "GI": "35",
      "GL": "6.7"
    },
    {
      "photo": "https://glycemic-index.net/images/9b1MjxmGU2_small.webp",
      "name": "Pomelo",
      "GI": "30",
      "GL": "3.0"
    },
    {
      "photo": "https://glycemic-index.net/images/6YmocU0iWE_small.webp",
      "name": "Pomelo, sheddock (fresh)",
      "GI": "25",
      "GL": "2.0"
    },
    {
      "photo": "https://glycemic-index.net/images/t9LKSY5zLU_small.webp",
      "name": "Popcorn",
      "GI": "55",
      "GL": "40.7"
    },
    {
      "photo": "https://glycemic-index.net/images/R8PbwV4k0C_small.webp",
      "name": "Poppy seed",
      "GI": "35",
      "GL": "9.8"
    },
    {
      "photo": "https://glycemic-index.net/images/HZ25wqTgPA_small.webp",
      "name": "Pork cutlets",
      "GI": "50",
      "GL": "9.8"
    },
    {
      "photo": "https://glycemic-index.net/images/HQboT3bWj4_small.webp",
      "name": "Prickly pear (fresh fruit)",
      "GI": "35",
      "GL": "3.4"
    },
    {
      "photo": "https://glycemic-index.net/images/8JeWvVGEHV_small.webp",
      "name": "Prunes",
      "GI": "40",
      "GL": "25.6"
    },
    {
      "photo": "https://glycemic-index.net/images/9qStdGVQiU_small.webp",
      "name": "Pumpernickel Bread",
      "GI": "45",
      "GL": "21.6"
    },
    {
      "photo": "https://glycemic-index.net/images/aJjN45zUYU_small.webp",
      "name": "Pumpkin bread",
      "GI": "40",
      "GL": "17.0"
    },
    {
      "photo": "https://glycemic-index.net/images/0jKhjJfCZt_small.webp",
      "name": "Quince (canned / jelly without sugar)",
      "GI": "40",
      "GL": "3.8"
    },
    {
      "photo": "https://glycemic-index.net/images/7ZNvLxfXTE_small.webp",
      "name": "Quince (fresh fruit)",
      "GI": "35",
      "GL": "3.4"
    },
    {
      "photo": "https://glycemic-index.net/images/IKy75I7PSL_small.webp",
      "name": "Quinoa (cooked)",
      "GI": "35",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/eGTbT1ZhLy_small.webp",
      "name": "Quinoa (unprepared)",
      "GI": "40",
      "GL": "22.8"
    },
    {
      "photo": "https://glycemic-index.net/images/LHsOCckULt_small.webp",
      "name": "Quinoa flour",
      "GI": "40",
      "GL": "22.9"
    },
    {
      "photo": "https://glycemic-index.net/images/vCSPJ2qFU8_small.webp",
      "name": "Rabbit",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/1GC5QzO7Qq_small.webp",
      "name": "Rabbit (fried)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/mw0hqDb0Vb_small.webp",
      "name": "Radish",
      "GI": "15",
      "GL": "0.5"
    },
    {
      "photo": "https://glycemic-index.net/images/Zimblthphp_small.webp",
      "name": "Raspberries (fresh berries)",
      "GI": "25",
      "GL": "3.0"
    },
    {
      "photo": "https://glycemic-index.net/images/BgIUlPljcG_small.webp",
      "name": "Ratatouille",
      "GI": "20",
      "GL": "1.0"
    },
    {
      "photo": "https://glycemic-index.net/images/tWJhbQuWer_small.webp",
      "name": "Ravioli (from durum wheat)",
      "GI": "40",
      "GL": "11.6"
    },
    {
      "photo": "https://glycemic-index.net/images/ylVEkxRjYr_small.webp",
      "name": "Red beans",
      "GI": "35",
      "GL": "18.4"
    },
    {
      "photo": "https://glycemic-index.net/images/8RSFA6HOhB_small.webp",
      "name": "Red caviar",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/eCkzzWodo6_small.webp",
      "name": "Red currant (fresh berry)",
      "GI": "25",
      "GL": "1.9"
    },
    {
      "photo": "https://glycemic-index.net/images/GOhNvdqaVw_small.webp",
      "name": "Red rice",
      "GI": "55",
      "GL": "38.8"
    },
    {
      "photo": "https://glycemic-index.net/images/M8bsWZH9pU_small.webp",
      "name": "Rhubarb",
      "GI": "15",
      "GL": "0.4"
    },
    {
      "photo": "https://glycemic-index.net/images/BUQhsXwO84_small.webp",
      "name": "Roast beef liver",
      "GI": "50",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/s26xcrXfGj_small.webp",
      "name": "Roast duck",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/jjbeOf9jdn_small.webp",
      "name": "Rye flakes",
      "GI": "45",
      "GL": "37.2"
    },
    {
      "photo": "https://glycemic-index.net/images/GRVoS9UMZ7_small.webp",
      "name": "Rye flour (medium grinding)",
      "GI": "50",
      "GL": "27.9"
    },
    {
      "photo": "https://glycemic-index.net/images/EwIGM5MslH_small.webp",
      "name": 'Salad ("iceberg", leaf, arugula, etc,)',
      "GI": "15",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/qIXr6ZAE3H_small.webp",
      "name": "Salted cucumbers",
      "GI": "15",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/EWsaroROjG_small.webp",
      "name": "Sauerkraut",
      "GI": "15",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/fIPy3LdaCp_small.webp",
      "name": "Sausages",
      "GI": "28",
      "GL": "6.7"
    },
    {
      "photo": "https://glycemic-index.net/images/4CLnVyxdN2_small.webp",
      "name": "Sausages",
      "GI": "30",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/huK1SHET9p_small.webp",
      "name": "Scorzonera (Kozelec)",
      "GI": "30",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/t0tqZiR3iM_small.webp",
      "name": "Sea buckthorn",
      "GI": "30",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/fNKz0UGo0R_small.webp",
      "name": "Seafood (oysters, shrimp, mussels, etc,)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/j6ARF7cPw2_small.webp",
      "name": "Seeds (pumpkin)",
      "GI": "25",
      "GL": "13.5"
    },
    {
      "photo": "https://glycemic-index.net/images/Frgy4vYPKE_small.webp",
      "name": "Sesame",
      "GI": "35",
      "GL": "8.1"
    },
    {
      "photo": "https://glycemic-index.net/images/mxVLQKjE8i_small.webp",
      "name": "Sesame paste, tahini",
      "GI": "40",
      "GL": "4.9"
    },
    {
      "photo": "https://glycemic-index.net/images/FN7K8PxdJM_small.webp",
      "name": "Sesame seed",
      "GI": "35",
      "GL": "4.3"
    },
    {
      "photo": "https://glycemic-index.net/images/JiO03zPMbD_small.webp",
      "name": "Shallot",
      "GI": "15",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/BJfQ50U8j0_small.webp",
      "name": "Sherbet",
      "GI": "50",
      "GL": "27.6"
    },
    {
      "photo": "https://glycemic-index.net/images/dorInXt9PW_small.webp",
      "name": "Shortbread Cookies (Integral Flour, Sugar Free)",
      "GI": "40",
      "GL": "17.2"
    },
    {
      "photo": "https://glycemic-index.net/images/pUxrArCQGL_small.webp",
      "name": "Skim cheese",
      "GI": "30",
      "GL": "0.4"
    },
    {
      "photo": "https://glycemic-index.net/images/gmFq7H2Qq7_small.webp",
      "name": "Skim milk",
      "GI": "27",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/KgtVOnZgXw_small.webp",
      "name": "Skim milk",
      "GI": "31",
      "GL": "1.5"
    },
    {
      "photo": "https://glycemic-index.net/images/9PeKbAXPB4_small.webp",
      "name": "Sorbet (sugar free)",
      "GI": "40",
      "GL": "4.8"
    },
    {
      "photo": "https://glycemic-index.net/images/ox6EW17cl6_small.webp",
      "name": "Sorrel",
      "GI": "15",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/IwvatkONMQ_small.webp",
      "name": "Soup with chicken and mushrooms",
      "GI": "46",
      "GL": "0.7"
    },
    {
      "photo": "https://glycemic-index.net/images/KyGKd7bJKC_small.webp",
      "name": "Sour cream",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/8CUGCiBN2K_small.webp",
      "name": "Sour cream (20%)",
      "GI": "25",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/taGJN8Gdm1_small.webp",
      "name": "Soy sauce",
      "GI": "20",
      "GL": "1.0"
    },
    {
      "photo": "https://glycemic-index.net/images/fpPNe8KJ2d_small.webp",
      "name": "Soy vermicelli",
      "GI": "30",
      "GL": "24.6"
    },
    {
      "photo": "https://glycemic-index.net/images/ly78a4t9tc_small.webp",
      "name": "Soy yogurt (natural)",
      "GI": "20",
      "GL": "1.6"
    },
    {
      "photo": "https://glycemic-index.net/images/autdrBvHJn_small.webp",
      "name": "Soya cream",
      "GI": "20",
      "GL": "12.9"
    },
    {
      "photo": "https://glycemic-index.net/images/oWoZpBIW98_small.webp",
      "name": "Soya flour",
      "GI": "25",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/qYDSP9L9Ih_small.webp",
      "name": "Soya milk",
      "GI": "30",
      "GL": "1.8"
    },
    {
      "photo": "https://glycemic-index.net/images/XieGTQ0hTP_small.webp",
      "name": "Soya milk ice cream",
      "GI": "35",
      "GL": "6.0"
    },
    {
      "photo": "https://glycemic-index.net/images/HUdnn7NyoT_small.webp",
      "name": "Soybean",
      "GI": "15",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/4mpMdGu8bT_small.webp",
      "name": "Soybeans",
      "GI": "15",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/x3bhaxQ32z_small.webp",
      "name": "Spaghetti (well cooked)",
      "GI": "55",
      "GL": "12.8"
    },
    {
      "photo": "https://glycemic-index.net/images/IuYzLarzjB_small.webp",
      "name": "Spaghetti al dente",
      "GI": "45",
      "GL": "21.5"
    },
    {
      "photo": "https://glycemic-index.net/images/d01pqDzbfz_small.webp",
      "name": "Spaghetti bolognese",
      "GI": "52",
      "GL": "9.9"
    },
    {
      "photo": "https://glycemic-index.net/images/Ed6saYe0JG_small.webp",
      "name": "Spelled flour",
      "GI": "45",
      "GL": "30.5"
    },
    {
      "photo": "https://glycemic-index.net/images/radHsUC6ox_small.webp",
      "name": "Spelled wheat",
      "GI": "40",
      "GL": "24.5"
    },
    {
      "photo": "https://glycemic-index.net/images/wmZALpAVw9_small.webp",
      "name": "Spices (cinnamon)",
      "GI": "5",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/89tbaL0LU1_small.webp",
      "name": "Spinach",
      "GI": "15",
      "GL": "0.3"
    },
    {
      "photo": "https://glycemic-index.net/images/RDiUTiNFQH_small.webp",
      "name": "Squash",
      "GI": "15",
      "GL": "0.7"
    },
    {
      "photo": "https://glycemic-index.net/images/hJsBIrRB8x_small.webp",
      "name": "Stevia",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/zPwGSLiB7f_small.webp",
      "name": "Strawberries (fresh berries)",
      "GI": "25",
      "GL": "1.9"
    },
    {
      "photo": "https://glycemic-index.net/images/tBcW0FpBTy_small.webp",
      "name": "Strawberry Jam (Low Sugar)",
      "GI": "51",
      "GL": "31.1"
    },
    {
      "photo": "https://glycemic-index.net/images/kzaieCQPk6_small.webp",
      "name": "String Beans (Fresh)",
      "GI": "30",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/0Wj5C8VoUS_small.webp",
      "name": "Sunflower (seeds)",
      "GI": "35",
      "GL": "7.0"
    },
    {
      "photo": "https://glycemic-index.net/images/soFV3TavEz_small.webp",
      "name": "Surimi (minced fish in crab sticks)",
      "GI": "50",
      "GL": "3.4"
    },
    {
      "photo": "https://glycemic-index.net/images/6H4GzNmHRc_small.webp",
      "name": "Sushi",
      "GI": "55",
      "GL": "11.6"
    },
    {
      "photo": "https://glycemic-index.net/images/bp0R62KfHq_small.webp",
      "name": "Sushi, salmon",
      "GI": "48",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/KRwj8fdVsw_small.webp",
      "name": "Sweet cherry",
      "GI": "25",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/WnIYmOZAjV_small.webp",
      "name": "Sweet corn",
      "GI": "48",
      "GL": "8.9"
    },
    {
      "photo": "https://glycemic-index.net/images/MV35pxW8XP_small.webp",
      "name": "Sweet pepper",
      "GI": "15",
      "GL": "0.8"
    },
    {
      "photo": "https://glycemic-index.net/images/uopzFKnNAh_small.webp",
      "name": "Sweet pepper (red, green), paprika",
      "GI": "15",
      "GL": "1.0"
    },
    {
      "photo": "https://glycemic-index.net/images/hW1I5jROrw_small.webp",
      "name": "Sweet yogurt",
      "GI": "52",
      "GL": "4.7"
    },
    {
      "photo": "https://glycemic-index.net/images/C8CjgNEt75_small.webp",
      "name": "Tagliatelle (well cooked)",
      "GI": "55",
      "GL": "34.8"
    },
    {
      "photo": "https://glycemic-index.net/images/UJlj58QE51_small.webp",
      "name": "Tahin",
      "GI": "40",
      "GL": "8.4"
    },
    {
      "photo": "https://glycemic-index.net/images/oEy3kx48Pv_small.webp",
      "name": "Tangerine (canned)",
      "GI": "47",
      "GL": "4.2"
    },
    {
      "photo": "https://glycemic-index.net/images/utK4OIENj7_small.webp",
      "name": "Tangerines, tangerines, satsuma (fresh)",
      "GI": "30",
      "GL": "3.9"
    },
    {
      "photo": "https://glycemic-index.net/images/gtEHCiwP6N_small.webp",
      "name": "Taro",
      "GI": "48",
      "GL": "12.7"
    },
    {
      "photo": "https://glycemic-index.net/images/wFM5C8JtDg_small.webp",
      "name": "Tempeh",
      "GI": "15",
      "GL": "1.4"
    },
    {
      "photo": "https://glycemic-index.net/images/47GfhbjMs2_small.webp",
      "name": "Tofu cheese",
      "GI": "15",
      "GL": "0.6"
    },
    {
      "photo": "https://glycemic-index.net/images/rrzt9xiR0i_small.webp",
      "name": "Tofu, bean curd",
      "GI": "15",
      "GL": "0.1"
    },
    {
      "photo": "https://glycemic-index.net/images/oNTp5iDJJN_small.webp",
      "name": "Tomato juice",
      "GI": "35",
      "GL": "1.5"
    },
    {
      "photo": "https://glycemic-index.net/images/XGBf8G5Ca5_small.webp",
      "name": "Tomato sauce (natural, sugar free)",
      "GI": "35",
      "GL": "1.3"
    },
    {
      "photo": "https://glycemic-index.net/images/pRbaM1hV6d_small.webp",
      "name": "Tomato soup",
      "GI": "38",
      "GL": "2.7"
    },
    {
      "photo": "https://glycemic-index.net/images/4E4TABVLrL_small.webp",
      "name": "Tomatoes",
      "GI": "30",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/YW5NAuceCx_small.webp",
      "name": "Tomatoes (dried)",
      "GI": "35",
      "GL": "10.2"
    },
    {
      "photo": "https://glycemic-index.net/images/rKqqPwo8Gv_small.webp",
      "name": "Tomatoes (fresh)",
      "GI": "30",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/KRo2H5Bn7F_small.webp",
      "name": "Tortilla, White Corn",
      "GI": "49",
      "GL": "23.1"
    },
    {
      "photo": "https://glycemic-index.net/images/B0KBqk5HqJ_small.webp",
      "name": "Turkey",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/nffAzHjmOi_small.webp",
      "name": "Turkey (boiled)",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/VwOQQ4UetN_small.webp",
      "name": "Turnip (raw)",
      "GI": "30",
      "GL": "1.9"
    },
    {
      "photo": "https://glycemic-index.net/images/wDbWhaURYF_small.webp",
      "name": "Turnip, turnip (fresh)",
      "GI": "30",
      "GL": "1.8"
    },
    {
      "photo": "https://glycemic-index.net/images/Pc2chqZaW0_small.webp",
      "name": "Unpeeled Basmati Rice",
      "GI": "45",
      "GL": "33.8"
    },
    {
      "photo": "https://glycemic-index.net/images/8fpDPNHR5j_small.webp",
      "name": "Urad bean (steamed)",
      "GI": "43",
      "GL": "27.1"
    },
    {
      "photo": "https://glycemic-index.net/images/YUGjLexOIh_small.webp",
      "name": "Vanilla",
      "GI": "5",
      "GL": "3.3"
    },
    {
      "photo": "https://glycemic-index.net/images/tEvHzRjor1_small.webp",
      "name": "Veal",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/DE4puH02OB_small.webp",
      "name": "Vegetable fat",
      "GI": "0",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/BnLXunwqNn_small.webp",
      "name": "Vegetable soup",
      "GI": "40",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/mqoOkISkYA_small.webp",
      "name": "Vinegar",
      "GI": "15",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/0sEUiYPzDC_small.webp",
      "name": "Walnut",
      "GI": "15",
      "GL": "2.1"
    },
    {
      "photo": "https://glycemic-index.net/images/IBuvGflLau_small.webp",
      "name": "Walnuts",
      "GI": "15",
      "GL": "1.1"
    },
    {
      "photo": "https://glycemic-index.net/images/LBaDaFsSpc_small.webp",
      "name": "Wheat flakes",
      "GI": "45",
      "GL": "27.4"
    },
    {
      "photo": "https://glycemic-index.net/images/In6joHnczH_small.webp",
      "name": "White almond paste / puree (without sweeteners)",
      "GI": "35",
      "GL": "16.7"
    },
    {
      "photo": "https://glycemic-index.net/images/RnY7mve9on_small.webp",
      "name": "White beans",
      "GI": "35",
      "GL": "22.4"
    },
    {
      "photo": "https://glycemic-index.net/images/aTDRzbstov_small.webp",
      "name": "White beans",
      "GI": "35",
      "GL": "21.4"
    },
    {
      "photo": "https://glycemic-index.net/images/PRpCaFdWjA_small.webp",
      "name": "White beans (boiled)",
      "GI": "33",
      "GL": "8.3"
    },
    {
      "photo": "https://glycemic-index.net/images/mXvhCorXZe_small.webp",
      "name": "White cabbage",
      "GI": "15",
      "GL": "0.9"
    },
    {
      "photo": "https://glycemic-index.net/images/WtC5GO8bse_small.webp",
      "name": "White chocolate",
      "GI": "44",
      "GL": "26.0"
    },
    {
      "photo": "https://glycemic-index.net/images/DfrkGNjkW3_small.webp",
      "name": "White corn, sweet corn, frozen corn",
      "GI": "55",
      "GL": "10.4"
    },
    {
      "photo": "https://glycemic-index.net/images/C89Mc0DwEd_small.webp",
      "name": "Whole Grain (Rye)",
      "GI": "34",
      "GL": "19.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Mlh6v0AMNd_small.webp",
      "name": "Whole Grain Spaghetti",
      "GI": "40",
      "GL": "10.6"
    },
    {
      "photo": "https://glycemic-index.net/images/fGNwjcRCmT_small.webp",
      "name": "Whole Grain Wheat",
      "GI": "45",
      "GL": "26.8"
    },
    {
      "photo": "https://glycemic-index.net/images/vp1sNEFsje_small.webp",
      "name": "Whole Wheat Pasta",
      "GI": "40",
      "GL": "10.6"
    },
    {
      "photo": "https://glycemic-index.net/images/mIqW2wwMxP_small.webp",
      "name": "Whole grain pasta made by al dente",
      "GI": "40",
      "GL": "14.6"
    },
    {
      "photo": "https://glycemic-index.net/images/g21bsCR0bc_small.webp",
      "name": "Whole grain rye flour",
      "GI": "45",
      "GL": "28.9"
    },
    {
      "photo": "https://glycemic-index.net/images/CcjBBjdE4b_small.webp",
      "name": "Whole milk",
      "GI": "34",
      "GL": "1.6"
    },
    {
      "photo": "https://glycemic-index.net/images/sumn8qertD_small.webp",
      "name": "Whole milk 3%",
      "GI": "27",
      "GL": "1.2"
    },
    {
      "photo": "https://glycemic-index.net/images/pet0naf4k9_small.webp",
      "name": "Wholemeal Pasta",
      "GI": "50",
      "GL": "32.1"
    },
    {
      "photo": "https://glycemic-index.net/images/lNb9MAdgI8_small.webp",
      "name": "Wholemeal bread",
      "GI": "40",
      "GL": "15.9"
    },
    {
      "photo": "https://glycemic-index.net/images/2IAq2Vv0K8_small.webp",
      "name": "Wild rice",
      "GI": "45",
      "GL": "33.8"
    },
    {
      "photo": "https://glycemic-index.net/images/JjGit16DJq_small.webp",
      "name": "Wild rice (black)",
      "GI": "35",
      "GL": "26.3"
    },
    {
      "photo": "https://glycemic-index.net/images/PGYLuj6x4b_small.webp",
      "name": "Yeast",
      "GI": "35",
      "GL": "6.3"
    },
    {
      "photo": "https://glycemic-index.net/images/eWXFG8m9G1_small.webp",
      "name": "Yellow gooseberry",
      "GI": "15",
      "GL": "1.8"
    },
    {
      "photo": "https://glycemic-index.net/images/hDoXco0kcA_small.webp",
      "name": "Yogurt",
      "GI": "32",
      "GL": "1.3"
    },
    {
      "photo": "https://glycemic-index.net/images/YRbyiua0Bd_small.webp",
      "name": "Yogurt",
      "GI": "35",
      "GL": "1.6"
    },
    {
      "photo": "https://glycemic-index.net/images/XAZ2vcWeHu_small.webp",
      "name": "Yogurt 1,5% natural",
      "GI": "35",
      "GL": "0.5"
    },
    {
      "photo": "https://glycemic-index.net/images/Gjg89KhEjc_small.webp",
      "name": "Zucchini",
      "GI": "15",
      "GL": "0.5"
    },
    {
      "photo": "https://glycemic-index.net/images/gyPa5fH3eT_small.webp",
      "name": "Apricots (canned in syrup)",
      "GI": "60",
      "GL": "12.9"
    },
    {
      "photo": "https://glycemic-index.net/images/XrJXyk3SWR_small.webp",
      "name": "Beef Stroganoff",
      "GI": "56",
      "GL": "7.3"
    },
    {
      "photo": "https://glycemic-index.net/images/DNDiU8uZwI_small.webp",
      "name": "Beets (Boiled)",
      "GI": "65",
      "GL": "7.0"
    },
    {
      "photo": "https://glycemic-index.net/images/erYdd1oADQ_small.webp",
      "name": "Boiled sweetcorn",
      "GI": "60",
      "GL": "13.5"
    },
    {
      "photo": "https://glycemic-index.net/images/Rk4YASGlDx_small.webp",
      "name": "Bran bread",
      "GI": "65",
      "GL": "29.4"
    },
    {
      "photo": "https://glycemic-index.net/images/j6ZsyWsRUx_small.webp",
      "name": "Breadfruit",
      "GI": "65",
      "GL": "17.6"
    },
    {
      "photo": "https://glycemic-index.net/images/CIj5N57PeH_small.webp",
      "name": "Brown yeast bread",
      "GI": "65",
      "GL": "26.0"
    },
    {
      "photo": "https://glycemic-index.net/images/XgwvsOISwR_small.webp",
      "name": "Buckwheat noodles",
      "GI": "59",
      "GL": "41.6"
    },
    {
      "photo": "https://glycemic-index.net/images/SMOuRVJ8CI_small.webp",
      "name": "Canned vegetables (factory)",
      "GI": "65",
      "GL": "3.4"
    },
    {
      "photo": "https://glycemic-index.net/images/y5OG6PbpkS_small.webp",
      "name": "Chestnut",
      "GI": "60",
      "GL": "26.5"
    },
    {
      "photo": "https://glycemic-index.net/images/Lwabbo6jIs_small.webp",
      "name": "Chestnut flour",
      "GI": "65",
      "GL": "46.1"
    },
    {
      "photo": "https://glycemic-index.net/images/DLoSAjk5jT_small.webp",
      "name": "Chocolate powder with sugar",
      "GI": "60",
      "GL": "19.1"
    },
    {
      "photo": "https://glycemic-index.net/images/DuBlOhOvH0_small.webp",
      "name": "Condensed milk",
      "GI": "61",
      "GL": "32.9"
    },
    {
      "photo": "https://glycemic-index.net/images/Z3bm3z9k2B_small.webp",
      "name": "Corn chips",
      "GI": "63",
      "GL": "28.8"
    },
    {
      "photo": "https://glycemic-index.net/images/4PlycJCZzw_small.webp",
      "name": "Corn pasta",
      "GI": "68",
      "GL": "46.4"
    },
    {
      "photo": "https://glycemic-index.net/images/kxh00IHEJk_small.webp",
      "name": "Couscous",
      "GI": "60",
      "GL": "12.0"
    },
    {
      "photo": "https://glycemic-index.net/images/SPHN3Fxzm0_small.webp",
      "name": "Dessert Banana (ripe)",
      "GI": "60",
      "GL": "13.1"
    },
    {
      "photo": "https://glycemic-index.net/images/rfbQO4Zvrg_small.webp",
      "name": "Dried fruits",
      "GI": "60",
      "GL": "49.8"
    },
    {
      "photo": "https://glycemic-index.net/images/QykUwLozkc_small.webp",
      "name": "Durum wheat semolina",
      "GI": "60",
      "GL": "42.4"
    },
    {
      "photo": "https://glycemic-index.net/images/vErOVlpzPz_small.webp",
      "name": "Egg powder",
      "GI": "60",
      "GL": "2.7"
    },
    {
      "photo": "https://glycemic-index.net/images/u7yFMMk5TU_small.webp",
      "name": "Falafel (chickpea)",
      "GI": "65",
      "GL": "28.1"
    },
    {
      "photo": "https://glycemic-index.net/images/LG0GCz9phG_small.webp",
      "name": "Flatbread",
      "GI": "69",
      "GL": "38.6"
    },
    {
      "photo": "https://glycemic-index.net/images/gw8NS5HckZ_small.webp",
      "name": "Grapes",
      "GI": "56",
      "GL": "9.6"
    },
    {
      "photo": "https://glycemic-index.net/images/LOsiyYKzB5_small.webp",
      "name": "Grapes, black",
      "GI": "59",
      "GL": "11.0"
    },
    {
      "photo": "https://glycemic-index.net/images/5u9ctaSrmh_small.webp",
      "name": "Hamburger",
      "GI": "66",
      "GL": "1.3"
    },
    {
      "photo": "https://glycemic-index.net/images/9AjnElHjW1_small.webp",
      "name": "Hamburger bun",
      "GI": "61",
      "GL": "30.1"
    },
    {
      "photo": "https://glycemic-index.net/images/RMDApm86k2_small.webp",
      "name": "Honey",
      "GI": "60",
      "GL": "45.8"
    },
    {
      "photo": "https://glycemic-index.net/images/vUFiyRIJp7_small.webp",
      "name": "Ice cream",
      "GI": "62",
      "GL": "14.9"
    },
    {
      "photo": "https://glycemic-index.net/images/WdF8qhD0Vo_small.webp",
      "name": "Long grain rice",
      "GI": "60",
      "GL": "46.8"
    },
    {
      "photo": "https://glycemic-index.net/images/GjyXdrhDeQ_small.webp",
      "name": "Mango",
      "GI": "56",
      "GL": "8.4"
    },
    {
      "photo": "https://glycemic-index.net/images/hx1NpTnj1I_small.webp",
      "name": "Maple syrup",
      "GI": "65",
      "GL": "43.5"
    },
    {
      "photo": "https://glycemic-index.net/images/1IMqUlEzmM_small.webp",
      "name": "Marmalade with sugar",
      "GI": "65",
      "GL": "49.8"
    },
    {
      "photo": "https://glycemic-index.net/images/6DxXC4mWiA_small.webp",
      "name": "Mayonnaise (sweetened)",
      "GI": "60",
      "GL": "0.2"
    },
    {
      "photo": "https://glycemic-index.net/images/ZrLfAv7vun_small.webp",
      "name": "Melon",
      "GI": "65",
      "GL": "5.2"
    },
    {
      "photo": "https://glycemic-index.net/images/FZOfamIeW1_small.webp",
      "name": "Milk bread",
      "GI": "60",
      "GL": "29.9"
    },
    {
      "photo": "https://glycemic-index.net/images/Paau8TtTTo_small.webp",
      "name": "Muesli",
      "GI": "56",
      "GL": "31.6"
    },
    {
      "photo": "https://glycemic-index.net/images/9AJli1lvL9_small.webp",
      "name": "Muesli (with sugar or honey)",
      "GI": "65",
      "GL": "43.8"
    },
    {
      "photo": "https://glycemic-index.net/images/KYY120pdI9_small.webp",
      "name": "Oatmeal (cooked on the water)",
      "GI": "60",
      "GL": "9.0"
    },
    {
      "photo": "https://glycemic-index.net/images/70e4GfsVn9_small.webp",
      "name": "Oatmeal porridge (crushed), oatmeal dishes",
      "GI": "60",
      "GL": "9.0"
    },
    {
      "photo": "https://glycemic-index.net/images/JpkEqRDZqw_small.webp",
      "name": "Oats, Hercules",
      "GI": "59",
      "GL": "36.0"
    },
    {
      "photo": "https://glycemic-index.net/images/kDsILe8Ikw_small.webp",
      "name": "Pancakes",
      "GI": "66",
      "GL": "16.6"
    },
    {
      "photo": "https://glycemic-index.net/images/dJXxO0LTMg_small.webp",
      "name": "Papaya (fresh)",
      "GI": "60",
      "GL": "5.5"
    },
    {
      "photo": "https://glycemic-index.net/images/ka0WbGBCUS_small.webp",
      "name": "Pea soup",
      "GI": "60",
      "GL": "3.7"
    },
    {
      "photo": "https://glycemic-index.net/images/GMDIa0nKMe_small.webp",
      "name": "Pearl barley (steamed)",
      "GI": "60",
      "GL": "40.1"
    },
    {
      "photo": "https://glycemic-index.net/images/2DpPfqD4qQ_small.webp",
      "name": "Peeled wheat flour (whole grain)",
      "GI": "65",
      "GL": "44.8"
    },
    {
      "photo": "https://glycemic-index.net/images/0a37JgGQOB_small.webp",
      "name": "Pineapple",
      "GI": "66",
      "GL": "8.6"
    },
    {
      "photo": "https://glycemic-index.net/images/xCmLJ6O3IK_small.webp",
      "name": "Pineapple (canned in syrup)",
      "GI": "65",
      "GL": "10.1"
    },
    {
      "photo": "https://glycemic-index.net/images/9zwTGMvNjC_small.webp",
      "name": "Pita",
      "GI": "57",
      "GL": "31.9"
    },
    {
      "photo": "https://glycemic-index.net/images/DWNRAHikTn_small.webp",
      "name": "Pizza",
      "GI": "60",
      "GL": "19.8"
    },
    {
      "photo": "https://glycemic-index.net/images/i5BE2P6fW6_small.webp",
      "name": "Processed cheese",
      "GI": "57",
      "GL": "15.4"
    },
    {
      "photo": "https://glycemic-index.net/images/TZKyQbd6CP_small.webp",
      "name": "Pumpkin",
      "GI": "65",
      "GL": "4.5"
    },
    {
      "photo": "https://glycemic-index.net/images/SUcktOtukg_small.webp",
      "name": "Quince (canned / jelly with sugar)",
      "GI": "65",
      "GL": "7.2"
    },
    {
      "photo": "https://glycemic-index.net/images/cojlILemdp_small.webp",
      "name": "Raisins",
      "GI": "65",
      "GL": "51.5"
    },
    {
      "photo": "https://glycemic-index.net/images/rTDmfMztpn_small.webp",
      "name": "Raisins (red and gold)",
      "GI": "65",
      "GL": "46.8"
    },
    {
      "photo": "https://glycemic-index.net/images/fIy763CLpa_small.webp",
      "name": "Red beet juice",
      "GI": "64",
      "GL": "0.0"
    },
    {
      "photo": "https://glycemic-index.net/images/EmHph95itV_small.webp",
      "name": "Rice Jasmine",
      "GI": "60",
      "GL": "44.0"
    },
    {
      "photo": "https://glycemic-index.net/images/n3cALhEbzZ_small.webp",
      "name": "Rice noodles",
      "GI": "65",
      "GL": "16.2"
    },
    {
      "photo": "https://glycemic-index.net/images/IIpvhCrZUk_small.webp",
      "name": "Rice waffles",
      "GI": "64",
      "GL": "52.3"
    },
    {
      "photo": "https://glycemic-index.net/images/xEVRLZ9gy0_small.webp",
      "name": "Rye bread",
      "GI": "65",
      "GL": "31.2"
    },
    {
      "photo": "https://glycemic-index.net/images/6c7JkJrSwq_small.webp",
      "name": "Rye crackers",
      "GI": "64",
      "GL": "44.8"
    },
    {
      "photo": "https://glycemic-index.net/images/Sv1J2eaU7E_small.webp",
      "name": "Shortbread",
      "GI": "60",
      "GL": "32.2"
    },
    {
      "photo": "https://glycemic-index.net/images/RP9LVrO94B_small.webp",
      "name": "Soft drinks (soda, cola)",
      "GI": "60",
      "GL": "6.0"
    },
    {
      "photo": "https://glycemic-index.net/images/iiJFUlsp2Q_small.webp",
      "name": "Sorbet",
      "GI": "65",
      "GL": "52.5"
    },
    {
      "photo": "https://glycemic-index.net/images/HQd44fM1XC_small.webp",
      "name": "Sorbet (with sugar)",
      "GI": "65",
      "GL": "17.9"
    },
    {
      "photo": "https://glycemic-index.net/images/D9jDWErZqn_small.webp",
      "name": "Straw",
      "GI": "60",
      "GL": "41.6"
    },
    {
      "photo": "https://glycemic-index.net/images/lSD2G4ZRoX_small.webp",
      "name": "Strawberry Jam (High Sugar)",
      "GI": "65",
      "GL": "45.5"
    },
    {
      "photo": "https://glycemic-index.net/images/yYvB4vnIl4_small.webp",
      "name": "Sugar",
      "GI": "58",
      "GL": "58.0"
    },
    {
      "photo": "https://glycemic-index.net/images/aswJADQQTd_small.webp",
      "name": "Tamarind (sweet)",
      "GI": "65",
      "GL": "40.8"
    },
    {
      "photo": "https://glycemic-index.net/images/Kc7lw2I1SN_small.webp",
      "name": "Udon noodles",
      "GI": "62",
      "GL": "8.5"
    },
    {
      "photo": "https://glycemic-index.net/images/G0cIgo1Kb3_small.webp",
      "name": "Vanilla ice cream (regular, with sugar)",
      "GI": "60",
      "GL": "14.4"
    },
    {
      "photo": "https://glycemic-index.net/images/ZZgjz2Wsiy_small.webp",
      "name": "Vegetable soup",
      "GI": "60",
      "GL": "2.2"
    },
    {
      "photo": "https://glycemic-index.net/images/JzXU9TeY5Z_small.webp",
      "name": "Wholemeal bread",
      "GI": "65",
      "GL": "31.2"
    },
    {
      "photo": "https://glycemic-index.net/images/bY5dz2wm26_small.webp",
      "name": "Wholemeal flour",
      "GI": "60",
      "GL": "33.5"
    },
    {
      "photo": "https://glycemic-index.net/images/cNjjUr7CnF_small.webp",
      "name": "Yam",
      "GI": "65",
      "GL": "18.2"
    },
    {
      "photo": "https://glycemic-index.net/images/USWwP2d7iv_small.webp",
      "name": "Yellow corn",
      "GI": "65",
      "GL": "10.1"
    },
    {
      "photo": "https://glycemic-index.net/images/UKImnQ8pIo_small.webp",
      "name": "A mixture of refined cereals with sugar",
      "GI": "70",
      "GL": "16.2"
    },
    {
      "photo": "https://glycemic-index.net/images/F6WYOqPxes_small.webp",
      "name": "Air rice (analogue of popcorn)",
      "GI": "85",
      "GL": "76.3"
    },
    {
      "photo": "https://glycemic-index.net/images/SeQsN3aQGr_small.webp",
      "name": "Amaranth (analogue of popcorn)",
      "GI": "70",
      "GL": "43.4"
    },
    {
      "photo": "https://glycemic-index.net/images/wAvwnNegxY_small.webp",
      "name": "Arroroot Flour",
      "GI": "85",
      "GL": "72.0"
    },
    {
      "photo": "https://glycemic-index.net/images/ZKf9MlK8Xv_small.webp",
      "name": "Bagel (wheat)",
      "GI": "70",
      "GL": "35.4"
    },
    {
      "photo": "https://glycemic-index.net/images/3t56uEo8h4_small.webp",
      "name": "Bagels",
      "GI": "70",
      "GL": "48.1"
    },
    {
      "photo": "https://glycemic-index.net/images/km3qgnoJUj_small.webp",
      "name": "Baguette (white)",
      "GI": "95",
      "GL": "46.5"
    },
    {
      "photo": "https://glycemic-index.net/images/a9QuVsuUee_small.webp",
      "name": "Baguette (whole grain)",
      "GI": "73",
      "GL": "28.3"
    },
    {
      "photo": "https://glycemic-index.net/images/PfFpjyCX67_small.webp",
      "name": "Baked potato",
      "GI": "95",
      "GL": "20.0"
    },
    {
      "photo": "https://glycemic-index.net/images/maDth31oxn_small.webp",
      "name": "Bakery products (wheat)",
      "GI": "90",
      "GL": "33.9"
    },
    {
      "photo": "https://glycemic-index.net/images/6MEHjwpdAw_small.webp",
      "name": "Barley porridge",
      "GI": "70",
      "GL": "46.1"
    },
    {
      "photo": "https://glycemic-index.net/images/BwzZxXhuLA_small.webp",
      "name": "Beans (cooked)",
      "GI": "80",
      "GL": "17.2"
    },
    {
      "photo": "https://glycemic-index.net/images/J3NNntqqRp_small.webp",
      "name": "Beer",
      "GI": "70",
      "GL": "2.5"
    },
    {
      "photo": "https://glycemic-index.net/images/fpEMNt47f0_small.webp",
      "name": "Biscotti (dry cookies)",
      "GI": "70",
      "GL": "35.0"
    },
    {
      "photo": "https://glycemic-index.net/images/pajkDcy7fN_small.webp",
      "name": "Biscuit",
      "GI": "70",
      "GL": "34.0"
    },
    {
      "photo": "https://glycemic-index.net/images/oi4HVSFUo6_small.webp",
      "name": "Boiled potatoes",
      "GI": "70",
      "GL": "12.3"
    },
    {
      "photo": "https://glycemic-index.net/images/aVqmAGjVTX_small.webp",
      "name": "Brioche (bun)",
      "GI": "70",
      "GL": "32.9"
    },
    {
      "photo": "https://glycemic-index.net/images/c2cnuHldAk_small.webp",
      "name": "Brown sugar",
      "GI": "70",
      "GL": "68.6"
    },
    {
      "photo": "https://glycemic-index.net/images/wBd1ti8CFq_small.webp",
      "name": "Carrot (cooked)",
      "GI": "85",
      "GL": "4.3"
    },
    {
      "photo": "https://glycemic-index.net/images/rMI2gltinn_small.webp",
      "name": "Celery (boiled, without salt)",
      "GI": "85",
      "GL": "4.0"
    },
    {
      "photo": "https://glycemic-index.net/images/wthslYkU89_small.webp",
      "name": "Chocolate bar (with sugar)",
      "GI": "70",
      "GL": "38.1"
    },
    {
      "photo": "https://glycemic-index.net/images/ibu51LJqP8_small.webp",
      "name": "Condensed milk with sugar",
      "GI": "80",
      "GL": "6.8"
    },
    {
      "photo": "https://glycemic-index.net/images/eA1bA7JfWt_small.webp",
      "name": "Cookies (pastries)",
      "GI": "70",
      "GL": "46.2"
    },
    {
      "photo": "https://glycemic-index.net/images/VJzrDCGQgP_small.webp",
      "name": "Corn Syrup (Dark)",
      "GI": "115",
      "GL": "89.2"
    },
    {
      "photo": "https://glycemic-index.net/images/9c7MGyNnmB_small.webp",
      "name": "Corn flour",
      "GI": "70",
      "GL": "53.8"
    },
    {
      "photo": "https://glycemic-index.net/images/4O3iltBCDY_small.webp",
      "name": "Corn starch",
      "GI": "85",
      "GL": "72.3"
    },
    {
      "photo": "https://glycemic-index.net/images/COn109xmws_small.webp",
      "name": "Corn starch",
      "GI": "95",
      "GL": "80.8"
    },
    {
      "photo": "https://glycemic-index.net/images/UQMe4LTyl7_small.webp",
      "name": "Cornflakes",
      "GI": "85",
      "GL": "55.3"
    },
    {
      "photo": "https://glycemic-index.net/images/xGK1LPzM8Y_small.webp",
      "name": "Cornmeal porridge (mamalyga)",
      "GI": "70",
      "GL": "14.7"
    },
    {
      "photo": "https://glycemic-index.net/images/cfhAGI3YFn_small.webp",
      "name": "Cottage cheese pancakes",
      "GI": "70",
      "GL": "8.4"
    },
    {
      "photo": "https://glycemic-index.net/images/glPLlX2NZo_small.webp",
      "name": "Crackers",
      "GI": "80",
      "GL": "10.0"
    },
    {
      "photo": "https://glycemic-index.net/images/3Vk9PxpEAm_small.webp",
      "name": "Crackers",
      "GI": "70",
      "GL": "50.4"
    },
    {
      "photo": "https://glycemic-index.net/images/B7fuVM0MML_small.webp",
      "name": "Croissant",
      "GI": "70",
      "GL": "21.7"
    },
    {
      "photo": "https://glycemic-index.net/images/rvUGchFjPr_small.webp",
      "name": "Dates",
      "GI": "70",
      "GL": "48.4"
    },
    {
      "photo": "https://glycemic-index.net/images/MkHavmQFZu_small.webp",
      "name": "Donuts",
      "GI": "75",
      "GL": "38.3"
    },
    {
      "photo": "https://glycemic-index.net/images/FUVHmFdwBd_small.webp",
      "name": "Dumplings",
      "GI": "86",
      "GL": "24.9"
    },
    {
      "photo": "https://glycemic-index.net/images/2ZoWmxlMzy_small.webp",
      "name": "Flavored Rice",
      "GI": "70",
      "GL": "56.0"
    },
    {
      "photo": "https://glycemic-index.net/images/PBIXPmSNN3_small.webp",
      "name": "French baguette made from wheat flour",
      "GI": "70",
      "GL": "23.4"
    },
    {
      "photo": "https://glycemic-index.net/images/Mlh5GfqgHd_small.webp",
      "name": "French fries",
      "GI": "75",
      "GL": "22.6"
    },
    {
      "photo": "https://glycemic-index.net/images/PN9Yh8OJVA_small.webp",
      "name": "Fried potato",
      "GI": "95",
      "GL": "19.1"
    },
    {
      "photo": "https://glycemic-index.net/images/1xUDpRImuE_small.webp",
      "name": "Fruit Bar (strawberry)",
      "GI": "90",
      "GL": "60.8"
    },
    {
      "photo": "https://glycemic-index.net/images/vDMgRd52UP_small.webp",
      "name": "Glucose",
      "GI": "96",
      "GL": "94.1"
    },
    {
      "photo": "https://glycemic-index.net/images/xCUTQuChu8_small.webp",
      "name": "Glucose (Dextrose)",
      "GI": "100",
      "GL": "95.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Mz5hRjqt43_small.webp",
      "name": "Glucose syrup",
      "GI": "100",
      "GL": "70.5"
    },
    {
      "photo": "https://glycemic-index.net/images/PF77NCPzEW_small.webp",
      "name": "Gluten free white bread",
      "GI": "90",
      "GL": "14.0"
    },
    {
      "photo": "https://glycemic-index.net/images/ayuloHjTUj_small.webp",
      "name": "Gnocchi",
      "GI": "70",
      "GL": "14.0"
    },
    {
      "photo": "https://glycemic-index.net/images/BfRX6pbHvo_small.webp",
      "name": "Instant potatoes",
      "GI": "87",
      "GL": "66.1"
    },
    {
      "photo": "https://glycemic-index.net/images/G5OWj96E4s_small.webp",
      "name": "Instant rice",
      "GI": "85",
      "GL": "65.5"
    },
    {
      "photo": "https://glycemic-index.net/images/vzZv7xYRqo_small.webp",
      "name": "Lychee (canned syrup)",
      "GI": "79",
      "GL": "14.8"
    },
    {
      "photo": "https://glycemic-index.net/images/74GDlGoEgs_small.webp",
      "name": "Maltodextrin",
      "GI": "95",
      "GL": "94.0"
    },
    {
      "photo": "https://glycemic-index.net/images/5T9Y0CC6bD_small.webp",
      "name": "Mashed potatoes",
      "GI": "83",
      "GL": "11.4"
    },
    {
      "photo": "https://glycemic-index.net/images/L8WNIDfAna_small.webp",
      "name": "Matzo (white flour)",
      "GI": "70",
      "GL": "58.8"
    },
    {
      "photo": "https://glycemic-index.net/images/844AiYOQhL_small.webp",
      "name": "Millet",
      "GI": "70",
      "GL": "51.1"
    },
    {
      "photo": "https://glycemic-index.net/images/unVTpamxef_small.webp",
      "name": "Millet porridge",
      "GI": "70",
      "GL": "18.9"
    },
    {
      "photo": "https://glycemic-index.net/images/3Y2IIYAa2A_small.webp",
      "name": "Molasses",
      "GI": "70",
      "GL": "52.5"
    },
    {
      "photo": "https://glycemic-index.net/images/GEtAxp2ZNA_small.webp",
      "name": "Instant oats porridge",
      "GI": "74",
      "GL": "41.4"
    },
    {
      "photo": "https://glycemic-index.net/images/uBWy5f1Dky_small.webp",
      "name": "Parsnip",
      "GI": "85",
      "GL": "15.3"
    },
    {
      "photo": "https://glycemic-index.net/images/ZTVdhnMMjY_small.webp",
      "name": "Platano (cooked)",
      "GI": "70",
      "GL": "27.4"
    },
    {
      "photo": "https://glycemic-index.net/images/BfbbSH9czf_small.webp",
      "name": "Potato chips",
      "GI": "70",
      "GL": "37.0"
    },
    {
      "photo": "https://glycemic-index.net/images/huD5FbEjr9_small.webp",
      "name": "Potato flour (starch)",
      "GI": "95",
      "GL": "78.9"
    },
    {
      "photo": "https://glycemic-index.net/images/01sqMRHCKr_small.webp",
      "name": "Premium wheat flour",
      "GI": "85",
      "GL": "58.6"
    },
    {
      "photo": "https://glycemic-index.net/images/rw9aSUpj3j_small.webp",
      "name": "Pumpkin (boiled)",
      "GI": "75",
      "GL": "5.3"
    },
    {
      "photo": "https://glycemic-index.net/images/NUF1lnAdJl_small.webp",
      "name": "Ravioli (from soft wheat)",
      "GI": "70",
      "GL": "20.8"
    },
    {
      "photo": "https://glycemic-index.net/images/0scaIlEz2Z_small.webp",
      "name": "Rice Bread",
      "GI": "70",
      "GL": "48.0"
    },
    {
      "photo": "https://glycemic-index.net/images/6YahKCXm9i_small.webp",
      "name": "Rice Milk",
      "GI": "85",
      "GL": "5.5"
    },
    {
      "photo": "https://glycemic-index.net/images/jS5TN2lXTh_small.webp",
      "name": "Rice Syrup",
      "GI": "100",
      "GL": "77.0"
    },
    {
      "photo": "https://glycemic-index.net/images/O1mOJwne6V_small.webp",
      "name": "Rice biscuits",
      "GI": "85",
      "GL": "58.6"
    },
    {
      "photo": "https://glycemic-index.net/images/Oe6K3ZDkwz_small.webp",
      "name": "Rice cake",
      "GI": "85",
      "GL": "69.7"
    },
    {
      "photo": "https://glycemic-index.net/images/tvcnRnAAr2_small.webp",
      "name": "Rice flakes",
      "GI": "80",
      "GL": "61.6"
    },
    {
      "photo": "https://glycemic-index.net/images/vqDNTitb75_small.webp",
      "name": "Rice flour",
      "GI": "95",
      "GL": "76.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Wcub3iN8hK_small.webp",
      "name": "Rice porridge with milk (with sugar)",
      "GI": "75",
      "GL": "13.6"
    },
    {
      "photo": "https://glycemic-index.net/images/AKCZL3GXd3_small.webp",
      "name": "Risotto",
      "GI": "70",
      "GL": "22.1"
    },
    {
      "photo": "https://glycemic-index.net/images/C1Uv9qZg7C_small.webp",
      "name": "Rutabaga, fodder beets",
      "GI": "70",
      "GL": "6.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Yx6702Slmh_small.webp",
      "name": "Sandwich bread, white",
      "GI": "75",
      "GL": "39.4"
    },
    {
      "photo": "https://glycemic-index.net/images/dh4BkgP3vI_small.webp",
      "name": "Sorghum",
      "GI": "70",
      "GL": "46.5"
    },
    {
      "photo": "https://glycemic-index.net/images/zBi6qlNnBV_small.webp",
      "name": "Sports drinks",
      "GI": "75",
      "GL": "2.9"
    },
    {
      "photo": "https://glycemic-index.net/images/QRTCr5Hs81_small.webp",
      "name": "Squash caviar",
      "GI": "75",
      "GL": "3.6"
    },
    {
      "photo": "https://glycemic-index.net/images/AcIZXsUwO8_small.webp",
      "name": "Sticky rice",
      "GI": "90",
      "GL": "73.8"
    },
    {
      "photo": "https://glycemic-index.net/images/RUwbjuezTD_small.webp",
      "name": "Sweet potato (batata, yam)",
      "GI": "70",
      "GL": "11.1"
    },
    {
      "photo": "https://glycemic-index.net/images/Buo1liHtxx_small.webp",
      "name": "Syrup",
      "GI": "70",
      "GL": "54.8"
    },
    {
      "photo": "https://glycemic-index.net/images/eUksdh2pTi_small.webp",
      "name": "Tacos",
      "GI": "70",
      "GL": "14.0"
    },
    {
      "photo": "https://glycemic-index.net/images/w4OeMhPDp7_small.webp",
      "name": "Tapioca (dried)",
      "GI": "85",
      "GL": "74.6"
    },
    {
      "photo": "https://glycemic-index.net/images/uHWJIVcRM7_small.webp",
      "name": "Turnip (cooked, boiled)",
      "GI": "85",
      "GL": "3.9"
    },
    {
      "photo": "https://glycemic-index.net/images/KA0omnjciw_small.webp",
      "name": "Waffles",
      "GI": "75",
      "GL": "54.3"
    },
    {
      "photo": "https://glycemic-index.net/images/8qDGgIWMAs_small.webp",
      "name": "Watermelon",
      "GI": "75",
      "GL": "5.6"
    },
    {
      "photo": "https://glycemic-index.net/images/AYB2keTe4N_small.webp",
      "name": "Wheat Syrup, Rice Syrup",
      "GI": "100",
      "GL": "77.0"
    },
    {
      "photo": "https://glycemic-index.net/images/Vy2XOOtMlA_small.webp",
      "name": "Wheat bread",
      "GI": "70",
      "GL": "34.3"
    },
    {
      "photo": "https://glycemic-index.net/images/zwQQH8Nxsv_small.webp",
      "name": "Wheat flour, white (unenriched)",
      "GI": "85",
      "GL": "62.6"
    },
    {
      "photo": "https://glycemic-index.net/images/fA7MrEbvvU_small.webp",
      "name": "Wheat syrup",
      "GI": "100",
      "GL": "78.0"
    },
    {
      "photo": "https://glycemic-index.net/images/7glZbxWPcy_small.webp",
      "name": "White bread “baguette”",
      "GI": "70",
      "GL": "36.0"
    },
    {
      "photo": "https://glycemic-index.net/images/WBtmLBI95R_small.webp",
      "name": "White flour bread",
      "GI": "90",
      "GL": "43.9"
    },
    {
      "photo": "https://glycemic-index.net/images/IId383BQgI_small.webp",
      "name": "White rice standard",
      "GI": "70",
      "GL": "56.0"
    }
  ];
  let foodsToShow;
  let selectedLetter = "A";
  let alphabet = [];
  let searchQuery = "";
  for (let i = 65; i < 91; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h1 data-svelte-h="svelte-yyjjjs">Welcome to SvelteKit</h1>  ${each(alphabet, (letter) => {
      return `<button>${escape(letter)}</button>`;
    })} <br> <input type="text"${add_attribute("value", searchQuery, 0)}> <thead data-svelte-h="svelte-1rywib5"><tr><th colspan="2">Name</th> <th>GI</th> <th>GL</th></tr></thead> ${foodsToShow ? `${each(foodsToShow, (food) => {
      return `<tr><td><img loading="lazy" decoding="async"${add_attribute("src", food.photo, 0)}${add_attribute("alt", food.name, 0)}></td> <td>${escape(food.name)}</td> <td>${escape(food.GI)}</td> <td>${escape(food.GL)}</td> </tr>`;
    })}` : ``} ${validate_component(FilterByInitial, "FilterByInitial").$$render(
      $$result,
      {
        rows: foods,
        initial: selectedLetter,
        filteredRows: foodsToShow
      },
      {
        filteredRows: ($$value) => {
          foodsToShow = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FilterByQuery, "FilterByQuery").$$render(
      $$result,
      {
        rows: foods,
        stringFragment: searchQuery,
        filteredRows: foodsToShow
      },
      {
        filteredRows: ($$value) => {
          foodsToShow = $$value;
          $$settled = false;
        }
      },
      {}
    )} <p data-svelte-h="svelte-1wkqgji">hola</p>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5u8hgRe1.js.map
