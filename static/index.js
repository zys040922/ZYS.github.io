const herbsData = [
    { "id": 1, "name": "麻黄", "description": "发汗解表，宣肺平喘，利水消肿。", "image": "images/麻黄.jpg" },
    { "id": 2, "name": "桂枝", "description": "发汗解肌，温经通脉，助阳化气。", "image": "images/桂枝.jpg" },
    { "id": 3, "name": "紫苏", "description": "解表散寒，行气宽中，解鱼蟹毒。", "image": "images/紫苏.jpg" },
    { "id": 4, "name": "生姜", "description": "解表散寒，温中止呕，温肺止咳。", "image": "images/生姜.jpg" },
    { "id": 5, "name": "香薷", "description": "发汗解表，和中化湿，利水消肿。", "image": "images/香薷.jpg" },
    { "id": 6, "name": "荆芥", "description": "解表散风，透疹，消疮。", "image": "images/荆芥.jpg" },
    { "id": 7, "name": "防风", "description": "祛风解表，胜湿止痛，止痉。", "image": "images/防风.jpg" },
    { "id": 8, "name": "羌活", "description": "祛风解表，胜湿止痛，解毒。", "image": "images/羌活.jpg" },
    { "id": 9, "name": "白芷", "description": "解表散寒，祛风止痛，通鼻窍，燥湿止带，消肿排脓。", "image": "images/白芷.jpg" },
    { "id": 10, "name": "细辛", "description": "解表散寒，祛风止痛，通窍，温肺化饮。", "image": "images/细辛.jpg" },
    { "id": 11, "name": "藁本", "description": "祛风散寒，胜湿止痛。", "image": "images/藁本.jpg" },
    { "id": 12, "name": "苍耳子", "description": "发散风寒，通鼻窍，祛风湿，止痛。", "image": "images/苍耳子.jpg" },
    { "id": 13, "name": "辛夷", "description": "发散风寒，通鼻窍。", "image": "images/辛夷.jpg" },
    { "id": 14, "name": "葱白", "description": "发汗解表，通阳散结。", "image": "images/葱白.jpg" },
    { "id": 15, "name": "鹅不食草", "description": "发散风寒，通鼻窍，止咳。", "image": "images/鹅不食草.jpg" },
    { "id": 16, "name": "胡荽", "description": "发汗解表，温中止呕，解鱼蟹毒。", "image": "images/胡荽.jpg" },
    { "id": 17, "name": "柽柳", "description": "发汗解表，祛风除湿。", "image": "images/柽柳.jpg" },
    { "id": 18, "name": "薄荷", "description": "疏散风热，清利头目，利咽，透疹，疏肝。", "image": "images/薄荷.jpg" },
    { "id": 19, "name": "牛蒡子", "description": "疏散风热，宣肺利咽，解毒透疹。", "image": "images/牛蒡子.jpg" },
    { "id": 20, "name": "蝉蜕", "description": "疏散风热，利咽开音，透疹，明目退翳，息风止痉。", "image": "images/蝉蜕.jpg" },
    { "id": 21, "name": "桑叶", "description": "疏散风热，清肺润燥，平肝明目。", "image": "images/桑叶.jpg" },
    { "id": 22, "name": "菊花", "description": "疏散风热，平肝明目，清热解毒。", "image": "images/菊花.jpg" },
    { "id": 23, "name": "蔓荆子", "description": "疏散风热，清利头目。", "image": "images/蔓荆子.jpg" },
    { "id": 24, "name": "柴胡", "description": "疏肝解表，和解少阳，升举阳气。", "image": "images/柴胡.jpg" },
    { "id": 25, "name": "升麻", "description": "解表升阳，透疹，清热解毒。", "image": "images/升麻.jpg" },
    { "id": 26, "name": "葛根", "description": "解肌发表，升阳透疹，生津止渴，舒筋止痛。", "image": "images/葛根.jpg" },
    { "id": 27, "name": "淡豆豉", "description": "解表除烦。", "image": "images/淡豆豉.jpg" },
    { "id": 28, "name": "浮萍", "description": "发汗解表，透疹，祛风止痒。", "image": "images/浮萍.jpg" },
    { "id": 29, "name": "木贼", "description": "疏散风热，退翳明目，止血。", "image": "images/木贼.jpg" },
    { "id": 30, "name": "石膏", "description": "清热泻火，除烦止渴，收湿生肌。", "image": "images/石膏.jpg" },
    { "id": 31, "name": "知母", "description": "清热泻火，滋阴润燥。", "image": "images/知母.jpg" },
    { "id": 32, "name": "芦根", "description": "清热生津，除烦止呕，利尿。", "image": "images/芦根.jpg" },
    { "id": 33, "name": "天花粉", "description": "清热生津，消肿排脓。", "image": "images/天花粉.jpg" },
    { "id": 34, "name": "淡竹叶", "description": "清热除烦，利尿。", "image": "images/淡竹叶.jpg" },
    { "id": 35, "name": "竹叶", "description": "清热除烦，利尿。", "image": "images/竹叶.jpg" },
    { "id": 36, "name": "栀子", "description": "泻火除烦，清热利湿，凉血解毒。", "image": "images/栀子.jpg" },
    { "id": 37, "name": "夏枯草", "description": "清肝泻火，明目，散结消肿。", "image": "images/夏枯草.jpg" },
    { "id": 38, "name": "决明子", "description": "清肝明目，润肠通便。", "image": "images/决明子.jpg" },
    { "id": 39, "name": "密蒙花", "description": "清肝明目。", "image": "images/密蒙花.jpg" },
    { "id": 40, "name": "寒水石", "description": "清热泻火，凉血解毒，利尿。", "image": "images/寒水石.jpg" },
    { "id": 41, "name": "鸭跖草", "description": "清热泻火，解毒。", "image": "images/鸭跖草.jpg" },
    { "id": 42, "name": "谷精草", "description": "疏风清热，明目退翳。", "image": "images/谷精草.jpg" },
    { "id": 43, "name": "青葙子", "description": "清肝泻火，明目，退翳。", "image": "images/青葙子.jpg" },
    { "id": 44, "name": "黄芩", "description": "清热燥湿，泻火解毒，凉血止血，安胎。", "image": "images/黄芩.jpg" },
    { "id": 45, "name": "黄连", "description": "清热燥湿，泻火解毒。", "image": "images/黄连.jpg" },
    { "id": 46, "name": "黄柏", "description": "清热燥湿，泻火解毒，退虚热。", "image": "images/黄柏.jpg" },
    { "id": 47, "name": "龙胆", "description": "泻肝胆实火，清下焦湿热。", "image": "images/龙胆.jpg" },
    { "id": 48, "name": "秦皮", "description": "清热燥湿，收涩止痢，明目。", "image": "images/秦皮.jpg" },
    { "id": 49, "name": "苦参", "description": "清热燥湿，杀虫，利尿。", "image": "images/苦参.jpg" },
    { "id": 50, "name": "白鲜皮", "description": "清热燥湿，祛风解毒，止痒。", "image": "images/白鲜皮.jpg" },
    { "id": 51, "name": "苦豆子", "description": "清热燥湿，泻火解毒。", "image": "images/苦豆子.jpg" },
    { "id": 52, "name": "三棵针", "description": "清热解毒，利湿。", "image": "images/三棵针.jpg" },
    { "id": 53, "name": "马尾连", "description": "清热解毒，燥湿。", "image": "images/马尾连.jpg" },
    { "id": 54, "name": "金银花", "description": "清热解毒，疏散风热。", "image": "images/金银花.jpg" },
    { "id": 55, "name": "连翘", "description": "清热解毒，消肿散结，疏散风热。", "image": "images/连翘.jpg" },
    { "id": 56, "name": "穿心莲", "description": "清热解毒，凉血，消肿。", "image": "images/穿心莲.jpg" },
    { "id": 57, "name": "大青叶", "description": "清热解毒，凉血消斑。", "image": "images/大青叶.jpg" },
    { "id": 58, "name": "板蓝根", "description": "清热解毒，凉血利咽。", "image": "images/板蓝根.jpg" },
    { "id": 59, "name": "青黛", "description": "清热解毒，凉血，定惊。", "image": "images/青黛.jpg" },
    { "id": 60, "name": "贯众", "description": "清热解毒，凉血止血，杀虫。", "image": "images/贯众.jpg" },
    { "id": 61, "name": "蒲公英", "description": "清热解毒，消肿散结，利尿通淋。", "image": "images/蒲公英.jpg" },
    { "id": 62, "name": "紫花地丁", "description": "清热解毒，凉血消肿。", "image": "images/紫花地丁.jpg" },
    { "id": 63, "name": "野菊花", "description": "清热解毒，散风平肝。", "image": "images/野菊花.jpg" },
    { "id": 64, "name": "拳参", "description": "清热解毒，凉血止血。", "image": "images/拳参.jpg" },
    { "id": 65, "name": "漏芦", "description": "清热解毒，消肿排脓，通经下乳。", "image": "images/漏芦.jpg" },
    { "id": 66, "name": "土茯苓", "description": "解毒，除湿，通利关节。", "image": "images/土茯苓.jpg" },
    { "id": 67, "name": "鱼腥草", "description": "清热解毒，消肿排脓，利尿通淋。", "image": "images/鱼腥草.jpg" },
    { "id": 68, "name": "大血藤", "description": "清热解毒，活血止痛，祛风通络。", "image": "images/大血藤.jpg" },
    { "id": 69, "name": "败酱草", "description": "清热解毒，消肿排脓，祛瘀止痛。", "image": "images/败酱草.jpg" },
    { "id": 70, "name": "射干", "description": "清热解毒，消痰利咽。", "image": "images/射干.jpg" },
    { "id": 71, "name": "山豆根", "description": "清热解毒，消肿利咽。", "image": "images/山豆根.jpg" },
    { "id": 72, "name": "马勃", "description": "清热解毒，利咽开音，止血。", "image": "images/马勃.jpg" },
    { "id": 73, "name": "白头翁", "description": "清热解毒，凉血止痢。", "image": "images/白头翁.jpg" },
    { "id": 74, "name": "木蝴蝶", "description": "清热利咽，疏肝和胃。", "image": "images/木蝴蝶.jpg" },
    { "id": 75, "name": "马齿苋", "description": "清热解毒，凉血止血，止痢。", "image": "images/马齿苋.jpg" },
    { "id": 76, "name": "鸦胆子", "description": "清热解毒，止痢，截疟，腐蚀赘疣。", "image": "images/鸦胆子.jpg" },
    { "id": 77, "name": "半边莲", "description": "清热解毒，利水消肿。", "image": "images/半边莲.jpg" },
    { "id": 78, "name": "白花蛇舌草", "description": "清热解毒，利湿通淋。", "image": "images/白花蛇舌草.jpg" },
    { "id": 79, "name": "山慈菇", "description": "清热解毒，化痰散结。", "image": "images/山慈菇.jpg" },
    { "id": 80, "name": "熊胆", "description": "清热解毒，平肝明目。", "image": "images/熊胆.jpg" },
    { "id": 81, "name": "白蔹", "description": "清热解毒，消痈散结。", "image": "images/白蔹.jpg" },
    { "id": 82, "name": "重楼", "description": "清热解毒，消肿止痛，凉肝定惊。", "image": "images/重楼.jpg" },
    { "id": 83, "name": "金荞麦", "description": "清热解毒，排脓祛瘀。", "image": "images/金荞麦.jpg" },
    { "id": 84, "name": "青果", "description": "清热解毒，利咽，止咳化痰。", "image": "images/青果.jpg" },
    { "id": 85, "name": "锦灯笼", "description": "清热利咽，化痰止咳，利尿。", "image": "images/锦灯笼.jpg" },
    { "id": 86, "name": "金果榄", "description": "清热解毒，利咽，止咳。", "image": "images/金果榄.jpg" },
    { "id": 87, "name": "地锦草", "description": "清热解毒，凉血止血。", "image": "images/地锦草.jpg" },
    { "id": 88, "name": "委陵菜", "description": "清热解毒，凉血止痢。", "image": "images/委陵菜.jpg" },
    { "id": 89, "name": "翻白草", "description": "清热解毒，凉血止血。", "image": "images/翻白草.jpg" },
    { "id": 90, "name": "千里光", "description": "清热解毒，明目。", "image": "images/千里光.jpg" },
    { "id": 91, "name": "四季青", "description": "清热解毒，凉血消斑。", "image": "images/四季青.jpg" },
    { "id": 92, "name": "绿豆", "description": "清热解毒，消暑，利水。", "image": "images/绿豆.jpg" },
    { "id": 93, "name": "生地黄", "description": "清热凉血，养阴生津。", "image": "images/生地黄.jpg" },
    { "id": 94, "name": "玄参", "description": "清热凉血，滋阴降火，解毒散结。", "image": "images/玄参.jpg" },
    { "id": 95, "name": "牡丹皮", "description": "清热凉血，活血散瘀。", "image": "images/牡丹皮.jpg" },
    { "id": 96, "name": "赤芍", "description": "清热凉血，散瘀止痛。", "image": "images/赤芍.jpg" },
    { "id": 97, "name": "紫草", "description": "清热凉血，活血解毒，透疹。", "image": "images/紫草.jpg" },
    { "id": 98, "name": "水牛角", "description": "清热解毒，凉血定惊。", "image": "images/水牛角.jpg" },
    { "id": 99, "name": "青蒿", "description": "清虚热，解暑，截疟。", "image": "images/青蒿.jpg" },
    { "id": 100, "name": "白薇", "description": "清热凉血，利尿通淋，解毒疗疮。", "image": "images/白薇.jpg" },
    { "id": 101, "name": "地骨皮", "description": "清热凉血，退虚热。", "image": "images/地骨皮.jpg" },
    { "id": 102, "name": "银柴胡", "description": "清虚热，除疳热。", "image": "images/银柴胡.jpg" },
    { "id": 103, "name": "胡黄连", "description": "清虚热，除疳热，清湿热。", "image": "images/胡黄连.jpg" },
    { "id": 104, "name": "大黄", "description": "泻下攻积，清热泻火，凉血解毒，逐瘀通经。", "image": "images/大黄.jpg" },
    { "id": 105, "name": "芒硝", "description": "泻下攻积，润燥软坚，清火消肿。", "image": "images/芒硝.jpg" },
    { "id": 106, "name": "番泻叶", "description": "泻下通便。", "image": "images/番泻叶.jpg" },
    { "id": 107, "name": "芦荟", "description": "泻下通便，清肝杀虫。", "image": "images/芦荟.jpg" },
    { "id": 108, "name": "火麻仁", "description": "润肠通便。", "image": "images/火麻仁.jpg" },
    { "id": 109, "name": "郁李仁", "description": "润肠通便，利水消肿。", "image": "images/郁李仁.jpg" },
    { "id": 110, "name": "松子仁", "description": "润肠通便，润肺止咳。", "image": "images/松子仁.jpg" },
    { "id": 111, "name": "甘遂", "description": "泻水逐饮，消肿散结。", "image": "images/甘遂.jpg" },
    { "id": 112, "name": "京大戟", "description": "泻水逐饮，消肿散结。", "image": "images/京大戟.jpg" },
    { "id": 113, "name": "芫花", "description": "泻水逐饮，祛痰止咳，杀虫疗疮。", "image": "images/芫花.jpg" },
    { "id": 114, "name": "商陆", "description": "泻水逐饮，消肿散结，解毒。", "image": "images/商陆.jpg" },
    { "id": 115, "name": "牵牛子", "description": "泻下逐水，去积杀虫。", "image": "images/牵牛子.jpg" },
    { "id": 116, "name": "巴豆", "description": "泻下冷积，逐水退肿，祛痰利咽。", "image": "images/巴豆.jpg" },
    { "id": 117, "name": "千金子", "description": "泻水逐饮，消肿散结。", "image": "images/千金子.jpg" },
    { "id": 118, "name": "独活", "description": "祛风湿，止痛，解表。", "image": "images/独活.jpg" },
    { "id": 119, "name": "威灵仙", "description": "祛风湿，通经络，消骨鲠。", "image": "images/威灵仙.jpg" },
    { "id": 120, "name": "川乌", "description": "祛风除湿，温经止痛。", "image": "images/川乌.jpg" },
    { "id": 121, "name": "蕲蛇", "description": "祛风湿，通经络，止痉。", "image": "images/蕲蛇.jpg" },
    { "id": 122, "name": "乌梢蛇", "description": "祛风湿，通经络。", "image": "images/乌梢蛇.jpg" },
    { "id": 123, "name": "木瓜", "description": "祛湿舒筋，和中化湿。", "image": "images/木瓜.jpg" },
    { "id": 124, "name": "蚕沙", "description": "祛湿舒筋，祛风除湿。", "image": "images/蚕沙.jpg" },
    { "id": 125, "name": "伸筋草", "description": "祛风除湿，舒筋活络。", "image": "images/伸筋草.jpg" },
    { "id": 126, "name": "路路通", "description": "祛风通络，利水消肿。", "image": "images/路路通.jpg" },
    { "id": 127, "name": "寻骨风", "description": "祛风湿，通经络。", "image": "images/寻骨风.jpg" },
    { "id": 128, "name": "松节", "description": "祛风湿，活血通络。", "image": "images/松节.jpg" },
    { "id": 129, "name": "海风藤", "description": "祛风湿，通经络。", "image": "images/海风藤.jpg" },
    { "id": 130, "name": "青风藤", "description": "祛风湿，通经络。", "image": "images/青风藤.jpg" },
    { "id": 131, "name": "丁公藤", "description": "祛风湿，止痛。", "image": "images/丁公藤.jpg" },
    { "id": 132, "name": "昆明山海棠", "description": "祛风湿，活血通络。", "image": "images/昆明山海棠.jpg" },
    { "id": 133, "name": "雪上一枝蒿", "description": "祛风湿，止痛。", "image": "images/雪上一枝蒿.jpg" },
    { "id": 134, "name": "秦艽", "description": "祛风湿，舒筋活络，清虚热。", "image": "images/秦艽.jpg" },
    { "id": 135, "name": "防己", "description": "祛风湿，止痛，利水。", "image": "images/防己.jpg" },
    { "id": 136, "name": "桑枝", "description": "祛风湿，利关节。", "image": "images/桑枝.jpg" },
    { "id": 137, "name": "莶草", "description": "祛风湿，利关节，解毒。", "image": "images/莶草.jpg" },
    { "id": 138, "name": "臭梧桐", "description": "祛风湿，通经络，降血压。", "image": "images/臭梧桐.jpg" },
    { "id": 139, "name": "海桐皮", "description": "祛风湿，通经络，杀虫止痒。", "image": "images/海桐皮.jpg" },
    { "id": 140, "name": "络石藤", "description": "祛风湿，通经络，清热解毒。", "image": "images/络石藤.jpg" },
    { "id": 141, "name": "雷公藤", "description": "祛风湿，活血通络，消肿止痛。", "image": "images/雷公藤.jpg" },
    { "id": 142, "name": "老鹳草", "description": "祛风湿，活血通络。", "image": "images/老鹳草.jpg" },
    { "id": 143, "name": "穿山龙", "description": "祛风湿，活血通络。", "image": "images/穿山龙.jpg" },
    { "id": 144, "name": "丝瓜络", "description": "祛风湿，通经络，凉血解毒。", "image": "images/丝瓜络.jpg" },
    { "id": 145, "name": "五加皮", "description": "祛风湿，补肝肾，强筋骨。", "image": "images/五加皮.jpg" },
    { "id": 146, "name": "桑寄生", "description": "祛风湿，补肝肾，强筋骨。", "image": "images/桑寄生.jpg" },
    { "id": 147, "name": "狗脊", "description": "祛风湿，补肝肾，强筋骨。", "image": "images/狗脊.jpg" },
    { "id": 148, "name": "千年健", "description": "祛风湿，强筋骨。", "image": "images/千年健.jpg" },
    { "id": 149, "name": "雪莲花", "description": "祛风湿，通经络，止血。", "image": "images/雪莲花.jpg" },
    { "id": 150, "name": "鹿衔草", "description": "祛风湿，强筋骨，调经止血。", "image": "images/鹿衔草.jpg" },
    { "id": 151, "name": "石楠叶", "description": "祛风湿，活血通络。", "image": "images/石楠叶.jpg" },
    { "id": 152, "name": "藿香", "description": "祛暑解表，化湿和中。", "image": "images/藿香.jpg" },
    { "id": 153, "name": "佩兰", "description": "祛暑解表，化湿和中。", "image": "images/佩兰.jpg" },
    { "id": 154, "name": "苍术", "description": "燥湿健脾，祛风散寒，明目。", "image": "images/苍术.jpg" },
    { "id": 155, "name": "厚朴", "description": "燥湿消痰，下气除满。", "image": "images/厚朴.jpg" },
    { "id": 156, "name": "砂仁", "description": "化湿开胃，温脾止泻，理气安胎。", "image": "images/砂仁.jpg" },
    { "id": 157, "name": "豆蔻", "description": "化湿行气，温中止呕。", "image": "images/豆蔻.jpg" },
    { "id": 158, "name": "草豆蔻", "description": "燥湿行气，温中止呕。", "image": "images/草豆蔻.jpg" },
    { "id": 159, "name": "草果", "description": "燥湿温中，除痰截疟。", "image": "images/草果.jpg" },
    { "id": 160, "name": "茯苓", "description": "利水渗湿，健脾宁心。", "image": "images/茯苓.jpg" },
    { "id": 161, "name": "薏苡仁", "description": "利水渗湿，健脾除痹，清热排脓。", "image": "images/薏苡仁.jpg" },
    { "id": 162, "name": "猪苓", "description": "利水渗湿。", "image": "images/猪苓.jpg" },
    { "id": 163, "name": "泽泻", "description": "利水渗湿，泄热。", "image": "images/泽泻.jpg" },
    { "id": 164, "name": "冬瓜皮", "description": "利水消肿，清热。", "image": "images/冬瓜皮.jpg" },
    { "id": 165, "name": "香加皮", "description": "利水消肿，祛风湿，强筋骨。", "image": "images/香加皮.jpg" },
    { "id": 166, "name": "玉米须", "description": "利水消肿，清肝利胆。", "image": "images/玉米须.jpg" },
    { "id": 167, "name": "葫芦", "description": "利水消肿。", "image": "images/葫芦.jpg" },
    { "id": 168, "name": "枳椇子", "description": "利水消肿，解酒。", "image": "images/枳椇子.jpg" },
    { "id": 169, "name": "泽漆", "description": "利水消肿，祛痰。", "image": "images/泽漆.jpg" },
    { "id": 170, "name": "蝼蛄", "description": "利水消肿，通淋，止咳。", "image": "images/蝼蛄.jpg" },
    { "id": 171, "name": "荠菜", "description": "利水消肿，清热解毒。", "image": "images/荠菜.jpg" },
    { "id": 172, "name": "车前子", "description": "利水通淋，渗湿止泻，明目，祛痰。", "image": "images/车前子.jpg" },
    { "id": 173, "name": "滑石", "description": "利水通淋，清热解暑，收湿敛疮。", "image": "images/滑石.jpg" },
    { "id": 174, "name": "木通", "description": "利水通淋，清热解毒，通经下乳。", "image": "images/木通.jpg" },
    { "id": 175, "name": "通草", "description": "利水通淋，通经下乳。", "image": "images/通草.jpg" },
    { "id": 176, "name": "瞿麦", "description": "利水通淋，破血通经。", "image": "images/瞿麦.jpg" },
    { "id": 177, "name": "萹蓄", "description": "利水通淋，杀虫。", "image": "images/萹蓄.jpg" },
    { "id": 178, "name": "地肤子", "description": "利水消肿，清热解毒，祛风止痒。", "image": "images/地肤子.jpg" },
    { "id": 179, "name": "海金沙", "description": "利水通淋，止痛。", "image": "images/海金沙.jpg" },
    { "id": 180, "name": "石韦", "description": "利水通淋，清热解毒，止血。", "image": "images/石韦.jpg" },
    { "id": 181, "name": "冬葵子", "description": "利水通淋，下乳。", "image": "images/冬葵子.jpg" },
    { "id": 182, "name": "萆薢", "description": "利水渗湿，祛风湿，固精止带。", "image": "images/萆薢.jpg" },
    { "id": 183, "name": "灯心草", "description": "利水通淋，清心除烦。", "image": "images/灯心草.jpg" },
    { "id": 184, "name": "茵陈", "description": "清利湿热，利胆退黄。", "image": "images/茵陈.jpg" },
    { "id": 185, "name": "金钱草", "description": "利水通淋，除湿退黄，解毒消肿。", "image": "images/金钱草.jpg" },
    { "id": 186, "name": "虎杖", "description": "利湿退黄，清热解毒，散瘀止痛。", "image": "images/虎杖.jpg" },
    { "id": 187, "name": "地耳草", "description": "利湿退黄，清热解毒。", "image": "images/地耳草.jpg" },
    { "id": 188, "name": "垂盆草", "description": "利湿退黄，清热解毒。", "image": "images/垂盆草.jpg" },
    { "id": 189, "name": "鸡骨草", "description": "利湿退黄，清热解毒。", "image": "images/鸡骨草.jpg" },
    { "id": 190, "name": "珍珠草", "description": "利湿退黄，清热解毒。", "image": "images/珍珠草.jpg" },
    { "id": 191, "name": "附子", "description": "温中祛寒，回阳救逆，助阳补火。", "image": "images/附子.jpg" },
    { "id": 192, "name": "干姜", "description": "温中散寒，回阳通脉，温肺化饮。", "image": "images/干姜.jpg" },
    { "id": 193, "name": "肉桂", "description": "补火助阳，散寒止痛，温经通脉。", "image": "images/肉桂.jpg" },
    { "id": 194, "name": "吴茱萸", "description": "散寒止痛，降逆止呕，助阳止泻。", "image": "images/吴茱萸.jpg" },
    { "id": 195, "name": "小茴香", "description": "散寒止痛，理气和胃。", "image": "images/小茴香.jpg" },
    { "id": 196, "name": "丁香", "description": "温中降逆，温肾助阳。", "image": "images/丁香.jpg" },
    { "id": 197, "name": "高良姜", "description": "散寒止痛，温中止呕。", "image": "images/高良姜.jpg" },
    { "id": 198, "name": "胡椒", "description": "温中散寒，下气消痰。", "image": "images/胡椒.jpg" },
    { "id": 199, "name": "花椒", "description": "温中止痛，杀虫止痒。", "image": "images/花椒.jpg" },
    { "id": 200, "name": "荜茇", "description": "温中散寒，下气止痛。", "image": "images/荜茇.jpg" },
    { "id": 201, "name": "荜澄茄", "description": "温中散寒，下气止痛。", "image": "images/荜澄茄.jpg" },
    { "id": 202, "name": "陈皮", "description": "理气健脾，燥湿化痰。", "image": "images/陈皮.jpg" },
    { "id": 203, "name": "青皮", "description": "疏肝破气，消积化滞。", "image": "images/青皮.jpg" },
    { "id": 204, "name": "枳实", "description": "破气消积，化痰散结。", "image": "images/枳实.jpg" },
    { "id": 205, "name": "木香", "description": "行气止痛，健脾消食。", "image": "images/木香.jpg" },
    { "id": 206, "name": "沉香", "description": "行气止痛，温中止呕，纳气平喘。", "image": "images/沉香.jpg" },
    { "id": 207, "name": "檀香", "description": "行气止痛，散寒调中。", "image": "images/檀香.jpg" },
    { "id": 208, "name": "川楝子", "description": "行气止痛，杀虫。", "image": "images/川楝子.jpg" },
    { "id": 209, "name": "乌药", "description": "行气止痛，温肾散寒。", "image": "images/乌药.jpg" },
    { "id": 210, "name": "青木香", "description": "行气止痛，解毒。", "image": "images/青木香.jpg" },
    { "id": 211, "name": "荔枝核", "description": "行气止痛，散寒。", "image": "images/荔枝核.jpg" },
    { "id": 212, "name": "香附", "description": "疏肝解郁，理气宽中，调经止痛。", "image": "images/香附.jpg" },
    { "id": 213, "name": "佛手", "description": "理气和中，疏肝解郁，燥湿化痰。", "image": "images/佛手.jpg" },
    { "id": 214, "name": "香橼", "description": "疏肝解郁，化痰止咳。", "image": "images/香橼.jpg" },
    { "id": 215, "name": "玫瑰花", "description": "疏肝解郁，和血止痛。", "image": "images/玫瑰花.jpg" },
    { "id": 216, "name": "薤白", "description": "通阳散结，行气导滞。", "image": "images/薤白.jpg" },
    { "id": 217, "name": "大腹皮", "description": "行气宽中，利水消肿。", "image": "images/大腹皮.jpg" },
    { "id": 218, "name": "刀豆", "description": "温中下气，止呃。", "image": "images/刀豆.jpg" },
    { "id": 219, "name": "柿蒂", "description": "降逆止呃。", "image": "images/柿蒂.jpg" },
    { "id": 220, "name": "绿萼梅", "description": "疏肝和胃，散结化痰。", "image": "images/绿萼梅.jpg" },
    { "id": 221, "name": "娑罗子", "description": "行气止痛，化湿。", "image": "images/娑罗子.jpg" },
    { "id": 222, "name": "天仙藤", "description": "行气活血，利水消肿。", "image": "images/天仙藤.jpg" },
    { "id": 223, "name": "甘松", "description": "理气止痛，开郁醒脾。", "image": "images/甘松.jpg" },
    { "id": 224, "name": "九香虫", "description": "理气止痛，散瘀。", "image": "images/九香虫.jpg" },
    { "id": 225, "name": "山楂", "description": "消食健胃，活血化瘀。", "image": "images/山楂.jpg" },
    { "id": 226, "name": "神曲", "description": "消食和胃。", "image": "images/神曲.jpg" },
    { "id": 227, "name": "麦芽", "description": "消食健胃，疏肝。", "image": "images/麦芽.jpg" },
    { "id": 228, "name": "莱菔子", "description": "消食除胀，降气化痰。", "image": "images/莱菔子.jpg" },
    { "id": 229, "name": "鸡内金", "description": "消食健胃，涩精止遗。", "image": "images/鸡内金.jpg" },
    { "id": 230, "name": "鸡矢藤", "description": "消食健胃，止咳，解毒。", "image": "images/鸡矢藤.jpg" },
    { "id": 231, "name": "稻芽", "description": "消食和中，健脾开胃。", "image": "images/稻芽.jpg" },
    { "id": 232, "name": "隔山消", "description": "消食健胃，化痰止咳。", "image": "images/隔山消.jpg" },
    { "id": 233, "name": "阿魏", "description": "消食化积，散寒止痛。", "image": "images/阿魏.jpg" },
    { "id": 234, "name": "使君子", "description": "驱虫消积。", "image": "images/使君子.jpg" },
    { "id": 235, "name": "苦楝皮", "description": "驱虫。", "image": "images/苦楝皮.jpg" },
    { "id": 236, "name": "槟榔", "description": "驱虫消积，行气利水。", "image": "images/槟榔.jpg" },
    { "id": 237, "name": "南瓜子", "description": "驱虫。", "image": "images/南瓜子.jpg" },
    { "id": 238, "name": "鹤草芽", "description": "驱虫。", "image": "images/鹤草芽.jpg" },
    { "id": 239, "name": "雷丸", "description": "驱虫。", "image": "images/雷丸.jpg" },
    { "id": 240, "name": "榧子", "description": "驱虫。", "image": "images/榧子.jpg" },
    { "id": 241, "name": "鹤虱", "description": "驱虫。", "image": "images/鹤虱.jpg" },
    { "id": 242, "name": "芜荑", "description": "驱虫。", "image": "images/芜荑.jpg" },
    { "id": 243, "name": "小蓟", "description": "凉血止血，散瘀解毒。", "image": "images/小蓟.jpg" },
    { "id": 244, "name": "大蓟", "description": "凉血止血，散瘀解毒。", "image": "images/大蓟.jpg" },
    { "id": 245, "name": "地榆", "description": "凉血止血，解毒敛疮。", "image": "images/地榆.jpg" },
    { "id": 246, "name": "槐花", "description": "凉血止血，清肝泻火。", "image": "images/槐花.jpg" },
    { "id": 247, "name": "侧柏叶", "description": "凉血止血，化痰止咳。", "image": "images/侧柏叶.jpg" },
    { "id": 248, "name": "白茅根", "description": "凉血止血，清热利尿。", "image": "images/白茅根.jpg" },
    { "id": 249, "name": "苎麻根", "description": "凉血止血，清热安胎。", "image": "images/苎麻根.jpg" },
    { "id": 250, "name": "羊蹄", "description": "凉血止血，清热解毒。", "image": "images/羊蹄.jpg" },
    { "id": 251, "name": "三七", "description": "化瘀止血，活血定痛。", "image": "images/三七.jpg" },
    { "id": 252, "name": "茜草", "description": "凉血止血，化瘀通经。", "image": "images/茜草.jpg" },
    { "id": 253, "name": "蒲黄", "description": "止血，化瘀，通淋。", "image": "images/蒲黄.jpg" },
    { "id": 254, "name": "降香", "description": "止血，化瘀止痛。", "image": "images/降香.jpg" },
    { "id": 255, "name": "花蕊石", "description": "化瘀止血。", "image": "images/花蕊石.jpg" },
    { "id": 256, "name": "白及", "description": "收敛止血，消肿生肌。", "image": "images/白及.jpg" },
    { "id": 257, "name": "仙鹤草", "description": "收敛止血，补虚。", "image": "images/仙鹤草.jpg" },
    { "id": 258, "name": "藕节", "description": "收敛止血。", "image": "images/藕节.jpg" },
    { "id": 259, "name": "棕榈炭", "description": "收敛止血。", "image": "images/棕榈炭.jpg" },
    { "id": 260, "name": "血余炭", "description": "收敛止血，化瘀利尿。", "image": "images/血余炭.jpg" },
    { "id": 261, "name": "紫珠", "description": "收敛止血，清热解毒。", "image": "images/紫珠.jpg" },
    { "id": 262, "name": "檵木", "description": "收敛止血。", "image": "images/檵木.jpg" },
    { "id": 263, "name": "艾叶", "description": "温经止血，散寒止痛。", "image": "images/艾叶.jpg" },
    { "id": 264, "name": "炮姜", "description": "温经止血，温中止痛。", "image": "images/炮姜.jpg" },
    { "id": 265, "name": "灶心土", "description": "温经止血，温中止痛。", "image": "images/灶心土.jpg" },
    { "id": 266, "name": "川芎", "description": "活血行气，祛风止痛。", "image": "images/川芎.jpg" },
    { "id": 267, "name": "延胡索", "description": "活血，行气，止痛。", "image": "images/延胡索.jpg" },
    { "id": 268, "name": "郁金", "description": "活血止痛，行气解郁，清心凉血。", "image": "images/郁金.jpg" },
    { "id": 269, "name": "姜黄", "description": "活血行气，通经止痛。", "image": "images/姜黄.jpg" },
    { "id": 270, "name": "乳香", "description": "活血行气，通经止痛。", "image": "images/乳香.jpg" },
    { "id": 271, "name": "没药", "description": "活血止痛，消肿生肌。", "image": "images/没药.jpg" },
    { "id": 272, "name": "五灵脂", "description": "活血止痛，化瘀止血。", "image": "images/五灵脂.jpg" },
    { "id": 273, "name": "夏天无", "description": "活血通络，行气止痛。", "image": "images/夏天无.jpg" },
    { "id": 274, "name": "枫香脂", "description": "活血止痛，解毒生肌。", "image": "images/枫香脂.jpg" },
    { "id": 275, "name": "丹参", "description": "活血祛瘀，凉血消痈，安神宁心。", "image": "images/丹参.jpg" },
    { "id": 276, "name": "红花", "description": "活血通经，散瘀止痛。", "image": "images/红花.jpg" },
    { "id": 277, "name": "桃仁", "description": "活血祛瘀，润肠通便。", "image": "images/桃仁.jpg" },
    { "id": 278, "name": "益母草", "description": "活血调经，利水消肿。", "image": "images/益母草.jpg" },
    { "id": 279, "name": "泽兰", "description": "活血调经，利水消肿。", "image": "images/泽兰.jpg" },
    { "id": 280, "name": "牛膝", "description": "活血通经，补肝肾，强筋骨。", "image": "images/牛膝.jpg" },
    { "id": 281, "name": "鸡血藤", "description": "活血补血，调经止痛，舒筋活络。", "image": "images/鸡血藤.jpg" },
    { "id": 282, "name": "王不留行", "description": "活血通经，下乳消肿。", "image": "images/王不留行.jpg" },
    { "id": 283, "name": "月季花", "description": "活血调经，疏肝解郁。", "image": "images/月季花.jpg" },
    { "id": 284, "name": "凌霄花", "description": "活血通经，凉血祛风。", "image": "images/凌霄花.jpg" },
    { "id": 285, "name": "土鳖虫", "description": "破血逐瘀。", "image": "images/土鳖虫.jpg" },
    { "id": 286, "name": "马钱子", "description": "祛风止痛，散瘀通络。", "image": "images/马钱子.jpg" },
    { "id": 287, "name": "刘寄奴", "description": "破血通经，散瘀止痛。", "image": "images/刘寄奴.jpg" },
    { "id": 288, "name": "血竭", "description": "活血定痛，化瘀止血，生肌敛疮。", "image": "images/血竭.jpg" },
    { "id": 289, "name": "骨碎补", "description": "活血续伤，补肾强骨。", "image": "images/骨碎补.jpg" },
    { "id": 290, "name": "自然铜", "description": "活血止痛，散瘀消肿。", "image": "images/自然铜.jpg" },
    { "id": 291, "name": "苏木", "description": "活血祛瘀，消肿止痛。", "image": "images/苏木.jpg" },
    { "id": 292, "name": "儿茶", "description": "活血止痛，止血，化痰止咳。", "image": "images/儿茶.jpg" },
    { "id": 293, "name": "莪术", "description": "破血行气，消积止痛。", "image": "images/莪术.jpg" },
    { "id": 294, "name": "三棱", "description": "破血行气，消积止痛。", "image": "images/三棱.jpg" },
    { "id": 295, "name": "水蛭", "description": "破血通经，逐瘀。", "image": "images/水蛭.jpg" },
    { "id": 296, "name": "虻虫", "description": "破血逐瘀，通经。", "image": "images/虻虫.jpg" },
    { "id": 297, "name": "斑蝥", "description": "破血逐瘀，攻毒蚀疮。", "image": "images/斑蝥.jpg" },
    { "id": 298, "name": "穿山甲", "description": "活血消肿，通经下乳。", "image": "images/穿山甲.jpg" },
    { "id": 299, "name": "半夏", "description": "燥湿化痰，和胃止呕，消痞散结。", "image": "images/半夏.jpg" },
    { "id": 300, "name": "天南星", "description": "燥湿化痰，祛风止痉，散结消肿。", "image": "images/天南星.jpg" },
    { "id": 301, "name": "禹白附", "description": "燥湿化痰，祛风止痉。", "image": "images/禹白附.jpg" },
    { "id": 302, "name": "白芥子", "description": "温肺豁痰，利气散结。", "image": "images/白芥子.jpg" },
    { "id": 303, "name": "旋覆花", "description": "降气化痰，止咳平喘。", "image": "images/旋覆花.jpg" },
    { "id": 304, "name": "白前", "description": "降气化痰，止咳平喘。", "image": "images/白前.jpg" },
    { "id": 305, "name": "皂荚", "description": "祛痰开窍，散结消肿。", "image": "images/皂荚.jpg" },
    { "id": 306, "name": "猫爪草", "description": "祛痰散结，化痰止咳。", "image": "images/猫爪草.jpg" },
    { "id": 307, "name": "川贝母", "description": "清热化痰，润肺止咳，散结消肿。", "image": "images/川贝母.jpg" },
    { "id": 308, "name": "浙贝母", "description": "清热化痰，散结消肿。", "image": "images/浙贝母.jpg" },
    { "id": 309, "name": "瓜蒌", "description": "清热化痰，宽胸散结，润肠通便。", "image": "images/瓜蒌.jpg" },
    { "id": 310, "name": "竹茹", "description": "清热化痰，止呕，安胎。", "image": "images/竹茹.jpg" },
    { "id": 311, "name": "竹沥", "description": "清热化痰，利气宽胸。", "image": "images/竹沥.jpg" },
    { "id": 312, "name": "前胡", "description": "降气化痰，散风热。", "image": "images/前胡.jpg" },
    { "id": 313, "name": "桔梗", "description": "宣肺，利咽，祛痰，排脓。", "image": "images/桔梗.jpg" },
    { "id": 314, "name": "胖大海", "description": "清肺化痰，利咽开音。", "image": "images/胖大海.jpg" },
    { "id": 315, "name": "天竺黄", "description": "清热豁痰，凉心定惊。", "image": "images/天竺黄.jpg" },
    { "id": 316, "name": "海藻", "description": "泻火软坚，消痰。", "image": "images/海藻.jpg" },
    { "id": 317, "name": "昆布", "description": "软坚散结，消痰。", "image": "images/昆布.jpg" },
    { "id": 318, "name": "黄药子", "description": "散结消瘿，解毒。", "image": "images/黄药子.jpg" },
    { "id": 319, "name": "海蛤壳", "description": "化痰，软坚，利水。", "image": "images/海蛤壳.jpg" },
    { "id": 320, "name": "海浮石", "description": "清肺化痰，软坚散结。", "image": "images/海浮石.jpg" },
    { "id": 321, "name": "瓦楞子", "description": "化痰，软坚散结。", "image": "images/瓦楞子.jpg" },
    { "id": 322, "name": " 礞石", "description": "化痰，软坚散结。", "image": "images/ 礞石.jpg" },
    { "id": 323, "name": "杏仁", "description": "止咳平喘，润肠通便。", "image": "images/杏仁.jpg" },
    { "id": 324, "name": "紫苏子", "description": "降气消痰，止咳平喘，润肠通便。", "image": "images/紫苏子.jpg" },
    { "id": 325, "name": "百部", "description": "润肺止咳，杀虫灭虱。", "image": "images/百部.jpg" },
    { "id": 326, "name": "紫菀", "description": "润肺下气，化痰止咳。", "image": "images/紫菀.jpg" },
    { "id": 327, "name": "款冬花", "description": "润肺下气，化痰止咳。", "image": "images/款冬花.jpg" },
    { "id": 328, "name": "桑白皮", "description": "泻肺平喘，利水消肿。", "image": "images/桑白皮.jpg" },
    { "id": 329, "name": "葶苈子", "description": "泻肺平喘，行水消肿。", "image": "images/葶苈子.jpg" },
    { "id": 330, "name": "白果", "description": "敛肺定喘，止带缩尿。", "image": "images/白果.jpg" },
    { "id": 331, "name": "罗汉果", "description": "清肺利咽，化痰止咳。", "image": "images/罗汉果.jpg" },
    { "id": 332, "name": "枇杷叶", "description": "清肺止咳，和胃降逆。", "image": "images/枇杷叶.jpg" },
    { "id": 333, "name": "矮地茶", "description": "止咳平喘，活血化瘀。", "image": "images/矮地茶.jpg" },
    { "id": 334, "name": "洋金花", "description": "止咳平喘，镇痛，解痉。", "image": "images/洋金花.jpg" },
    { "id": 335, "name": "华山参", "description": "止咳平喘。", "image": "images/华山参.jpg" },
    { "id": 336, "name": "满山红", "description": "止咳平喘，活血化瘀。", "image": "images/满山红.jpg" },
    { "id": 337, "name": "胡颓子叶", "description": "止咳平喘。", "image": "images/胡颓子叶.jpg" },
    { "id": 338, "name": "马兜铃", "description": "清肺降气，止咳平喘。", "image": "images/马兜铃.jpg" },
    { "id": 339, "name": "朱砂", "description": "重镇安神，清热解毒。", "image": "images/朱砂.jpg" },
    { "id": 340, "name": "磁石", "description": "镇惊安神，平肝潜阳。", "image": "images/磁石.jpg" },
    { "id": 341, "name": "龙骨", "description": "镇惊安神，平肝潜阳，收敛固涩。", "image": "images/龙骨.jpg" },
    { "id": 342, "name": "琥珀", "description": "镇惊安神，活血散瘀。", "image": "images/琥珀.jpg" },
    { "id": 343, "name": "酸枣仁", "description": "养心安神，敛汗。", "image": "images/酸枣仁.jpg" },
    { "id": 344, "name": "柏子仁", "description": "养心安神，润肠通便。", "image": "images/柏子仁.jpg" },
    { "id": 345, "name": "灵芝", "description": "安神益气，止咳平喘。", "image": "images/灵芝.jpg" },
    { "id": 346, "name": "远志", "description": "安神益智，祛痰，消肿。", "image": "images/远志.jpg" },
    { "id": 347, "name": "缬草", "description": "安神定志，活血消肿。", "image": "images/缬草.jpg" },
    { "id": 348, "name": "首乌藤", "description": "养心安神，祛风通络。", "image": "images/首乌藤.jpg" },
    { "id": 349, "name": "合欢皮", "description": "解郁安神，活血消肿。", "image": "images/合欢皮.jpg" },
    { "id": 350, "name": "石决明", "description": "平肝潜阳，清肝明目。", "image": "images/石决明.jpg" },
    { "id": 351, "name": "牡蛎", "description": "平肝潜阳，软坚散结，收敛固涩。", "image": "images/牡蛎.jpg" },
    { "id": 352, "name": "代赭石", "description": "平肝潜阳，降逆止呕。", "image": "images/代赭石.jpg" },
    { "id": 353, "name": "珍珠母", "description": "平肝潜阳，清肝明目。", "image": "images/珍珠母.jpg" },
    { "id": 354, "name": "紫贝齿", "description": "平肝潜阳，清肝明目。", "image": "images/紫贝齿.jpg" },
    { "id": 355, "name": "刺蒺藜", "description": "平肝疏肝，祛风明目。", "image": "images/刺蒺藜.jpg" },
    { "id": 356, "name": "罗布麻叶", "description": "平肝安神，清热利水。", "image": "images/罗布麻叶.jpg" },
    { "id": 357, "name": "生铁落", "description": "平肝息风，清热解毒。", "image": "images/生铁落.jpg" },
    { "id": 358, "name": "羚羊角", "description": "平肝息风，清肝明目。", "image": "images/羚羊角.jpg" },
    { "id": 359, "name": "牛黄", "description": "清心豁痰，凉肝息风，清热解毒。", "image": "images/牛黄.jpg" },
    { "id": 360, "name": "钩藤", "description": "清热平肝，息风止痉。", "image": "images/钩藤.jpg" },
    { "id": 361, "name": "天麻", "description": "息风止痉，平抑肝阳。", "image": "images/天麻.jpg" },
    { "id": 362, "name": "地龙", "description": "清热定惊，通络，平喘，利尿。", "image": "images/地龙.jpg" },
    { "id": 363, "name": "全蝎", "description": "息风止痉，攻毒散结。", "image": "images/全蝎.jpg" },
    { "id": 364, "name": "蜈蚣", "description": "息风止痉，攻毒散结。", "image": "images/蜈蚣.jpg" },
    { "id": 365, "name": "僵蚕", "description": "息风止痉，祛风止痛。", "image": "images/僵蚕.jpg" },
    { "id": 366, "name": "珍珠", "description": "镇心定惊，明目消翳。", "image": "images/珍珠.jpg" },
    { "id": 367, "name": "麝香", "description": "开窍醒神，活血通经。", "image": "images/麝香.jpg" },
    { "id": 368, "name": "冰片", "description": "开窍醒神，清热止痛。", "image": "images/冰片.jpg" },
    { "id": 369, "name": "石菖蒲", "description": "开窍醒神，化湿和胃。", "image": "images/石菖蒲.jpg" },
    { "id": 370, "name": "苏合香", "description": "开窍醒神，辟秽止痛。", "image": "images/苏合香.jpg" },
    { "id": 371, "name": "人参", "description": "大补元气，复脉固脱，安神益智。", "image": "images/人参.jpg" },
    { "id": 372, "name": "西洋参", "description": "补气养阴，清热生津。", "image": "images/西洋参.jpg" },
    { "id": 373, "name": "党参", "description": "补中益气，健脾益肺。", "image": "images/党参.jpg" },
    { "id": 374, "name": "太子参", "description": "补气健脾，生津润肺。", "image": "images/太子参.jpg" },
    { "id": 375, "name": "黄芪", "description": "补气升阳，固表止汗，利水消肿。", "image": "images/黄芪.jpg" },
    { "id": 376, "name": "白术", "description": "健脾益气，燥湿利水。", "image": "images/白术.jpg" },
    { "id": 377, "name": "山药", "description": "补脾养胃，生津益肺。", "image": "images/山药.jpg" },
    { "id": 378, "name": "白扁豆", "description": "健脾化湿，和中益气。", "image": "images/白扁豆.jpg" },
    { "id": 379, "name": "甘草", "description": "补脾益气，清热解毒，祛痰止咳。", "image": "images/甘草.jpg" },
    { "id": 380, "name": "大枣", "description": "补中益气，养血安神。", "image": "images/大枣.jpg" },
    { "id": 381, "name": "刺五加", "description": "补气健脾，益气安神。", "image": "images/刺五加.jpg" },
    { "id": 382, "name": "绞股蓝", "description": "健脾益气，清热化痰。", "image": "images/绞股蓝.jpg" },
    { "id": 383, "name": "红景天", "description": "补气活血，通脉平喘。", "image": "images/红景天.jpg" },
    { "id": 384, "name": "沙棘", "description": "健脾消食，活血散瘀。", "image": "images/沙棘.jpg" },
    { "id": 385, "name": "饴糖", "description": "补脾缓急，润肺止咳。", "image": "images/饴糖.jpg" },
    { "id": 386, "name": "蜂蜜", "description": "补中润燥，解毒。", "image": "images/蜂蜜.jpg" },
    { "id": 387, "name": "鹿茸", "description": "壮肾阳，益精血，强筋骨。", "image": "images/鹿茸.jpg" },
    { "id": 388, "name": "巴戟天", "description": "补肾阳，强筋骨，祛风湿。", "image": "images/巴戟天.jpg" },
    { "id": 389, "name": "杜仲", "description": "补肝肾，强筋骨。", "image": "images/杜仲.jpg" },
    { "id": 390, "name": "续断", "description": "补肝肾，强筋骨，续折伤。", "image": "images/续断.jpg" },
    { "id": 391, "name": "肉苁蓉", "description": "补肾阳，益精血，润肠通便。", "image": "images/肉苁蓉.jpg" },
    { "id": 392, "name": "补骨脂", "description": "补肾助阳，纳气平喘。", "image": "images/补骨脂.jpg" },
    { "id": 393, "name": "菟丝子", "description": "补肾益精，养肝明目。", "image": "images/菟丝子.jpg" },
    { "id": 394, "name": "冬虫夏草", "description": "补肾益肺，止血化痰。", "image": "images/冬虫夏草.jpg" },
    { "id": 395, "name": "蛤蚧", "description": "补肺益肾，纳气平喘。", "image": "images/蛤蚧.jpg" },
    { "id": 396, "name": "淫羊藿", "description": "补肾壮阳，强筋骨。", "image": "images/淫羊藿.jpg" },
    { "id": 397, "name": "仙茅", "description": "补肾壮阳，强筋骨。", "image": "images/仙茅.jpg" },
    { "id": 398, "name": "锁阳", "description": "补肾阳，益精血。", "image": "images/锁阳.jpg" },
    { "id": 399, "name": "益智仁", "description": "暖肾固精，缩尿，温脾止泻。", "image": "images/益智仁.jpg" },
    { "id": 400, "name": "沙苑子", "description": "补肾固精，养肝明目。", "image": "images/沙苑子.jpg" },
    { "id": 401, "name": "核桃仁", "description": "补肾温肺，润肠通便。", "image": "images/核桃仁.jpg" },
    { "id": 402, "name": "胡芦巴", "description": "补肾助阳，祛风除湿。", "image": "images/胡芦巴.jpg" },
    { "id": 403, "name": "韭菜子", "description": "补肾助阳，益肝健胃。", "image": "images/韭菜子.jpg" },
    { "id": 404, "name": "阳起石", "description": "补肾壮阳。", "image": "images/阳起石.jpg" },
    { "id": 405, "name": "紫石英", "description": "温肾助阳，镇心安神。", "image": "images/紫石英.jpg" },
    { "id": 406, "name": "海狗肾", "description": "补肾壮阳。", "image": "images/海狗肾.jpg" },
    { "id": 407, "name": "海马", "description": "补肾壮阳，散结消肿。", "image": "images/海马.jpg" },
    { "id": 408, "name": "哈蟆油", "description": "补肾益精，养阴润肺。", "image": "images/哈蟆油.jpg" },
    { "id": 409, "name": "羊红膻", "description": "补肾壮阳。", "image": "images/羊红膻.jpg" },
    { "id": 410, "name": "紫河车", "description": "补肾益精，养血益气。", "image": "images/紫河车.jpg" },
    { "id": 411, "name": "当归", "description": "补血活血，调经止痛，润燥通便。", "image": "images/当归.jpg" },
    { "id": 412, "name": "熟地黄", "description": "补血滋阴，益精填髓。", "image": "images/熟地黄.jpg" },
    { "id": 413, "name": "白芍", "description": "养血调经，敛阴止汗。", "image": "images/白芍.jpg" },
    { "id": 414, "name": "阿胶", "description": "补血止血，滋阴润燥。", "image": "images/阿胶.jpg" },
    { "id": 415, "name": "何首乌", "description": "补肝肾，益精血，乌须黑发。", "image": "images/何首乌.jpg" },
    { "id": 416, "name": "龙眼肉", "description": "补心益脾，养血安神。", "image": "images/龙眼肉.jpg" },
    { "id": 417, "name": "北沙参", "description": "养阴清肺，益胃生津。", "image": "images/北沙参.jpg" },
    { "id": 418, "name": "南沙参", "description": "养阴清肺，益胃生津。", "image": "images/南沙参.jpg" },
    { "id": 419, "name": "百合", "description": "养阴润肺，清心安神。", "image": "images/百合.jpg" },
    { "id": 420, "name": "麦冬", "description": "养阴润肺，益胃生津。", "image": "images/麦冬.jpg" },
    { "id": 421, "name": "天冬", "description": "养阴润燥，清肺生津。", "image": "images/天冬.jpg" },
    { "id": 422, "name": "石斛", "description": "益胃生津，滋阴清热。", "image": "images/石斛.jpg" },
    { "id": 423, "name": "玉竹", "description": "养阴润燥，生津止渴。", "image": "images/玉竹.jpg" },
    { "id": 424, "name": "黄精", "description": "补气养阴，健脾，润肺。", "image": "images/黄精.jpg" },
    { "id": 425, "name": "枸杞子", "description": "滋补肝肾，益精明目。", "image": "images/枸杞子.jpg" },
    { "id": 426, "name": "墨旱莲", "description": "滋补肝肾，凉血止血。", "image": "images/墨旱莲.jpg" },
    { "id": 427, "name": "女贞子", "description": "滋补肝肾，清虚热。", "image": "images/女贞子.jpg" },
    { "id": 428, "name": "龟甲", "description": "滋阴潜阳，益肾健骨。", "image": "images/龟甲.jpg" },
    { "id": 429, "name": "鳖甲", "description": "滋阴潜阳，软坚散结。", "image": "images/鳖甲.jpg" },
    { "id": 430, "name": "明党参", "description": "滋阴润肺，益气。", "image": "images/明党参.jpg" },
    { "id": 431, "name": "桑椹", "description": "滋阴补血，润肠通便。", "image": "images/桑椹.jpg" },
    { "id": 432, "name": "黑芝麻", "description": "补肝肾，润五脏。", "image": "images/黑芝麻.jpg" },
    { "id": 433, "name": "麻黄根", "description": "止汗。", "image": "images/麻黄根.jpg" },
    { "id": 434, "name": "浮小麦", "description": "益气，除热，止汗。", "image": "images/浮小麦.jpg" },
    { "id": 435, "name": "糯稻根须", "description": "益气，止汗。", "image": "images/糯稻根须.jpg" },
    { "id": 436, "name": "五味子", "description": "收敛固涩，益气生津。", "image": "images/五味子.jpg" },
    { "id": 437, "name": "乌梅", "description": "收敛止泻，涩精止遗。", "image": "images/乌梅.jpg" },
    { "id": 438, "name": "诃子", "description": "涩肠止泻，敛肺止咳。", "image": "images/诃子.jpg" },
    { "id": 439, "name": "肉豆蔻", "description": "涩肠止泻，温中行气。", "image": "images/肉豆蔻.jpg" },
    { "id": 440, "name": "赤石脂", "description": "涩肠止泻，止血。", "image": "images/赤石脂.jpg" },
    { "id": 441, "name": "五倍子", "description": "涩肠止泻，敛肺止咳。", "image": "images/五倍子.jpg" },
    { "id": 442, "name": "石榴皮", "description": "涩肠止泻，止血。", "image": "images/石榴皮.jpg" },
    { "id": 443, "name": "禹余粮", "description": "涩肠止泻，止血。", "image": "images/禹余粮.jpg" },
    { "id": 444, "name": "山茱萸", "description": "滋补肝肾，涩精止遗。", "image": "images/山茱萸.jpg" },
    { "id": 445, "name": "覆盆子", "description": "涩精止遗，明目。", "image": "images/覆盆子.jpg" },
    { "id": 446, "name": "桑螵蛸", "description": "涩精止遗。", "image": "images/桑螵蛸.jpg" },
    { "id": 447, "name": "金樱子", "description": "涩精止遗，固崩止带。", "image": "images/金樱子.jpg" },
    { "id": 448, "name": "海螵蛸", "description": "涩精止遗，止血。", "image": "images/海螵蛸.jpg" },
    { "id": 449, "name": "莲子", "description": "补脾止泻，益肾涩精，养心安神。", "image": "images/莲子.jpg" },
    { "id": 450, "name": "芡实", "description": "补脾止泻，益肾涩精。", "image": "images/芡实.jpg" },
    { "id": 451, "name": "椿皮", "description": "清热燥湿，涩肠止泻。", "image": "images/椿皮.jpg" },
    { "id": 452, "name": "刺猬皮", "description": "收敛止血。", "image": "images/刺猬皮.jpg" },
    { "id": 453, "name": "鸡冠花", "description": "收敛止血，清热解毒。", "image": "images/鸡冠花.jpg" },
    { "id": 454, "name": "常山", "description": "截疟，涌吐痰饮。", "image": "images/常山.jpg" },
    { "id": 455, "name": "瓜蒂", "description": "涌吐痰食。", "image": "images/瓜蒂.jpg" },
    { "id": 456, "name": "胆矾", "description": "燥湿化痰，止血。", "image": "images/胆矾.jpg" },
    { "id": 457, "name": "雄黄", "description": "解毒，杀虫。", "image": "images/雄黄.jpg" },
    { "id": 458, "name": "硫磺", "description": "补火助阳，解毒杀虫。", "image": "images/硫磺.jpg" },
    { "id": 459, "name": "蛇床子", "description": "温肾壮阳，燥湿杀虫。", "image": "images/蛇床子.jpg" },
    { "id": 460, "name": "蟾酥", "description": "解毒，止痛。", "image": "images/蟾酥.jpg" },
    { "id": 461, "name": "白矾", "description": "解毒杀虫，燥湿止痒。", "image": "images/白矾.jpg" },
    { "id": 462, "name": "樟脑", "description": "温经通络，杀虫止痒。", "image": "images/樟脑.jpg" },
    { "id": 463, "name": "木鳖子", "description": "解毒散结，通络止痛。", "image": "images/木鳖子.jpg" },
    { "id": 464, "name": "土荆皮", "description": "祛风燥湿，杀虫止痒。", "image": "images/土荆皮.jpg" },
    { "id": 465, "name": "蜂房", "description": "攻毒杀虫，止痛。", "image": "images/蜂房.jpg" },
    { "id": 466, "name": "大蒜", "description": "解毒，杀虫。", "image": "images/大蒜.jpg" },
    { "id": 467, "name": "升药", "description": "提毒拔脓，去腐生肌。", "image": "images/升药.jpg" },
    { "id": 468, "name": "炉甘石", "description": "解毒，止痒。", "image": "images/炉甘石.jpg" },
    { "id": 469, "name": "硼砂", "description": "外用清热解毒，消肿。", "image": "images/硼砂.jpg" },
    { "id": 470, "name": "轻粉", "description": "攻毒，利水。", "image": "images/轻粉.jpg" },
    { "id": 471, "name": "砒石", "description": "攻毒，杀虫。", "image": "images/砒石.jpg" },
    { "id": 472, "name": "铅丹", "description": "收湿生肌，止血。", "image": "images/铅丹.jpg" }
];

