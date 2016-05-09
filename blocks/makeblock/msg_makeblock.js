
//added mai 5th 2016
Blockly.Msg.CAT_MAKEBLOCK = "Makeblock"; 
Blockly.Msg.CAT_MAKEBLOCK_IN = "capteurs";
Blockly.Msg.CAT_MAKEBLOCK_OUT = "actionneurs";
Blockly.Msg.CAT_MAKEBLOCK_LCD = "écran LCD";
Blockly.Msg.CAT_MAKEBLOCK_COMM = "communication";
Blockly.Msg.CAT_MAKEBLOCK_UTIL = "utile";

// http://learn.makeblock.com/electronics/
Blockly.Msg.Makeblock_Mcore = [["Port 1 (m-Core)", '["12", "11"]'], ["Port 2 (m-Core)", '["10", "9"]'], ["Port 3 (m-Core)", '["A3", "A2"]'], ["Port 4 (m-Core)", '["A1", "A0"]']];
Blockly.Msg.Makeblock_Orion = [["Port 1 (Orion)", '["10", "11"]'], ["Port 2 (Orion)", '["9", "3"]'], ["Port 3 (Orion)", '["13", "12"]'], ["Port 4 (Orion)", '["2", "8"]'], ["Port 5 (Orion)", '["0", "1"]'], ["Port 6 (Orion)", '["A3", "A2"]'], ["Port 7 (Orion)", '["A1", "A6"]'], ["Port 8 (Orion)", '["A0", "A7"]']];

Blockly.Msg.MAKEBLOCK_RJ45 = Blockly.Msg.Makeblock_Mcore;

Blockly.Msg.MAKEBLOCK_OUT = [["Out1", "7"], ["Out2", "8"], ["Out3", "40"], ["Out4", "41"], ["Out5", "42"], ["Out6", "43"], ["Out7", "44"], ["Out8", "45"]];
Blockly.Msg.MAKEBLOCK_IN = [["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"], ["In5", "3"], ["In6", "4"], ["In7", "33"], ["In8", "34"]];
Blockly.Msg.MAKEBLOCK_IN_OUT = [["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"], ["In5", "3"], ["In6", "4"], ["In7", "33"], ["In8", "34"], ["Out1", "7"], ["Out2", "8"], ["Out3", "40"], ["Out4", "41"], ["Out5", "42"], ["Out6", "43"], ["Out7", "44"], ["Out8", "45"]];
Blockly.Msg.MAKEBLOCK_OUT_IN = [["Out1", "7"], ["Out2", "8"], ["Out3", "40"], ["Out4", "41"], ["Out5", "42"], ["Out6", "43"], ["Out7", "44"], ["Out8", "45"], ["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"], ["In5", "3"], ["In6", "4"], ["In7", "33"], ["In8", "34"]];
Blockly.Msg.MAKEBLOCK_ANALOG_IN = [["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"]];
Blockly.Msg.MAKEBLOCK_INTERNAL_OUT_IN = [["Out1", "7"], ["Out2", "8"], ["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"], ["In5", "3"], ["In6", "4"]];
Blockly.Msg.MAKEBLOCK_INTERNAL_IN_OUT = [["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"], ["In5", "3"], ["In6", "4"], ["Out1", "7"], ["Out2", "8"]];
Blockly.Msg.MAKEBLOCK_OUT_IN_LED_RGB = [["Interne", "9"], ["Out1", "7"], ["Out2", "8"], ["In1", "A0"], ["In2", "A1"], ["In3", "A2"], ["In4", "A3"], ["In5", "3"], ["In6", "4"]];


Blockly.Msg.MAKEBLOCK_TYPE_IR_REMOTE = [["Télécommande noire et blanche Makeblock", "1"]];
Blockly.Msg.MAKEBLOCK_ONEWIRE_INDEX = [["Capteur 0", "0"],["Capteur 1", "1"],["Capteur 2", "2"],["Capteur 3", "3"],["Capteur 4", "4"],["Capteur 5", "5"],["Capteur 6", "6"],["Capteur 7", "7"],["Capteur 8", "8"],["Capteur 9", "9"],["Capteur 10", "10"]];
Blockly.Msg.MAKEBLOCK_ONEWIRE_RESOLUTION = [["9 bits", "9"], ["10 bits", "10"], ["11 bits", "11"], ["12 bits", "12"]];