// 添加自动轮播逻辑（核心速度控制）
let currentIndex = 0;
let autoPlayInterval;

function startAutoPlay(interval = 300000) { // 默认3秒切换
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % filteredHerbs.length;
    scrollToHerb(currentIndex);
  }, interval);
}

// 添加滚动动画控制
function scrollToHerb(index) {
  const container = document.getElementById('carouselItems');
  const itemWidth = document.querySelector('.herb-item').offsetWidth;
  
  // 添加平滑滚动动画
  container.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  container.style.transform = `translateX(-${index * itemWidth}px)`;
}

// 修改后的渲染函数（添加性能优化）
function renderHerbs(filteredHerbs) {
  const carouselItems = document.getElementById('carouselItems');
  carouselItems.innerHTML = '';
  
  // 使用文档片段提升渲染性能
  const fragment = document.createDocumentFragment();
  
  filteredHerbs.forEach(herb => {
    const herbItem = document.createElement('div');
    herbItem.className = 'herb-item';
    herbItem.innerHTML = `
      <img src="${herb.image}" alt="${herb.name}" loading="lazy">
      <div>
        <h3>${herb.name}</h3>
        <p>${herb.description}</p>
      </div>
    `;
    fragment.appendChild(herbItem);
  });

  carouselItems.appendChild(fragment);
  
  // 启动自动播放（速度由参数控制）
  startAutoPlay(300000); // 3秒切换一次
}

function filterHerbs(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredHerbs = herbsData.filter(herb =>
      herb.name.toLowerCase().includes(searchTerm)
  );
  renderHerbs(filteredHerbs);
}

// document.getElementById('searchInput').addEventListener('input', filterHerbs);

// Initial render
renderHerbs(herbsData);

//----------------------------------

// 导航按钮点击事件
document.querySelectorAll('.styled-button').forEach(btn => {
  btn.addEventListener('click', function() {
      const targetId = this.dataset.target;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
          // 平滑滚动到目标元素
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
          
          // 可选：添加高亮效果
          targetElement.classList.add('highlight');
          setTimeout(() => {
              targetElement.classList.remove('highlight');
          }, 2000);
      }
  });
});

//------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  let myChart = echarts.init(document.getElementById('ch-1'));
  let option = {
    title : {
        text: '中药种类分布',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        x:'left',
        data:['中药种类数量']
    },
    dataRange: {
        min: 0,
        max: 500,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '中药种类数量',
            type: 'map',
            mapType: 'china',
            layoutCenter: ['50%', '50%'], // 居中显示
    layoutSize: '120%', // 地图尺寸放大到容器的120%
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
    { "name": "北京", "value": 1 },
    { "name": "天津", "value": 1 },
    { "name": "上海", "value": 1 },
    { "name": "重庆", "value": 74 },
    { "name": "河北", "value": 159 },
    { "name": "河南", "value": 316 },
    { "name": "云南", "value": 340 },
    { "name": "辽宁", "value": 83 },
    { "name": "黑龙江", "value": 104 },
    { "name": "湖南", "value": 156 },
    { "name": "安徽", "value": 209 },
    { "name": "山东", "value": 239 },
    { "name": "新疆", "value": 76 },
    { "name": "江苏", "value": 74 },
    { "name": "浙江", "value": 89 },
    { "name": "江西", "value": 187 },
    { "name": "湖北", "value": 265 },
    { "name": "广西", "value": 180 },
    { "name": "甘肃", "value": 293 },
    { "name": "山西", "value": 125 },
    { "name": "内蒙古", "value": 84 },
    { "name": "陕西", "value": 190 },
    { "name": "吉林", "value": 82 },
    { "name": "福建", "value": 45 },
    { "name": "贵州", "value": 138 },
    { "name": "广东", "value": 110 },
    { "name": "青海", "value": 22 },
    { "name": "西藏", "value": 16 },
    { "name": "四川", "value": 474 },
    { "name": "宁夏", "value": 20 },
    { "name": "海南", "value": 23 },
    { "name": "台湾", "value": 0 },
    { "name": "香港", "value": 0 },
    { "name": "澳门", "value": 0 }
]
        },
        ],
    graphic: [{
          type: 'text',
          left: 'right',
          top: 'bottom',
          style: {
            text: '审图号：GS（2024）0650号', // 替换为实际审图号
            font: '12px Arial',
            fill: '#333'
          }
        }]
};
                    
  myChart.setOption(option);
});