Blockly.Msg.MAKEBLOCK_FIELDDROPDOWN = [["1 (état haut)", "1"], ["0 (état bas)", "0"]];


Blockly.Msg.MAKEBLOCK_INOUT_DHT_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_C = "de la température °C";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_F = "de la température °F";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_H = "du % d'humidité";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_PIN = "sur la broche n°";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_SENSOR = "mesurée par le capteur ";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_TOOLTIP = "les capteurs de type DHT comportent 2 parties : thermistance et capteur d'humidité.";
Blockly.Msg.MAKEBLOCK_INOUT_DHT_READ_TYPE = "valeur";
Blockly.Msg.MAKEBLOCK_INOUT_LED_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT1 = "mettre la DEL";
Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT_IR = "mettre la DEL IR";
Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT2 = "sur la broche Numérique";
Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT3 = "à l'état";
Blockly.Msg.MAKEBLOCK_INOUT_LED_TOOLTIP = "active la sortie Digital sur laquelle la DEL est branchée";
Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_TEXT = "l'état du bouton poussoir";
Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_TOOLTIP = "entrée numérique classique en lecture";
Blockly.Msg.MAKEBLOCK_INOUT_ROT_ANGLE_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_ROT_ANGLE_TEXT = "position de l'encodeur";
Blockly.Msg.MAKEBLOCK_INOUT_ROT_PUSH_TEXT = "valeur du bouton poussoir";
Blockly.Msg.MAKEBLOCK_INOUT_ROT_ANGLE_TOOLTIP = "Lecture de position dont le résultat peut être positif ou négatif selon le sens de rotation";
Blockly.Msg.MAKEBLOCK_INOUT_TILT_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_TILT_TEXT = "l'état de l'interrupteur à bascule";
Blockly.Msg.MAKEBLOCK_INOUT_TILT_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_TILT_TOOLTIP = "Quand le contacteur n'est pas touché, le circuit est ouvert sinon quand le contacteur touche, le circuit est fermé.";
Blockly.Msg.MAKEBLOCK_INOUT_ILS_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_ILS_TEXT = "l'état de l'interrupteur sans contact";
Blockly.Msg.MAKEBLOCK_INOUT_ILS_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_ILS_TOOLTIP = "Quand l'aimant est éloigné, le circuit est ouvert sinon quand l'aimant est proché, le circuit est fermé.";
Blockly.Msg.MAKEBLOCK_INOUT_IR_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_IR_TEXT = "l'état de l'entrée Infra Rouge";
Blockly.Msg.MAKEBLOCK_INOUT_IR_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_TYPE_IR_EXPECTED_CODE = "IR code";
Blockly.Msg.MAKEBLOCK_TYPE_IR_MAX_TIME = "timeout (ms)";
Blockly.Msg.MAKEBLOCK_TYPE_IR_REMOTE_TEXT = "type de télécommande";
Blockly.Msg.MAKEBLOCK_INOUT_IR_TOOLTIP = "Quand le capteur reçoit un signal IR, la sortie est active.";
Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_TEXT1 = "mettre le buzzer ";
Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_FREQUENCY = " Fréquence (Hz)";
Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_DURATION = " durant (ms)";
Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_TOOLTIP = "Emet un son quand un fréquence est générée.";
Blockly.Msg.MAKEBLOCK_INOUT_RELAY_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_RELAY_TEXT1 = "mettre le relais";
Blockly.Msg.MAKEBLOCK_INOUT_RELAY_TEXT2 = "à l'état";
Blockly.Msg.MAKEBLOCK_INOUT_RELAY_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_RELAY_TOOLTIP = "Le relais sert à commander un circuit de puissance, jusqu'à 250V et 10 ampères.";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_TEXT = "la température";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_TEXT2 = "la température";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INPUT = "mesurée sur la CTN connectée sur ma broche";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INDEX = "mesurée sur le capteur (DS18x20) N°";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INPUT2 = "connecté sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INPUT3 = "avec une resolution de";
Blockly.Msg.MAKEBLOCK_INOUT_TEMP_TOOLTIP = "renvoie la température ambiante en °C";
Blockly.Msg.MAKEBLOCK_INOUT_MOISTURE_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_MOISTURE_TEXT = "l'humidité";
Blockly.Msg.MAKEBLOCK_INOUT_MOISTURE_INPUT = "mesurée sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_MOISTURE_TOOLTIP = "renvoie le niveau d'humidité";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_TEXT = "écran LCD";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_INPUT1 = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_INPUT2 = "écrire sur la ligne 1";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_INPUT3 = "écrire sur la ligne 2";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_INPUT4 = "pendant (ms)";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_PRINT_TOOLTIP = "écris le texte sur un écran LCD série de 2 lignes sur 16 caractères";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_POWER_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_POWER_TEXT = "écran LCD";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_POWER_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_POWER_STATE = "mettre sur";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_POWER_TOOLTIP = "éclairage de l'écran LCD on/off";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_EFFECT_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_EFFECT_TEXT = "écran LCD";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_EFFECT_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_EFFECT_EFFECT = "écrit avec l'effet";
Blockly.Msg.MAKEBLOCK_INOUT_LCD_EFFECT_EFFECT_EFFECT = [["défilement à gauche", "LEFT"], ["défilement à droite", "RIGHT"], ["défilement automatique", "AUTO"]];
Blockly.Msg.MAKEBLOCK_INOUT_LCD_EFFECT_TOOLTIP = "Turn LCD power on/off";
Blockly.Msg.MAKEBLOCK_INOUT_SOUND_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_SOUND_TEXT = "le volume du son";
Blockly.Msg.MAKEBLOCK_INOUT_SOUND_INPUT = "mesuré sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_SOUND_TOOLTIP = "détecte le volume sonore environnant";
Blockly.Msg.MAKEBLOCK_INOUT_PIR_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_PIR_TEXT = "détection d'un mouvement";
Blockly.Msg.MAKEBLOCK_INOUT_PIR_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_PIR_TOOLTIP = "le capteur renvoie 1 quand il y a un mouvement dans son champ de détection";
Blockly.Msg.MAKEBLOCK_INOUT_LINE_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_LINE_TEXT = "état du suiveur de ligne";
Blockly.Msg.MAKEBLOCK_INOUT_LINE_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_LINE_TOOLTIP = "renvoie un état logique en fonction de la couleur, blanc ou noir, détectée";
Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_TEXT = "la distance mesurée";
Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_INPUT = "par le capteur ultrasons sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_UNIT = "unité";
Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_TOOLTIP = "mesure par écho ultrason";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_TEXT = "moteur sur la carte externe";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_INPUT1 = "moteur 1, broche 1";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_INPUT2 = "moteur 1, broche 2";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_INPUT3 = "moteur 2, broche 1";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_INPUT4 = "moteur 2, broche 2";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_CHOICE = [["stop !", "stop"], ["avance", "forward"], ["à droite", "right"], ["à gauche", "left"], ["recule", "backward"]];
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_TOOLTIP = "pilote 2 moteurs à courant continu";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_TEXT = "moteur sur le shield makeblock";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_SPEED = "vitesse (0..255)";
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_CHOICE = [["stop !", "stop"], ["avance", "forward"], ["à droite", "right"], ["à gauche", "left"], ["à droite sur place", "right_rotate"], ["à gauche sur place", "left_rotate"], ["recule", "backward"]];
Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_TOOLTIP = "pilote 2 moteurs à courant continu";
Blockly.Msg.MAKEBLOCK_INOUT_JOYSTICK_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_JOYSTICK_TEXT1 = "angle du joystick";
Blockly.Msg.MAKEBLOCK_INOUT_JOYSTICK_TEXT2 = "de l'axe";
Blockly.Msg.MAKEBLOCK_INOUT_JOYSTICK_INPUT = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_JOYSTICK_AXES = [["x", "x"],  ["y", "y"]];
Blockly.Msg.MAKEBLOCK_INOUT_JOYSTICK_TOOLTIP = "le joystick renvoie des valeurs comprises entre 0 et 102 pour chacund es 2 axes";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_TEXT = "mettre la DEL RGB à";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_INPUT = "valeur [0~255]";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_COLOR1 = "rouge [0~255]";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_COLOR2 = "vert [0~255]";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_COLOR3 = "bleu [0~255]";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_PIXEL = "pour le pixel";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_NB_OF_PIXEL = "Nombre de pixels total";
Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_TOOLTIP = "utilise une smart LED WS2812B RGB";
Blockly.Msg.MAKEBLOCK_INOUT_BT_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM1 = "liaison Bluetooth";
Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM2 = "sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM3 = "nom du périphérique";
Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM4 = "code secret";
Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM5 = "envoyer";
Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM6 = "recevoir";
Blockly.Msg.MAKEBLOCK_INOUT_BT_TOOLTIP = "Bluetooth V2.0 + EDR esclave. Supporte un seul esclave par carte";
Blockly.Msg.MAKEBLOCK_INOUT_POT_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_POT_TEXT = "le potentiometre";
Blockly.Msg.MAKEBLOCK_INOUT_POT_INPUT = "connecté à la broche";
Blockly.Msg.MAKEBLOCK_INOUT_POT_TOOLTIP = "renvoie la valeur";
Blockly.Msg.MAKEBLOCK_INOUT_LDR_HELPURL = "";
Blockly.Msg.MAKEBLOCK_INOUT_LDR_TEXT = "la luminosité";
Blockly.Msg.MAKEBLOCK_INOUT_LDR_INPUT = "mesurée sur la broche";
Blockly.Msg.MAKEBLOCK_INOUT_LDR_TOOLTIP = "renvoie le niveau";
Blockly.Msg.MAKEBLOCK_TEXT74 = "initialiser l'écran LCD";
Blockly.Msg.MAKEBLOCK_TEXT75 = "à l'adresse I2C";
Blockly.Msg.MAKEBLOCK_TEXT76 = "nombre de colonne(s)";
Blockly.Msg.MAKEBLOCK_TEXT77 = "nombre de ligne(s)";
Blockly.Msg.MAKEBLOCK_TEXT78 = "activer le rétro-éclairage ?";
Blockly.Msg.MAKEBLOCK_TEXT79 = "activer le curseur ?";
Blockly.Msg.MAKEBLOCK_TEXT80 = "faire clignoter le curseur ?";
Blockly.Msg.MAKEBLOCK_TEXT81 = "Initialise l'écran LCD sur le bus I2C (réf : LCD1)";
Blockly.Msg.MAKEBLOCK_TEXT82 = "sur l'écran LCD";
Blockly.Msg.MAKEBLOCK_TEXT83 = "activer le rétroéclairage";
Blockly.Msg.MAKEBLOCK_TEXT84 = "désactiver le rétroéclairage";
Blockly.Msg.MAKEBLOCK_TEXT85 = "activer le curseur";
Blockly.Msg.MAKEBLOCK_TEXT86 = "désactiver le curseur";
Blockly.Msg.MAKEBLOCK_TEXT87 = "faire clignoter le curseur";
Blockly.Msg.MAKEBLOCK_TEXT88 = "arrêter le clignotement du curseur";
Blockly.Msg.MAKEBLOCK_TEXT89 = "activer l'affichage";
Blockly.Msg.MAKEBLOCK_TEXT90 = "désactiver l'affichage";
Blockly.Msg.MAKEBLOCK_TEXT91 = "Fonction spéciales de l'écran LCD (réf : LCD1)";
Blockly.Msg.MAKEBLOCK_TEXT92 = "effacer l'écran LCD";
Blockly.Msg.MAKEBLOCK_TEXT93 = "Effacer l'écran LCD sur le bus I2C (réf : LCD1)";
Blockly.Msg.MAKEBLOCK_TEXT94 = "écrire sur l'écran LCD";
Blockly.Msg.MAKEBLOCK_TEXT95 = "à partir de la position";
Blockly.Msg.MAKEBLOCK_TEXT96 = "colonne [0..MAXCOL-1]";
Blockly.Msg.MAKEBLOCK_TEXT97 = "ligne [0..MAXLIG-1]";
Blockly.Msg.MAKEBLOCK_TEXT98 = "le texte";
Blockly.Msg.MAKEBLOCK_TEXT99 = "Ecrire sur l'écran LCD (réf : LCD1)";
Blockly.Msg.MAKEBLOCK_EDGE_TEXT = "détection ";
Blockly.Msg.MAKEBLOCK_EDGE_INPUT = "sur l'entrée";
Blockly.Msg.MAKEBLOCK_EDGE_UP_DOWN = [["front montant", "UP"], ["front descedant", "DOWN"]];