document.addEventListener("DOMContentLoaded", function() {
  let myChart = echarts.init(document.getElementById('ch-2'));
  const colors = ['#2980B9','#16A085','#C0392B','#D35400','#2C3E50'];
  const bgColor = 'transparent';
  const itemStyle = {
      star5: {
        color: colors[0]
      },
      star4: {
        color: colors[1]
      },
      star3: {
        color: colors[2]
      },
      star2: {
        color: colors[3]
      }
    };
    const data = [
      {
        "name": "中药",
        "itemStyle": {
          "color": colors[2]
        },
        "children": [
          {
            "name": "解表药",
            "children": [
              {
                "name": "5☆",
                "children": [
                  {
                    "name": "发散风寒"
                  },
                  {
                    "name": "发散风热"
                  }
                ]
              }
            ]
          },
          {
            "name": "清热药",
            "children": [
              {
                "name": "5☆",
                "children": [
                  {
                    "name": "清热泻火"
                  },
                  {
                    "name": "清热燥湿"
                  },
                  {
                    "name": "清热解毒"
                  },
                  {
                    "name": "清热凉血"
                  },
                  {
                    "name": "清虚热"
                  }
                ]
              }
            ]
          },
          {
            "name": "祛风湿药",
            "children": [
              {
                "name": "4☆",
                "children": [
                  {
                    "name": "祛风寒湿"
                  },
                  {
                    "name": "祛风湿热"
                  },
                  {
                    "name": "祛风湿强筋骨"
                  }
                ]
              }
            ]
          },
          {
          "name": "驱虫药",
          "children": [
            {
              "name": "2☆",
              "children": [
                {
                  "name": "驱虫"
                }
              ]
            }
          ]
        },
          {
            "name": "利水渗湿药",
            "children": [
              {
                "name": "4☆",
                "children": [
                  {
                    "name": "利水消肿"
                  },
                  {
                    "name": "利尿通淋"
                  },
                  {
                    "name": "利湿退黄"
                  }
                ]
              }
            ]
          },
          {
            "name": "理气药",
            "children": [
              {
                "name": "3☆",
                "children": [
                  {
                    "name": "理气"
                  }
                ]
              }
            ]
          },
          {
            "name": "消食药",
            "children": [
              {
                "name": "2☆",
                "children": [
                  {
                    "name": "消食"
                  }
                ]
              }
            ]
          },
          {
            "name": "止血药",
            "children": [
              {
                "name": "3☆",
                "children": [
                  {
                    "name": "凉血止血"
                  },
                  {
                    "name": "化瘀止血"
                  },
                  {
                    "name": "收敛止血"
                  },
                  {
                    "name": "温经止血"
                  }
                ]
              }
            ]
          },
          {
            "name": "止咳平喘药",
            "children": [
              {
                "name": "4☆",
                "children": [
                  {
                    "name": "温化寒痰"
                  },
                  {
                    "name": "清化热痰"
                  },
                  {
                    "name": "止咳平喘"
                  }
                ]
              }
            ]
          },
          {
            "name": "补虚药",
            "children": [
              {
                "name": "5☆",
                "children": [
                  {
                    "name": "补气"
                  },
                  {
                    "name": "补阳"
                  },
                  {
                    "name": "补血"
                  },
                  {
                    "name": "补阴"
                  }
                ]
              }
            ]
          },
          {
            "name": "收涩药",
            "children": [
              {
                "name": "3☆",
                "children": [
                  {
                    "name": "固表止汗"
                  },
                  {
                    "name": "敛肺涩肠"
                  },
                  {
                    "name": "固精缩尿止带"
                  }
                ]
              }
            ]
          },
          {
            "name": "止痒药",
            "children": [
              {
                "name": "2☆",
                "children": [
                  {
                    "name": "攻毒杀虫止痒"
                  }
                ]
              }
            ]
          },
        ]
      }
    ];
    for (let j = 0; j < data.length; ++j) {
      let level1 = data[j].children;
      for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
          let style = (function (name) {
            switch (name) {
              case '5☆':
                bookScoreId = 0;
                return itemStyle.star5;
              case '4☆':
                bookScoreId = 1;
                return itemStyle.star4;
              case '3☆':
                bookScoreId = 2;
                return itemStyle.star3;
              case '2☆':
                bookScoreId = 3;
                return itemStyle.star2;
            }
          })(block[star].name);
          block[star].label = {
            color: style.color,
            downplay: {
              opacity: 0.5
            }
          };
          if (block[star].children) {
            style = {
              opacity: 1,
              color: style.color
            };
            block[star].children.forEach(function (book) {
              book.value = 1;
              book.itemStyle = style;
              book.label = {
                color: style.color
              };
              let value = 1;
              if (bookScoreId === 0 || bookScoreId === 3) {
                value = 5;
              }
              if (bookScore[bookScoreId]) {
                bookScore[bookScoreId].value += value;
              } else {
                bookScore[bookScoreId] = {
                  color: colors[bookScoreId],
                  value: value
                };
              }
            });
          }
        }
        level1[i].itemStyle = {
          color: data[j].itemStyle.color
        };
      }
    }
    let option = {
      backgroundColor: bgColor,
      color: colors,
      textStyle: {
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold'
      },
      series: [
        {
          type: 'sunburst',
          center: ['50%', '48%'],
          data: data,
          
          sort: function (a, b) {
            if (a.depth === 1) {
              return b.getValue() - a.getValue();
            } else {
              return a.dataIndex - b.dataIndex;
            }
          },
          label: {
            rotate: 'radial',
            color: '#333',
            fontSize: 13, // 标签字体稍大（原12）
            fontWeight: 'bold',
            textShadowColor: 'rgba(255,255,255,0.8)',
            textShadowBlur: 3,
            formatter: function (params) {
              return params.name.split('\n').join('\n');
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowBlur: 5
          },
          levels: [
            {},
            {
              r0: 0,
              r: 50, // 原40 → 50（第一环半径增大12.5%）
              label: {
                rotate: 0,
                color: '#fff',
                fontSize: 20,
                textShadowColor: 'rgba(0,0,0,0.8)',
                textShadowBlur: 5
              }
            },
            {
              r0: 50, // 原40 → 45
              r: 120, // 原105 → 115（第二环半径增大9.5%）
              label: {
                color: '#333',
                fontSize:12
              }
            },
            {
              r0: 130, // 原115 → 125
              r: 160, // 原140 → 155（第三环半径增大10.7%）
              itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
              },
              label: {
                rotate: 'tangential',
                fontSize: 10,
                color: '#fff',
                fontWeight: 'bold'
              }
            },
            {
              r0: 160, // 原140 → 155
              r: 165, // 原145 → 160（最外层环宽微调）
              itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
              },
              label: {
                position: 'outside',
                color: '#333',
                textShadowBlur: 5,
                textShadowColor: 'rgba(255,255,255,0.8)',
                fontSize: 12 // 原11 → 12
              },
              downplay: {
                label: {
                  opacity: 0.8
                }
              }
            }
          ]
        }
      ]
    };
  myChart.setOption(option);
  
});

document.addEventListener("DOMContentLoaded", function () {
  let myChart = echarts.init(document.getElementById('ch-3'));
  // 设置尺寸和半径
  const width = 600;
  const height = 600;
  // 清除旧SVG内容防止重复渲染
  d3.select("#ch-3").selectAll("*").remove();
  const radius = Math.min(width, height) / 2 - 60; // 调整半径

  // 创建SVG容器
  const svg = d3.select("#ch-3")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width/2},${height/2})`);

  // 创建径向树布局
  const tree = d3.cluster()
      .size([2 * Math.PI, radius]) // 减小半径
      .separation((a, b) => 0.6); // 缩小节点间距

  // 创建径向连线生成器
  const linkGenerator = d3.linkRadial()
      .angle(d => d.x)
      .radius(d => d.y);

  // 定义树的结构（JSON 格式）
  const data = {
      "name": "中药术语",
      "children": [
          { "name": "一般概念" },
          {
              "name": "中药采集",
              "children": [
                  { "name": "采收期", "children": [{ "name": "萌发期" }, { "name": "枯萎期" }] },
                  { "name": "药用部位" },
                  { "name": "采收方法" }
              ]
          },
          { "name": "中药贮藏" },
          { "name": "中药功效" },
          { "name": "中药炮制" },
          {
              "name": "中药配伍",
              "children": [
                  { "name": "配伍" },
                  {
                      "name": "七情",
                      "children": [
                          { "name": "单行" },
                          { "name": "相须" },
                          { "name": "相使" },
                          { "name": "相畏" },
                          { "name": "相杀" },
                          { "name": "相反" },
                          { "name": "相恶" }
                      ]
                  },
                  { "name": "药对" }
              ]
          },
          {
              "name": "中药鉴定",
              "children": [
                  { "name": "来源鉴定法" },
                  {
                      "name": "基原鉴定法",
                      "children": [
                          { "name": "原植物鉴定法" },
                          { "name": "原动物鉴定法" },
                          { "name": "原矿物鉴定法" }
                      ]
                  },
                  { "name": "性状鉴定法" },
                  { "name": "显微鉴定法" },
                  { "name": "理化鉴定法" },
                  { "name": "生物鉴定法" }
              ]
          },
          {
              "name": "中药性能",
              "children": [
                  { "name": "药性" },
                  { "name": "气味" },
                  { "name": "性味" },
                  {
                      "name": "四气",
                      "children": [
                          { "name": "寒" },
                          { "name": "热" },
                          { "name": "温" },
                          { "name": "凉" },
                          { "name": "平" }
                      ]
                  },
                  { "name": "五味" },
                  { "name": "归经" },
                  { "name": "升降浮沉" }
              ]
          },
          {
              "name": "煎药法",
              "children": [
                  { "name": "先煎" },
                  { "name": "后下" },
                  { "name": "包煎" },
                  { "name": "另煎" },
                  { "name": "煎汤代水" }
              ]
          },
          {
              "name": "中药用法",
              "children": [
                  { "name": "空腹服" },
                  { "name": "饭前服" },
                  { "name": "饭后服" },
                  { "name": "临睡服" },
                  { "name": "顿服" },
                  { "name": "分服" },
                  { "name": "冷服" },
                  { "name": "热服" },
                  { "name": "频服" },
                  { "name": "泡服" },
                  { "name": "冲服" },
                  { "name": "烊化" },
                  { "name": "兑服" }
              ]
          },
          {
              "name": "用药禁忌",
              "children": [
                  { "name": "忌口" },
                  { "name": "服药食忌" },
                  { "name": "妊娠禁忌" },
                  { "name": "证候禁忌" },
                  { "name": "配伍禁忌" }
              ]
          }
      ]
  };

  // 构建树结构
  const root = d3.hierarchy(data);
  tree(root);

  // 添加连线
  svg.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", linkGenerator);

  // 添加节点
  const node = svg.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y},0)
      `);

  // 添加圆形节点
  node.append("circle")
      .attr("r", 4); // 调整节点大小以紧凑布局

  // 添加文字标签
  node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < Math.PI ? 6 : -6)
      .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
      .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
      .text(d => d.data.name);
  // let option = {};
                    
  // myChart.setOption(option);
  // myChart.showLoading();
});

document.addEventListener("DOMContentLoaded", function () {
  let myChart = echarts.init(document.getElementById(''));
  let option = {};
                    
  myChart.setOption(option);
  myChart.showLoading();
});

document.addEventListener("DOMContentLoaded", function () {
  let myChart = echarts.init(document.getElementById('ch-4'));
  const builderJson = {
    all: 200,
    charts: {
      维药: 16,
      秦药: 48,
      藏药: 17,
      川药: 49,
      云药: 39,
      贵药: 23,
      广药: 93,
      海药: 11,
      南药: 48,
      浙药: 39,
      淮药: 98,
      怀药: 51,
      北药: 111,
      蒙药: 70,
      关药: 174
    },
    ie: 9743
  };
  const downloadJson = {
    寒: 182,
    热: 52,
    温: 156,
    凉: 104,
    平: 26
  };
  const themeJson = {
    酸: 42,
    苦: 130,
    甘: 156,
    辛: 130,
    咸: 52,
    淡: 10
  };
  const waterMarkText = '';
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.height = 100;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.08;
  ctx.font = '20px Microsoft Yahei';
  ctx.translate(50, 50);
  ctx.rotate(-Math.PI / 4);
  ctx.fillText(waterMarkText, 0, 0);
  let option = {
    backgroundColor: {
      type: 'pattern',
      image: canvas,
      repeat: 'repeat'
    },
    tooltip: {},
    title: [
      {
        text: '道地药材统计',
        subtext: '总计 ' + builderJson.all,
        left: '25%',
        top:"1%",
        textAlign: 'center'
      },
      {
        text: '四性分布',
        subtext: '总计 ' + Object.values(downloadJson).reduce((a, b) => a + b, 0),
        left: '75%',
        top: '1%',  // 原为0%，调整到饼图上方
        textAlign: 'center'  // 新增居中
      },
      {
        text: '五味分布',
        subtext: '总计 ' + Object.values(themeJson).reduce((a, b) => a + b, 0),
        left: '75%',
        top: '52%',  // 原为65%，调整到饼图上方
        textAlign: 'center'  // 新增居中
      }
    ],
    grid: [
      {
        top: 80,
        width: '50%',
        height: '80%',
        left: 10,
        containLabel: true
      }
    ],
    xAxis: [
      {
        type: 'value',
        max: builderJson.all,
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
          interval: 0,
          rotate: 30
        },
        splitLine: {
          show: false
        },
        scale: true
      }
    ],
    series: [
      {
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
          position: 'right',
          show: true
        },
        data: Object.keys(builderJson.charts).map(function (key) {
          return builderJson.charts[key];
        })
      },
      {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
          color: '#eee'
        },
        data: Object.keys(builderJson.charts).map(function (key) {
          return builderJson.all - builderJson.charts[key];
        })
      },
      {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '30%'],  // 原为20%，下移10%
        data: Object.keys(downloadJson).map(key => ({ name: key, value: downloadJson[key] }))
      },
      {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '80%'],  // 原为70%，下移10%
        data: Object.keys(themeJson).map(key => ({ name: key, value: themeJson[key] }))
      }
    ]
  };
                    
  myChart.setOption(option);
});


function createRandomItemStyle() {
  return {
      normal: {
          color: 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
          ].join(',') + ')'
      }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  let myChart = echarts.init(document.getElementById('ch-5'));
  let option = {
      title: {
          text: '中药类别词云图',
          left: 'center',
          link: 'http://www.google.com/trends/hottrends'
      },
      tooltip: {
          show: true
      },
      series: [ {
          name: '中药类别词云图',
          type: 'wordCloud',
          size: ['80%', '80%'],
          width:400,
          textRotation: [0, 45, 90, -45],
          textPadding: 0,
          autoSize: {
              enable: true,
              minSize: 15
          },
          data:[
            {
              "name": "解表药",
              "value": 29,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 99, 132)"
                }
              }
            },
            {
              "name": "清热药",
              "value": 74,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 159, 64)"
                }
              }
            },
            {
              "name": "泻下药",
              "value": 14,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 205, 86)"
                }
              }
            },
            {
              "name": "祛风湿药",
              "value": 34,
              "itemStyle": {
                "normal": {
                  "color": "rgb(75, 192, 192)"
                }
              }
            },
            {
              "name": "化湿药",
              "value": 8,
              "itemStyle": {
                "normal": {
                  "color": "rgb(54, 162, 235)"
                }
              }
            },
            {
              "name": "利水渗湿药",
              "value": 31,
              "itemStyle": {
                "normal": {
                  "color": "rgb(153, 102, 255)"
                }
              }
            },
            {
              "name": "温里药",
              "value": 11,
              "itemStyle": {
                "normal": {
                  "color": "rgb(201, 203, 207)"
                }
              }
            },
            {
              "name": "理气药",
              "value": 23,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 99, 71)"
                }
              }
            },
            {
              "name": "消食药",
              "value": 9,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 69, 0)"
                }
              }
            },
            {
              "name": "驱虫药",
              "value": 9,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 140, 0)"
                }
              }
            },
            {
              "name": "止血药",
              "value": 23,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 215, 0)"
                }
              }
            },
            {
              "name": "活血化瘀药",
              "value": 33,
              "itemStyle": {
                "normal": {
                  "color": "rgb(0, 128, 0)"
                }
              }
            },
            {
              "name": "化痰止咳平喘药",
              "value": 40,
              "itemStyle": {
                "normal": {
                  "color": "rgb(0, 0, 128)"
                }
              }
            },
            {
              "name": "安神药",
              "value": 11,
              "itemStyle": {
                "normal": {
                  "color": "rgb(128, 0, 128)"
                }
              }
            },
            {
              "name": "平肝息风药",
              "value": 17,
              "itemStyle": {
                "normal": {
                  "color": "rgb(128, 0, 0)"
                }
              }
            },
            {
              "name": "开窍药",
              "value": 4,
              "itemStyle": {
                "normal": {
                  "color": "rgb(0, 0, 255)"
                }
              }
            },
            {
              "name": "补虚药",
              "value": 63,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 0, 255)"
                }
              }
            },
            {
              "name": "收涩药",
              "value": 21,
              "itemStyle": {
                "normal": {
                  "color": "rgb(128, 128, 0)"
                }
              }
            },
            {
              "name": "涌吐药",
              "value": 3,
              "itemStyle": {
                "normal": {
                  "color": "rgb(0, 255, 255)"
                }
              }
            },
            {
              "name": "攻毒杀虫止痒药",
              "value": 10,
              "itemStyle": {
                "normal": {
                  "color": "rgb(255, 0, 0)"
                }
              }
            },
            {
              "name": "拔毒化腐生肌药",
              "value": 6,
              "itemStyle": {
                "normal": {
                  "color": "rgb(0, 255, 0)"
                }
              }
            }
          ]
        }]
  };
  myChart.setOption(option);
});

document.addEventListener("DOMContentLoaded", function () {
  let myChart = echarts.init(document.getElementById(''));
  let option = {};
                    
  myChart.setOption(option);
  myChart.showLoading();
});
