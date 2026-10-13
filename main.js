/**
 * ═════════════════════════════════════════════════════════════════════════
 *  AIR HOCKEY 3D GRAND ARCADE — main.js v7.0
 *  True 3D WebGL (Three.js) · Dynamic Lighting · PBR Materials
 *  Perspective Camera · 3D Confetti & Shockwaves · 3 Arenas · 5 Mallets
 * ═════════════════════════════════════════════════════════════════════════
 */

'use strict';

// ─────────────────────────────────────────────────────────────────────────
// 1. ЛОКАЛИЗАЦИЯ (i18n: RU, EN, TR)
// ─────────────────────────────────────────────────────────────────────────
const I18n = (() => {
    let currentLang = 'ru';

    const translations = {
        ru: {
            menu_subtitle: "Выбери режим и забей 7 шайб быстрее соперника!",
            mode_vs_ai: "Против Бота",
            mode_vs_ai_desc: "Быстрая игра",
            mode_2p: "На Двоих",
            mode_2p_desc: "На одном экране",
            mode_tourney: "Турнир",
            mode_tourney_desc: "Кубок чемпионов",
            mode_trickshot: "Испытания",
            mode_trickshot_desc: "Трюк-шоты",
            mode_trophy: "Путь Чемпиона",
            mode_trophy_desc: "Кубки и награды",
            mode_shop: "Магазин",
            mode_shop_desc: "Скины и столы",
            powerups_label: "Бонусы на поле",
            diff_easy: "Легко",
            diff_med: "Норма",
            diff_hard: "Хард",
            btn_play: "Играть",
            tourney_title: "ТУРНИРНЫЙ КУБОК",
            tourney_sub: "Одолей 3-х чемпионов и забери приз: 500 монет!",
            stage_1: "1/4 Финала",
            stage_2: "Полуфинал",
            stage_3: "Гранд-Финал",
            stage_enemy_1: "Спиди (Турбо-Рывок)",
            stage_enemy_2: "Стена (Силовой Барьер)",
            stage_enemy_3: "Брут (Сейсмо-Удар)",
            btn_back: "Назад",
            btn_fight: "В бой",
            shop_title: "МАГАЗИН",
            shop_sub: "Выбирай биты, шайбы, столы и празднования!",
            tab_mallets: "Биты",
            tab_pucks: "Шайбы",
            tab_arenas: "Столы",
            tab_goalfx: "Голы",
            pause_title: "ПАУЗА",
            pause_sub: "Матч приостановлен",
            btn_resume: "Продолжить",
            btn_again: "Играть снова",
            btn_to_menu: "В меню",
            score_label: "Итоговый счёт",
            goal_you: "Вы забили!",
            goal_p2: "Игрок 2 забил!",
            goal_ai: "Гол противника!",
            win_title: "ПОБЕДА!",
            lose_title: "ПОРАЖЕНИЕ",
            tourney_win: "ТЫ ЧЕМПИОН КУБКА!",
            tourney_stage_cleared: "РАУНД {N} ПРОЙДЕН!",
            equipped: "Надето",
            equip: "Надеть",
            coins: "монет",
            btn_quests: "Задания",
            btn_leaderboard: "Рейтинг",
            quests_title: "ЕЖЕДНЕВНЫЕ ЗАДАНИЯ",
            quests_sub: "Выполняй задания и получай монеты каждый день!",
            lead_title: "ЗАЛ СЛАВЫ",
            lead_sub: "Твои рекорды и таблица лидеров",
            stat_cups: "Кубков Турнира",
            stat_goals: "Забитых Голов",
            stat_rank: "Звание",
            btn_yandex_lb: "Таблица лидеров",
            btn_vk_lb: "Таблица лидеров",
            code_copied: "Код скопирован",
            ultimate_label: "УЛЬТА",
            claim: "Забрать",
            claimed: "Получено",
            rank_novice: "Новичок",
            rank_veteran: "Ветеран",
            rank_master: "Мастер",
            rank_champ: "Чемпион",
            hazards_label: "Фишки арены",
            wheel_title: "КОЛЕСО УДАЧИ",
            wheel_sub: "Крути рулетку каждый день и забирай призы!",
            btn_wheel: "Колесо",
            spin_free: "Крутить бесплатно",
            spin_ad: "Спин за видео",
            spin_wait: "След. спин: ",
            shortcut_btn: "Ярлык на экран (+100)",
            streak_title: "Серия входов",
            streak_day: "День",
            streak_claim: "Забрать",
            callout_goal: "ГОЛ!",
            callout_matchpoint: "МАТЧ-ПОЙНТ!",
            callout_supershot: "СУПЕР-УДАР!",
            callout_bumper: "МЕГА-РИКОШЕТ!",
            callout_warp: "КВАНТОВЫЙ ВАРП!",
            callout_boost: "ТУРБО-УСКОРЕНИЕ!",
            replay_title: "ПОВТОР",
            btn_skip_replay: "Пропустить",
            trickshot_title: "РЕЖИМ ИСПЫТАНИЙ",
            trickshot_sub: "Забей шайбу в цель сквозь сложнейшие преграды!",
            trickshot_shots: "Выстрелы",
            trickshot_cleared: "УРОВЕНЬ ПРОЙДЕН!",
            trickshot_failed: "ПОПЫТКИ ЗАКОНЧИЛИСЬ",
            trickshot_retry: "Повторить",
            trickshot_next: "Следующий уровень",
            trickshot_levels_btn: "К уровням",
            trophy_title: "ПУТЬ ЧЕМПИОНА",
            trophy_sub: "Собирай кубки в турнире и открывай эксклюзивные награды!",
            trophy_cups_count: "Кубков",
            trophy_claim: "Забрать",
            trophy_claimed: "Получено",
            trophy_locked: "Нужно {N} кубков",
            boss_dash: "ТУРБО-РЫВОК!",
            boss_shield: "СИЛОВОЙ БАРЬЕР!",
            boss_smash: "СЕЙСМО-УДАР!",
            callout_boss_ability: "СПОСОБНОСТЬ БОССА!",
            trickshot_level: "Уровень",
            enemy_1: "Спиди",
            enemy_2: "Стена",
            enemy_3: "Брут",
            shop_exclusive_trophy: "{N} кубков",
            exclusive_locked_msg: "Открой этот скин на Пути Чемпиона ({N} кубков)!",
            btn_arenas: "Арены",
            arenas_title: "ВЫБОР АРЕНЫ",
            arenas_sub: "10 уникальных тем с атмосферой, освещением и физикой искр",
            theme_btn_in_game: "В игре",
            theme_btn_to_game: "В игру",
            theme_btn_select: "Выбрать",
            theme_classic_pub_name: "Классический Спортбар",
            theme_classic_pub_desc: "Благородный дуб и латунь",
            theme_winter_classic_name: "Ледовая Арена",
            theme_winter_classic_desc: "Синеватый лёд и прожекторы",
            theme_minimal_studio_name: "Скандинавский Лофт",
            theme_minimal_studio_desc: "Поликарбонат и мягкий свет",
            theme_deep_space_name: "Орбитальная Станция",
            theme_deep_space_desc: "Титан и голографический неон",
            theme_inferno_core_name: "Магма-Вулкан",
            theme_inferno_core_desc: "Базальт и тлеющая лава",
            theme_sunset_coast_name: "Закатный Пляж",
            theme_sunset_coast_desc: "Тик и золотые тени заката",
            theme_zen_dojo_name: "Японский Додзё",
            theme_zen_dojo_desc: "Лакированное дерево и тушь",
            theme_synthwave_arcade_name: "Ретро-Вейв 80-х",
            theme_synthwave_arcade_desc: "Глянец и неоновая сетка",
            theme_underground_garage_name: "Индустриальный Гараж",
            theme_underground_garage_desc: "Рифлёная сталь и полосы безопасности",
            theme_royal_velvet_name: "Королевский Зал",
            theme_royal_velvet_desc: "Изумрудный мрамор и золото",
            btn_achievements: "Достижения",
            btn_battle_pass: "Боевой Пропуск",
            achievements_title: "ДОСТИЖЕНИЯ",
            achievements_sub: "Выполняй эпические испытания и получай награды!",
            ach_completed_label: "Выполнено",
            ach_coins_earned: "Монет получено",
            toast_ach_unlocked: "ДОСТИЖЕНИЕ РАЗБЛОКИРОВАНО!",
            bp_title: "БОЕВОЙ ПРОПУСК",
            bp_sub: "Сезон 1: Неоновый Шторм · 15 уровней наград",
            bp_level: "Уровень",
            bp_tier: "Уровень {N}",
            bp_vip_active: "VIP АКТИВИРОВАН",
            bp_buy_vip: "VIP Pass: {N} Монет",
            bp_watch_vip: "VIP за видео",
            bp_xp_earned: "+{N} XP в Боевой Пропуск!",
            free_track: "Бесплатная",
            vip_track: "VIP Пропуск",
            reward_claimed: "Получено",
            reward_claim: "Забрать",
            reward_locked: "Заблокировано",
            mode_ranked: "Рейтинг Онлайн",
            mode_ranked_desc: "P2P и Ранкед",
            ranked_title: "РЕЙТИНГОВЫЙ СЕЗОН",
            ranked_sub: "Сражайся онлайн, побеждай соперников и поднимайся в Грандмастер!",
            btn_find_match: "ИСКАТЬ МАТЧ",
            btn_play_friend: "ИГРАТЬ С ДРУГОМ (P2P КОМНАТЫ)",
            stat_wins: "Побед",
            stat_losses: "Поражений",
            stat_winrate: "Винрейт",
            stat_streak: "Серия",
            div_bronze: "Бронза",
            div_silver: "Серебро",
            div_gold: "Золото",
            div_platinum: "Платина",
            div_diamond: "Алмаз",
            div_master: "Мастер",
            div_grandmaster: "Грандмастер",
            ranked_tiers_title: "ЛИГИ СЕЗОНА",
            room_create_title: "СОЗДАТЬ КОМНАТУ",
            room_create_desc: "Сгенерируй код и поделись им с другом для прямой P2P игры",
            btn_create_room: "Создать комнату",
            room_code_label: "КОД КОМНАТЫ:",
            btn_copy_code: "Копировать код",
            room_waiting_guest: "Ожидание соперника...",
            room_join_title: "ВОЙТИ ПО КОДУ",
            room_join_desc: "Введи 4-значный код комнаты, созданной твоим другом",
            btn_join: "Войти",
            btn_cancel: "Отмена",
            opponent_found: "СОПЕРНИК НАЙДЕН!",
            match_starts_in: "МАТЧ НАЧИНАЕТСЯ ЧЕРЕЗ"
        },
        en: {
            menu_subtitle: "Pick a mode and score 7 goals to win!",
            mode_vs_ai: "VS Bot",
            mode_vs_ai_desc: "Quick Match",
            mode_2p: "2 Players",
            mode_2p_desc: "Split-Screen",
            mode_tourney: "Tournament",
            mode_tourney_desc: "Championship Cup",
            mode_trickshot: "Trickshots",
            mode_trickshot_desc: "Challenges",
            mode_trophy: "Trophy Road",
            mode_trophy_desc: "Cups & Rewards",
            mode_shop: "Shop",
            mode_shop_desc: "Skins & Arenas",
            powerups_label: "Power-Ups",
            diff_easy: "Easy",
            diff_med: "Medium",
            diff_hard: "Hard",
            btn_play: "Play",
            tourney_title: "CHAMPIONSHIP CUP",
            tourney_sub: "Defeat 3 champions to claim 500 coins!",
            stage_1: "Quarter-Final",
            stage_2: "Semi-Final",
            stage_3: "Grand Final",
            stage_enemy_1: "Speedy (Turbo Dash)",
            stage_enemy_2: "Wall (Forcefield Gate)",
            stage_enemy_3: "Brute (Quake Smash)",
            btn_back: "Back",
            btn_fight: "Fight",
            shop_title: "SHOP",
            shop_sub: "Customize your mallets, pucks, arenas & celebrations!",
            tab_mallets: "Mallets",
            tab_pucks: "Pucks",
            tab_arenas: "Arenas",
            tab_goalfx: "Goal FX",
            pause_title: "PAUSE",
            pause_sub: "Match paused",
            btn_resume: "Resume",
            btn_again: "Play Again",
            btn_to_menu: "Main Menu",
            score_label: "Final Score",
            goal_you: "Goal! You scored!",
            goal_p2: "Player 2 scored!",
            goal_ai: "Opponent scored!",
            win_title: "VICTORY!",
            lose_title: "DEFEAT",
            tourney_win: "TOURNAMENT CHAMPION!",
            tourney_stage_cleared: "ROUND {N} CLEARED!",
            equipped: "Equipped",
            equip: "Equip",
            coins: "coins",
            btn_quests: "Quests",
            btn_leaderboard: "Leaderboard",
            quests_title: "DAILY QUESTS",
            quests_sub: "Complete quests and earn coins every day!",
            lead_title: "HALL OF FAME",
            lead_sub: "Your records and leaderboard rankings",
            stat_cups: "Tournament Cups",
            stat_goals: "Goals Scored",
            stat_rank: "Rank",
            btn_yandex_lb: "Leaderboard",
            btn_vk_lb: "Leaderboard",
            code_copied: "Code copied",
            ultimate_label: "ULTIMATE",
            claim: "Claim",
            claimed: "Claimed",
            rank_novice: "Novice",
            rank_veteran: "Veteran",
            rank_master: "Master",
            rank_champ: "Champion",
            hazards_label: "Arena Hazards",
            wheel_title: "LUCKY WHEEL",
            wheel_sub: "Spin daily to win epic rewards!",
            btn_wheel: "Wheel",
            spin_free: "Free Spin",
            spin_ad: "Spin (Ad)",
            spin_wait: "Next spin: ",
            shortcut_btn: "Add Shortcut (+100)",
            streak_title: "Login Streak",
            streak_day: "Day",
            streak_claim: "Claim",
            callout_goal: "GOAL!",
            callout_matchpoint: "MATCH POINT!",
            callout_supershot: "SUPER SHOT!",
            callout_bumper: "MEGA RICOCHET!",
            callout_warp: "QUANTUM WARP!",
            callout_boost: "TURBO BOOST!",
            replay_title: "REPLAY",
            btn_skip_replay: "Skip",
            trickshot_title: "TRICKSHOT CHALLENGES",
            trickshot_sub: "Sink the puck into the goal through tough obstacles!",
            trickshot_shots: "Shots",
            trickshot_cleared: "LEVEL CLEARED!",
            trickshot_failed: "OUT OF SHOTS",
            trickshot_retry: "Retry",
            trickshot_next: "Next Level",
            trickshot_levels_btn: "Level Select",
            trophy_title: "TROPHY ROAD",
            trophy_sub: "Win tournament cups and unlock exclusive rewards!",
            trophy_cups_count: "Cups",
            trophy_claim: "Claim",
            trophy_claimed: "Claimed",
            trophy_locked: "Need {N} cups",
            boss_dash: "TURBO DASH!",
            boss_shield: "FORCEFIELD GATE!",
            boss_smash: "QUAKE SMASH!",
            callout_boss_ability: "BOSS ABILITY!",
            trickshot_level: "Level",
            enemy_1: "Speedy",
            enemy_2: "The Wall",
            enemy_3: "Brute",
            shop_exclusive_trophy: "{N} cups",
            exclusive_locked_msg: "Unlock this item on Trophy Road ({N} cups)!",
            btn_arenas: "Arenas",
            arenas_title: "SELECT ARENA",
            arenas_sub: "10 unique themes with custom lighting, materials & VFX!",
            theme_btn_in_game: "In Game",
            theme_btn_to_game: "To Game",
            theme_btn_select: "Select",
            theme_classic_pub_name: "Classic Pub",
            theme_classic_pub_desc: "Noble oak and brass corners",
            theme_winter_classic_name: "Winter Classic",
            theme_winter_classic_desc: "Skate-scratched ice & cold spots",
            theme_minimal_studio_name: "Minimal Studio",
            theme_minimal_studio_desc: "White polycarbonate & daylight",
            theme_deep_space_name: "Deep Space",
            theme_deep_space_desc: "Titanium & holographic cyan",
            theme_inferno_core_name: "Inferno Core",
            theme_inferno_core_desc: "Basalt & glowing lava veins",
            theme_sunset_coast_name: "Sunset Coast",
            theme_sunset_coast_desc: "Teak wood & golden sunset",
            theme_zen_dojo_name: "Zen Dojo",
            theme_zen_dojo_desc: "Lacquered wood & sumi ink",
            theme_synthwave_arcade_name: "Synthwave Arcade",
            theme_synthwave_arcade_desc: "Glossy purple & neon grid",
            theme_underground_garage_name: "Underground Garage",
            theme_underground_garage_desc: "Diamond plate & hazard stripes",
            theme_royal_velvet_name: "Royal Velvet VIP",
            theme_royal_velvet_desc: "Emerald marble & pure gold",
            btn_achievements: "Achievements",
            btn_battle_pass: "Battle Pass",
            achievements_title: "ACHIEVEMENTS",
            achievements_sub: "Complete epic challenges and claim rewards!",
            ach_completed_label: "Completed",
            ach_coins_earned: "Coins Earned",
            toast_ach_unlocked: "ACHIEVEMENT UNLOCKED!",
            bp_title: "BATTLE PASS",
            bp_sub: "Season 1: Neon Storm · 15 Reward Tiers",
            bp_level: "Level",
            bp_tier: "Tier {N}",
            bp_vip_active: "VIP ACTIVATED",
            bp_buy_vip: "VIP Pass: {N} Coins",
            bp_watch_vip: "VIP via Ad",
            bp_xp_earned: "+{N} XP to Battle Pass!",
            free_track: "Free Track",
            vip_track: "VIP Pass",
            reward_claimed: "Claimed",
            reward_claim: "Claim",
            reward_locked: "Locked",
            mode_ranked: "Ranked Online",
            mode_ranked_desc: "P2P & Ranked",
            ranked_title: "RANKED ARENA",
            ranked_sub: "Battle online, defeat rivals and reach Grandmaster!",
            btn_find_match: "FIND MATCH",
            btn_play_friend: "PLAY WITH FRIEND (P2P)",
            stat_wins: "Wins",
            stat_losses: "Losses",
            stat_winrate: "Win Rate",
            stat_streak: "Streak",
            div_bronze: "Bronze",
            div_silver: "Silver",
            div_gold: "Gold",
            div_platinum: "Platinum",
            div_diamond: "Diamond",
            div_master: "Master",
            div_grandmaster: "Grandmaster",
            ranked_tiers_title: "SEASON LEAGUES",
            room_create_title: "CREATE ROOM",
            room_create_desc: "Generate code and share it with a friend for direct P2P play",
            btn_create_room: "Create Room",
            room_code_label: "ROOM CODE:",
            btn_copy_code: "Copy Code",
            room_waiting_guest: "Waiting for rival...",
            room_join_title: "JOIN BY CODE",
            room_join_desc: "Enter 4-digit room code created by your friend",
            btn_join: "Join",
            btn_cancel: "Cancel",
            opponent_found: "RIVAL FOUND!",
            match_starts_in: "MATCH STARTS IN"
        },
        tr: {
            menu_subtitle: "Bir mod seç ve kazanmak için 7 gol at!",
            mode_vs_ai: "Bota Karşı",
            mode_vs_ai_desc: "Hızlı Oyun",
            mode_2p: "2 Oyunculu",
            mode_2p_desc: "Aynı Ekranda",
            mode_tourney: "Turnuva",
            mode_tourney_desc: "Şampiyonlar Kupası",
            mode_trickshot: "Meydan Okuma",
            mode_trickshot_desc: "Engelli Vuruslar",
            mode_trophy: "Sampiyon Yolu",
            mode_trophy_desc: "Kupalar & Oduller",
            mode_shop: "Mağaza",
            mode_shop_desc: "Görünümler",
            powerups_label: "Güçlendiriciler",
            diff_easy: "Kolay",
            diff_med: "Orta",
            diff_hard: "Zor",
            btn_play: "Oyna",
            tourney_title: "ŞAMPİYONLUK KUPASI",
            tourney_sub: "3 rakibi yen ve 500 altın kazan!",
            stage_1: "Çeyrek Final",
            stage_2: "Yarı Final",
            stage_3: "Büyük Final",
            stage_enemy_1: "Speedy (Turbo Hizlanma)",
            stage_enemy_2: "Duvar (Enerji Kapi)",
            stage_enemy_3: "Brute (Deprem Vurusu)",
            btn_back: "Geri",
            btn_fight: "Başla",
            shop_title: "MAĞAZA",
            shop_sub: "Tokmak, disk, masa ve gol kutlamalarını özelleştir!",
            tab_mallets: "Tokmaklar",
            tab_pucks: "Diskler",
            tab_arenas: "Masalar",
            tab_goalfx: "Gol Efekti",
            pause_title: "DURAKLAT",
            pause_sub: "Oyun duraklatıldı",
            btn_resume: "Devam Et",
            btn_again: "Yeniden Oyna",
            btn_to_menu: "Menüye Dön",
            score_label: "Maç Sonucu",
            goal_you: "Gol! Sen attın!",
            goal_p2: "Oyuncu 2 attı!",
            goal_ai: "Rakip attı!",
            win_title: "ZAFER!",
            lose_title: "YENİLGİ",
            tourney_win: "KUPA ŞAMPİYONU!",
            tourney_stage_cleared: "{N}. TUR GEÇİLDİ!",
            equipped: "Kullanımda",
            equip: "Kullan",
            coins: "altın",
            btn_quests: "Görevler",
            btn_leaderboard: "Liderler",
            quests_title: "GÜNLÜK GÖREVLER",
            quests_sub: "Görevleri tamamla ve her gün altın kazan!",
            lead_title: "ŞÖHRET SALONU",
            lead_sub: "Rekorların ve liderlik tablosu",
            stat_cups: "Turnuva Kupaları",
            stat_goals: "Atılan Goller",
            stat_rank: "Rütbe",
            btn_yandex_lb: "Lider Tablosu",
            btn_vk_lb: "Lider Tablosu",
            code_copied: "Kod kopyalandi",
            ultimate_label: "ULTİ",
            claim: "Al",
            claimed: "Alındı",
            rank_novice: "Çaylak",
            rank_veteran: "Kıdemli",
            rank_master: "Usta",
            rank_champ: "Şampiyon",
            hazards_label: "Masa Özellikleri",
            wheel_title: "ŞANS ÇARKI",
            wheel_sub: "Her gün çevir ve ödülleri topla!",
            btn_wheel: "Çark",
            spin_free: "Ücretsiz Çevir",
            spin_ad: "Çevir (Reklam)",
            spin_wait: "Sonraki: ",
            shortcut_btn: "Kısayol Ekle (+100)",
            streak_title: "Giriş Serisi",
            streak_day: "Gün",
            streak_claim: "Al",
            callout_goal: "GOL!",
            callout_matchpoint: "MAÇ SAYISI!",
            callout_supershot: "SÜPER VURUŞ!",
            callout_bumper: "MEGA ÇARPMA!",
            callout_warp: "IŞINLANMA!",
            callout_boost: "TURBO HIZLANMA!",
            replay_title: "TEKRAR",
            btn_skip_replay: "Geç",
            trickshot_title: "MEYDAN OKUMA MODU",
            trickshot_sub: "Diski zorlu engelleri asarak kaleye gonder!",
            trickshot_shots: "Vuruslar",
            trickshot_cleared: "BOLUM GECILDI!",
            trickshot_failed: "VURUS HAKKI BITTI",
            trickshot_retry: "Tekrar Dene",
            trickshot_next: "Sonraki Bolum",
            trickshot_levels_btn: "Bolumler",
            trophy_title: "SAMPIYON YOLU",
            trophy_sub: "Turnuva kupalari topla ve ozel odulleri ac!",
            trophy_cups_count: "Kupa",
            trophy_claim: "Al",
            trophy_claimed: "Alindi",
            trophy_locked: "{N} kupa gerekli",
            boss_dash: "TURBO HIZLANMA!",
            boss_shield: "ENERJI KAPI!",
            boss_smash: "DEPREM VURUSU!",
            callout_boss_ability: "BOSS YETENEGI!",
            trickshot_level: "Bolum",
            enemy_1: "Speedy",
            enemy_2: "Duvar",
            enemy_3: "Brut",
            shop_exclusive_trophy: "{N} kupa",
            exclusive_locked_msg: "Bu esyayi Sampiyon Yolu'nda ac ({N} kupa)!",
            btn_arenas: "Arenalar",
            arenas_title: "ARENA SECIMI",
            arenas_sub: "Ozel isiklandirma, malzeme ve efektlerle 10 benzersiz tema!",
            theme_btn_in_game: "Secildi",
            theme_btn_to_game: "Oyuna Don",
            theme_btn_select: "Sec",
            theme_classic_pub_name: "Klasik Spor Bar",
            theme_classic_pub_desc: "Mese agaci ve pirinc koseler",
            theme_winter_classic_name: "Buz Arenasi",
            theme_winter_classic_desc: "Cizikli buz ve projektorler",
            theme_minimal_studio_name: "Minimalist Studyo",
            theme_minimal_studio_desc: "Beyaz polikarbonat ve yumusak isik",
            theme_deep_space_name: "Yorunge Istasyonu",
            theme_deep_space_desc: "Titanyum ve holografik neon",
            theme_inferno_core_name: "Lav Volkani",
            theme_inferno_core_desc: "Bazalt ve akkor lav damarlari",
            theme_sunset_coast_name: "Gun Batimi Sahili",
            theme_sunset_coast_desc: "Tik agaci ve altin gun batimi",
            theme_zen_dojo_name: "Japon Dojosu",
            theme_zen_dojo_desc: "Cilali ahsap ve hat murekkebi",
            theme_synthwave_arcade_name: "Retro Dalgasi 80'ler",
            theme_synthwave_arcade_desc: "Mor parlaklik ve neon izgara",
            theme_underground_garage_name: "Endustriyel Garaj",
            theme_underground_garage_desc: "Oluklu celik ve guvenlik seritleri",
            theme_royal_velvet_name: "Kraliyet Salonu",
            theme_royal_velvet_desc: "Zumrut mermer ve altin",
            btn_achievements: "Basarilar",
            btn_battle_pass: "Savas Bileti",
            achievements_title: "BASARILAR",
            achievements_sub: "Zorlu gorevleri tamamla ve odulleri topla!",
            ach_completed_label: "Tamamlandi",
            ach_coins_earned: "Kazanilan Altin",
            toast_ach_unlocked: "BASARI ACILDI!",
            bp_title: "SAVAS BILETI",
            bp_sub: "Sezon 1: Neon Firtina · 15 Odul Seviyesi",
            bp_level: "Seviye",
            bp_tier: "{N}. Seviye",
            bp_vip_active: "VIP AKTIF",
            bp_buy_vip: "VIP Bilet: {N} Altin",
            bp_watch_vip: "Reklamla VIP",
            bp_xp_earned: "+{N} XP Savas Bileti!",
            free_track: "Ucretsiz",
            vip_track: "VIP Bilet",
            reward_claimed: "Alindi",
            reward_claim: "Al",
            reward_locked: "Kilitli",
            mode_ranked: "Dereceli Cevrimici",
            mode_ranked_desc: "P2P ve Dereceli",
            ranked_title: "DERECELI SEZON",
            ranked_sub: "Cevrimici savasin, rakipleri yenin ve Buyuk Usta olun!",
            btn_find_match: "MAC BUL",
            btn_play_friend: "ARKADASLA OYNA (P2P)",
            stat_wins: "Galibiyet",
            stat_losses: "Maglubiyet",
            stat_winrate: "Kazanma Orani",
            stat_streak: "Seri",
            div_bronze: "Bronz",
            div_silver: "Gumus",
            div_gold: "Altin",
            div_platinum: "Platin",
            div_diamond: "Elmas",
            div_master: "Usta",
            div_grandmaster: "Buyuk Usta",
            ranked_tiers_title: "SEZON LIGLERI",
            room_create_title: "ODA OLUSTUR",
            room_create_desc: "Kod olusturun ve arkadasinizla dogrudan P2P oynayin",
            btn_create_room: "Oda Olustur",
            room_code_label: "ODA KODU:",
            btn_copy_code: "Kodu Kopyala",
            room_waiting_guest: "Rakip bekleniyor...",
            room_join_title: "KODLA KATIL",
            room_join_desc: "Arkadasinizin olusturdugu 4 haneli oda kodunu girin",
            btn_join: "Katil",
            btn_cancel: "Iptal",
            opponent_found: "RAKIP BULUNDU!",
            match_starts_in: "MAC BASLIYOR"
        }
    };

    function t(key) {
        return translations[currentLang]?.[key] || translations['ru']?.[key] || key;
    }

    function setLang(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        applyDOM();
        const btn = document.getElementById('btn-lang');
        if (btn) btn.textContent = lang.toUpperCase();
    }

    function toggleLang() {
        const order = ['ru', 'en', 'tr'];
        const next = order[(order.indexOf(currentLang) + 1) % order.length];
        setLang(next);
        SaveManager.save();
    }

    function applyDOM() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) el.textContent = t(key);
        });
        const overlayShop = document.getElementById('overlay-shop');
        if (overlayShop?.classList.contains('active')) {
            const activeTab = document.querySelector('.shop-tab.active')?.dataset.tab || 'mallets';
            if (typeof _renderShopItems === 'function') _renderShopItems(activeTab);
        }
        const overlayTs = document.getElementById('overlay-trickshot');
        if (overlayTs?.classList.contains('active') && typeof TrickshotManager !== 'undefined') {
            TrickshotManager.renderGrid();
        }
        const overlayTr = document.getElementById('overlay-trophy-road');
        if (overlayTr?.classList.contains('active') && typeof TrophyRoadManager !== 'undefined') {
            TrophyRoadManager.render();
        }
        const overlayArenas = document.getElementById('overlay-arenas');
        if (overlayArenas?.classList.contains('active') && typeof ThemeManager !== 'undefined') {
            ThemeManager.renderUI();
        }
        const overlayAch = document.getElementById('overlay-achievements');
        if (overlayAch?.classList.contains('active') && typeof AchievementManager !== 'undefined') {
            AchievementManager.render();
        }
        const overlayBp = document.getElementById('overlay-battle-pass');
        if (overlayBp?.classList.contains('active') && typeof BattlePassManager !== 'undefined') {
            BattlePassManager.render();
        }
    }

    return { t, setLang, toggleLang, getLang: () => currentLang, applyDOM };
})();

// ─────────────────────────────────────────────────────────────────────────
// 2. УПРАВЛЕНИЕ ДАННЫМИ (SaveManager)
// ─────────────────────────────────────────────────────────────────────────
const SaveManager = (() => {
    const defaultData = {
        coins: 100,
        equippedMallet: 'cyan',
        equippedArena: (typeof localStorage !== 'undefined' && localStorage.getItem('airhockey_selected_theme')) || 'classic_pub',
        equippedPuck: 'cyber',
        equippedGoalFX: 'confetti',
        unlockedMallets: ['cyan'],
        unlockedArenas: ['classic_pub', 'winter_classic', 'minimal_studio', 'deep_space', 'inferno_core', 'sunset_coast', 'zen_dojo', 'synthwave_arcade', 'underground_garage', 'royal_velvet'],
        unlockedPucks: ['cyber'],
        unlockedGoalFX: ['confetti'],
        hazardsEnabled: true,
        lastWheelSpinTime: 0,
        loginStreak: 1,
        lastLoginDate: '',
        streakClaimedDates: {},
        shortcutClaimed: false,
        lang: 'ru',
        sound: true,
        tourneyWins: 0,
        totalGoals: 0,
        ultimatesUsed: 0,
        questClaims: {},
        trickshotLevels: { '1': { unlocked: true, completed: false, stars: 0 } },
        trophyClaims: {},
        achievements: {},
        battlePass: { xp: 0, vipPurchased: false, claimedFree: {}, claimedVip: {} },
        winStreak: 0,
        bestWinStreak: 0,
        totalMatches: 0,
        totalWins: 0,
        totalWallBounces: 0,
        wheelSpinsTotal: 0,
        rankedRP: 0,
        rankedWins: 0,
        rankedLosses: 0,
        rankedStreak: 0,
        peakRankedRP: 0
    };

    let data = { ...defaultData };
    const syncCallbacks = [];

    function _getTodayStr() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    function load() {
        try {
            const local = localStorage.getItem('air_hockey_save');
            if (local) data = { ...defaultData, ...JSON.parse(local) };
        } catch (e) { data = { ...defaultData }; }
        if (!data.unlockedGoalFX) data.unlockedGoalFX = ['confetti'];
        if (!data.equippedGoalFX) data.equippedGoalFX = 'confetti';
        if (!data.trickshotLevels) data.trickshotLevels = { '1': { unlocked: true, completed: false, stars: 0 } };
        if (!data.trophyClaims) data.trophyClaims = {};
        if (!data.achievements) data.achievements = {};
        if (!data.battlePass) data.battlePass = { xp: 0, vipPurchased: false, claimedFree: {}, claimedVip: {} };
        if (!data.battlePass.claimedFree) data.battlePass.claimedFree = {};
        if (!data.battlePass.claimedVip) data.battlePass.claimedVip = {};
        if (typeof data.winStreak !== 'number') data.winStreak = 0;
        if (typeof data.bestWinStreak !== 'number') data.bestWinStreak = 0;
        if (typeof data.totalWallBounces !== 'number') data.totalWallBounces = 0;
        if (typeof data.wheelSpinsTotal !== 'number') data.wheelSpinsTotal = 0;
        if (typeof data.rankedRP !== 'number' || data.rankedRP < 0) data.rankedRP = 0;
        if (typeof data.rankedWins !== 'number') data.rankedWins = 0;
        if (typeof data.rankedLosses !== 'number') data.rankedLosses = 0;
        if (typeof data.rankedStreak !== 'number') data.rankedStreak = 0;
        if (typeof data.peakRankedRP !== 'number') data.peakRankedRP = 0;
        if (!data.unlockedArenas || data.unlockedArenas.length < 10) {
            data.unlockedArenas = ['classic_pub', 'winter_classic', 'minimal_studio', 'deep_space', 'inferno_core', 'sunset_coast', 'zen_dojo', 'synthwave_arcade', 'underground_garage', 'royal_velvet'];
        }
        try {
            const savedTheme = localStorage.getItem('airhockey_selected_theme');
            if (savedTheme) data.equippedArena = savedTheme;
        } catch (e) {}
        checkDailyStreak();
        return data;
    }

    function save() {
        try {
            localStorage.setItem('air_hockey_save', JSON.stringify(data));
            VKService.saveCloud(data);
        } catch (e) {}
    }

    function checkDailyStreak() {
        const today = _getTodayStr();
        if (!data.lastLoginDate) {
            data.lastLoginDate = today;
            data.loginStreak = 1;
        } else if (data.lastLoginDate !== today) {
            const last = new Date(data.lastLoginDate);
            const curr = new Date(today);
            const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                data.loginStreak = (data.loginStreak % 7) + 1;
            } else if (diffDays > 1) {
                data.loginStreak = 1;
            }
            data.lastLoginDate = today;
        }
        save();
    }

    function isStreakClaimedToday() {
        const today = _getTodayStr();
        return !!(data.streakClaimedDates && data.streakClaimedDates[today]);
    }

    function claimStreakToday(reward) {
        const today = _getTodayStr();
        data.streakClaimedDates = data.streakClaimedDates || {};
        data.streakClaimedDates[today] = true;
        data.coins += reward;
        save();
        const el = document.getElementById('hud-coins');
        if (el) el.textContent = data.coins;
    }

    function canFreeSpin() {
        return (Date.now() - (data.lastWheelSpinTime || 0)) >= 24 * 60 * 60 * 1000;
    }

    function getFreeSpinRemainingMs() {
        const diff = Date.now() - (data.lastWheelSpinTime || 0);
        return Math.max(0, 24 * 60 * 60 * 1000 - diff);
    }

    function recordWheelSpin() {
        data.lastWheelSpinTime = Date.now();
        save();
    }

    function syncWithCloud(cloudData) {
        if (!cloudData || typeof cloudData !== 'object' || Object.keys(cloudData).length === 0) return;
        Object.assign(data, cloudData);
        if (!data.unlockedGoalFX) data.unlockedGoalFX = ['confetti'];
        if (!data.equippedGoalFX) data.equippedGoalFX = 'confetti';
        if (!data.trickshotLevels) data.trickshotLevels = { '1': { unlocked: true, completed: false, stars: 0 } };
        if (!data.trophyClaims) data.trophyClaims = {};
        if (!data.achievements) data.achievements = {};
        if (!data.battlePass) data.battlePass = { xp: 0, vipPurchased: false, claimedFree: {}, claimedVip: {} };
        if (!data.battlePass.claimedFree) data.battlePass.claimedFree = {};
        if (!data.battlePass.claimedVip) data.battlePass.claimedVip = {};
        if (typeof data.winStreak !== 'number') data.winStreak = 0;
        if (typeof data.bestWinStreak !== 'number') data.bestWinStreak = 0;
        if (typeof data.totalWallBounces !== 'number') data.totalWallBounces = 0;
        if (typeof data.wheelSpinsTotal !== 'number') data.wheelSpinsTotal = 0;
        try {
            localStorage.setItem('air_hockey_save', JSON.stringify(data));
        } catch (e) {}

        const el = document.getElementById('hud-coins');
        if (el) el.textContent = data.coins;

        if (typeof data.sound === 'boolean') {
            AudioManager.setUserMute(!data.sound);
            const muteBtn = document.getElementById('btn-mute');
            if (muteBtn) muteBtn.classList.toggle('muted', !data.sound);
        }

        if (data.lang) {
            I18n.setLang(data.lang);
        }

        syncCallbacks.forEach(cb => {
            try { cb(data); } catch (err) {}
        });
    }

    function onSync(cb) {
        if (typeof cb === 'function') syncCallbacks.push(cb);
    }

    return {
        get: () => data,
        load,
        save,
        syncWithCloud,
        onSync,
        checkDailyStreak,
        isStreakClaimedToday,
        claimStreakToday,
        canFreeSpin,
        getFreeSpinRemainingMs,
        recordWheelSpin,
        addCoins: (n) => {
            data.coins += n;
            save();
            const el = document.getElementById('hud-coins');
            if (el) el.textContent = data.coins;
        },
        getTrickshotLevels: () => data.trickshotLevels || {},
        saveTrickshotResult: (lvlId, stars) => {
            if (!data.trickshotLevels) data.trickshotLevels = {};
            const cur = data.trickshotLevels[lvlId] || { unlocked: true, completed: false, stars: 0 };
            cur.completed = true;
            cur.stars = Math.max(cur.stars || 0, stars);
            data.trickshotLevels[lvlId] = cur;
            const nextId = String(Number(lvlId) + 1);
            if (Number(nextId) <= 10) {
                if (!data.trickshotLevels[nextId]) {
                    data.trickshotLevels[nextId] = { unlocked: true, completed: false, stars: 0 };
                } else {
                    data.trickshotLevels[nextId].unlocked = true;
                }
            }
            save();
        },
        isTrophyClaimed: (cups) => !!(data.trophyClaims && data.trophyClaims[cups]),
        claimTrophyMilestone: (cups, rewardType, rewardVal) => {
            if (!data.trophyClaims) data.trophyClaims = {};
            data.trophyClaims[cups] = true;
            if (rewardType === 'coins') {
                data.coins += rewardVal;
            } else if (rewardType === 'mallet') {
                if (!data.unlockedMallets.includes(rewardVal)) data.unlockedMallets.push(rewardVal);
            } else if (rewardType === 'puck') {
                if (!data.unlockedPucks.includes(rewardVal)) data.unlockedPucks.push(rewardVal);
            } else if (rewardType === 'goalfx') {
                if (!data.unlockedGoalFX.includes(rewardVal)) data.unlockedGoalFX.push(rewardVal);
            }
            save();
            const el = document.getElementById('hud-coins');
            if (el) el.textContent = data.coins;
        },
        getAchievements: () => data.achievements || {},
        getBattlePass: () => data.battlePass || { xp: 0, vipPurchased: false, claimedFree: {}, claimedVip: {} },
        getRankedData: () => ({
            rp: data.rankedRP || 0,
            wins: data.rankedWins || 0,
            losses: data.rankedLosses || 0,
            streak: data.rankedStreak || 0,
            peakRP: data.peakRankedRP || 0
        }),
        setRankedData: (obj) => {
            Object.assign(data, obj);
            save();
        }
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 3. VK PLAY / VK GAMES SDK v2 (VK Bridge с автономным Mock Fallback)
// ─────────────────────────────────────────────────────────────────────────
const VKService = (() => {
    let isVk = false;
    let player = null;
    let lastAdTime = 0;
    const AD_COOLDOWN = 60000; // 60 секунд между полноэкранной рекламой (гайдлайн VK)

    async function init() {
        window.addEventListener('unhandledrejection', (e) => {
            const msg = e.reason?.message || '';
            if (msg.includes('post message') || msg.includes('VKWebApp') || msg.includes('vkBridge')) {
                e.preventDefault();
            }
        });

        _initMockPlayer();

        if (typeof vkBridge !== 'undefined' && typeof vkBridge.send === 'function') {
            try {
                // Инициализация VK Bridge
                const initRes = await Promise.race([
                    vkBridge.send('VKWebAppInit'),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('VKWebAppInit timeout')), 3000))
                ]);
                isVk = true;
                console.log('[VKService] VK Bridge успешно инициализирован:', initRes);

                // 1. Профиль игрока
                try {
                    const user = await vkBridge.send('VKWebAppGetUserInfo');
                    if (user && user.id) {
                        const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ') || 'Игрок VK';
                        player = {
                            getName: () => fullName,
                            getUniqueID: () => String(user.id),
                            photo: user.photo_100 || user.photo_200 || ''
                        };
                    }
                } catch (uErr) {
                    console.warn('[VKService] Режим гостя (профиль VK недоступен):', uErr);
                }

                // 2. Загрузка сохранений из VK Storage
                try {
                    const storageRes = await vkBridge.send('VKWebAppStorageGet', { keys: ['air_hockey_save'] });
                    if (storageRes && Array.isArray(storageRes.keys)) {
                        const item = storageRes.keys.find(k => k.key === 'air_hockey_save');
                        if (item && item.value) {
                            const cloudData = JSON.parse(item.value);
                            if (cloudData && typeof cloudData === 'object') {
                                SaveManager.syncWithCloud(cloudData);
                            }
                        }
                    }
                } catch (sErr) {
                    console.warn('[VKService] Загрузка сохранений из облака VK недоступна:', sErr);
                }

                // 3. Авто-определение языка
                try {
                    let vkLang = null;
                    if (typeof location !== 'undefined' && location.search) {
                        const params = new URLSearchParams(location.search);
                        vkLang = params.get('vk_language');
                    }
                    if (vkLang) {
                        vkLang = vkLang.toLowerCase();
                        const supported = ['ru', 'en', 'tr'];
                        if (!localStorage.getItem('air_hockey_save') && supported.includes(vkLang)) {
                            I18n.setLang(vkLang);
                            SaveManager.get().lang = vkLang;
                        }
                    }
                } catch (i18nErr) {}

            } catch (err) {
                console.warn('[VKService] Сбой VK Bridge, переход в автономный режим:', err);
                isVk = false;
            }
        } else {
            console.log('[VKService] Автономный режим (Mock VK SDK)');
            isVk = false;
        }

        const el = document.getElementById('hud-coins');
        if (el) el.textContent = SaveManager.get().coins;
    }

    function _initMockPlayer() {
        player = {
            getName: () => 'Вы (Игрок)',
            getUniqueID: () => 'local_guest_uid',
            photo: ''
        };
    }

    function saveCloud(data) {
        if (!isVk || typeof vkBridge === 'undefined' || typeof vkBridge.send !== 'function') return;
        try {
            const raw = JSON.stringify(data);
            vkBridge.send('VKWebAppStorageSet', {
                key: 'air_hockey_save',
                value: raw
            }).catch(err => {
                console.warn('[VKService] Ошибка сохранения в VK Storage:', err);
            });
        } catch (e) {
            console.warn('[VKService] saveCloud error:', e);
        }
    }

    async function showInterstitial(onClose) {
        const now = Date.now();
        if (!isVk || now - lastAdTime < AD_COOLDOWN) {
            if (onClose) onClose(false);
            return;
        }

        if (typeof Game !== 'undefined' && Game.setPaused) Game.setPaused(true);
        AudioManager.muteGlobal(true);

        try {
            const res = await vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' });
            lastAdTime = Date.now();
            AudioManager.muteGlobal(false);
            if (typeof Game !== 'undefined' && Game.setPaused) Game.setPaused(false);
            if (onClose) onClose(!!(res && res.result));
        } catch (err) {
            console.warn('[VKService] showInterstitial error:', err);
            lastAdTime = Date.now();
            AudioManager.muteGlobal(false);
            if (typeof Game !== 'undefined' && Game.setPaused) Game.setPaused(false);
            if (onClose) onClose(false);
        }
    }

    async function showRewarded({ onRewarded, onClose }) {
        if (!isVk) {
            // В автономном режиме симулируем успешный просмотр
            if (onRewarded) onRewarded();
            if (onClose) onClose();
            return;
        }

        if (typeof Game !== 'undefined' && Game.setPaused) Game.setPaused(true);
        AudioManager.muteGlobal(true);

        try {
            const res = await vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' });
            AudioManager.muteGlobal(false);
            if (typeof Game !== 'undefined' && Game.setPaused) Game.setPaused(false);
            if (res && res.result) {
                if (onRewarded) onRewarded();
            }
            if (onClose) onClose();
        } catch (err) {
            console.warn('[VKService] showRewarded error:', err);
            AudioManager.muteGlobal(false);
            if (typeof Game !== 'undefined' && Game.setPaused) Game.setPaused(false);
            if (onClose) onClose();
        }
    }

    function submitScore(score) {
        if (isVk && typeof vkBridge !== 'undefined' && typeof vkBridge.send === 'function') {
            vkBridge.send('VKWebAppStorageSet', {
                key: 'air_hockey_score',
                value: String(score)
            }).catch(err => {
                console.warn('[VKService] Ошибка записи счета в VK Storage:', err);
            });
            try {
                if (typeof vkBridge.supports === 'function' && vkBridge.supports('VKWebAppShowLeaderBoardBox')) {
                    vkBridge.send('VKWebAppShowLeaderBoardBox', { user_result: score }).catch(() => {});
                }
            } catch (e) {}
        }
    }

    async function fetchLeaderboard(quantity = 10) {
        const userWins = SaveManager.get().tourneyWins || 0;
        const userName = (player && player.getName()) ? player.getName() : 'Вы (Игрок)';
        const mockList = [
            { name: 'CyberStriker', score: Math.max(35, userWins + 5), isUser: false },
            { name: 'NeonPuck_99', score: Math.max(24, userWins + 2), isUser: false },
            { name: 'IceMaster', score: Math.max(18, userWins + 1), isUser: false },
            { name: 'BlazeHockey', score: 12, isUser: false },
            { name: 'VortexPro', score: 8, isUser: false },
            { name: userName, score: userWins, isUser: true }
        ];

        mockList.sort((a, b) => b.score - a.score);
        return mockList.map((item, idx) => ({ ...item, rank: idx + 1 }));
    }

    async function canShowShortcut() {
        if (!isVk || typeof vkBridge === 'undefined' || typeof vkBridge.send !== 'function') return false;
        try {
            if (typeof vkBridge.supports === 'function') {
                return vkBridge.supports('VKWebAppAddToHomeScreen') || vkBridge.supports('VKWebAppAddToFavorites');
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    async function showShortcutPrompt() {
        if (!isVk || typeof vkBridge === 'undefined' || typeof vkBridge.send !== 'function') return false;
        try {
            let res = null;
            if (typeof vkBridge.supports === 'function' && vkBridge.supports('VKWebAppAddToHomeScreen')) {
                res = await vkBridge.send('VKWebAppAddToHomeScreen');
            } else {
                res = await vkBridge.send('VKWebAppAddToFavorites');
            }
            return !!(res && res.result);
        } catch (e) {
            console.warn('[VKService] shortcut/favorite error:', e);
            return false;
        }
    }

    async function checkAndPromptReview() {
        if (!isVk || typeof vkBridge === 'undefined' || typeof vkBridge.send !== 'function') return;
        try {
            if (typeof vkBridge.supports === 'function' && vkBridge.supports('VKWebAppRecommend')) {
                await vkBridge.send('VKWebAppRecommend');
            }
        } catch (e) {
            console.warn('[VKService] recommend error:', e);
        }
    }

    async function shareInvite() {
        if (!isVk || typeof vkBridge === 'undefined' || typeof vkBridge.send !== 'function') return;
        try {
            if (typeof vkBridge.supports === 'function' && vkBridge.supports('VKWebAppShowInviteBox')) {
                await vkBridge.send('VKWebAppShowInviteBox');
            }
        } catch (e) {
            console.warn('[VKService] invite error:', e);
        }
    }

    return {
        init,
        getPlayer: () => player,
        saveCloud,
        showInterstitial,
        showRewarded,
        submitScore,
        fetchLeaderboard,
        canShowShortcut,
        showShortcutPrompt,
        checkAndPromptReview,
        shareInvite,
        isAvailable: () => isVk
    };
})();

const YandexService = VKService;
if (typeof window !== 'undefined') {
    window.VKService = VKService;
    window.YandexService = VKService;
}

// ─────────────────────────────────────────────────────────────────────────
// 3.1. ТАКТИЛЬНЫЙ ВИБРООТКЛИК (Haptic Feedback)
// ─────────────────────────────────────────────────────────────────────────
const Haptics = {
    tap: () => { try { if (navigator.vibrate) navigator.vibrate(15); } catch (e) {} },
    wall: () => { try { if (navigator.vibrate) navigator.vibrate(10); } catch (e) {} },
    goal: () => { try { if (navigator.vibrate) navigator.vibrate([60, 40, 140]); } catch (e) {} },
    superShot: () => { try { if (navigator.vibrate) navigator.vibrate([30, 20, 60, 30, 100]); } catch (e) {} }
};

// ─────────────────────────────────────────────────────────────────────────
// 3.1.1. АРКАДНЫЙ КОММЕНТАТОР И АНОНСЕР СОБЫТИЙ (ArcadeAnnouncer)
// Web Speech API (pitch 0.7, rate 1.15) + Procedural Web Audio Jingle Chords
// ─────────────────────────────────────────────────────────────────────────
const ArcadeAnnouncer = (() => {
    let timer = null;
    let selectedVoice = null;

    function _initSpeechVoices() {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
        const findVoice = () => {
            const list = window.speechSynthesis.getVoices();
            if (!list || list.length === 0) return;
            // Ищем динамичный английский голос классического аркадного автомата
            selectedVoice = list.find(v => v.lang.startsWith('en') && (v.name.includes('Male') || v.name.includes('David') || v.name.includes('Alex') || v.name.includes('Google US')))
                         || list.find(v => v.lang.startsWith('en'))
                         || list[0];
        };
        findVoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = findVoice;
        }
    }

    if (typeof window !== 'undefined') {
        _initSpeechVoices();
    }

    function _speak(phrase) {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
        if (typeof AudioManager !== 'undefined' && AudioManager.getUserMute && AudioManager.getUserMute()) return;

        try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(phrase);
            u.pitch = 0.7;  // Классический брутальный аркадный тон 90-х
            u.rate = 1.15;  // Энергичный аркадный темп
            u.volume = 1.0;
            if (selectedVoice) u.voice = selectedVoice;
            window.speechSynthesis.speak(u);
        } catch (e) {}
    }

    function _playChord(notes, type = 'sawtooth', baseDur = 0.28) {
        if (typeof AudioManager !== 'undefined' && AudioManager.getUserMute && AudioManager.getUserMute()) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = (typeof AudioManager !== 'undefined' && AudioManager.getCtx && AudioManager.getCtx())
                || (typeof window !== 'undefined' && (window._sharedAudioCtx || (window._sharedAudioCtx = new AudioCtx())));
            if (!ctx) return;
            if (ctx.state === 'suspended') ctx.resume();

            const t = ctx.currentTime;
            notes.forEach(n => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const filter = ctx.createBiquadFilter();

                osc.type = type;
                osc.frequency.setValueAtTime(n.freq, t + (n.delay || 0));

                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(n.cutoff || 2400, t + (n.delay || 0));
                filter.Q.setValueAtTime(3.5, t + (n.delay || 0));

                const dur = n.dur || baseDur;
                const vol = n.vol || 0.16;

                gain.gain.setValueAtTime(0.001, t + (n.delay || 0));
                gain.gain.linearRampToValueAtTime(vol, t + (n.delay || 0) + 0.015);
                gain.gain.exponentialRampToValueAtTime(0.001, t + (n.delay || 0) + dur);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                osc.start(t + (n.delay || 0));
                osc.stop(t + (n.delay || 0) + dur + 0.04);
            });
        } catch (e) {}
    }

    function show(text, color = '#00f0ff') {
        const el = document.getElementById('hud-announcer');
        const txt = document.getElementById('hud-announcer-text');
        if (!el || !txt) return;

        txt.textContent = text;
        txt.style.borderColor = color;
        txt.style.boxShadow = `0 0 35px ${color}, inset 0 0 15px ${color}`;
        txt.style.textShadow = `0 0 16px ${color}`;

        el.classList.add('active');
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            el.classList.remove('active');
        }, 1400);
    }

    // 1. «FIRST GOAL!»: яркий мажорный фанфарный триад-стаб (C4-E4-G4-C5)
    function firstGoal() {
        show('FIRST GOAL!', '#00f0ff');
        _speak('First Goal!');
        _playChord([
            { freq: 261.63, delay: 0.00, vol: 0.18, dur: 0.35, cutoff: 3200 },
            { freq: 329.63, delay: 0.02, vol: 0.18, dur: 0.35, cutoff: 3400 },
            { freq: 392.00, delay: 0.04, vol: 0.20, dur: 0.40, cutoff: 3600 },
            { freq: 523.25, delay: 0.06, vol: 0.24, dur: 0.45, cutoff: 4000 }
        ], 'sawtooth', 0.40);
    }

    // 2. «DOUBLE BOUNCE!»: быстрое восходящее стерео-арпеджио рикошета
    function doubleBounce() {
        show('DOUBLE BOUNCE!', '#ffca28');
        _speak('Double Bounce!');
        _playChord([
            { freq: 440.00, delay: 0.00, vol: 0.16, dur: 0.15, cutoff: 2800 },
            { freq: 659.25, delay: 0.06, vol: 0.18, dur: 0.18, cutoff: 3200 },
            { freq: 880.00, delay: 0.12, vol: 0.22, dur: 0.30, cutoff: 3800 }
        ], 'triangle', 0.25);
    }

    // 3. «MEGA SMASH!»: тяжелый синтвейв-дисторшн пауэр-аккорд (D2-A2-D3) с саб-басом
    function megaSmash() {
        show('MEGA SMASH!', '#ff2a55');
        _speak('Mega Smash!');
        _playChord([
            { freq: 36.71, delay: 0.00, vol: 0.30, dur: 0.50, cutoff: 800 },
            { freq: 73.42, delay: 0.00, vol: 0.28, dur: 0.45, cutoff: 1800 },
            { freq: 110.00, delay: 0.01, vol: 0.22, dur: 0.40, cutoff: 2200 },
            { freq: 146.83, delay: 0.02, vol: 0.20, dur: 0.38, cutoff: 2600 }
        ], 'sawtooth', 0.45);
    }

    // 4. «UNSTOPPABLE!»: героический восходящий триумфальный рифф
    function unstoppable() {
        show('UNSTOPPABLE!', '#ffd700');
        _speak('Unstoppable!');
        _playChord([
            { freq: 329.63, delay: 0.00, vol: 0.18, dur: 0.25, cutoff: 2600 },
            { freq: 415.30, delay: 0.08, vol: 0.20, dur: 0.28, cutoff: 3000 },
            { freq: 493.88, delay: 0.16, vol: 0.22, dur: 0.32, cutoff: 3400 },
            { freq: 659.25, delay: 0.24, vol: 0.26, dur: 0.50, cutoff: 4200 }
        ], 'sawtooth', 0.45);
    }

    // 5. «MATCH POINT!»: драматический тревожный аккорд с сиреной (тритон D#4 - A4)
    function matchPoint() {
        show('MATCH POINT!', '#ff2a55');
        _speak('Match Point!');
        _playChord([
            { freq: 311.13, delay: 0.00, vol: 0.22, dur: 0.45, cutoff: 2200 },
            { freq: 440.00, delay: 0.00, vol: 0.22, dur: 0.45, cutoff: 2600 },
            { freq: 293.66, delay: 0.16, vol: 0.25, dur: 0.55, cutoff: 3000 }
        ], 'square', 0.50);
    }

    // 6. «VICTORY!»: торжественный аркадный победный аккорд
    function victory() {
        show('VICTORY!', '#00ff88');
        _speak('Victory!');
        _playChord([
            { freq: 392.00, delay: 0.00, vol: 0.18, dur: 0.35, cutoff: 3000 },
            { freq: 523.25, delay: 0.06, vol: 0.20, dur: 0.38, cutoff: 3400 },
            { freq: 659.25, delay: 0.12, vol: 0.22, dur: 0.42, cutoff: 3800 },
            { freq: 783.99, delay: 0.18, vol: 0.25, dur: 0.55, cutoff: 4400 },
            { freq: 1046.50, delay: 0.24, vol: 0.26, dur: 0.65, cutoff: 5000 }
        ], 'triangle', 0.60);
    }

    function triggerCustom(phrase, chordType = 'sawtooth', color = '#00f0ff') {
        show(phrase, color);
        _speak(phrase);
    }

    return {
        show,
        firstGoal,
        doubleBounce,
        megaSmash,
        unstoppable,
        matchPoint,
        victory,
        triggerCustom
    };
})();

const Announcer = ArcadeAnnouncer;
if (typeof window !== 'undefined') {
    window.ArcadeAnnouncer = ArcadeAnnouncer;
}

// ─────────────────────────────────────────────────────────────────────────
// 3.2. СИСТЕМА ЕЖЕДНЕВНЫХ КВЕСТОВ И АЧИВОК (QuestManager)
// ─────────────────────────────────────────────────────────────────────────
const QuestManager = (() => {
    const quests = [
        { id: 'goals_5', title_ru: 'Снайпер', title_en: 'Sniper', title_tr: 'Keskin Nişancı', desc_ru: 'Забей 5 голов в любом режиме', desc_en: 'Score 5 goals in any mode', desc_tr: 'Herhangi bir modda 5 gol at', target: 5, reward: 80, type: 'goals' },
        { id: 'ult_2', title_ru: 'Громовержец', title_en: 'Thunderbolt', title_tr: 'Yıldırım', desc_ru: 'Активируй Супер-Удар 2 раза', desc_en: 'Activate Super Shot 2 times', desc_tr: 'Süper Vuruşu 2 kez kullan', target: 2, reward: 120, type: 'ult' },
        { id: 'tourney_1', title_ru: 'Чемпион Арены', title_en: 'Arena Champion', title_tr: 'Arena Şampiyonu', desc_ru: 'Выиграй Турнирный Кубок', desc_en: 'Win Championship Cup', desc_tr: 'Şampiyonluk Kupasını kazan', target: 1, reward: 250, type: 'tourney' }
    ];

    function getProgress(q) {
        const d = SaveManager.get();
        if (q.type === 'goals') return Math.min(q.target, d.totalGoals || 0);
        if (q.type === 'ult') return Math.min(q.target, d.ultimatesUsed || 0);
        if (q.type === 'tourney') return Math.min(q.target, d.tourneyWins || 0);
        return 0;
    }

    function isClaimed(id) {
        return !!(SaveManager.get().questClaims && SaveManager.get().questClaims[id]);
    }

    function renderQuests() {
        const container = document.getElementById('quests-container');
        if (!container) return;
        const lang = I18n.getLang();
        container.innerHTML = '';

        quests.forEach(q => {
            const current = getProgress(q);
            const isDone = current >= q.target;
            const claimed = isClaimed(q.id);
            const pct = Math.min(100, Math.round((current / q.target) * 100));

            const card = document.createElement('div');
            card.className = 'quest-card';

            const title = q['title_' + lang] || q.title_ru;
            const desc = q['desc_' + lang] || q.desc_ru;

            card.innerHTML = `
                <div class="quest-info">
                    <div class="quest-title">${title} (${current}/${q.target})</div>
                    <div class="quest-desc">${desc}</div>
                    <div class="quest-progress-wrap">
                        <div class="quest-progress-bar" style="width: ${pct}%;"></div>
                    </div>
                </div>
                <button class="btn-quest-claim ${claimed ? 'claimed' : ''}" data-qid="${q.id}" ${claimed || !isDone ? 'disabled' : ''}>
                    ${claimed ? I18n.t('claimed') : (isDone ? `${I18n.t('claim')} +${q.reward}` : `+${q.reward}`)}
                </button>
            `;

            const btn = card.querySelector('.btn-quest-claim');
            if (btn && isDone && !claimed) {
                btn.addEventListener('click', () => {
                    claim(q);
                });
            }

            container.appendChild(card);
        });
    }

    function claim(q) {
        if (isClaimed(q.id)) return;
        const d = SaveManager.get();
        d.questClaims = d.questClaims || {};
        d.questClaims[q.id] = true;
        SaveManager.addCoins(q.reward);
        SaveManager.save();
        AudioManager.playPowerup();
        Haptics.superShot();
        VFX3D.screenShake(0.15);
        renderQuests();
    }

    function onGoal() {
        const d = SaveManager.get();
        d.totalGoals = (d.totalGoals || 0) + 1;
        SaveManager.save();
    }

    function onUltimate() {
        const d = SaveManager.get();
        d.ultimatesUsed = (d.ultimatesUsed || 0) + 1;
        SaveManager.save();
    }

    function onTourneyWin() {
        const d = SaveManager.get();
        d.tourneyWins = (d.tourneyWins || 0) + 1;
        SaveManager.save();
        VKService.submitScore(d.tourneyWins);
    }

    return { renderQuests, onGoal, onUltimate, onTourneyWin, getProgress };
})();

// ─────────────────────────────────────────────────────────────────────────
// 3.3. ЕЖЕДНЕВНОЕ КОЛЕСО УДАЧИ И СТРИК-БОНУС (LuckyWheel)
// ─────────────────────────────────────────────────────────────────────────
const LuckyWheel = (() => {
    let canvas, ctx;
    let isSpinning = false;
    let rotation = 0;
    let lastPegIndex = -1;

    const SECTORS = [
        { label: '+100', val: 100, type: 'coins', bg: '#0b1e42', textHex: '#ffca28' },
        { label: '+50', val: 50, type: 'coins', bg: '#051126', textHex: '#00f0ff' },
        { label: '+250', val: 250, type: 'coins', bg: '#161e4a', textHex: '#ffca28' },
        { label: '+75', val: 75, type: 'coins', bg: '#051126', textHex: '#00f0ff' },
        { label: '+500', val: 500, type: 'coins', bg: '#221447', textHex: '#b537f2' },
        { label: '+150', val: 150, type: 'coins', bg: '#051126', textHex: '#00f0ff' },
        { label: '+1000', val: 1000, type: 'jackpot', bg: '#352105', textHex: '#ffd700' },
        { label: '+200', val: 200, type: 'coins', bg: '#051126', textHex: '#00ff88' }
    ];

    const STREAK_REWARDS = [50, 75, 100, 150, 200, 300, 500];

    function init() {
        canvas = document.getElementById('wheel-canvas');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        renderWheel(0);
        updateUI();
        SaveManager.checkDailyStreak();
    }

    function renderWheel(angle) {
        if (!ctx || !canvas) return;
        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;
        const r = cx - 8;

        ctx.clearRect(0, 0, w, h);

        const count = SECTORS.length;
        const arc = (Math.PI * 2) / count;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        // Отрисовка секторов
        for (let i = 0; i < count; i++) {
            const startAngle = i * arc;
            const endAngle = startAngle + arc;
            const s = SECTORS[i];

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, r, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = s.bg;
            ctx.fill();

            // Тонкая разделительная линия
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Текст сектора
            ctx.save();
            ctx.rotate(startAngle + arc / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = s.textHex;
            ctx.font = '900 16px "Segoe UI", system-ui, sans-serif';
            ctx.shadowColor = s.textHex;
            ctx.shadowBlur = 8;
            ctx.fillText(s.label, r - 22, 6);
            ctx.restore();
        }

        // Внешний неоновый обод со штырьками
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 3.5;
        ctx.stroke();

        // 16 штырьков по периметру
        const pegCount = 16;
        for (let p = 0; p < pegCount; p++) {
            const pAngle = (p * Math.PI * 2) / pegCount;
            const px = Math.cos(pAngle) * (r - 2);
            const py = Math.sin(pAngle) * (r - 2);
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#ffca28';
            ctx.shadowColor = '#ffca28';
            ctx.shadowBlur = 6;
            ctx.fill();
        }

        ctx.restore();
    }

    function spin(isFree = true) {
        if (isSpinning) return;
        isSpinning = true;
        stopCountdown();

        const banner = document.getElementById('wheel-prize-banner');
        if (banner) banner.style.display = 'none';

        if (isFree) {
            SaveManager.recordWheelSpin();
        }

        const turns = 4 + Math.random() * 3;
        const targetAngle = turns * Math.PI * 2 + Math.random() * Math.PI * 2;
        let elapsed = 0;
        const duration = 4000;
        const startRot = rotation % (Math.PI * 2);
        const startTime = performance.now();

        const pointer = document.getElementById('wheel-pointer');

        function step(now) {
            elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const curAngle = startRot + targetAngle * easeOut;
            rotation = curAngle;
            renderWheel(rotation);

            const norm = (rotation + Math.PI / 2) % (Math.PI * 2);
            const currentPeg = Math.floor((norm / (Math.PI * 2)) * 16);
            if (currentPeg !== lastPegIndex) {
                lastPegIndex = currentPeg;
                AudioManager.playWheelTick();
                Haptics.tap();
                if (pointer) {
                    pointer.style.transform = `translateX(-50%) rotate(${Math.random() > 0.5 ? 12 : -12}deg)`;
                    setTimeout(() => { if (pointer) pointer.style.transform = 'translateX(-50%) rotate(0deg)'; }, 60);
                }
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                isSpinning = false;
                _finishSpin();
            }
        }
        requestAnimationFrame(step);
    }

    function _finishSpin() {
        const count = SECTORS.length;
        const arc = (Math.PI * 2) / count;
        const effective = (3 * Math.PI / 2 - (rotation % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const winIdx = Math.floor(effective / arc) % count;
        const prize = SECTORS[winIdx];

        SaveManager.addCoins(prize.val);
        const d = SaveManager.get();
        d.wheelSpinsTotal = (d.wheelSpinsTotal || 0) + 1;
        SaveManager.save();
        if (typeof AchievementManager !== 'undefined') AchievementManager.checkAll();
        if (typeof BattlePassManager !== 'undefined') BattlePassManager.addXP(30, 'wheel');
        AudioManager.playFanfare();
        Haptics.superShot();
        VFX3D.createGoalConfetti(true);

        const banner = document.getElementById('wheel-prize-banner');
        if (banner) {
            banner.textContent = `+${prize.val} ${I18n.t('coins')}!`;
            banner.style.display = 'block';
        }

        updateUI();
    }

    let countdownInterval = null;

    function _updateCountdown() {
        const btnFree = document.getElementById('btn-wheel-spin-free');
        const txtFree = document.getElementById('txt-spin-free');
        const dot = document.getElementById('wheel-badge-dot');

        const ms = SaveManager.getFreeSpinRemainingMs();
        const canFree = ms <= 0 || SaveManager.canFreeSpin();

        if (dot) {
            dot.style.display = canFree ? 'block' : 'none';
        }

        if (btnFree) {
            btnFree.disabled = !canFree || isSpinning;
            if (canFree) {
                if (txtFree) txtFree.textContent = I18n.t('spin_free');
                btnFree.classList.add('ready');
                stopCountdown();
            } else {
                btnFree.classList.remove('ready');
                const totalSec = Math.max(0, Math.ceil(ms / 1000));
                const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
                const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
                const s = String(totalSec % 60).padStart(2, '0');
                if (txtFree) txtFree.textContent = `${I18n.t('spin_wait')} ${h}:${m}:${s}`;
            }
        }
    }

    function startCountdown() {
        stopCountdown();
        _updateCountdown();
        if (!SaveManager.canFreeSpin()) {
            countdownInterval = setInterval(() => {
                const overlay = document.getElementById('overlay-wheel');
                if (!overlay || !overlay.classList.contains('active')) {
                    stopCountdown();
                    return;
                }
                _updateCountdown();
            }, 1000);
        }
    }

    function stopCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }

    function updateUI() {
        _updateCountdown();

        const btnAd = document.getElementById('btn-wheel-spin-ad');
        if (btnAd) btnAd.disabled = isSpinning;

        renderStreak();

        const overlay = document.getElementById('overlay-wheel');
        if (overlay && overlay.classList.contains('active')) {
            startCountdown();
        } else {
            stopCountdown();
        }
    }

    function renderStreak() {
        const track = document.getElementById('daily-streak-track');
        const countEl = document.getElementById('streak-days-count');
        if (!track) return;

        const d = SaveManager.get();
        const curStreak = Math.min(7, Math.max(1, d.loginStreak || 1));
        if (countEl) countEl.textContent = `${curStreak} / 7`;

        track.innerHTML = '';
        const isClaimedToday = SaveManager.isStreakClaimedToday();

        for (let i = 1; i <= 7; i++) {
            const card = document.createElement('div');
            const isPast = i < curStreak;
            const isToday = i === curStreak;
            const reward = STREAK_REWARDS[i - 1];

            let cls = 'streak-day-card';
            if (isPast || (isToday && isClaimedToday)) cls += ' completed';
            else if (isToday) cls += ' active';

            card.className = cls;
            card.innerHTML = `
                <div class="streak-day-num">${I18n.t('streak_day')} ${i}</div>
                <div class="streak-day-val">+${reward}</div>
            `;

            if (isToday && !isClaimedToday) {
                card.style.cursor = 'pointer';
                card.title = `${I18n.t('streak_claim')} +${reward}`;
                card.addEventListener('click', () => {
                    SaveManager.claimStreakToday(reward);
                    AudioManager.playPowerup();
                    Haptics.superShot();
                    VFX3D.screenShake(0.15);
                    updateUI();
                });
            }

            track.appendChild(card);
        }
    }

    return { init, spin, updateUI, isSpinning: () => isSpinning, startCountdown, stopCountdown };
})();

// ─────────────────────────────────────────────────────────────────────────
// 3.4. СИСТЕМА ДОСТИЖЕНИЙ (AchievementManager) — 20 разнообразных ачивок
// ─────────────────────────────────────────────────────────────────────────
const AchievementManager = (() => {
    const ACHIEVEMENTS_DATA = [
        {
            id: 'first_goal',
            title_ru: 'Первый гол',
            title_en: 'First Goal',
            title_tr: 'Ilk Gol',
            desc_ru: 'Забей свой первый гол в ворота соперника',
            desc_en: 'Score your first goal in any match',
            desc_tr: 'Herhangi bir macta ilk golunu at',
            target: 1,
            reward: 50,
            iconSvg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>'
        },
        {
            id: 'ricochet_sniper',
            title_ru: 'Снайпер 3 рикошета',
            title_en: '3-Ricochet Sniper',
            title_tr: '3 Sekmeli Keskin Nisanci',
            desc_ru: 'Забей гол после 3 или более рикошетов от бортов',
            desc_en: 'Score a goal after 3+ wall ricochets',
            desc_tr: 'Bantlardan 3 veya daha fazla sekme sonrasi gol at',
            target: 1,
            reward: 100,
            iconSvg: '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/>'
        },
        {
            id: 'clean_sheet',
            title_ru: 'Сухарь 7:0',
            title_en: 'Clean Sheet 7:0',
            title_tr: 'Kuru Galibiyet 7:0',
            desc_ru: 'Выиграй матч с сухим счетом 7:0',
            desc_en: 'Win a match 7:0 without conceding a goal',
            desc_tr: 'Gol yemeden 7:0 mac kazan',
            target: 1,
            reward: 150,
            iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
        },
        {
            id: 'supersonic',
            title_ru: 'Сверхзвук >100 км/ч',
            title_en: 'Supersonic >100 km/h',
            title_tr: 'Supersonik >100 km/s',
            desc_ru: 'Разгони шайбу выше 100 км/ч',
            desc_en: 'Hit the puck at over 100 km/h',
            desc_tr: 'Diski 100 km/s hizin uzerine firlat',
            target: 1,
            reward: 100,
            iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
        },
        {
            id: 'epic_comeback',
            title_ru: 'Камбэк года',
            title_en: 'Comeback of the Year',
            title_tr: 'Yilin Geri Donusu',
            desc_ru: 'Одержи победу, уступая в 3 или более голов',
            desc_en: 'Win a match after trailing by 3 or more goals',
            desc_tr: '3 veya daha fazla gol gerideyken maci cevirip kazan',
            target: 1,
            reward: 200,
            iconSvg: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>'
        },
        {
            id: 'tourney_champ',
            title_ru: 'Чемпион турнира',
            title_en: 'Tournament Champion',
            title_tr: 'Turnuva Sampiyonu',
            desc_ru: 'Выиграй Кубок Чемпионов в турнире',
            desc_en: 'Win the Championship Cup in tournament mode',
            desc_tr: 'Turnuva modunda Sampiyonluk Kupasini kazan',
            target: 1,
            reward: 250,
            iconSvg: '<path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"/><path d="M18 9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3"/><path d="M6 3h12v7a6 6 0 0 1-12 0V3z"/><path d="M9 21h6"/><path d="M12 16v5"/>'
        },
        {
            id: 'boss_slayer',
            title_ru: 'Гроза боссов',
            title_en: 'Boss Slayer',
            title_tr: 'Patron Avcisi',
            desc_ru: 'Одолей финального босса Брута в турнире',
            desc_en: 'Defeat final boss Brute in tournament',
            desc_tr: 'Turnuvada final patronu Brute maglup et',
            target: 1,
            reward: 200,
            iconSvg: '<polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/>'
        },
        {
            id: 'win_streak_5',
            title_ru: '5 побед подряд',
            title_en: '5 Win Streak',
            title_tr: '5 Galibiyet Serisi',
            desc_ru: 'Одержи 5 побед подряд в матчах',
            desc_en: 'Win 5 consecutive matches',
            desc_tr: 'Ust uste 5 mac kazan',
            target: 5,
            reward: 150,
            iconSvg: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/>'
        },
        {
            id: 'win_streak_10',
            title_ru: '10 побед подряд',
            title_en: '10 Win Streak',
            title_tr: '10 Galibiyet Serisi',
            desc_ru: 'Одержи 10 побед подряд в матчах',
            desc_en: 'Win 10 consecutive matches',
            desc_tr: 'Ust uste 10 mac kazan',
            target: 10,
            reward: 250,
            iconSvg: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
        },
        {
            id: 'goals_25',
            title_ru: 'Меткий стрелок',
            title_en: 'Sharpshooter',
            title_tr: 'Keskin Nisanci',
            desc_ru: 'Забей суммарно 25 голов',
            desc_en: 'Score 25 total goals',
            desc_tr: 'Toplam 25 gol at',
            target: 25,
            reward: 100,
            iconSvg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
        },
        {
            id: 'goals_50',
            title_ru: 'Бомбардир',
            title_en: 'Goal Machine',
            title_tr: 'Gol Makinesi',
            desc_ru: 'Забей суммарно 50 голов',
            desc_en: 'Score 50 total goals',
            desc_tr: 'Toplam 50 gol at',
            target: 50,
            reward: 150,
            iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>'
        },
        {
            id: 'goals_100',
            title_ru: 'Легендарный страйкер',
            title_en: 'Legendary Striker',
            title_tr: 'Efsanevi Golcu',
            desc_ru: 'Забей суммарно 100 голов',
            desc_en: 'Score 100 total goals',
            desc_tr: 'Toplam 100 gol at',
            target: 100,
            reward: 250,
            iconSvg: '<path d="M12 15l-2 5l9-11h-6l2-7l-9 11h6z"/>'
        },
        {
            id: 'ultimate_master',
            title_ru: 'Мастер ульты',
            title_en: 'Ultimate Master',
            title_tr: 'Ulti Ustasi',
            desc_ru: 'Активируй Супер-Удар 10 раз',
            desc_en: 'Activate Super Shot 10 times',
            desc_tr: 'Super Vurusu 10 kez kullan',
            target: 10,
            reward: 120,
            iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
        },
        {
            id: 'trickshot_novice',
            title_ru: 'Искатель трюков',
            title_en: 'Trickshot Novice',
            title_tr: 'Numara Caylagi',
            desc_ru: 'Пройди 3 уровня в испытаниях',
            desc_en: 'Complete 3 trickshot levels',
            desc_tr: 'Meydan okumada 3 bolum gec',
            target: 3,
            reward: 100,
            iconSvg: '<circle cx="12" cy="12" r="9"/><path d="M10 15l5-3-5-3v6z"/>'
        },
        {
            id: 'trickshot_master',
            title_ru: 'Мастер трюк-шота',
            title_en: 'Trickshot Master',
            title_tr: 'Numara Ustasi',
            desc_ru: 'Пройди все 10 уровней в испытаниях',
            desc_en: 'Complete all 10 trickshot levels',
            desc_tr: '10 meydan okuma seviyesini tamamla',
            target: 10,
            reward: 250,
            iconSvg: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
        },
        {
            id: 'collector_skins',
            title_ru: 'Коллекционер',
            title_en: 'Skin Collector',
            title_tr: 'Koleksiyoncu',
            desc_ru: 'Разблокируй 5 любых бит или шайб',
            desc_en: 'Unlock 5 mallets or pucks',
            desc_tr: '5 tokmak veya disk ac',
            target: 5,
            reward: 150,
            iconSvg: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
        },
        {
            id: 'speed_demon',
            title_ru: 'Блицкриг <60 сек',
            title_en: 'Blitzkrieg <60s',
            title_tr: 'Yildirim Hizi <60sn',
            desc_ru: 'Выиграй матч быстрее чем за 60 секунд',
            desc_en: 'Win a match in under 60 seconds',
            desc_tr: '60 saniyeden kisa surede mac kazan',
            target: 1,
            reward: 150,
            iconSvg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
        },
        {
            id: 'wall_bouncer',
            title_ru: 'Мастер бортов',
            title_en: 'Bumper Master',
            title_tr: 'Bant Ustasi',
            desc_ru: 'Соверши 50 отскоков от бортов стола',
            desc_en: 'Perform 50 wall bounces',
            desc_tr: 'Toplam 50 bant sekmesi yap',
            target: 50,
            reward: 80,
            iconSvg: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>'
        },
        {
            id: 'lucky_spinner',
            title_ru: 'Колесо фортуны',
            title_en: 'Fortune Spinner',
            title_tr: 'Sans Carkcisi',
            desc_ru: 'Прокрути Колесо Удачи 3 раза',
            desc_en: 'Spin the Lucky Wheel 3 times',
            desc_tr: 'Sans Carkini 3 kez cevir',
            target: 3,
            reward: 80,
            iconSvg: '<circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>'
        },
        {
            id: 'league_champion',
            title_ru: 'Лига Чемпионов',
            title_en: 'Champions League',
            title_tr: 'Sampiyonlar Ligi',
            desc_ru: 'Завоюй 5 турнирных кубков на Пути Чемпиона',
            desc_en: 'Earn 5 tournament cups on Trophy Road',
            desc_tr: 'Sampiyon Yolunda 5 kupa kazan',
            target: 5,
            reward: 250,
            iconSvg: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
        }
    ];

    let toastTimer = null;

    function getProgress(ach) {
        const d = SaveManager.get();
        const st = d.achievements && d.achievements[ach.id];
        if (st && st.unlocked) return ach.target;

        switch (ach.id) {
            case 'first_goal': return Math.min(1, d.totalGoals || 0);
            case 'ricochet_sniper': return st && st.progress ? 1 : 0;
            case 'clean_sheet': return st && st.progress ? 1 : 0;
            case 'supersonic': return st && st.progress ? 1 : 0;
            case 'epic_comeback': return st && st.progress ? 1 : 0;
            case 'tourney_champ': return Math.min(1, d.tourneyWins || 0);
            case 'boss_slayer': return st && st.progress ? 1 : 0;
            case 'win_streak_5': return Math.min(5, Math.max(d.bestWinStreak || 0, d.winStreak || 0));
            case 'win_streak_10': return Math.min(10, Math.max(d.bestWinStreak || 0, d.winStreak || 0));
            case 'goals_25': return Math.min(25, d.totalGoals || 0);
            case 'goals_50': return Math.min(50, d.totalGoals || 0);
            case 'goals_100': return Math.min(100, d.totalGoals || 0);
            case 'ultimate_master': return Math.min(10, d.ultimatesUsed || 0);
            case 'trickshot_novice': {
                const levels = d.trickshotLevels || {};
                const count = Object.values(levels).filter(l => l && l.completed).length;
                return Math.min(3, count);
            }
            case 'trickshot_master': {
                const levels = d.trickshotLevels || {};
                const count = Object.values(levels).filter(l => l && l.completed).length;
                return Math.min(10, count);
            }
            case 'collector_skins': {
                const mallets = (d.unlockedMallets || []).length;
                const pucks = (d.unlockedPucks || []).length;
                return Math.min(5, mallets + pucks);
            }
            case 'speed_demon': return st && st.progress ? 1 : 0;
            case 'wall_bouncer': return Math.min(50, d.totalWallBounces || 0);
            case 'lucky_spinner': return Math.min(3, d.wheelSpinsTotal || 0);
            case 'league_champion': return Math.min(5, d.tourneyWins || 0);
            default: return 0;
        }
    }

    function isUnlocked(id) {
        const d = SaveManager.get();
        return !!(d.achievements && d.achievements[id] && d.achievements[id].unlocked);
    }

    function isClaimed(id) {
        const d = SaveManager.get();
        return !!(d.achievements && d.achievements[id] && d.achievements[id].claimed);
    }

    function unlock(id) {
        const ach = ACHIEVEMENTS_DATA.find(a => a.id === id);
        if (!ach) return;
        const d = SaveManager.get();
        d.achievements = d.achievements || {};
        const cur = d.achievements[id] || { unlocked: false, claimed: false, progress: 0 };
        if (cur.unlocked) return;

        cur.unlocked = true;
        cur.progress = ach.target;
        d.achievements[id] = cur;
        SaveManager.save();

        showToast(ach);
        if (typeof AudioManager !== 'undefined') AudioManager.playFanfare();
        if (typeof Haptics !== 'undefined') Haptics.superShot();
        if (typeof VFX3D !== 'undefined') VFX3D.screenShake(0.25);
        updateMenuBadge();
    }

    function checkAll() {
        ACHIEVEMENTS_DATA.forEach(ach => {
            if (!isUnlocked(ach.id)) {
                const cur = getProgress(ach);
                if (cur >= ach.target) {
                    unlock(ach.id);
                }
            }
        });
    }

    function showToast(ach) {
        const toast = document.getElementById('toast-achievement');
        if (!toast) return;

        const lang = (typeof I18n !== 'undefined' && I18n.getLang()) || 'ru';
        const titleEl = document.getElementById('toast-ach-title');
        const rewardEl = document.getElementById('toast-ach-reward');

        if (titleEl) titleEl.textContent = ach['title_' + lang] || ach.title_ru;
        if (rewardEl) rewardEl.textContent = `+${ach.reward} ${(typeof I18n !== 'undefined' ? I18n.t('coins') : 'монет')}`;

        toast.classList.remove('active');
        void toast.offsetWidth;
        toast.classList.add('active');

        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            if (toast) toast.classList.remove('active');
        }, 3600);
    }

    function claim(ach) {
        if (!isUnlocked(ach.id) || isClaimed(ach.id)) return;
        const d = SaveManager.get();
        d.achievements = d.achievements || {};
        d.achievements[ach.id] = d.achievements[ach.id] || { unlocked: true, claimed: false, progress: ach.target };
        d.achievements[ach.id].claimed = true;
        SaveManager.addCoins(ach.reward);
        SaveManager.save();

        if (typeof AudioManager !== 'undefined') AudioManager.playPowerup();
        if (typeof Haptics !== 'undefined') Haptics.superShot();
        if (typeof VFX3D !== 'undefined') VFX3D.screenShake(0.18);
        if (typeof Announcer !== 'undefined') Announcer.show(`+${ach.reward} COINS!`, '#ffd700');

        render();
        updateMenuBadge();
    }

    function updateMenuBadge() {
        const badge = document.getElementById('menu-ach-badge');
        if (!badge) return;
        let claimableCount = 0;
        ACHIEVEMENTS_DATA.forEach(ach => {
            if (isUnlocked(ach.id) && !isClaimed(ach.id)) {
                claimableCount++;
            }
        });
        if (claimableCount > 0) {
            badge.textContent = claimableCount;
            badge.style.display = 'inline-flex';
        } else {
            badge.style.display = 'none';
        }
    }

    function render() {
        const container = document.getElementById('achievements-container');
        if (!container) return;

        const lang = (typeof I18n !== 'undefined' && I18n.getLang()) || 'ru';
        container.innerHTML = '';

        let completedCount = 0;
        let totalCoinsEarned = 0;

        ACHIEVEMENTS_DATA.forEach(ach => {
            const unlocked = isUnlocked(ach.id);
            const claimed = isClaimed(ach.id);
            const current = unlocked ? ach.target : getProgress(ach);
            const isDone = current >= ach.target;
            const pct = Math.min(100, Math.round((current / ach.target) * 100));

            if (unlocked || isDone) completedCount++;
            if (claimed) totalCoinsEarned += ach.reward;

            const card = document.createElement('div');
            card.className = `achievement-card ${claimed ? 'is-claimed' : (unlocked || isDone ? 'can-claim' : 'is-locked')}`;

            const title = ach['title_' + lang] || ach.title_ru;
            const desc = ach['desc_' + lang] || ach.desc_ru;

            let btnClass = 'btn-ach-claim locked';
            let btnText = `+${ach.reward}`;
            let btnDisabled = true;

            if (claimed) {
                btnClass = 'btn-ach-claim claimed';
                btnText = (typeof I18n !== 'undefined' ? I18n.t('reward_claimed') : 'Получено');
            } else if (unlocked || isDone) {
                btnClass = 'btn-ach-claim active';
                btnText = `${(typeof I18n !== 'undefined' ? I18n.t('reward_claim') : 'Забрать')} +${ach.reward}`;
                btnDisabled = false;
            } else {
                btnText = `${current}/${ach.target}`;
            }

            card.innerHTML = `
                <div class="ach-icon-box">
                    <svg class="ach-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${ach.iconSvg}
                    </svg>
                </div>
                <div class="ach-info">
                    <div class="ach-title-row">
                        <span class="ach-title">${title}</span>
                        <span class="ach-reward-badge">+${ach.reward}</span>
                    </div>
                    <div class="ach-desc">${desc}</div>
                    <div class="ach-progress-wrap">
                        <div class="ach-progress-bar" style="width: ${pct}%;"></div>
                        <span class="ach-progress-text">${current} / ${ach.target}</span>
                    </div>
                </div>
                <button class="${btnClass}" ${btnDisabled ? 'disabled' : ''}>${btnText}</button>
            `;

            const btn = card.querySelector('.btn-ach-claim');
            if (btn && (unlocked || isDone) && !claimed) {
                btn.addEventListener('click', () => {
                    claim(ach);
                });
            }

            container.appendChild(card);
        });

        const countEl = document.getElementById('ach-completed-count');
        if (countEl) countEl.textContent = completedCount;
        const totalCoinsEl = document.getElementById('ach-total-earned');
        if (totalCoinsEl) totalCoinsEl.textContent = totalCoinsEarned;

        updateMenuBadge();
    }

    return {
        init: () => { checkAll(); updateMenuBadge(); },
        unlock,
        claim,
        checkAll,
        render,
        updateMenuBadge,
        showToast,
        getData: () => ACHIEVEMENTS_DATA
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 3.5. СЕЗОННЫЙ БОЕВОЙ ПРОПУСК (BattlePassManager) — 15 уровней
// ─────────────────────────────────────────────────────────────────────────
const BattlePassManager = (() => {
    const XP_PER_TIER = 200;
    const MAX_TIERS = 15;
    const VIP_COST_COINS = 400;

    const TIERS = [
        { tier: 1, free: { type: 'coins', val: 50, title_ru: '50 Монет', title_en: '50 Coins', title_tr: '50 Altin' }, vip: { type: 'coins', val: 100, title_ru: '100 Монет', title_en: '100 Coins', title_tr: '100 Altin' } },
        { tier: 2, free: { type: 'coins', val: 70, title_ru: '70 Монет', title_en: '70 Coins', title_tr: '70 Altin' }, vip: { type: 'coins', val: 150, title_ru: '150 Монет', title_en: '150 Coins', title_tr: '150 Altin' } },
        { tier: 3, free: { type: 'coins', val: 90, title_ru: '90 Монет', title_en: '90 Coins', title_tr: '90 Altin' }, vip: { type: 'coins', val: 200, title_ru: '200 Монет', title_en: '200 Coins', title_tr: '200 Altin' } },
        { tier: 4, free: { type: 'coins', val: 100, title_ru: '100 Монет', title_en: '100 Coins', title_tr: '100 Altin' }, vip: { type: 'mallet', val: 'gold', title_ru: 'Бита "Golden VIP"', title_en: 'Mallet "Golden VIP"', title_tr: 'Tokmak "Golden VIP"' } },
        { tier: 5, free: { type: 'coins', val: 120, title_ru: '120 Монет', title_en: '120 Coins', title_tr: '120 Altin' }, vip: { type: 'coins', val: 300, title_ru: '300 Монет', title_en: '300 Coins', title_tr: '300 Altin' } },
        { tier: 6, free: { type: 'coins', val: 140, title_ru: '140 Монет', title_en: '140 Coins', title_tr: '140 Altin' }, vip: { type: 'puck', val: 'plasma', title_ru: 'Шайба "Plasma Fire"', title_en: 'Puck "Plasma Fire"', title_tr: 'Disk "Plasma Fire"' } },
        { tier: 7, free: { type: 'coins', val: 150, title_ru: '150 Монет', title_en: '150 Coins', title_tr: '150 Altin' }, vip: { type: 'coins', val: 350, title_ru: '350 Монет', title_en: '350 Coins', title_tr: '350 Altin' } },
        { tier: 8, free: { type: 'coins', val: 180, title_ru: '180 Монет', title_en: '180 Coins', title_tr: '180 Altin' }, vip: { type: 'coins', val: 400, title_ru: '400 Монет', title_en: '400 Coins', title_tr: '400 Altin' } },
        { tier: 9, free: { type: 'coins', val: 200, title_ru: '200 Монет', title_en: '200 Coins', title_tr: '200 Altin' }, vip: { type: 'goalfx', val: 'goldenspark', title_ru: 'Гол "Golden Shower"', title_en: 'Goal "Golden Shower"', title_tr: 'Gol "Golden Shower"' } },
        { tier: 10, free: { type: 'coins', val: 220, title_ru: '220 Монет', title_en: '220 Coins', title_tr: '220 Altin' }, vip: { type: 'coins', val: 500, title_ru: '500 Монет', title_en: '500 Coins', title_tr: '500 Altin' } },
        { tier: 11, free: { type: 'coins', val: 250, title_ru: '250 Монет', title_en: '250 Coins', title_tr: '250 Altin' }, vip: { type: 'coins', val: 550, title_ru: '550 Монет', title_en: '550 Coins', title_tr: '550 Altin' } },
        { tier: 12, free: { type: 'coins', val: 280, title_ru: '280 Монет', title_en: '280 Coins', title_tr: '280 Altin' }, vip: { type: 'coins', val: 600, title_ru: '600 Монет', title_en: '600 Coins', title_tr: '600 Altin' } },
        { tier: 13, free: { type: 'coins', val: 300, title_ru: '300 Монет', title_en: '300 Coins', title_tr: '300 Altin' }, vip: { type: 'coins', val: 700, title_ru: '700 Монет', title_en: '700 Coins', title_tr: '700 Altin' } },
        { tier: 14, free: { type: 'coins', val: 350, title_ru: '350 Монет', title_en: '350 Coins', title_tr: '350 Altin' }, vip: { type: 'coins', val: 800, title_ru: '800 Монет', title_en: '800 Coins', title_tr: '800 Altin' } },
        { tier: 15, free: { type: 'coins', val: 500, title_ru: '500 Монет', title_en: '500 Coins', title_tr: '500 Altin' }, vip: { type: 'coins', val: 1000, title_ru: '1000 Монет + Кубок Сезона', title_en: '1000 Coins + Season Cup', title_tr: '1000 Altin + Sezon Kupasi' } }
    ];

    function getBP() {
        const d = SaveManager.get();
        if (!d.battlePass) {
            d.battlePass = { xp: 0, vipPurchased: false, claimedFree: {}, claimedVip: {} };
        }
        if (!d.battlePass.claimedFree) d.battlePass.claimedFree = {};
        if (!d.battlePass.claimedVip) d.battlePass.claimedVip = {};
        return d.battlePass;
    }

    function getXP() {
        return getBP().xp || 0;
    }

    function getLevel() {
        const xp = getXP();
        return Math.min(MAX_TIERS, Math.floor(xp / XP_PER_TIER) + 1);
    }

    function getTierProgress() {
        const xp = getXP();
        const level = getLevel();
        if (level >= MAX_TIERS && xp >= MAX_TIERS * XP_PER_TIER) {
            return { current: XP_PER_TIER, max: XP_PER_TIER, pct: 100 };
        }
        const currentTierXP = xp % XP_PER_TIER;
        const pct = Math.min(100, Math.round((currentTierXP / XP_PER_TIER) * 100));
        return { current: currentTierXP, max: XP_PER_TIER, pct };
    }

    function isVIP() {
        return !!getBP().vipPurchased;
    }

    function addXP(amount, reason = '') {
        const oldLevel = getLevel();
        const bp = getBP();
        bp.xp = (bp.xp || 0) + amount;
        SaveManager.save();
        const newLevel = getLevel();

        if (newLevel > oldLevel) {
            if (typeof AudioManager !== 'undefined') AudioManager.playFanfare();
            if (typeof VFX3D !== 'undefined') VFX3D.screenShake(0.3);
            if (typeof Announcer !== 'undefined') {
                Announcer.show(`BATTLE PASS LEVEL ${newLevel}!`, '#ffd700');
            }
        }
        updateMenuBadge();
        return { oldLevel, newLevel, added: amount };
    }

    function unlockVIP() {
        const bp = getBP();
        bp.vipPurchased = true;
        SaveManager.save();
        if (typeof AudioManager !== 'undefined') AudioManager.playFanfare();
        if (typeof Haptics !== 'undefined') Haptics.superShot();
        if (typeof VFX3D !== 'undefined') VFX3D.screenShake(0.35);
        if (typeof Announcer !== 'undefined') Announcer.show('VIP PASS UNLOCKED!', '#ffd700');
        render();
        updateMenuBadge();
    }

    function buyVIPWithCoins() {
        const d = SaveManager.get();
        if (d.coins < VIP_COST_COINS) {
            if (typeof Announcer !== 'undefined') Announcer.show('NEED 400 COINS', '#ff2a55');
            return false;
        }
        SaveManager.addCoins(-VIP_COST_COINS);
        unlockVIP();
        return true;
    }

    function buyVIPWithAd() {
        if (typeof VKService !== 'undefined') {
            VKService.showRewarded({
                onRewarded: () => {
                    unlockVIP();
                }
            });
        }
    }

    function isClaimed(tier, isVip) {
        const bp = getBP();
        if (isVip) return !!(bp.claimedVip && bp.claimedVip[tier]);
        return !!(bp.claimedFree && bp.claimedFree[tier]);
    }

    function claim(tier, isVip) {
        const level = getLevel();
        if (tier > level) return;
        if (isVip && !isVIP()) return;
        if (isClaimed(tier, isVip)) return;

        const tierCfg = TIERS.find(t => t.tier === tier);
        if (!tierCfg) return;
        const reward = isVip ? tierCfg.vip : tierCfg.free;

        const bp = getBP();
        if (isVip) {
            bp.claimedVip = bp.claimedVip || {};
            bp.claimedVip[tier] = true;
        } else {
            bp.claimedFree = bp.claimedFree || {};
            bp.claimedFree[tier] = true;
        }

        const d = SaveManager.get();
        if (reward.type === 'coins') {
            SaveManager.addCoins(reward.val);
        } else if (reward.type === 'mallet') {
            if (!d.unlockedMallets.includes(reward.val)) {
                d.unlockedMallets.push(reward.val);
            } else {
                SaveManager.addCoins(300);
            }
        } else if (reward.type === 'puck') {
            if (!d.unlockedPucks.includes(reward.val)) {
                d.unlockedPucks.push(reward.val);
            } else {
                SaveManager.addCoins(300);
            }
        } else if (reward.type === 'goalfx') {
            if (!d.unlockedGoalFX.includes(reward.val)) {
                d.unlockedGoalFX.push(reward.val);
            } else {
                SaveManager.addCoins(450);
            }
        }
        SaveManager.save();

        if (typeof AudioManager !== 'undefined') AudioManager.playPowerup();
        if (typeof Haptics !== 'undefined') Haptics.superShot();
        if (typeof VFX3D !== 'undefined') VFX3D.screenShake(0.2);

        render();
        updateMenuBadge();
    }

    function updateMenuBadge() {
        const badge = document.getElementById('menu-bp-badge');
        if (badge) {
            badge.textContent = `LVL ${getLevel()}`;
        }
    }

    function render() {
        const container = document.getElementById('bp-tiers-container');
        if (!container) return;

        const lang = (typeof I18n !== 'undefined' && I18n.getLang()) || 'ru';
        const level = getLevel();
        const prog = getTierProgress();
        const vipActive = isVIP();

        const curLvlEl = document.getElementById('bp-current-level');
        if (curLvlEl) curLvlEl.textContent = level;
        const xpTextEl = document.getElementById('bp-xp-text');
        if (xpTextEl) xpTextEl.textContent = `${prog.current} / ${prog.max} XP`;
        const barEl = document.getElementById('bp-progress-bar');
        if (barEl) barEl.style.width = `${prog.pct}%`;

        const vipBanner = document.getElementById('bp-vip-banner');
        if (vipBanner) {
            if (vipActive) {
                vipBanner.innerHTML = `
                    <div class="bp-vip-active-chip">
                        <svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffd700" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <span>${typeof I18n !== 'undefined' ? I18n.t('bp_vip_active') : 'VIP АКТИВИРОВАН'}</span>
                    </div>
                `;
            } else {
                vipBanner.innerHTML = `
                    <div class="bp-vip-buy-row">
                        <button id="btn-bp-buy-coins" class="btn btn-reward bp-btn-vip-buy">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffd700" stroke-width="2">
                                <circle cx="12" cy="12" r="9"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                            <span>${typeof I18n !== 'undefined' ? I18n.t('bp_buy_vip').replace('{N}', VIP_COST_COINS) : `VIP Pass: ${VIP_COST_COINS} Монет`}</span>
                        </button>
                        <button id="btn-bp-buy-ad" class="btn btn-secondary bp-btn-vip-ad">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00f0ff" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                            <span>${typeof I18n !== 'undefined' ? I18n.t('bp_watch_vip') : 'VIP за видео'}</span>
                        </button>
                    </div>
                `;
                const buyCoinsBtn = document.getElementById('btn-bp-buy-coins');
                if (buyCoinsBtn) buyCoinsBtn.addEventListener('click', () => buyVIPWithCoins());
                const buyAdBtn = document.getElementById('btn-bp-buy-ad');
                if (buyAdBtn) buyAdBtn.addEventListener('click', () => buyVIPWithAd());
            }
        }

        container.innerHTML = '';

        TIERS.forEach(t => {
            const isUnlockedTier = level >= t.tier;
            const freeClaimed = isClaimed(t.tier, false);
            const vipClaimed = isClaimed(t.tier, true);
            const freeCanClaim = isUnlockedTier && !freeClaimed;
            const vipCanClaim = isUnlockedTier && vipActive && !vipClaimed;

            const freeTitle = t.free['title_' + lang] || t.free.title_ru;
            const vipTitle = t.vip['title_' + lang] || t.vip.title_ru;

            const tierCard = document.createElement('div');
            tierCard.className = `bp-tier-card ${isUnlockedTier ? 'unlocked' : 'locked'}`;

            tierCard.innerHTML = `
                <div class="bp-tier-header">
                    <div class="bp-tier-number">${typeof I18n !== 'undefined' ? I18n.t('bp_tier').replace('{N}', t.tier) : `Уровень ${t.tier}`}</div>
                    <div class="bp-tier-req">${t.tier * XP_PER_TIER} XP</div>
                </div>
                <div class="bp-tier-tracks">
                    <div class="bp-track-box free-track ${freeClaimed ? 'claimed' : (freeCanClaim ? 'can-claim' : '')}">
                        <div class="bp-track-label">${typeof I18n !== 'undefined' ? I18n.t('free_track') : 'Free'}</div>
                        <div class="bp-reward-icon">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="9"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                        </div>
                        <div class="bp-reward-name">${freeTitle}</div>
                        <button class="btn-bp-claim free-btn ${freeClaimed ? 'claimed' : (freeCanClaim ? 'active' : 'locked')}" ${!freeCanClaim ? 'disabled' : ''}>
                            ${freeClaimed ? (typeof I18n !== 'undefined' ? I18n.t('reward_claimed') : 'Получено') : (freeCanClaim ? (typeof I18n !== 'undefined' ? I18n.t('reward_claim') : 'Забрать') : (typeof I18n !== 'undefined' ? I18n.t('reward_locked') : 'Заблокировано'))}
                        </button>
                    </div>

                    <div class="bp-track-box vip-track ${vipClaimed ? 'claimed' : (vipCanClaim ? 'can-claim' : '')}">
                        <div class="bp-track-label">${typeof I18n !== 'undefined' ? I18n.t('vip_track') : 'VIP'}</div>
                        <div class="bp-reward-icon vip-icon">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ffd700" stroke-width="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                        </div>
                        <div class="bp-reward-name vip-name">${vipTitle}</div>
                        <button class="btn-bp-claim vip-btn ${vipClaimed ? 'claimed' : (vipCanClaim ? 'active' : 'locked')}" ${!vipCanClaim ? 'disabled' : ''}>
                            ${vipClaimed ? (typeof I18n !== 'undefined' ? I18n.t('reward_claimed') : 'Получено') : (vipCanClaim ? (typeof I18n !== 'undefined' ? I18n.t('reward_claim') : 'Забрать') : (!vipActive ? 'VIP' : (typeof I18n !== 'undefined' ? I18n.t('reward_locked') : 'Заблокировано')))}
                        </button>
                    </div>
                </div>
            `;

            const freeBtn = tierCard.querySelector('.free-btn');
            if (freeBtn && freeCanClaim) {
                freeBtn.addEventListener('click', () => claim(t.tier, false));
            }
            const vipBtn = tierCard.querySelector('.vip-btn');
            if (vipBtn && vipCanClaim) {
                vipBtn.addEventListener('click', () => claim(t.tier, true));
            }

            container.appendChild(tierCard);
        });

        updateMenuBadge();
    }

    return {
        init: () => { updateMenuBadge(); },
        getXP,
        getLevel,
        getTierProgress,
        isVIP,
        addXP,
        buyVIPWithCoins,
        buyVIPWithAd,
        claim,
        render,
        updateMenuBadge,
        getData: () => TIERS
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 4. WEB AUDIO ENGINE (SFX + Synthwave BGM)
// ─────────────────────────────────────────────────────────────────────────
const AudioManager = (() => {
    let ctx = null;
    let userMuted = false, globalMuted = false;
    let bgmInterval = null, bgmStep = 0;

    function boot() {
        if (!ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                try { ctx = new AudioCtx(); } catch (e) {}
            }
        }
        if (ctx && ctx.state === 'suspended') {
            try { ctx.resume(); } catch (e) {}
        }
    }

    function tone({ type = 'sine', freq = 440, dur = 0.08, vol = 0.25, endVol = 0.001, delay = 0 }) {
        if (userMuted || globalMuted || !ctx) return;
        try {
            const t = ctx.currentTime + delay;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(vol, t);
            gain.gain.exponentialRampToValueAtTime(endVol, t + dur);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + dur + 0.02);
        } catch (e) {}
    }

    function playHit(power = 0.5) {
        boot();
        const p = Math.max(0.1, Math.min(1, power));
        tone({ type: 'triangle', freq: 160 + p * 120, dur: 0.05, vol: 0.3 * p });
        tone({ type: 'sine',     freq: 70,             dur: 0.08, vol: 0.25 * p });
        tone({ type: 'square',   freq: 280 + p * 80,  dur: 0.03, vol: 0.12 * p });
    }

    function playWall() {
        boot();
        tone({ type: 'sine', freq: 110, dur: 0.04, vol: 0.18 });
        tone({ type: 'triangle', freq: 210, dur: 0.03, vol: 0.12 });
    }

    function playGoal() {
        boot();
        [[330, 0], [440, 0.08], [554, 0.16], [659, 0.24], [880, 0.34]].forEach(([f, d]) => {
            tone({ type: 'triangle', freq: f, dur: 0.22, vol: 0.35, delay: d });
            tone({ type: 'sine',     freq: f * 0.5, dur: 0.25, vol: 0.2, delay: d });
        });
        playCrowdGoal();
        playGoalHorn();
    }

    function playGoalHorn() {
        if (userMuted || globalMuted || !ctx) return;
        boot();
        try {
            const t = ctx.currentTime;
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const sub = ctx.createOscillator();

            osc1.type = 'sawtooth';
            osc2.type = 'sawtooth';
            sub.type = 'sine';

            osc1.frequency.setValueAtTime(130, t);
            osc2.frequency.setValueAtTime(132.5, t);
            sub.frequency.setValueAtTime(65, t);

            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(750, t);
            filter.Q.setValueAtTime(3.0, t);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.01, t);
            gain.gain.linearRampToValueAtTime(0.42, t + 0.06);
            gain.gain.setValueAtTime(0.40, t + 0.7);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);

            osc1.connect(filter);
            osc2.connect(filter);
            sub.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc1.start(t);
            osc2.start(t);
            sub.start(t);

            osc1.stop(t + 1.85);
            osc2.stop(t + 1.85);
            sub.stop(t + 1.85);
        } catch (e) {}
    }

    function playCrowdGoal() {
        if (userMuted || globalMuted || !ctx) return;
        boot();
        try {
            const bufferSize = ctx.sampleRate * 1.5;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.8));
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(420, ctx.currentTime);
            filter.Q.setValueAtTime(1.5, ctx.currentTime);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.01, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.18);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.3);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
        } catch (e) {}
    }

    function playSuperShot() {
        boot();
        tone({ type: 'sawtooth', freq: 140, dur: 0.22, vol: 0.35 });
        tone({ type: 'sine', freq: 880, dur: 0.28, vol: 0.4 });
        tone({ type: 'square', freq: 440, dur: 0.16, vol: 0.25, delay: 0.04 });
    }

    function playPostOoh() {
        if (userMuted || globalMuted || !ctx) return;
        boot();
        tone({ type: 'sine', freq: 220, dur: 0.35, vol: 0.15, endVol: 0.02 });
    }

    function playPowerup() {
        boot();
        [[523, 0], [659, 0.06], [784, 0.12], [1046, 0.18]].forEach(([f, d]) => {
            tone({ type: 'sine', freq: f, dur: 0.15, vol: 0.25, delay: d });
        });
    }

    function playFreeze() {
        boot();
        tone({ type: 'sawtooth', freq: 600, dur: 0.25, vol: 0.25, endVol: 0.01 });
        tone({ type: 'sine', freq: 200, dur: 0.3, vol: 0.2 });
    }

    function playShield() {
        boot();
        tone({ type: 'square', freq: 180, dur: 0.12, vol: 0.28 });
        tone({ type: 'sine', freq: 90, dur: 0.15, vol: 0.3 });
    }

    function playWin() {
        boot();
        [[440, 0], [554, 0.1], [659, 0.2], [880, 0.3], [1100, 0.45], [880, 0.58], [1100, 0.7]].forEach(([f, d]) => {
            tone({ type: 'triangle', freq: f, dur: 0.28, vol: 0.38, delay: d });
        });
    }

    function playLose() {
        boot();
        [[330, 0], [294, 0.12], [261, 0.24], [196, 0.38]].forEach(([f, d]) => {
            tone({ type: 'sawtooth', freq: f, dur: 0.3, vol: 0.25, delay: d });
        });
    }

    const bassNotes = [110, 110, 130, 110, 146, 146, 130, 123];
    function startBGM() {
        if (bgmInterval) return;
        boot();
        bgmStep = 0;
        bgmInterval = setInterval(() => {
            if (userMuted || globalMuted || !ctx) return;
            const note = bassNotes[bgmStep % bassNotes.length];
            tone({ type: 'sawtooth', freq: note / 2, dur: 0.12, vol: 0.08 });
            tone({ type: 'sine', freq: note / 4, dur: 0.14, vol: 0.11 });
            if (bgmStep % 2 === 1) tone({ type: 'triangle', freq: 800, dur: 0.02, vol: 0.03 });
            bgmStep++;
        }, 220);
    }

    function stopBGM() {
        if (bgmInterval) { clearInterval(bgmInterval); bgmInterval = null; }
    }

    function updateMuteSVG(isMuted) {
        const svg = document.getElementById('svg-sound-icon');
        if (!svg) return;
        if (isMuted) {
            svg.innerHTML = `
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
            `;
        } else {
            svg.innerHTML = `
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            `;
        }
    }

    function playBuzzer() {
        boot();
        tone({ type: 'sawtooth', freq: 115, dur: 0.35, vol: 0.32 });
        tone({ type: 'square',   freq: 230, dur: 0.35, vol: 0.18 });
    }

    function playBumper() {
        boot();
        tone({ type: 'square',   freq: 480, dur: 0.08, vol: 0.3, endVol: 0.02 });
        tone({ type: 'triangle', freq: 240, dur: 0.12, vol: 0.35 });
        tone({ type: 'sine',     freq: 90,  dur: 0.15, vol: 0.25 });
    }

    function playPortalWarp() {
        boot();
        [[350, 0], [520, 0.04], [780, 0.09], [1040, 0.15], [600, 0.22]].forEach(([f, d]) => {
            tone({ type: 'sine', freq: f, dur: 0.12, vol: 0.25, delay: d });
        });
    }

    function playSpeedBoost() {
        boot();
        tone({ type: 'sawtooth', freq: 180, dur: 0.2, vol: 0.28, endVol: 0.01 });
        tone({ type: 'triangle', freq: 440, dur: 0.15, vol: 0.35 });
        tone({ type: 'sine',     freq: 880, dur: 0.12, vol: 0.2 });
    }

    function playTurboDash() {
        boot();
        tone({ type: 'sawtooth', freq: 240, dur: 0.18, vol: 0.28 });
        tone({ type: 'sine', freq: 620, dur: 0.25, vol: 0.35, delay: 0.04 });
    }

    function playQuakeSmash() {
        if (userMuted || globalMuted || !ctx) return;
        boot();
        try {
            tone({ type: 'square', freq: 75, dur: 0.35, vol: 0.45 });
            tone({ type: 'sawtooth', freq: 110, dur: 0.28, vol: 0.35 });
            tone({ type: 'sine', freq: 45, dur: 0.55, vol: 0.5, delay: 0.02 });
        } catch (e) {}
    }

    function playGoalCelebration(fxId) {
        if (userMuted || globalMuted || !ctx) return;
        boot();
        try {
            if (fxId === 'lasernova') {
                [[220, 0], [330, 0.05], [440, 0.10], [660, 0.15], [880, 0.22], [1320, 0.30]].forEach(([f, d]) => {
                    tone({ type: 'sawtooth', freq: f, dur: 0.18, vol: 0.22, delay: d });
                });
                playGoalHorn();
            } else if (fxId === 'goldenspark') {
                [[587, 0], [880, 0.07], [1174, 0.14], [1760, 0.22], [2349, 0.32]].forEach(([f, d]) => {
                    tone({ type: 'sine', freq: f, dur: 0.25, vol: 0.28, delay: d });
                    tone({ type: 'triangle', freq: f * 1.5, dur: 0.20, vol: 0.15, delay: d + 0.02 });
                });
                playCrowdGoal();
            } else if (fxId === 'cybershock') {
                tone({ type: 'sine', freq: 90, dur: 0.6, vol: 0.45 });
                tone({ type: 'square', freq: 140, dur: 0.25, vol: 0.3 });
                tone({ type: 'sawtooth', freq: 420, dur: 0.35, vol: 0.25, delay: 0.08 });
                playGoalHorn();
            } else {
                playGoal();
            }
        } catch (e) {}
    }

    function playWheelTick() {
        boot();
        tone({ type: 'triangle', freq: 2200, dur: 0.015, vol: 0.18, endVol: 0.01 });
    }

    function playFanfare() {
        boot();
        [[523, 0], [659, 0.08], [784, 0.16], [1046, 0.26], [1318, 0.4]].forEach(([f, d]) => {
            tone({ type: 'triangle', freq: f, dur: 0.28, vol: 0.32, delay: d });
            tone({ type: 'sine',     freq: f * 0.5, dur: 0.3, vol: 0.18, delay: d });
        });
    }

    function playMatchFound() {
        boot();
        [[523, 0], [659, 0.08], [784, 0.16], [1046, 0.24]].forEach(([f, d]) => {
            tone({ type: 'triangle', freq: f, dur: 0.18, vol: 0.28, delay: d });
            tone({ type: 'sine',     freq: f * 0.5, dur: 0.2, vol: 0.18, delay: d });
        });
    }

    function playRankUp() {
        boot();
        [[440, 0], [554, 0.1], [659, 0.2], [880, 0.32], [1108, 0.45]].forEach(([f, d]) => {
            tone({ type: 'triangle', freq: f, dur: 0.3, vol: 0.35, delay: d });
        });
    }

    function playRankDown() {
        boot();
        [[440, 0], [370, 0.12], [330, 0.24]].forEach(([f, d]) => {
            tone({ type: 'sawtooth', freq: f, dur: 0.2, vol: 0.2, delay: d });
        });
    }

    function playCountdownTick() {
        boot();
        tone({ type: 'sine', freq: 880, dur: 0.04, vol: 0.15 });
    }

    return {
        boot, getCtx: () => ctx, playHit, playWall, playGoal, playCrowdGoal, playGoalHorn, playSuperShot, playPostOoh, playPowerup, playFreeze, playShield, playWin, playLose,
        playBuzzer, playBumper, playPortalWarp, playSpeedBoost, playTurboDash, playQuakeSmash, playGoalCelebration, playWheelTick, playFanfare,
        playMatchFound, playRankUp, playRankDown, playCountdownTick,
        startBGM: () => SynthwaveAudio.start(),
        stopBGM: () => SynthwaveAudio.stop(),
        updateMuteSVG,
        muteGlobal: (v) => { globalMuted = v; SynthwaveAudio.setGlobalMute(v); },
        setUserMute: (v) => { userMuted = v; updateMuteSVG(v); SynthwaveAudio.setMuted(v); },
        getUserMute: () => userMuted
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 4.1. ПРОЦЕДУРНЫЙ СИНТВЕЙВ-САУНДТРЕК (SynthwaveAudio)
// 100% Web Audio API procedural synthesis · 80s Driving Bassline · Neon Arp · Drums
// Dynamic adaptive tempo (116 BPM -> 136 BPM on Match Point / Tension)
// ─────────────────────────────────────────────────────────────────────────
const SynthwaveAudio = (() => {
    let ctx = null;
    let masterGain = null;
    let isPlaying = false;
    let isMuted = false;
    let isGlobalMuted = false;
    let volume = 0.85;

    // Параметры темпа и фильтра
    let currentBpm = 116;
    let targetBpm = 116;
    let filterCutoffMod = 1.0;
    let targetCutoffMod = 1.0;

    // Шедулер тайминг
    let nextStepTime = 0;
    let currentStep = 0; // 0..63 (4 такта по 16 шестнадцатых долей)
    let schedulerTimer = null;
    const scheduleAheadTime = 0.12; // планируем на 120 мс вперёд
    const lookaheadInterval = 25;   // проверка каждые 25 мс

    // 80s Driving Bassline ноты: D2, F2, G2, A2
    const BASS_FREQS = [
        73.42, // D2 (такт 0)
        87.31, // F2 (такт 1)
        98.00, // G2 (такт 2)
        110.00 // A2 (такт 3)
    ];

    // Неоновые арпеджио для 4 тактов:
    // Такт 0 (Dm): D4, F4, A4, D5, A4, F4, D4, F4...
    // Такт 1 (F):  F4, A4, C5, F5, C5, A4, F4, A4...
    // Такт 2 (G):  G4, B4, D5, G5, D5, B4, G4, B4...
    // Такт 3 (Am): A4, C5, E5, A5, E5, C5, A4, C5...
    const ARP_PATTERNS = [
        [293.66, 349.23, 440.00, 587.33, 440.00, 349.23, 293.66, 349.23, 293.66, 349.23, 440.00, 587.33, 440.00, 349.23, 440.00, 587.33],
        [349.23, 440.00, 523.25, 698.46, 523.25, 440.00, 349.23, 440.00, 349.23, 440.00, 523.25, 698.46, 523.25, 440.00, 523.25, 698.46],
        [392.00, 493.88, 587.33, 783.99, 587.33, 493.88, 392.00, 493.88, 392.00, 493.88, 587.33, 783.99, 587.33, 493.88, 587.33, 783.99],
        [440.00, 523.25, 659.25, 880.00, 659.25, 523.25, 440.00, 523.25, 440.00, 523.25, 659.25, 880.00, 659.25, 523.25, 659.25, 880.00]
    ];

    function _initContext() {
        if (!ctx) {
            if (typeof AudioManager !== 'undefined' && AudioManager.getCtx && AudioManager.getCtx()) {
                ctx = AudioManager.getCtx();
            } else if (typeof window !== 'undefined') {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) {
                    ctx = window._sharedAudioCtx || (window._sharedAudioCtx = new AudioCtx());
                }
            }
        }
        if (ctx && !masterGain) {
            masterGain = ctx.createGain();
            masterGain.gain.setValueAtTime(isMuted || isGlobalMuted ? 0 : volume, ctx.currentTime);
            masterGain.connect(ctx.destination);
        }
    }

    function _playBass(freq, time) {
        if (!ctx || !masterGain || isMuted || isGlobalMuted) return;

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const sub = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        sub.type = 'sine';

        // Detune для жирного аналогового стерео-хоруса
        osc1.frequency.setValueAtTime(freq, time);
        osc2.frequency.setValueAtTime(freq * 1.004, time);
        sub.frequency.setValueAtTime(freq * 0.5, time); // глубокий суб-бас

        filter.type = 'lowpass';
        filter.Q.setValueAtTime(5.5, time);

        // Резонансный фильтр с динамической огибающей
        const baseCutoff = 800 * filterCutoffMod;
        const peakCutoff = 2400 * filterCutoffMod;
        filter.frequency.setValueAtTime(peakCutoff, time);
        filter.frequency.exponentialRampToValueAtTime(baseCutoff, time + 0.10);

        // Короткий плотный driving sidechain punch
        gain.gain.setValueAtTime(0.001, time);
        gain.gain.linearRampToValueAtTime(0.25, time + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

        osc1.connect(filter);
        osc2.connect(filter);
        sub.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc1.start(time);
        osc2.start(time);
        sub.start(time);

        osc1.stop(time + 0.13);
        osc2.stop(time + 0.13);
        sub.stop(time + 0.13);
    }

    function _playArp(freq, time) {
        if (!ctx || !masterGain || isMuted || isGlobalMuted) return;

        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, time);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2200 * filterCutoffMod, time);
        filter.Q.setValueAtTime(2.0, time);

        gain.gain.setValueAtTime(0.001, time);
        gain.gain.linearRampToValueAtTime(0.11, time + 0.004);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        osc.start(time);
        osc.stop(time + 0.09);
    }

    function _playKick(time) {
        if (!ctx || !masterGain || isMuted || isGlobalMuted) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(155, time);
        osc.frequency.exponentialRampToValueAtTime(42, time + 0.07);

        gain.gain.setValueAtTime(0.36, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.11);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start(time);
        osc.stop(time + 0.12);
    }

    function _playSnap(time) {
        if (!ctx || !masterGain || isMuted || isGlobalMuted) return;

        const bufferSize = Math.floor(ctx.sampleRate * 0.09);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.025));
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1400, time);
        filter.Q.setValueAtTime(2.0, time);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.22, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        noise.start(time);
        noise.stop(time + 0.10);
    }

    function _playHiHat(time) {
        if (!ctx || !masterGain || isMuted || isGlobalMuted) return;

        const bufferSize = Math.floor(ctx.sampleRate * 0.035);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1);
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(7500, time);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.06, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);

        noise.start(time);
        noise.stop(time + 0.04);
    }

    function _scheduleStep(step, time) {
        const bar = Math.floor(step / 16);
        const stepInBar = step % 16;

        // 1. 80s Driving Bassline (каждый 16-й шаг)
        _playBass(BASS_FREQS[bar], time);

        // 2. Неоновый арпеджиатор
        _playArp(ARP_PATTERNS[bar][stepInBar], time);

        // 3. Бит (Drums):
        // Бочка на 0, 4, 8, 12 (4-on-the-floor)
        if (stepInBar % 4 === 0) {
            _playKick(time);
        }
        // Снеп на 4 и 12 (backbeat)
        if (stepInBar === 4 || stepInBar === 12) {
            _playSnap(time);
        }
        // Хай-хэт на слабые доли (off-beat)
        if (stepInBar % 2 === 1) {
            _playHiHat(time);
        }
    }

    function _stepScheduler() {
        if (!isPlaying || !ctx) return;

        // Плавный разгон темпа и открытие фильтра среза
        currentBpm += (targetBpm - currentBpm) * 0.05;
        filterCutoffMod += (targetCutoffMod - filterCutoffMod) * 0.05;

        const stepDuration = (60.0 / currentBpm) / 4.0;

        while (nextStepTime < ctx.currentTime + scheduleAheadTime) {
            _scheduleStep(currentStep, nextStepTime);
            nextStepTime += stepDuration;
            currentStep = (currentStep + 1) % 64;
        }
    }

    function start() {
        _initContext();
        if (isPlaying) return;
        if (!ctx) return;

        if (ctx.state === 'suspended') {
            try { ctx.resume(); } catch (e) {}
        }

        isPlaying = true;
        currentStep = 0;
        nextStepTime = ctx.currentTime + 0.05;

        if (schedulerTimer) clearInterval(schedulerTimer);
        schedulerTimer = setInterval(_stepScheduler, lookaheadInterval);
    }

    function stop() {
        isPlaying = false;
        if (schedulerTimer) {
            clearInterval(schedulerTimer);
            schedulerTimer = null;
        }
    }

    function setTension(isTense) {
        // Стандартный темп: 116 BPM, при напряжении (Match Point / 6:6) -> 136 BPM
        targetBpm = isTense ? 136 : 116;
        targetCutoffMod = isTense ? 1.7 : 1.0;
    }

    function setVolume(v) {
        volume = Math.max(0, Math.min(1, v));
        if (ctx && masterGain && !isMuted && !isGlobalMuted) {
            masterGain.gain.setValueAtTime(volume, ctx.currentTime);
        }
    }

    function setMuted(v) {
        isMuted = v;
        if (ctx && masterGain) {
            masterGain.gain.setValueAtTime(isMuted || isGlobalMuted ? 0 : volume, ctx.currentTime);
        }
        _updateUI();
    }

    function setGlobalMute(v) {
        isGlobalMuted = v;
        if (ctx && masterGain) {
            masterGain.gain.setValueAtTime(isMuted || isGlobalMuted ? 0 : volume, ctx.currentTime);
        }
    }

    function toggleMusic() {
        setMuted(!isMuted);
        return !isMuted;
    }

    function _updateUI() {
        if (typeof document === 'undefined') return;
        const btn = document.getElementById('btn-music');
        if (btn) {
            btn.classList.toggle('active', !isMuted);
            btn.classList.toggle('muted', isMuted);
        }
    }

    return {
        start,
        stop,
        setTension,
        setVolume,
        setMuted,
        setGlobalMute,
        toggleMusic,
        isPlaying: () => isPlaying,
        isMuted: () => isMuted,
        getBpm: () => currentBpm,
        getTension: () => targetBpm > 120
    };
})();

if (typeof window !== 'undefined') {
    window.SynthwaveAudio = SynthwaveAudio;
}

// ─────────────────────────────────────────────────────────────────────────
// 5. КОНФИГУРАЦИЯ СКИНОВ
// ─────────────────────────────────────────────────────────────────────────
const SKINS = {
    mallets: [
        { id: 'cyan', name: 'Cyber Cyan', hex: 0x00f0ff, color: '#00f0ff', mid: 0x0070e0, price: 0 },
        { id: 'crimson', name: 'Crimson Fire', hex: 0xff2a55, color: '#ff2a55', mid: 0xc00030, price: 150 },
        { id: 'acid', name: 'Toxic Acid', hex: 0x00ff88, color: '#00ff88', mid: 0x00aa55, price: 300 },
        { id: 'gold', name: 'Golden VIP', hex: 0xffca28, color: '#ffca28', mid: 0xd48800, price: 500 },
        { id: 'amethyst', name: 'Amethyst', hex: 0xb537f2, color: '#b537f2', mid: 0x7a1db3, price: 750 },
        { id: 'titan', name: 'Titan Cyber', hex: 0x00e5ff, color: '#00e5ff', mid: 0xffd700, price: 0, exclusive: 'trophy_3', reqCups: 3 }
    ],
    pucks: [
        { id: 'cyber', name: 'Cyber Neon', hex: 0x00f0ff, ringHex: 0x00f0ff, bodyHex: 0x142844, trailColor: 0x00f0ff, price: 0 },
        { id: 'plasma', name: 'Plasma Fire', hex: 0xff3b00, ringHex: 0xff5500, bodyHex: 0x361005, trailColor: 0xff3b00, price: 150 },
        { id: 'matrix', name: 'Digital Matrix', hex: 0x00ff66, ringHex: 0x44ff88, bodyHex: 0x052814, trailColor: 0x00ff66, price: 250 },
        { id: 'solar', name: 'Solar Corona', hex: 0xffbb00, ringHex: 0xffea00, bodyHex: 0x382604, trailColor: 0xffbb00, price: 400 },
        { id: 'void', name: 'Void Violet', hex: 0xb537f2, ringHex: 0xdf66ff, bodyHex: 0x250638, trailColor: 0xb537f2, price: 600 },
        { id: 'rainbow', name: 'Prism Chroma', hex: 0xffffff, ringHex: 0x00f0ff, bodyHex: 0x181818, trailColor: 0x00f0ff, isChroma: true, price: 800 },
        { id: 'solarnova', name: 'Solar Nova', hex: 0xff7700, ringHex: 0xff9900, bodyHex: 0x3d1400, trailColor: 0xff5500, price: 0, exclusive: 'trophy_12', reqCups: 12 }
    ],
    arenas: [
        { id: 'classic_pub', name: 'Classic Pub', price: 0, bg1: '#2a1810', bg2: '#180c07', bg3: '#0c0503', railColor: 0xd4af37, hazard: 'none' },
        { id: 'winter_classic', name: 'Winter Classic', price: 0, bg1: '#162840', bg2: '#0d1928', bg3: '#060d14', railColor: 0x90caf9, hazard: 'boosters' },
        { id: 'minimal_studio', name: 'Minimal Studio', price: 0, bg1: '#d4b896', bg2: '#bfa07e', bg3: '#9e8160', railColor: 0x94a3b8, hazard: 'none' },
        { id: 'deep_space', name: 'Deep Space', price: 0, bg1: '#111620', bg2: '#080c14', bg3: '#020308', railColor: 0x00f0ff, hazard: 'portals' },
        { id: 'inferno_core', name: 'Inferno Core', price: 0, bg1: '#160a06', bg2: '#0d0402', bg3: '#060100', railColor: 0xff3700, hazard: 'bumper' },
        { id: 'sunset_coast', name: 'Sunset Coast', price: 0, bg1: '#b87d4b', bg2: '#241228', bg3: '#120816', railColor: 0xffca28, hazard: 'boosters' },
        { id: 'zen_dojo', name: 'Zen Dojo', price: 0, bg1: '#1f1008', bg2: '#140804', bg3: '#0a0302', railColor: 0xdc2626, hazard: 'none' },
        { id: 'synthwave_arcade', name: 'Synthwave Arcade', price: 0, bg1: '#160228', bg2: '#0d0118', bg3: '#06000c', railColor: 0xff007f, hazard: 'bumper' },
        { id: 'underground_garage', name: 'Underground Garage', price: 0, bg1: '#2b323b', bg2: '#181c22', bg3: '#0c0e12', railColor: 0xeab308, hazard: 'none' },
        { id: 'royal_velvet', name: 'Royal Velvet VIP', price: 0, bg1: '#033827', bg2: '#140409', bg3: '#080104', railColor: 0xffd700, hazard: 'bumper' }
    ],
    goalfx: [
        { id: 'confetti', name: 'Neon Confetti', price: 0, color: '#00f0ff', desc: 'Классический салют' },
        { id: 'lasernova', name: 'Laser Nova', price: 350, color: '#b537f2', desc: 'Радиальные лазеры' },
        { id: 'goldenspark', name: 'Golden Shower', price: 500, color: '#ffca28', desc: 'Золотой дождь искр' },
        { id: 'cybershock', name: 'Cyber Shockwave', price: 750, color: '#00ff88', desc: 'Квантовая волна' }
    ]
};

// ─────────────────────────────────────────────────────────────────────────
// 6. ФИЗИКА И ГЕОМЕТРИЯ В 3D МИРЕ
// ─────────────────────────────────────────────────────────────────────────
const WORLD = {
    HALF_W: 5.4,          // Половина ширины стола в 3D
    HALF_L: 10.4,         // Половина длины стола в 3D
    GOAL_HALF_W: 1.7,     // Половина ширины ворот
    PUCK_R: 0.58,         // Радиус шайбы
    MALLET_R: 1.05,       // Радиус биты
    PUCK_FRICTION: 0.988, // Приятное естественное скольжение с плавным затуханием (вместо 0.995)
    WALL_RESTITUTION: 0.78, // Меньше бесконечной пулеметной отдачи от стен (было 0.88)
    MALLET_RESTITUTION: 0.55, // Мягкий контролируемый отскок
    MAX_MALLET_SPEED: 0.28,   // Максимальная скорость биты (было 0.38)
    MAX_PUCK_SPEED: 0.28      // Максимальная комфортная скорость шайбы (было 0.42!)
};

const Physics = (() => {
    function resolveMalletPuck(mallet, puck, isPlayer) {
        const dx = puck.x - mallet.x;
        const dz = puck.z - mallet.z;
        const dist = Math.hypot(dx, dz);
        const minDist = WORLD.MALLET_R + WORLD.PUCK_R;

        if (dist >= minDist || dist < 0.0001) return false;

        const nx = dx / dist;
        const nz = dz / dist;

        const overlap = minDist - dist;

        // Защита от защемления шайбы битой у бортов
        const nearLeft = puck.x - WORLD.PUCK_R <= -WORLD.HALF_W + 0.15;
        const nearRight = puck.x + WORLD.PUCK_R >= WORLD.HALF_W - 0.15;
        const nearTop = puck.z - WORLD.PUCK_R <= -WORLD.HALF_L + 0.15;
        const nearBottom = puck.z + WORLD.PUCK_R >= WORLD.HALF_L - 0.15;

        if (nearLeft && nx < 0) {
            mallet.x = puck.x + minDist + 0.05;
            puck.vx = Math.abs(puck.vx) + 0.10;
        } else if (nearRight && nx > 0) {
            mallet.x = puck.x - minDist - 0.05;
            puck.vx = -Math.abs(puck.vx) - 0.10;
        } else {
            puck.x += nx * (overlap + 0.02);
        }

        if (nearTop && nz < 0) {
            mallet.z = puck.z + minDist + 0.05;
            puck.vz = Math.abs(puck.vz) + 0.10;
        } else if (nearBottom && nz > 0) {
            mallet.z = puck.z - minDist - 0.05;
            puck.vz = -Math.abs(puck.vz) - 0.10;
        } else {
            puck.z += nz * (overlap + 0.02);
        }

        const mvx = Math.max(-WORLD.MAX_MALLET_SPEED, Math.min(WORLD.MAX_MALLET_SPEED, mallet.vx));
        const mvz = Math.max(-WORLD.MAX_MALLET_SPEED, Math.min(WORLD.MAX_MALLET_SPEED, mallet.vz));

        // Относительная скорость сближения по нормали
        const puckVn = puck.vx * nx + puck.vz * nz;
        const malletVn = mvx * nx + mvz * nz;
        const relVn = puckVn - malletVn;

        if (relVn >= 0) return false;

        // Расчет импульса: раздельный вклад отскока шайбы и удара биты
        const bouncePart = -puckVn * (1 + WORLD.MALLET_RESTITUTION);
        const hitPart = Math.max(0, malletVn) * 1.15;
        let impulse = Math.max(0.06, bouncePart + hitPart);

        if (mallet.hasSuperShot) {
            impulse *= 1.4;
            mallet.hasSuperShot = false;
            puck.onFire = true;
            VFX3D.screenShake(0.25);
        }

        puck.vx += impulse * nx;
        puck.vz += impulse * nz;

        // Мягкое ограничение максимальной скорости шайбы
        const curSpd = Math.hypot(puck.vx, puck.vz);
        const maxSpd = WORLD.MAX_PUCK_SPEED * (puck.onFire ? 1.35 : 1);

        if (curSpd > maxSpd) {
            puck.vx = (puck.vx / curSpd) * maxSpd;
            puck.vz = (puck.vz / curSpd) * maxSpd;
        }

        const hitPower = Math.min(1, Math.abs(impulse) / 0.22);
        const nowHit = Date.now();
        if (!puck._lastHitFxTime || (nowHit - puck._lastHitFxTime >= 40)) {
            puck._lastHitFxTime = nowHit;
            AudioManager.playHit(hitPower);
            Haptics.tap();
            if (isPlayer) Game.chargeUltimate(20);

            const sparkColor = isPlayer ? 0x00f0ff : 0xff2a55;
            // Impact Sparks: веер искр по нормали отскока, сила вспышки пропорциональна удару
            VFX3D.createSparks(puck.x, 0.15, puck.z, nx, nz, sparkColor, Math.round(6 + hitPower * 12));
            // Shockwave Ring: кольцевая ударная волна искажения при ударе биты
            VFX3D.createShockwave(puck.x, puck.z, sparkColor, 1.2 + hitPower * 1.6);
            VFX3D.screenShake(hitPower > 0.55 ? hitPower * 0.24 : hitPower * 0.10);
        }

        if (isPlayer) {
            puck.lastHitter = 'player';
            puck.wallRicochets = 0;
            const spdAfter = Math.hypot(puck.vx, puck.vz);
            if (Math.round(spdAfter * 320) >= 100 && typeof SaveManager !== 'undefined' && typeof AchievementManager !== 'undefined') {
                const d = SaveManager.get();
                if (!d.achievements || !d.achievements.supersonic) {
                    AchievementManager.unlock('supersonic');
                }
            }
        } else {
            puck.lastHitter = 'top';
        }

        return true;
    }

    function resolveWalls(puck, playerShield, topShield) {
        let bounced = false;
        const { HALF_W, HALF_L, PUCK_R, GOAL_HALF_W, WALL_RESTITUTION } = WORLD;

        // 4 Угловых скоса-дефлектора (угол 45°): плавный физический отскок по нормали без рывков
        const cornerSize = 1.85;
        const INV_SQRT2 = 0.70710678;
        let cornerSignX = 0;
        let cornerSignZ = 0;
        let cornerPen = 0;

        if (puck.x < -HALF_W + cornerSize && puck.z < -HALF_L + cornerSize) {
            cornerPen = cornerSize - ((puck.x + HALF_W) + (puck.z + HALF_L));
            cornerSignX = 1; cornerSignZ = 1;
        } else if (puck.x > HALF_W - cornerSize && puck.z < -HALF_L + cornerSize) {
            cornerPen = cornerSize - ((HALF_W - puck.x) + (puck.z + HALF_L));
            cornerSignX = -1; cornerSignZ = 1;
        } else if (puck.x < -HALF_W + cornerSize && puck.z > HALF_L - cornerSize) {
            cornerPen = cornerSize - ((puck.x + HALF_W) + (HALF_L - puck.z));
            cornerSignX = 1; cornerSignZ = -1;
        } else if (puck.x > HALF_W - cornerSize && puck.z > HALF_L - cornerSize) {
            cornerPen = cornerSize - ((HALF_W - puck.x) + (HALF_L - puck.z));
            cornerSignX = -1; cornerSignZ = -1;
        }

        if (cornerPen > 0) {
            const push = cornerPen * 0.52 + 0.01;
            puck.x += cornerSignX * push;
            puck.z += cornerSignZ * push;
            const cnx = cornerSignX * INV_SQRT2;
            const cnz = cornerSignZ * INV_SQRT2;
            const vn = puck.vx * cnx + puck.vz * cnz;
            if (vn < 0) {
                const imp = -(1 + WALL_RESTITUTION) * vn;
                puck.vx += imp * cnx;
                puck.vz += imp * cnz;
            }
            if (Math.hypot(puck.vx, puck.vz) < 0.08) {
                puck.vx += cnx * 0.08;
                puck.vz += cnz * 0.08;
            }
            bounced = true;
        }

        // Левый и правый борта
        if (puck.x - PUCK_R < -HALF_W) {
            puck.x = -HALF_W + PUCK_R;
            puck.vx = Math.abs(puck.vx) * WALL_RESTITUTION;
            bounced = true;
        } else if (puck.x + PUCK_R > HALF_W) {
            puck.x = HALF_W - PUCK_R;
            puck.vx = -Math.abs(puck.vx) * WALL_RESTITUTION;
            bounced = true;
        }

        const inGoal = Math.abs(puck.x) < GOAL_HALF_W;

        // Верхний щит (ворота AI)
        if (topShield && inGoal && puck.z - PUCK_R < -HALF_L + 0.3) {
            puck.z = -HALF_L + PUCK_R + 0.3;
            puck.vz = Math.abs(puck.vz) * 1.1;
            bounced = true;
            AudioManager.playShield();
            VFX3D.createShockwave(puck.x, -HALF_L, 0xff2a55, 1.8);
        }
        // Нижний щит (ворота игрока)
        else if (playerShield && inGoal && puck.z + PUCK_R > HALF_L - 0.3) {
            puck.z = HALF_L - PUCK_R - 0.3;
            puck.vz = -Math.abs(puck.vz) * 1.1;
            bounced = true;
            AudioManager.playShield();
            VFX3D.createShockwave(puck.x, HALF_L, 0x00ff88, 1.8);
        }
        // Стенки вне ворот
        else if (!inGoal) {
            if (puck.z - PUCK_R < -HALF_L) {
                puck.z = -HALF_L + PUCK_R;
                puck.vz = Math.abs(puck.vz) * WALL_RESTITUTION;
                bounced = true;
            } else if (puck.z + PUCK_R > HALF_L) {
                puck.z = HALF_L - PUCK_R;
                puck.vz = -Math.abs(puck.vz) * WALL_RESTITUTION;
                bounced = true;
            }
        }

        if (bounced && Math.hypot(puck.vx, puck.vz) > 0.05) {
            const nowWall = Date.now();
            if (!puck._lastWallFxTime || (nowWall - puck._lastWallFxTime >= 45)) {
                puck._lastWallFxTime = nowWall;
                if (puck.lastHitter === 'player') {
                    puck.wallRicochets = (puck.wallRicochets || 0) + 1;
                }
                if (typeof SaveManager !== 'undefined') {
                    const d = SaveManager.get();
                    d.totalWallBounces = (d.totalWallBounces || 0) + 1;
                    if (d.totalWallBounces === 50 && typeof AchievementManager !== 'undefined') {
                        AchievementManager.unlock('wall_bouncer');
                    }
                }
                AudioManager.playWall();
                Haptics.wall();
                const spd = Math.hypot(puck.vx, puck.vz);
                const count = Math.min(10, Math.max(4, Math.round(spd * 22)));
                VFX3D.createSparks(puck.x, 0.15, puck.z, -puck.vx, -puck.vz, 0xffffff, count);
                if (spd > 0.16) VFX3D.screenShake(Math.min(0.18, spd * 0.32));
            }
        }

        return bounced;
    }

    function checkGoal(puck) {
        if (Math.abs(puck.x) < WORLD.GOAL_HALF_W) {
            if (puck.z < -WORLD.HALF_L - WORLD.PUCK_R * 0.2) return 'player';
            if (puck.z > WORLD.HALF_L + WORLD.PUCK_R * 0.2) return 'top';
        }
        return null;
    }

    function checkBossForcefield(puck, isForcefieldActive) {
        if (!isForcefieldActive) return false;
        const barrierZ = -WORLD.HALF_L + 0.6;
        if (puck.z - WORLD.PUCK_R <= barrierZ && puck.z + WORLD.PUCK_R >= barrierZ - 0.35 && Math.abs(puck.x) <= WORLD.GOAL_HALF_W * 1.15 && puck.vz < 0) {
            puck.z = barrierZ + WORLD.PUCK_R + 0.05;
            puck.vz = Math.abs(puck.vz) * 1.1 + 0.08;
            AudioManager.playShield();
            Haptics.wall();
            VFX3D.screenShake(0.25);
            VFX3D.createShockwave(puck.x, barrierZ, 0xffca28, 2.0);
            VFX3D.createSparks(puck.x, 0.2, barrierZ, 0, 1, 0xffca28, 16);
            return true;
        }
        return false;
    }

    function resolveTrickshotObstacles(puck, obstacles) {
        if (!obstacles || obstacles.length === 0) return;
        for (const obs of obstacles) {
            if (obs.type === 'bumper') {
                const dx = puck.x - obs.x;
                const dz = puck.z - obs.z;
                const dist = Math.hypot(dx, dz);
                const minDist = obs.r + WORLD.PUCK_R;
                if (dist < minDist && dist > 0.0001) {
                    const nx = dx / dist;
                    const nz = dz / dist;
                    puck.x = obs.x + nx * (minDist + 0.03);
                    puck.z = obs.z + nz * (minDist + 0.03);
                    const curSpd = Math.hypot(puck.vx, puck.vz);
                    const boostSpd = Math.min(WORLD.MAX_PUCK_SPEED * 1.35, Math.max(0.18, curSpd * 1.25));
                    puck.vx = nx * boostSpd;
                    puck.vz = nz * boostSpd;
                    AudioManager.playBumper();
                    Haptics.tap();
                    VFX3D.screenShake(0.2);
                    VFX3D.createShockwave(obs.x, obs.z, obs.color || 0x00f0ff, 1.8);
                    VFX3D.createSparks(puck.x, 0.2, puck.z, nx, nz, obs.color || 0x00f0ff, 12);
                }
            } else if (obs.type === 'barrier' || obs.type === 'moving_barrier') {
                const minX = obs.x - obs.w / 2;
                const maxX = obs.x + obs.w / 2;
                const minZ = obs.z - obs.d / 2;
                const maxZ = obs.z + obs.d / 2;
                const closestX = Math.max(minX, Math.min(maxX, puck.x));
                const closestZ = Math.max(minZ, Math.min(maxZ, puck.z));
                const dx = puck.x - closestX;
                const dz = puck.z - closestZ;
                const dist = Math.hypot(dx, dz);
                if (dist < WORLD.PUCK_R) {
                    if (dist > 0.0001) {
                        const nx = dx / dist;
                        const nz = dz / dist;
                        puck.x = closestX + nx * (WORLD.PUCK_R + 0.02);
                        puck.z = closestZ + nz * (WORLD.PUCK_R + 0.02);
                        const dot = puck.vx * nx + puck.vz * nz;
                        if (dot < 0) {
                            puck.vx = (puck.vx - 2 * dot * nx) * WORLD.WALL_RESTITUTION;
                            puck.vz = (puck.vz - 2 * dot * nz) * WORLD.WALL_RESTITUTION;
                        }
                    } else {
                        const penLeft = puck.x - minX, penRight = maxX - puck.x;
                        const penTop = puck.z - minZ, penBottom = maxZ - puck.z;
                        const minPen = Math.min(penLeft, penRight, penTop, penBottom);
                        if (minPen === penLeft) { puck.x = minX - WORLD.PUCK_R; puck.vx = -Math.abs(puck.vx); }
                        else if (minPen === penRight) { puck.x = maxX + WORLD.PUCK_R; puck.vx = Math.abs(puck.vx); }
                        else if (minPen === penTop) { puck.z = minZ - WORLD.PUCK_R; puck.vz = -Math.abs(puck.vz); }
                        else { puck.z = maxZ + WORLD.PUCK_R; puck.vz = Math.abs(puck.vz); }
                    }
                    AudioManager.playWall();
                    Haptics.tap();
                    VFX3D.screenShake(0.12);
                    VFX3D.createSparks(puck.x, 0.2, puck.z, puck.vx, puck.vz, obs.color || 0xff2a55, 8);
                }
            } else if (obs.type === 'portal') {
                const now = Date.now();
                if (!obs.lastWarp || now - obs.lastWarp > 900) {
                    const distIn = Math.hypot(puck.x - obs.inX, puck.z - obs.inZ);
                    if (distIn < 0.85) {
                        obs.lastWarp = now;
                        puck.x = obs.outX;
                        puck.z = obs.outZ;
                        if (obs.outVx !== undefined) puck.vx = obs.outVx;
                        if (obs.outVz !== undefined) puck.vz = obs.outVz;
                        AudioManager.playPortalWarp();
                        Haptics.tap();
                        VFX3D.screenShake(0.24);
                        VFX3D.createShockwave(obs.inX, obs.inZ, obs.color || 0xb537f2, 2.0);
                        VFX3D.createShockwave(obs.outX, obs.outZ, obs.color || 0xb537f2, 2.0);
                    }
                }
            }
        }
    }

    return { resolveMalletPuck, resolveWalls, checkGoal, checkBossForcefield, resolveTrickshotObstacles };
})();

// ─────────────────────────────────────────────────────────────────────────
// 6.1. ДИНАМИЧЕСКИЕ ФИШКИ И ПРЕПЯТСТВИЯ АРЕН (ArenaHazards)
// ─────────────────────────────────────────────────────────────────────────
const ArenaHazards = (() => {
    let lastBoostTime = 0;
    let lastPortalTime = 0;

    function checkHazards(puck, playerMallet, topMallet, arenaId) {
        if (!SaveManager.get().hazardsEnabled) return;
        const now = Date.now();
        const arenaCfg = SKINS.arenas.find(a => a.id === arenaId) || SKINS.arenas[0];

        if (arenaCfg.hazard === 'bumper') {
            const BUMPER_R = 0.74;
            // 1. Коллизия бампера с шайбой
            const dist = Math.hypot(puck.x, puck.z);
            const minDist = BUMPER_R + WORLD.PUCK_R;
            if (dist < minDist && dist > 0.0001) {
                const nx = puck.x / dist;
                const nz = puck.z / dist;
                puck.x = nx * (minDist + 0.04);
                puck.z = nz * (minDist + 0.04);

                const curSpd = Math.hypot(puck.vx, puck.vz);
                const boostSpd = Math.min(WORLD.MAX_PUCK_SPEED * 1.35, Math.max(0.18, curSpd * 1.25));
                puck.vx = nx * boostSpd;
                puck.vz = nz * boostSpd;

                AudioManager.playBumper();
                Haptics.tap();
                VFX3D.screenShake(0.2);
                VFX3D.createShockwave(0, 0, 0x00f0ff, 2.2);
                VFX3D.createSparks(puck.x, 0.2, puck.z, nx, nz, 0x00f0ff, 14);
                Announcer.show(I18n.t('callout_bumper'), '#ffca28');
            }

            // 2. Ограничение движения бит вокруг бампера
            [playerMallet, topMallet].forEach(m => {
                const mDist = Math.hypot(m.x, m.z);
                const mMin = BUMPER_R + WORLD.MALLET_R;
                if (mDist < mMin && mDist > 0.0001) {
                    m.x = (m.x / mDist) * mMin;
                    m.z = (m.z / mDist) * mMin;
                }
            });
        } else if (arenaCfg.hazard === 'boosters') {
            if (now - lastBoostTime > 600) {
                const onLeft = Math.abs(puck.x - (-3.2)) < 0.8 && Math.abs(puck.z) < 2.1;
                const onRight = Math.abs(puck.x - 3.2) < 0.8 && Math.abs(puck.z) < 2.1;
                if (onLeft || onRight) {
                    lastBoostTime = now;
                    const dir = puck.vz < 0 ? -1 : 1;
                    puck.vz = dir * Math.min(WORLD.MAX_PUCK_SPEED * 1.35, Math.abs(puck.vz) + 0.14);
                    AudioManager.playSpeedBoost();
                    VFX3D.screenShake(0.18);
                    VFX3D.createShockwave(puck.x, puck.z, 0x00ffff, 1.8);
                    Announcer.show(I18n.t('callout_boost'), '#00f0ff');
                }
            }
        } else if (arenaCfg.hazard === 'portals') {
            if (now - lastPortalTime > 1200) {
                const dist1 = Math.hypot(puck.x - (-4.0), puck.z);
                const dist2 = Math.hypot(puck.x - 4.0, puck.z);

                if (dist1 < 0.85) {
                    lastPortalTime = now;
                    puck.x = 3.2;
                    puck.vx = -Math.abs(puck.vx || 0.1);
                    AudioManager.playPortalWarp();
                    VFX3D.screenShake(0.22);
                    VFX3D.createShockwave(-4.0, 0, 0xb537f2, 2.0);
                    VFX3D.createShockwave(4.0, 0, 0xb537f2, 2.0);
                    Announcer.show(I18n.t('callout_warp'), '#b537f2');
                } else if (dist2 < 0.85) {
                    lastPortalTime = now;
                    puck.x = -3.2;
                    puck.vx = Math.abs(puck.vx || 0.1);
                    AudioManager.playPortalWarp();
                    VFX3D.screenShake(0.22);
                    VFX3D.createShockwave(4.0, 0, 0xb537f2, 2.0);
                    VFX3D.createShockwave(-4.0, 0, 0xb537f2, 2.0);
                    Announcer.show(I18n.t('callout_warp'), '#b537f2');
                }
            }
        }
    }

    return { checkHazards };
})();

// ─────────────────────────────────────────────────────────────────────────
// 7. ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ (AI)
// ─────────────────────────────────────────────────────────────────────────
const TOURNAMENT_ENEMIES = [
    { name: 'Спиди', speed: 0.23, reaction: 0.20, attackBias: 0.85, predSteps: 16, noise: 0.08 },
    { name: 'Стена', speed: 0.18, reaction: 0.32, attackBias: 0.25, predSteps: 20, noise: 0.03 },
    { name: 'Брут', speed: 0.26, reaction: 0.26, attackBias: 0.90, predSteps: 22, noise: 0.0 }
];

const AIAgent = (() => {
    function predictPuckX(puck, steps) {
        let simX = puck.x, simVx = puck.vx;
        const minX = -WORLD.HALF_W + WORLD.PUCK_R;
        const maxX = WORLD.HALF_W - WORLD.PUCK_R;

        for (let i = 0; i < steps; i++) {
            simX += simVx;
            if (simX < minX) { simX = 2 * minX - simX; simVx = -simVx; }
            else if (simX > maxX) { simX = 2 * maxX - simX; simVx = -simVx; }
        }
        return simX;
    }

    function update(aiMallet, puck, cfg) {
        if (!aiMallet || !puck) return;
        const isFrozen = aiMallet.frozenUntil && Date.now() < aiMallet.frozenUntil;
        const currentSpeed = isFrozen ? cfg.speed * 0.3 : cfg.speed;

        // Полноценные границы движения бота: может защищать створ ворот и боковые фланги
        const minX = -WORLD.HALF_W + WORLD.MALLET_R + 0.15;
        const maxX = WORLD.HALF_W - WORLD.MALLET_R - 0.15;
        const minZ = -WORLD.HALF_L + WORLD.MALLET_R + 0.20;
        const maxZ = -0.3;
        const homeZ = -WORLD.HALF_L + WORLD.MALLET_R + 1.2;

        let targetX = 0, targetZ = homeZ;

        // Проверяем, находится ли шайба в зоне углового скоса-дефлектора
        const isPuckInCorner = (puck.z < -WORLD.HALF_L + 2.6) && (Math.abs(puck.x) > WORLD.HALF_W - 2.2);

        // 1. Шайба в угловой зоне дефлектора — бот занимает тактическую позицию перехвата у штанги
        if (isPuckInCorner) {
            targetX = (puck.x < 0 ? -1 : 1) * 1.8;
            targetZ = homeZ + 0.3;
        }
        // 2. Шайба на стороне бота (z < 0.1)
        else if (puck.z < 0.1) {
            // Если бот позади шайбы (ближе к своим воротам) — наносим акцентированный удар в сторону игрока!
            if (aiMallet.z <= puck.z + 0.1) {
                targetX = puck.x + (puck.x > 0 ? -0.12 : 0.12) * cfg.attackBias;
                targetZ = puck.z + WORLD.MALLET_R * 0.7;
            } else {
                // Если шайба оказалась за спиной бота — аккуратно обходим с открытого фланга
                const avoidSide = (puck.x >= 0) ? -1 : 1;
                targetX = puck.x + avoidSide * (WORLD.MALLET_R * 1.2);
                targetZ = Math.max(minZ, puck.z - 0.5);
            }
        }
        // 3. Шайба летит в сторону ворот бота
        else if (puck.vz < -0.04) {
            const predX = predictPuckX(puck, cfg.predSteps);
            targetX = predX + (Math.random() - 0.5) * cfg.noise;
            targetZ = Math.max(minZ, Math.min(maxZ, puck.z + puck.vz * (cfg.predSteps * cfg.attackBias * 0.35)));
        }
        // 4. Защитная стойка по центру
        else {
            targetX = Math.max(-2.2, Math.min(2.2, puck.x * 0.55));
            targetZ = homeZ;
        }

        targetX = Math.max(minX, Math.min(maxX, targetX));
        targetZ = Math.max(minZ, Math.min(maxZ, targetZ));

        const dx = targetX - aiMallet.x;
        const dz = targetZ - aiMallet.z;
        const dist = Math.hypot(dx, dz);

        if (dist > 0.001) {
            const step = Math.min(dist, currentSpeed);
            const desiredVx = (dx / dist) * step;
            const desiredVz = (dz / dist) * step;
            aiMallet.vx += (desiredVx - aiMallet.vx) * cfg.reaction;
            aiMallet.vz += (desiredVz - aiMallet.vz) * cfg.reaction;
        } else {
            aiMallet.vx *= 0.5;
            aiMallet.vz *= 0.5;
        }

        aiMallet.x += aiMallet.vx;
        aiMallet.z += aiMallet.vz;

        aiMallet.x = Math.max(minX, Math.min(maxX, aiMallet.x));
        aiMallet.z = Math.max(minZ, Math.min(maxZ, aiMallet.z));
    }

    return { update };
})();

if (typeof window !== 'undefined') {
    window.AIAgent = AIAgent;
}

// ─────────────────────────────────────────────────────────────────────────
// 7.5. РЕЙТИНГОВАЯ СИСТЕМА И МУЛЬТИПЛЕЕР (RankedManager & MultiplayerManager)
// ─────────────────────────────────────────────────────────────────────────

const RankedManager = (() => {
    // 7 дивизионов с точными границами RP (СТРОГО БЕЗ ЭМОДЗИ)
    const DIVISIONS = [
        { id: 'bronze',      nameRu: 'Бронза',      nameEn: 'Bronze',      nameTr: 'Bronz',       minRP: 0,    maxRP: 399,   color: '#cd7f32', glow: 'rgba(205,127,50,0.5)' },
        { id: 'silver',      nameRu: 'Серебро',      nameEn: 'Silver',      nameTr: 'Gumus',       minRP: 400,  maxRP: 799,   color: '#c0c0c0', glow: 'rgba(192,192,192,0.5)' },
        { id: 'gold',        nameRu: 'Золото',       nameEn: 'Gold',        nameTr: 'Altin',       minRP: 800,  maxRP: 1199,  color: '#ffd700', glow: 'rgba(255,215,0,0.5)' },
        { id: 'platinum',    nameRu: 'Платина',      nameEn: 'Platinum',    nameTr: 'Platin',      minRP: 1200, maxRP: 1599,  color: '#00f0ff', glow: 'rgba(0,240,255,0.5)' },
        { id: 'diamond',     nameRu: 'Алмаз',        nameEn: 'Diamond',     nameTr: 'Elmas',       minRP: 1600, maxRP: 1999,  color: '#70d6ff', glow: 'rgba(112,214,255,0.5)' },
        { id: 'master',      nameRu: 'Мастер',       nameEn: 'Master',      nameTr: 'Usta',        minRP: 2000, maxRP: 2499,  color: '#b537f2', glow: 'rgba(181,55,242,0.5)' },
        { id: 'grandmaster', nameRu: 'Грандмастер',  nameEn: 'Grandmaster', nameTr: 'Buyuk Usta',  minRP: 2500, maxRP: 99999, color: '#ff2a55', glow: 'rgba(255,42,85,0.6)' }
    ];

    function getDivision(rp) {
        const val = Math.max(0, rp || 0);
        for (let i = DIVISIONS.length - 1; i >= 0; i--) {
            if (val >= DIVISIONS[i].minRP) return DIVISIONS[i];
        }
        return DIVISIONS[0];
    }

    function getDivisionName(div, lang = 'ru') {
        if (!div) return '';
        if (lang === 'en') return div.nameEn;
        if (lang === 'tr') return div.nameTr;
        return div.nameRu;
    }

    function getProgress(rp) {
        const currentRP = Math.max(0, rp || 0);
        const div = getDivision(currentRP);
        const divIndex = DIVISIONS.findIndex(d => d.id === div.id);
        const isMax = divIndex === DIVISIONS.length - 1;
        const nextDiv = isMax ? null : DIVISIONS[divIndex + 1];

        if (isMax) {
            return {
                division: div,
                nextDivision: null,
                currentRP,
                minRP: div.minRP,
                nextRP: div.minRP,
                percent: 100,
                neededRP: 0
            };
        }

        const tierSpan = div.maxRP - div.minRP + 1;
        const inTierRP = currentRP - div.minRP;
        const percent = Math.min(100, Math.max(0, Math.round((inTierRP / tierSpan) * 100)));
        const neededRP = nextDiv.minRP - currentRP;

        return {
            division: div,
            nextDivision: nextDiv,
            currentRP,
            minRP: div.minRP,
            nextRP: nextDiv.minRP,
            percent,
            neededRP
        };
    }

    // Расчёт RP: победа (+25..+35 RP), поражение (-12..-18 RP, защита в Бронзе), бонус за серию побед (+10 RP)
    function calculateRPChange(won, currentRP, streak = 0) {
        if (won) {
            const base = Math.floor(Math.random() * 11) + 25; // +25..+35 RP
            const streakBonus = streak >= 2 ? 10 : 0; // бонус за серию побед
            const delta = base + streakBonus;
            return { delta, base, streakBonus, won: true, isBronzeProtected: false };
        } else {
            // Поражение
            if (currentRP < 400) {
                // Защита в Бронзе: 0 потерь RP
                return { delta: 0, base: 0, streakBonus: 0, won: false, isBronzeProtected: true };
            }
            const penalty = Math.floor(Math.random() * 7) + 12; // -12..-18 RP
            // RP не может опуститься ниже 0
            const delta = -Math.min(currentRP, penalty);
            return { delta, base: -penalty, streakBonus: 0, won: false, isBronzeProtected: false };
        }
    }

    function getDivisionBadgeSVG(divId, size = 48) {
        // Векторные SVG эмблемы дивизионов (СТРОГО БЕЗ ЭМОДЗИ)
        switch (divId) {
            case 'bronze':
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-0.5 8-5 8-10V6l-8-4z" fill="#3d2212" stroke="#cd7f32" stroke-width="2"/>
                    <path d="M12 5L6 8v4c0 3.5 2.5 6.7 6 7.2 3.5-0.5 6-3.7 6-7.2V8l-6-3z" fill="#7a421d"/>
                    <circle cx="12" cy="12" r="3" fill="#cd7f32"/>
                </svg>`;
            case 'silver':
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-0.5 8-5 8-10V6l-8-4z" fill="#202428" stroke="#c0c0c0" stroke-width="2"/>
                    <polygon points="12,5 15,11 21,11 16,15 18,21 12,17 6,21 8,15 3,11 9,11" fill="#a0a0a0" stroke="#e0e0e0" stroke-width="0.8"/>
                </svg>`;
            case 'gold':
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" stroke="#ffd700" stroke-width="2"/>
                    <path d="M18 9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" stroke="#ffd700" stroke-width="2"/>
                    <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" fill="#4d3d00" stroke="#ffd700" stroke-width="2"/>
                    <path d="M9 21h6M12 16v5" stroke="#ffd700" stroke-width="2"/>
                    <polygon points="12,6 13.5,9.5 17,9.5 14,11.8 15.2,15.2 12,13 8.8,15.2 10,11.8 7,9.5 10.5,9.5" fill="#ffd700"/>
                </svg>`;
            case 'platinum':
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="#06323d" stroke="#00f0ff" stroke-width="2"/>
                    <circle cx="12" cy="12" r="3.5" fill="#00f0ff"/>
                </svg>`;
            case 'diamond':
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <polygon points="6,3 18,3 22,9 12,22 2,9" fill="#0a2a40" stroke="#70d6ff" stroke-width="2"/>
                    <line x1="2" y1="9" x2="22" y2="9" stroke="#70d6ff" stroke-width="1.5"/>
                    <polyline points="6,3 10,9 12,22 14,9 18,3" stroke="#70d6ff" stroke-width="1.5"/>
                </svg>`;
            case 'master':
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <path d="M2 19h20v2H2z" fill="#b537f2"/>
                    <path d="M3 17l2-11 5 5 2-7 2 7 5-5 2 11H3z" fill="#2d0a3d" stroke="#b537f2" stroke-width="2"/>
                    <circle cx="5" cy="6" r="1.5" fill="#e072ff"/>
                    <circle cx="12" cy="4" r="1.5" fill="#e072ff"/>
                    <circle cx="19" cy="6" r="1.5" fill="#e072ff"/>
                </svg>`;
            case 'grandmaster':
            default:
                return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#ff2a55" stroke-width="2" fill="#3b0814"/>
                    <polygon points="12,4 14.5,9.5 20,10.2 16,14.1 17,19.5 12,16.8 7,19.5 8,14.1 4,10.2 9.5,9.5" fill="#ff2a55"/>
                    <circle cx="12" cy="12" r="3" fill="#ffffff"/>
                </svg>`;
        }
    }

    function recordMatch(won) {
        const sData = SaveManager.get();
        const currentRP = sData.rankedRP || 0;
        const currentStreak = sData.rankedStreak || 0;
        const oldDivision = getDivision(currentRP);

        const result = calculateRPChange(won, currentRP, currentStreak);
        const newRP = Math.max(0, currentRP + result.delta);
        const newDivision = getDivision(newRP);

        sData.rankedRP = newRP;
        if (won) {
            sData.rankedWins = (sData.rankedWins || 0) + 1;
            sData.rankedStreak = currentStreak + 1;
        } else {
            sData.rankedLosses = (sData.rankedLosses || 0) + 1;
            sData.rankedStreak = 0;
        }
        sData.peakRankedRP = Math.max(sData.peakRankedRP || 0, newRP);

        SaveManager.save();

        // Синхронизация с лидербордом платформы
        try {
            VKService.submitScore(newRP);
        } catch (e) {}

        const isPromo = newDivision.minRP > oldDivision.minRP;
        const isDemote = newDivision.minRP < oldDivision.minRP;

        return {
            won,
            delta: result.delta,
            base: result.base,
            streakBonus: result.streakBonus,
            isBronzeProtected: result.isBronzeProtected,
            oldRP: currentRP,
            newRP,
            oldDivision,
            newDivision,
            isPromo,
            isDemote,
            streak: sData.rankedStreak
        };
    }

    function renderUI() {
        const sData = SaveManager.get();
        const rp = sData.rankedRP || 0;
        const wins = sData.rankedWins || 0;
        const losses = sData.rankedLosses || 0;
        const streak = sData.rankedStreak || 0;
        const total = wins + losses;
        const winrate = total > 0 ? Math.round((wins / total) * 100) : 0;
        const lang = I18n.getLang ? I18n.getLang() : 'ru';

        const progress = getProgress(rp);
        const div = progress.division;

        // Обновляем текущий ранг
        const emblemEl = document.getElementById('ranked-badge-icon');
        if (emblemEl) {
            emblemEl.innerHTML = getDivisionBadgeSVG(div.id, 58);
            emblemEl.style.color = div.color;
        }

        const tierTitleEl = document.getElementById('ranked-tier-title');
        if (tierTitleEl) {
            tierTitleEl.textContent = getDivisionName(div, lang).toUpperCase();
            tierTitleEl.style.color = div.color;
        }

        const rpEl = document.getElementById('ranked-current-rp');
        if (rpEl) rpEl.textContent = rp;

        const barEl = document.getElementById('ranked-progress-bar');
        if (barEl) barEl.style.width = progress.percent + '%';

        const nextSubEl = document.getElementById('ranked-next-tier-sub');
        if (nextSubEl) {
            if (progress.nextDivision) {
                const nextName = getDivisionName(progress.nextDivision, lang);
                nextSubEl.textContent = lang === 'ru'
                    ? `Следующий ранг: ${nextName} (${progress.nextDivision.minRP} RP, осталось ${progress.neededRP})`
                    : `Next tier: ${nextName} (${progress.nextDivision.minRP} RP, ${progress.neededRP} needed)`;
            } else {
                nextSubEl.textContent = lang === 'ru' ? 'Максимальный ранг достигнут!' : 'Max tier achieved!';
            }
        }

        // Статистика
        const winsEl = document.getElementById('ranked-wins-count');
        if (winsEl) winsEl.textContent = wins;
        const lossesEl = document.getElementById('ranked-losses-count');
        if (lossesEl) lossesEl.textContent = losses;
        const wrEl = document.getElementById('ranked-winrate-val');
        if (wrEl) wrEl.textContent = winrate + '%';
        const streakEl = document.getElementById('ranked-streak-val');
        if (streakEl) streakEl.textContent = streak;

        // Лестница дивизионов
        const trackEl = document.getElementById('ranked-tiers-track');
        if (trackEl) {
            trackEl.innerHTML = '';
            DIVISIONS.forEach(d => {
                const isCur = d.id === div.id;
                const card = document.createElement('div');
                card.className = 'tier-badge-card' + (isCur ? ' current' : '');
                card.style.color = d.color;
                card.innerHTML = `
                    <div class="tier-badge-icon">${getDivisionBadgeSVG(d.id, 24)}</div>
                    <div class="tier-badge-name">${getDivisionName(d, lang)}</div>
                    <div class="tier-badge-range">${d.minRP}+</div>
                `;
                trackEl.appendChild(card);
            });
        }
    }

    function openRankedModal() {
        showView('hub');
        renderUI();
        if (typeof showOverlay === 'function') showOverlay('ranked');
    }

    function showView(viewName) {
        const hub = document.getElementById('ranked-view-hub');
        const search = document.getElementById('ranked-view-search');
        const rooms = document.getElementById('ranked-view-rooms');
        if (hub) hub.style.display = viewName === 'hub' ? 'block' : 'none';
        if (search) search.style.display = viewName === 'search' ? 'block' : 'none';
        if (rooms) rooms.style.display = viewName === 'rooms' ? 'block' : 'none';
    }

    return {
        DIVISIONS,
        getDivision,
        getProgress,
        calculateRPChange,
        getDivisionBadgeSVG,
        getDivisionName,
        recordMatch,
        renderUI,
        openRankedModal,
        showView
    };
})();

// Реестр 56 реалистичных онлайн-соперников (RU, KZ, BY, TR, DE, US)
const ONLINE_RIVALS = [
    { name: 'CyberStriker', country: 'RU', basePing: 22, style: 'aggressive' },
    { name: 'Sultan_KZ', country: 'KZ', basePing: 34, style: 'balanced' },
    { name: 'Minsk_Drifter', country: 'BY', basePing: 28, style: 'defensive' },
    { name: 'AnkaraStar', country: 'TR', basePing: 42, style: 'aggressive' },
    { name: 'BerlinWall', country: 'DE', basePing: 38, style: 'defensive' },
    { name: 'TitanGamer', country: 'US', basePing: 65, style: 'balanced' },
    { name: 'NeonBlade', country: 'RU', basePing: 19, style: 'aggressive' },
    { name: 'AltaiWarrior', country: 'KZ', basePing: 36, style: 'balanced' },
    { name: 'RedStar_BY', country: 'BY', basePing: 25, style: 'aggressive' },
    { name: 'BosphorusKing', country: 'TR', basePing: 40, style: 'balanced' },
    { name: 'BavarianExpress', country: 'DE', basePing: 35, style: 'aggressive' },
    { name: 'ApexStriker', country: 'US', basePing: 58, style: 'aggressive' },
    { name: 'PuckMaster_RU', country: 'RU', basePing: 18, style: 'defensive' },
    { name: 'KazakhEagle', country: 'KZ', basePing: 31, style: 'balanced' },
    { name: 'IceByte_BY', country: 'BY', basePing: 26, style: 'balanced' },
    { name: 'OttomanPulse', country: 'TR', basePing: 44, style: 'aggressive' },
    { name: 'BlitzKrieg_99', country: 'DE', basePing: 33, style: 'aggressive' },
    { name: 'ViperStrike', country: 'US', basePing: 62, style: 'aggressive' },
    { name: 'ShadowHunter', country: 'RU', basePing: 24, style: 'balanced' },
    { name: 'Nomad_KZ', country: 'KZ', basePing: 39, style: 'defensive' },
    { name: 'Belovezha', country: 'BY', basePing: 29, style: 'defensive' },
    { name: 'IstanbulNight', country: 'TR', basePing: 41, style: 'balanced' },
    { name: 'KaiserPuck', country: 'DE', basePing: 37, style: 'defensive' },
    { name: 'QuantumGoal', country: 'US', basePing: 55, style: 'balanced' },
    { name: 'Dmitry_Pro', country: 'RU', basePing: 21, style: 'aggressive' },
    { name: 'SteppeRider', country: 'KZ', basePing: 33, style: 'aggressive' },
    { name: 'PolesieGuard', country: 'BY', basePing: 27, style: 'defensive' },
    { name: 'GalataBlade', country: 'TR', basePing: 43, style: 'aggressive' },
    { name: 'FrankfurtAce', country: 'DE', basePing: 36, style: 'balanced' },
    { name: 'StormRider', country: 'US', basePing: 68, style: 'aggressive' },
    { name: 'SiberianTiger', country: 'RU', basePing: 29, style: 'aggressive' },
    { name: 'AstanaBlaze', country: 'KZ', basePing: 35, style: 'aggressive' },
    { name: 'Fortress_BY', country: 'BY', basePing: 24, style: 'defensive' },
    { name: 'AnatolianWolf', country: 'TR', basePing: 46, style: 'balanced' },
    { name: 'RhineFalcon', country: 'DE', basePing: 34, style: 'balanced' },
    { name: 'HyperSonic', country: 'US', basePing: 59, style: 'aggressive' },
    { name: 'ZeroLatency', country: 'RU', basePing: 17, style: 'defensive' },
    { name: 'QazaqBatyr', country: 'KZ', basePing: 32, style: 'aggressive' },
    { name: 'NemanWave', country: 'BY', basePing: 28, style: 'balanced' },
    { name: 'IzmirSniper', country: 'TR', basePing: 45, style: 'aggressive' },
    { name: 'MunichStriker', country: 'DE', basePing: 38, style: 'aggressive' },
    { name: 'DeltaForce', country: 'US', basePing: 64, style: 'balanced' },
    { name: 'VortexStriker', country: 'RU', basePing: 23, style: 'aggressive' },
    { name: 'BaikonurLaunch', country: 'KZ', basePing: 37, style: 'balanced' },
    { name: 'GrodnoFalcon', country: 'BY', basePing: 26, style: 'balanced' },
    { name: 'CrescentMoon', country: 'TR', basePing: 42, style: 'defensive' },
    { name: 'HamburgStorm', country: 'DE', basePing: 35, style: 'aggressive' },
    { name: 'AeroDynamo', country: 'US', basePing: 57, style: 'balanced' },
    { name: 'PhantomPuck', country: 'RU', basePing: 20, style: 'defensive' },
    { name: 'ShymkentFire', country: 'KZ', basePing: 38, style: 'aggressive' },
    { name: 'VitebskAce', country: 'BY', basePing: 25, style: 'aggressive' },
    { name: 'AntalyaSun', country: 'TR', basePing: 47, style: 'balanced' },
    { name: 'DortmundWall', country: 'DE', basePing: 39, style: 'defensive' },
    { name: 'SolarFlare', country: 'US', basePing: 61, style: 'aggressive' },
    { name: 'RedOctopus', country: 'RU', basePing: 22, style: 'defensive' },
    { name: 'KzSpeedster', country: 'KZ', basePing: 30, style: 'aggressive' }
];

const MultiplayerManager = (() => {
    const peerId = 'peer_' + Math.random().toString(36).slice(2, 9);
    const p2pChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('air_hockey_p2p') : null;
    let rtcPeer = null;
    let rtcChannel = null;

    let searchTimerId = null;
    let searchStartTimestamp = 0;
    let isSearching = false;
    let currentRival = null;
    let countdownIntervalId = null;

    let activeRoomCode = null;
    let isRoomHost = false;
    let isLiveConnected = false;
    let remoteP2Input = { x: 0, z: -4.5, vx: 0, vz: 0 };

    // Генератор векторных SVG флагов (СТРОГО БЕЗ ЭМОДЗИ)
    function getCountryFlagSVG(code, w = 24, h = 16) {
        switch (code) {
            case 'RU':
                return `<svg viewBox="0 0 24 16" width="${w}" height="${h}" class="flag-svg"><rect width="24" height="5.33" fill="#ffffff"/><rect y="5.33" width="24" height="5.33" fill="#0039a6"/><rect y="10.66" width="24" height="5.34" fill="#d52b1e"/></svg>`;
            case 'KZ':
                return `<svg viewBox="0 0 24 16" width="${w}" height="${h}" class="flag-svg"><rect width="24" height="16" fill="#00afca"/><circle cx="12" cy="7.5" r="3.2" fill="#fec50c"/><path d="M7 12q5-3 10 0q-5-1.5-10 0z" fill="#fec50c"/><rect x="1" y="2" width="2" height="12" fill="#fec50c" rx="1"/></svg>`;
            case 'BY':
                return `<svg viewBox="0 0 24 16" width="${w}" height="${h}" class="flag-svg"><rect width="24" height="10.66" fill="#c8313e"/><rect y="10.66" width="24" height="5.34" fill="#4aa658"/><rect width="4.5" height="16" fill="#ffffff"/><path d="M1 2l2.5 3l-2.5 3l2.5 3l-2.5 3" stroke="#c8313e" stroke-width="1.2" fill="none"/></svg>`;
            case 'TR':
                return `<svg viewBox="0 0 24 16" width="${w}" height="${h}" class="flag-svg"><rect width="24" height="16" fill="#e30a17"/><circle cx="9.5" cy="8" r="4.2" fill="#ffffff"/><circle cx="10.8" cy="8" r="3.4" fill="#e30a17"/><polygon points="14.5,8 18,9.2 16.5,5.8 16.5,10.2 18,6.8" fill="#ffffff"/></svg>`;
            case 'DE':
                return `<svg viewBox="0 0 24 16" width="${w}" height="${h}" class="flag-svg"><rect width="24" height="5.33" fill="#000000"/><rect y="5.33" width="24" height="5.33" fill="#dd0000"/><rect y="10.66" width="24" height="5.34" fill="#ffce00"/></svg>`;
            case 'US':
            default:
                return `<svg viewBox="0 0 24 16" width="${w}" height="${h}" class="flag-svg"><rect width="24" height="16" fill="#b22234"/><rect y="2.46" width="24" height="2.46" fill="#ffffff"/><rect y="7.38" width="24" height="2.46" fill="#ffffff"/><rect y="12.3" width="24" height="2.46" fill="#ffffff"/><rect width="10" height="8.6" fill="#3c3b6e"/><circle cx="3" cy="2.5" r="0.8" fill="#ffffff"/><circle cx="7" cy="2.5" r="0.8" fill="#ffffff"/><circle cx="5" cy="4.3" r="0.8" fill="#ffffff"/><circle cx="3" cy="6.1" r="0.8" fill="#ffffff"/><circle cx="7" cy="6.1" r="0.8" fill="#ffffff"/></svg>`;
        }
    }

    // Слушатель BroadcastChannel для мгновенной P2P связи между вкладками
    if (p2pChannel) {
        p2pChannel.onmessage = (e) => {
            const msg = e.data;
            if (!msg || typeof msg !== 'object' || msg.senderId === peerId) return;

            switch (msg.type) {
                case 'ah_matchmaking_ping':
                    if (isSearching && !isLiveConnected) {
                        // Другая вкладка тоже ищет матч — мгновенно создаём соединение!
                        _connectLiveMatch(msg, false);
                    }
                    break;

                case 'ah_matchmaking_ack':
                    if (isSearching && msg.targetPeerId === peerId) {
                        _connectLiveMatch(msg, true);
                    }
                    break;

                case 'ah_room_join_req':
                    if (isRoomHost && activeRoomCode && msg.code === activeRoomCode) {
                        _acceptRoomGuest(msg);
                    }
                    break;

                case 'ah_room_join_ack':
                    if (activeRoomCode && msg.code === activeRoomCode && msg.guestId === peerId) {
                        _onRoomJoinedByHost(msg);
                    }
                    break;

                case 'ah_p2p_state':
                    if (isLiveConnected && !isRoomHost) {
                        _applyHostState(msg);
                    }
                    break;

                case 'ah_p2p_input':
                    if (isLiveConnected && isRoomHost) {
                        remoteP2Input = msg.input || remoteP2Input;
                    }
                    break;

                case 'ah_rtc_signal':
                    if (msg.targetPeerId === peerId && rtcPeer) {
                        _handleRtcSignal(msg);
                    }
                    break;
            }
        };
    }

    // Инициализация WebRTC DataChannel со STUN stun.l.google.com:19302
    function _initWebRTC(isInitiator, targetPeerId) {
        if (typeof RTCPeerConnection === 'undefined') return;
        try {
            const config = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
            rtcPeer = new RTCPeerConnection(config);

            rtcPeer.onicecandidate = (event) => {
                if (event.candidate && p2pChannel) {
                    p2pChannel.postMessage({
                        type: 'ah_rtc_signal',
                        senderId: peerId,
                        targetPeerId,
                        candidate: event.candidate
                    });
                }
            };

            if (isInitiator) {
                rtcChannel = rtcPeer.createDataChannel('air_hockey_channel');
                _setupDataChannel(rtcChannel);

                rtcPeer.createOffer().then(offer => rtcPeer.setLocalDescription(offer)).then(() => {
                    if (p2pChannel) {
                        p2pChannel.postMessage({
                            type: 'ah_rtc_signal',
                            senderId: peerId,
                            targetPeerId,
                            offer: rtcPeer.localDescription
                        });
                    }
                }).catch(() => {});
            } else {
                rtcPeer.ondatachannel = (event) => {
                    rtcChannel = event.channel;
                    _setupDataChannel(rtcChannel);
                };
            }
        } catch (e) {}
    }

    function _setupDataChannel(channel) {
        if (!channel) return;
        channel.onmessage = (e) => {
            try {
                const data = JSON.parse(e.data);
                if (data.type === 'input') remoteP2Input = data.input;
                else if (data.type === 'state') _applyHostState(data);
            } catch (err) {}
        };
    }

    function _handleRtcSignal(msg) {
        if (!rtcPeer) return;
        if (msg.offer) {
            rtcPeer.setRemoteDescription(new RTCSessionDescription(msg.offer)).then(() => rtcPeer.createAnswer()).then(answer => rtcPeer.setLocalDescription(answer)).then(() => {
                if (p2pChannel) {
                    p2pChannel.postMessage({
                        type: 'ah_rtc_signal',
                        senderId: peerId,
                        targetPeerId: msg.senderId,
                        answer: rtcPeer.localDescription
                    });
                }
            }).catch(() => {});
        } else if (msg.answer) {
            rtcPeer.setRemoteDescription(new RTCSessionDescription(msg.answer)).catch(() => {});
        } else if (msg.candidate) {
            rtcPeer.addIceCandidate(new RTCIceCandidate(msg.candidate)).catch(() => {});
        }
    }

    // ─── СИСТЕМА КОМНАТ (4-значный код) ──────────────────────
    function createRoom() {
        const code = String(Math.floor(1000 + Math.random() * 9000));
        activeRoomCode = code;
        isRoomHost = true;
        isLiveConnected = false;

        const codeDisplay = document.getElementById('room-code-display');
        const createdPanel = document.getElementById('room-created-panel');
        if (codeDisplay) codeDisplay.textContent = code;
        if (createdPanel) createdPanel.style.display = 'block';

        const myRP = SaveManager.get().rankedRP || 0;
        if (p2pChannel) {
            p2pChannel.postMessage({
                type: 'ah_room_create',
                senderId: peerId,
                code,
                name: 'Хост ' + code,
                rp: myRP,
                country: 'RU'
            });
        }
        return code;
    }

    function joinRoom(code) {
        const statusEl = document.getElementById('room-join-status');
        const cleanCode = String(code || '').trim();
        if (cleanCode.length !== 4 || !/^\d{4}$/.test(cleanCode)) {
            if (statusEl) {
                statusEl.style.display = 'block';
                statusEl.style.color = 'var(--neon-red)';
                statusEl.textContent = 'Введите корректный 4-значный код!';
            }
            return false;
        }

        activeRoomCode = cleanCode;
        isRoomHost = false;

        if (statusEl) {
            statusEl.style.display = 'block';
            statusEl.style.color = 'var(--neon-cyan)';
            statusEl.textContent = 'Поиск комнаты ' + cleanCode + '...';
        }

        const myRP = SaveManager.get().rankedRP || 0;
        if (p2pChannel) {
            p2pChannel.postMessage({
                type: 'ah_room_join_req',
                senderId: peerId,
                code: cleanCode,
                name: 'Игрок ' + cleanCode,
                rp: myRP,
                country: 'RU'
            });
        }

        // Если хост не ответил за 2.5 сек — уведомляем пользователя
        setTimeout(() => {
            if (!isLiveConnected && statusEl && statusEl.textContent.includes('Поиск')) {
                statusEl.style.color = 'var(--neon-yellow)';
                statusEl.textContent = 'Комната ' + cleanCode + ' не найдена. Проверьте код или создайте свою!';
            }
        }, 2500);

        return true;
    }

    function _acceptRoomGuest(msg) {
        isLiveConnected = true;
        if (p2pChannel) {
            p2pChannel.postMessage({
                type: 'ah_room_join_ack',
                senderId: peerId,
                code: activeRoomCode,
                hostId: peerId,
                guestId: msg.senderId,
                hostName: 'Хост ' + activeRoomCode,
                hostRP: SaveManager.get().rankedRP || 0,
                hostCountry: 'RU'
            });
        }
        _initWebRTC(true, msg.senderId);

        currentRival = {
            name: msg.name || 'Гость ' + activeRoomCode,
            country: msg.country || 'RU',
            rp: msg.rp || 0,
            ping: 12
        };

        _showMatchupAndStart(currentRival, true);
    }

    function _onRoomJoinedByHost(msg) {
        isLiveConnected = true;
        _initWebRTC(false, msg.hostId);

        currentRival = {
            name: msg.hostName || 'Хост ' + activeRoomCode,
            country: msg.hostCountry || 'RU',
            rp: msg.hostRP || 0,
            ping: 14
        };

        _showMatchupAndStart(currentRival, true);
    }

    // ─── УМНЫЙ ГИБРИДНЫЙ ПОИСК (Smart Hybrid Matchmaking) ────
    function startMatchmaking() {
        if (isSearching) return;
        isSearching = true;
        isLiveConnected = false;
        isRoomHost = true;
        searchStartTimestamp = Date.now();

        RankedManager.showView('search');

        const statusEl = document.getElementById('ranked-search-status');
        const timerEl = document.getElementById('ranked-search-timer');
        const matchupCard = document.getElementById('ranked-matchup-card');
        const countdownEl = document.getElementById('matchup-countdown');

        if (statusEl) statusEl.textContent = I18n.t('searching_match') || 'ПОИСК СОПЕРНИКА...';
        if (timerEl) timerEl.textContent = '00:00';
        if (matchupCard) matchupCard.style.display = 'none';
        if (countdownEl) countdownEl.style.display = 'none';

        // Отправляем пинг в BroadcastChannel для поиска живого соперника
        const myRP = SaveManager.get().rankedRP || 0;
        if (p2pChannel) {
            p2pChannel.postMessage({
                type: 'ah_matchmaking_ping',
                senderId: peerId,
                name: 'Игрок',
                rp: myRP,
                country: 'RU'
            });
        }

        // Таймер поиска живого игрока (без подмены ботами)
        let seconds = 0;
        searchTimerId = setInterval(() => {
            seconds++;
            const sStr = seconds < 10 ? '0' + seconds : '' + seconds;
            const mStr = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : '' + Math.floor(seconds / 60);
            if (timerEl) timerEl.textContent = `${mStr}:${sStr}`;

            // Повторяем поиск каждые 3 секунды
            if (seconds % 3 === 0 && p2pChannel) {
                p2pChannel.postMessage({
                    type: 'ah_matchmaking_ping',
                    senderId: peerId,
                    name: 'Игрок',
                    rp: myRP,
                    country: 'RU'
                });
            }

            if (seconds >= 12 && statusEl) {
                statusEl.textContent = 'ОЖИДАНИЕ ИГРОКА... (МОЖНО СОЗДАТЬ КОМНАТУ)';
            }
        }, 1000);
    }

    function cancelMatchmaking() {
        isSearching = false;
        if (searchTimerId) { clearInterval(searchTimerId); searchTimerId = null; }
        if (countdownIntervalId) { clearInterval(countdownIntervalId); countdownIntervalId = null; }
        RankedManager.showView('hub');
    }

    function _connectLiveMatch(msg, isAck) {
        if (!isSearching) return;
        clearInterval(searchTimerId);
        searchTimerId = null;
        isLiveConnected = true;
        isSearching = false;

        if (!isAck && p2pChannel) {
            p2pChannel.postMessage({
                type: 'ah_matchmaking_ack',
                senderId: peerId,
                targetPeerId: msg.senderId,
                name: 'Игрок',
                rp: SaveManager.get().rankedRP || 0,
                country: 'RU'
            });
            isRoomHost = true;
            _initWebRTC(true, msg.senderId);
        } else {
            isRoomHost = false;
            _initWebRTC(false, msg.senderId);
        }

        currentRival = {
            name: msg.name || 'P2P Игрок',
            country: msg.country || 'RU',
            rp: msg.rp || 0,
            ping: Math.floor(Math.random() * 8) + 12
        };

        _showMatchupAndStart(currentRival, true);
    }

    function _connectEmulatedRival() {
        if (!isSearching) return;
        isSearching = false;

        const myRP = SaveManager.get().rankedRP || 0;
        // Подбираем соперника из реестра ONLINE_RIVALS
        const randomRival = ONLINE_RIVALS[Math.floor(Math.random() * ONLINE_RIVALS.length)];
        // Рейтинг +-50 RP от рейтинга игрока (не меньше 0)
        const rivalRP = Math.max(0, myRP + Math.floor(Math.random() * 81) - 40);
        const rivalPing = randomRival.basePing + Math.floor(Math.random() * 9) - 4;

        currentRival = {
            name: randomRival.name,
            country: randomRival.country,
            rp: rivalRP,
            ping: rivalPing,
            style: randomRival.style
        };

        _showMatchupAndStart(currentRival, false);
    }

    function _showMatchupAndStart(rival, isLive) {
        const myRP = SaveManager.get().rankedRP || 0;
        AudioManager.playMatchFound();

        const statusEl = document.getElementById('ranked-search-status');
        const matchupCard = document.getElementById('ranked-matchup-card');
        const countdownEl = document.getElementById('matchup-countdown');
        const countdownNum = document.getElementById('matchup-countdown-num');

        if (statusEl) statusEl.textContent = I18n.t('opponent_found') || 'СОПЕРНИК НАЙДЕН!';

        // Заполняем карточку матча
        const userFlag = document.getElementById('matchup-user-flag');
        const userName = document.getElementById('matchup-user-name');
        const userRP = document.getElementById('matchup-user-rp');
        if (userFlag) userFlag.innerHTML = getCountryFlagSVG('RU', 24, 16);
        if (userName) userName.textContent = I18n.getLang() === 'ru' ? 'ВЫ' : 'YOU';
        if (userRP) userRP.textContent = myRP + ' RP';

        const rivalFlag = document.getElementById('matchup-rival-flag');
        const rivalName = document.getElementById('matchup-rival-name');
        const rivalRP = document.getElementById('matchup-rival-rp');
        const rivalPingText = document.getElementById('matchup-rival-ping-text');

        if (rivalFlag) rivalFlag.innerHTML = getCountryFlagSVG(rival.country, 24, 16);
        if (rivalName) rivalName.textContent = rival.name;
        if (rivalRP) rivalRP.textContent = rival.rp + ' RP';
        if (rivalPingText) rivalPingText.textContent = rival.ping + ' ms';

        if (matchupCard) matchupCard.style.display = 'flex';
        if (countdownEl) countdownEl.style.display = 'block';

        // Обратный отсчёт: 3.. 2.. 1.. старт матча!
        let count = 3;
        if (countdownNum) countdownNum.textContent = count;
        AudioManager.playCountdownTick();

        countdownIntervalId = setInterval(() => {
            count--;
            if (countdownNum) countdownNum.textContent = count;
            AudioManager.playCountdownTick();

            if (count <= 0) {
                clearInterval(countdownIntervalId);
                countdownIntervalId = null;

                // Запускаем рейтинговый матч!
                if (typeof Game !== 'undefined') {
                    state.mode = isLive ? 'ranked_p2p' : 'ranked';
                    startMatch();
                }
            }
        }, 900);
    }

    // AI конфигурация для эмулированного соперника в зависимости от его дивизиона и RP
    function getCurrentRivalAICfg() {
        if (!currentRival) {
            return { speed: 0.20, reaction: 0.18, attackBias: 0.60, predSteps: 14, noise: 0.10 };
        }
        const rp = currentRival.rp || 0;
        if (rp < 400) {
            // Бронза
            return { speed: 0.16, reaction: 0.12, attackBias: 0.40, predSteps: 10, noise: 0.18 };
        } else if (rp < 800) {
            // Серебро
            return { speed: 0.19, reaction: 0.16, attackBias: 0.55, predSteps: 13, noise: 0.12 };
        } else if (rp < 1200) {
            // Золото
            return { speed: 0.22, reaction: 0.20, attackBias: 0.68, predSteps: 16, noise: 0.08 };
        } else if (rp < 1600) {
            // Платина
            return { speed: 0.25, reaction: 0.24, attackBias: 0.80, predSteps: 19, noise: 0.04 };
        } else if (rp < 2000) {
            // Алмаз
            return { speed: 0.28, reaction: 0.27, attackBias: 0.88, predSteps: 22, noise: 0.02 };
        } else if (rp < 2500) {
            // Мастер
            return { speed: 0.31, reaction: 0.30, attackBias: 0.94, predSteps: 24, noise: 0.01 };
        } else {
            // Грандмастер
            return { speed: 0.34, reaction: 0.33, attackBias: 0.98, predSteps: 26, noise: 0.00 };
        }
    }

    // Синхронизация состояний для Live P2P
    function broadcastHostState(pucksList, p1Mallet, s1, s2, curPhase) {
        if (!isLiveConnected || !isRoomHost) return;
        const packet = {
            type: 'ah_p2p_state',
            senderId: peerId,
            pucks: pucksList.map(p => ({ x: p.x, z: p.z, vx: p.vx, vz: p.vz, onFire: p.onFire })),
            p1: { x: p1Mallet.x, z: p1Mallet.z, vx: p1Mallet.vx, vz: p1Mallet.vz },
            scoreP1: s1,
            scoreP2: s2,
            phase: curPhase
        };
        if (rtcChannel && rtcChannel.readyState === 'open') {
            rtcChannel.send(JSON.stringify({ type: 'state', packet }));
        } else if (p2pChannel) {
            p2pChannel.postMessage(packet);
        }
    }

    function sendGuestInput(localMallet) {
        if (!isLiveConnected || isRoomHost) return;
        // Инвертируем координаты для хоста (гость играет внизу экрана)
        const packet = {
            type: 'ah_p2p_input',
            senderId: peerId,
            input: { x: -localMallet.x, z: -localMallet.z, vx: -localMallet.vx, vz: -localMallet.vz }
        };
        if (rtcChannel && rtcChannel.readyState === 'open') {
            rtcChannel.send(JSON.stringify({ type: 'input', input: packet.input }));
        } else if (p2pChannel) {
            p2pChannel.postMessage(packet);
        }
    }

    function _applyHostState(msg) {
        if (isRoomHost) return;
        // Применяем состояние с инверсией координат (чтобы гость видел поле со своей стороны)
        if (msg.pucks && pucks && pucks[0]) {
            pucks[0].x = -msg.pucks[0].x;
            pucks[0].z = -msg.pucks[0].z;
            pucks[0].vx = -msg.pucks[0].vx;
            pucks[0].vz = -msg.pucks[0].vz;
            pucks[0].onFire = msg.pucks[0].onFire;
        }
        if (msg.p1 && topMallet) {
            topMallet.x = -msg.p1.x;
            topMallet.z = -msg.p1.z;
            topMallet.vx = -msg.p1.vx;
            topMallet.vz = -msg.p1.vz;
        }
        if (state) {
            state.scoreP1 = msg.scoreP2 || 0;
            state.scoreP2 = msg.scoreP1 || 0;
        }
    }

    return {
        getCountryFlagSVG,
        startMatchmaking,
        cancelMatchmaking,
        createRoom,
        joinRoom,
        getCurrentRival: () => currentRival,
        getCurrentRivalAICfg,
        isLiveP2P: () => isLiveConnected,
        isHost: () => isRoomHost,
        getRemoteP2Input: () => remoteP2Input,
        broadcastHostState,
        sendGuestInput
    };
})();

if (typeof window !== 'undefined') {
    window.RankedManager = RankedManager;
    window.MultiplayerManager = MultiplayerManager;
    window.ONLINE_RIVALS = ONLINE_RIVALS;
}

// ─────────────────────────────────────────────────────────────────────────
// 8. СИСТЕМА 3D ЭФФЕКТОВ (VFX3D: Конфетти, Искры, Волны, Тряска камеры)
// ─────────────────────────────────────────────────────────────────────────
const VFX3D = (() => {
    let sceneRef = null;
    let shakeIntensity = 0;
    let shakeTime = 0;
    const shakeOffset = { x: 0, y: 0, z: 0, rotX: 0, rotZ: 0 };
    let currentThemeId = 'classic_pub';
    let currentParticleType = 'sparks';
    let currentParticleColor = null;

    // ─── OBJECT POOL 1: SPARKS (ИСКРЫ) ───────────────────────────
    const MAX_SPARKS_SYSTEMS = 24;
    const MAX_SPARKS_PER_BURST = 36;
    const sparksPool = [];

    // ─── OBJECT POOL 2: SHOCKWAVES (УДАРНЫЕ ВОЛНЫ) ───────────────
    const MAX_SHOCKWAVES = 16;
    const shockwavesPool = [];

    // ─── OBJECT POOL 3: CONFETTI (КОНФЕТТИ) ──────────────────────
    const MAX_CONFETTI = 100;
    const confettiPool = [];

    // ─── 3D GOAL BANNER ("ГОЛ!" / "GOAL!") ───────────────────────
    let goalTextMesh = null;
    let goalTextCanvas = null;
    let goalTextCtx = null;
    let goalTextTexture = null;
    let goalTextActive = false;
    let goalTextTimer = 0;
    let goalTextMaxTime = 1.9;

    function init(scene) {
        sceneRef = scene;
        if (sparksPool.length === 0) _initSparksPool();
        if (shockwavesPool.length === 0) _initShockwavesPool();
        if (confettiPool.length === 0) _initConfettiPool();
        if (!goalTextMesh) _initGoalTextMesh();
        clear();
    }

    function _initSparksPool() {
        sparksPool.length = 0;
        for (let s = 0; s < MAX_SPARKS_SYSTEMS; s++) {
            const positions = new Float32Array(MAX_SPARKS_PER_BURST * 3);
            const geom = new THREE.BufferGeometry();
            const attr = new THREE.BufferAttribute(positions, 3);
            attr.array = positions;
            if (!geom.attributes) geom.attributes = {};
            geom.attributes.position = attr;
            geom.setAttribute('position', attr);

            const mat = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.28,
                transparent: true,
                opacity: 0
            });
            const points = new THREE.Points(geom, mat);
            points.visible = false;
            if (sceneRef && sceneRef.add) sceneRef.add(points);

            const velocities = [];
            for (let v = 0; v < MAX_SPARKS_PER_BURST; v++) {
                velocities.push({ vx: 0, vy: 0, vz: 0 });
            }

            sparksPool.push({
                points,
                positions,
                velocities,
                active: false,
                count: 0,
                life: 0,
                decay: 0.035,
                isEmbers: false,
                isIce: false
            });
        }
    }

    function _initShockwavesPool() {
        shockwavesPool.length = 0;
        for (let w = 0; w < MAX_SHOCKWAVES; w++) {
            const geom = new THREE.RingGeometry(0.1, 0.32, 32);
            geom.rotateX(-Math.PI / 2);
            const mat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.visible = false;
            if (sceneRef && sceneRef.add) sceneRef.add(mesh);

            shockwavesPool.push({
                mesh,
                mat,
                active: false,
                radius: 0.2,
                maxRadius: 2.0,
                growth: 0.1,
                opacity: 0
            });
        }
    }

    function _initConfettiPool() {
        confettiPool.length = 0;
        const confColors = [0x00f0ff, 0xffca28, 0xff2a55, 0x00ff88, 0xb537f2, 0xffffff];
        for (let c = 0; c < MAX_CONFETTI; c++) {
            const geom = new THREE.PlaneGeometry(0.22, 0.13);
            const mat = new THREE.MeshBasicMaterial({
                color: confColors[c % confColors.length],
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.visible = false;
            if (sceneRef && sceneRef.add) sceneRef.add(mesh);

            confettiPool.push({
                mesh,
                mat,
                active: false,
                vx: 0, vy: 0, vz: 0,
                rotX: 0, rotY: 0, rotZ: 0,
                life: 0,
                decay: 0.015
            });
        }
    }

    function _initGoalTextMesh() {
        if (typeof document === 'undefined') return;
        goalTextCanvas = document.createElement('canvas');
        goalTextCanvas.width = 512;
        goalTextCanvas.height = 256;
        goalTextCtx = goalTextCanvas.getContext('2d');

        goalTextTexture = new THREE.CanvasTexture(goalTextCanvas);
        const geom = new THREE.PlaneGeometry(7.2, 3.6);
        const mat = new THREE.MeshBasicMaterial({
            map: goalTextTexture,
            transparent: true,
            opacity: 0,
            depthWrite: false,
            side: THREE.DoubleSide
        });
        goalTextMesh = new THREE.Mesh(geom, mat);
        goalTextMesh.position.set(0, 3.4, 0);
        if (goalTextMesh.rotation) goalTextMesh.rotation.x = -Math.PI * 0.16;
        goalTextMesh.visible = false;
        if (sceneRef && sceneRef.add) sceneRef.add(goalTextMesh);
    }

    function show3DGoalText(isPlayer) {
        if (!goalTextMesh || !goalTextCtx) return;
        const lang = (typeof I18n !== 'undefined' && I18n.getLang) ? I18n.getLang() : 'ru';
        const txt = lang === 'en' ? 'GOAL!' : (lang === 'tr' ? 'GOL!' : 'ГОЛ!');
        const mainColor = isPlayer ? '#00f0ff' : '#ff2a55';
        const glowColor = isPlayer ? 'rgba(0,240,255,0.85)' : 'rgba(255,42,85,0.85)';

        goalTextCtx.clearRect(0, 0, 512, 256);

        // Glowing outer stroke & neon shadow
        goalTextCtx.font = '900 88px "Montserrat", "Segoe UI", sans-serif';
        goalTextCtx.textAlign = 'center';
        goalTextCtx.textBaseline = 'middle';

        goalTextCtx.shadowColor = glowColor;
        goalTextCtx.shadowBlur = 32;
        goalTextCtx.strokeStyle = mainColor;
        goalTextCtx.lineWidth = 12;
        goalTextCtx.strokeText(txt, 256, 128);

        // Inner bright core
        goalTextCtx.shadowBlur = 12;
        goalTextCtx.fillStyle = '#ffffff';
        goalTextCtx.fillText(txt, 256, 128);

        if (goalTextTexture) goalTextTexture.needsUpdate = true;
        if (goalTextMesh.material) goalTextMesh.material.opacity = 1;
        goalTextMesh.scale.set(0.01, 0.01, 0.01);
        goalTextMesh.position.set(0, 3.2, 0);
        goalTextMesh.visible = true;

        goalTextActive = true;
        goalTextTimer = 0;
    }

    function setTheme(themeId) {
        currentThemeId = themeId;
        const cfg = (typeof THEMES !== 'undefined') ? THEMES[themeId] : null;
        if (cfg) {
            currentParticleType = cfg.particleType || 'sparks';
            currentParticleColor = cfg.particleColor || null;
        }
    }

    function screenShake(amount) {
        shakeIntensity = Math.min(1.25, Math.max(shakeIntensity, amount));
    }

    function createShockwave(x, z, hexColor, maxRadius) {
        if (!sceneRef) return;
        let item = shockwavesPool.find(sw => !sw.active);
        if (!item && shockwavesPool.length > 0) item = shockwavesPool[0];
        if (!item) return;

        item.active = true;
        item.radius = 0.15;
        item.maxRadius = maxRadius || 2.2;
        item.growth = item.maxRadius / 18;
        item.opacity = 0.95;
        item.mesh.position.set(x, 0.02, z);
        item.mesh.scale.set(0.15, 0.15, 1);
        if (item.mat.color && item.mat.color.setHex) item.mat.color.setHex(hexColor);
        item.mat.opacity = 0.95;
        item.mesh.visible = true;
    }

    function createSparks(x, y, z, nx, nz, hexColor, count = 12) {
        if (!sceneRef) return;
        let poolItem = sparksPool.find(s => !s.active);
        if (!poolItem && sparksPool.length > 0) poolItem = sparksPool[0];
        if (!poolItem) return;

        if (currentParticleType === 'ice') {
            hexColor = Math.random() > 0.35 ? 0xffffff : 0xd8eeff;
        } else if (currentParticleType === 'embers') {
            hexColor = Math.random() > 0.6 ? 0xff3700 : (Math.random() > 0.3 ? 0xff7700 : 0xffcc00);
        } else if (currentParticleType === 'gold') {
            hexColor = Math.random() > 0.3 ? 0xffd700 : 0xffea75;
        } else if (currentParticleType === 'synthwave') {
            hexColor = Math.random() > 0.5 ? 0xff007f : 0x00f0ff;
        } else if (currentParticleType === 'plasma') {
            hexColor = Math.random() > 0.5 ? 0x00f0ff : 0x38bdf8;
        } else if (currentParticleColor) {
            hexColor = currentParticleColor;
        }

        const isEmbers = currentParticleType === 'embers';
        const isIce = currentParticleType === 'ice';
        const sparkCount = Math.min(MAX_SPARKS_PER_BURST, Math.max(4, count));

        const pos = poolItem.positions;
        const vel = poolItem.velocities;

        for (let i = 0; i < sparkCount; i++) {
            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            const spread = (Math.random() - 0.5) * 2;
            const speed = 0.12 + Math.random() * 0.22;
            let vy = 0.1 + Math.random() * 0.2;
            if (isEmbers) vy = 0.18 + Math.random() * 0.26;
            else if (isIce) vy = 0.04 + Math.random() * 0.1;

            vel[i].vx = (nx * 0.6 + spread * nz * 0.8) * speed;
            vel[i].vy = vy;
            vel[i].vz = (nz * 0.6 - spread * nx * 0.8) * speed;
        }

        for (let i = sparkCount; i < MAX_SPARKS_PER_BURST; i++) {
            pos[i * 3] = x;
            pos[i * 3 + 1] = -100;
            pos[i * 3 + 2] = z;
            vel[i].vx = 0; vel[i].vy = 0; vel[i].vz = 0;
        }

        if (poolItem.points.geometry.attributes.position) {
            poolItem.points.geometry.attributes.position.needsUpdate = true;
        }
        if (poolItem.points.material.color && poolItem.points.material.color.setHex) {
            poolItem.points.material.color.setHex(hexColor);
        }
        poolItem.points.material.size = isIce ? 0.35 : (isEmbers ? 0.28 : 0.25);
        poolItem.points.material.opacity = 1;
        poolItem.points.visible = true;

        poolItem.active = true;
        poolItem.count = sparkCount;
        poolItem.life = isEmbers ? 1.4 : 1.0;
        poolItem.decay = isEmbers ? 0.018 : (isIce ? 0.045 : (0.035 + Math.random() * 0.02));
        poolItem.isEmbers = isEmbers;
        poolItem.isIce = isIce;
    }

    function createGoalConfetti(isPlayer) {
        if (!sceneRef) return;
        const originZ = isPlayer ? -WORLD.HALF_L : WORLD.HALF_L;
        const colors = [0x00f0ff, 0xffca28, 0xff2a55, 0x00ff88, 0xb537f2, 0xffffff];
        const burstCount = 65;

        let activated = 0;
        for (let i = 0; i < confettiPool.length && activated < burstCount; i++) {
            const item = confettiPool[i];
            if (!item.active) {
                item.active = true;
                item.mesh.position.set(
                    (Math.random() - 0.5) * WORLD.GOAL_HALF_W * 2.1,
                    0.2 + Math.random() * 0.5,
                    originZ
                );
                item.vx = (Math.random() - 0.5) * 0.26;
                item.vy = 0.22 + Math.random() * 0.36;
                item.vz = (isPlayer ? 1 : -1) * (0.16 + Math.random() * 0.32);
                item.rotX = (Math.random() - 0.5) * 0.25;
                item.rotY = (Math.random() - 0.5) * 0.25;
                item.rotZ = (Math.random() - 0.5) * 0.25;
                item.life = 1.0;
                item.decay = 0.012 + Math.random() * 0.008;
                if (item.mat.color && item.mat.color.setHex) {
                    item.mat.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
                }
                item.mat.opacity = 1;
                item.mesh.visible = true;
                activated++;
            }
        }
        createShockwave(0, originZ, isPlayer ? 0x00f0ff : 0xff2a55, 3.8);
        screenShake(0.55);
    }

    function triggerGoalCelebration(isPlayer, fxId = 'confetti') {
        if (!sceneRef) return;
        const originZ = isPlayer ? -WORLD.HALF_L : WORLD.HALF_L;

        // 3D-текст "ГОЛ!" / "GOAL!" с анимацией масштабирования
        show3DGoalText(isPlayer);

        // Мигание неоновых бортов арены цветом забившего игрока
        if (typeof Arena3D !== 'undefined' && Arena3D.triggerGoalFlash) {
            Arena3D.triggerGoalFlash(isPlayer);
        }

        if (fxId === 'lasernova') {
            createShockwave(0, originZ, 0x00f0ff, 4.4);
            createShockwave(0, originZ, 0xb537f2, 2.8);
            screenShake(0.58);
            for (let i = 0; i < 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const col = i % 2 === 0 ? 0x00f0ff : 0xb537f2;
                createSparks(0, 0.3, originZ, Math.cos(angle), Math.sin(angle) * (isPlayer ? 1 : -1), col, 8);
            }
        } else if (fxId === 'goldenspark') {
            createShockwave(0, originZ, 0xffca28, 4.2);
            screenShake(0.52);
            createSparks(0, 0.3, originZ, 0, isPlayer ? 1 : -1, 0xffca28, 32);
            createSparks(0, 0.4, originZ, 0.5, isPlayer ? 0.8 : -0.8, 0xffe066, 24);
        } else if (fxId === 'cybershock') {
            createShockwave(0, originZ, 0x00f0ff, 4.5);
            setTimeout(() => { if (sceneRef) createShockwave(0, originZ, 0x00ff88, 3.2); }, 100);
            setTimeout(() => { if (sceneRef) createShockwave(0, originZ, 0xb537f2, 2.2); }, 200);
            screenShake(0.68);
            createSparks(0, 0.3, originZ, 0, isPlayer ? 1 : -1, 0x00ff88, 32);
        } else {
            createGoalConfetti(isPlayer);
        }
    }

    function update(dt = 0.016) {
        // 1. Процедурная плавная тряска камеры (затухающие полигармонические колебания)
        if (shakeIntensity > 0.001) {
            shakeTime += dt * 48;
            const s1 = Math.sin(shakeTime * 1.15) * Math.cos(shakeTime * 0.85);
            const s2 = Math.cos(shakeTime * 1.65) * Math.sin(shakeTime * 1.25);
            const s3 = Math.sin(shakeTime * 2.2);

            shakeOffset.x = s1 * shakeIntensity * 0.75;
            shakeOffset.y = Math.abs(s2) * shakeIntensity * 0.65;
            shakeOffset.z = s3 * shakeIntensity * 0.4;
            shakeOffset.rotX = s2 * shakeIntensity * 0.022;
            shakeOffset.rotZ = s1 * shakeIntensity * 0.032;

            shakeIntensity *= Math.pow(0.86, dt * 60);
        } else {
            shakeIntensity = 0;
            shakeOffset.x = 0;
            shakeOffset.y = 0;
            shakeOffset.z = 0;
            shakeOffset.rotX = 0;
            shakeOffset.rotZ = 0;
        }

        // 2. Обновление пула ударных волн
        for (let i = 0; i < shockwavesPool.length; i++) {
            const sw = shockwavesPool[i];
            if (!sw.active) continue;
            sw.radius += sw.growth;
            sw.opacity = Math.max(0, 1 - (sw.radius / sw.maxRadius));
            sw.mesh.scale.set(sw.radius, sw.radius, 1);
            sw.mat.opacity = sw.opacity;
            if (sw.opacity <= 0 || sw.radius >= sw.maxRadius) {
                sw.mesh.visible = false;
                sw.active = false;
            }
        }

        // 3. Обновление пула искр (BufferGeometry без создания объектов)
        for (let i = 0; i < sparksPool.length; i++) {
            const sp = sparksPool[i];
            if (!sp.active) continue;
            const pos = sp.positions;
            const vel = sp.velocities;
            for (let j = 0; j < sp.count; j++) {
                const v = vel[j];
                pos[j * 3] += v.vx;
                pos[j * 3 + 1] += v.vy;
                pos[j * 3 + 2] += v.vz;
                if (sp.isEmbers) {
                    v.vy *= 0.97;
                } else if (sp.isIce) {
                    v.vy -= 0.016;
                } else {
                    v.vy -= 0.012; // гравитация
                }
            }
            if (sp.points.geometry.attributes.position) {
                sp.points.geometry.attributes.position.needsUpdate = true;
            }
            sp.life -= sp.decay;
            sp.points.material.opacity = Math.max(0, sp.life);
            if (sp.life <= 0) {
                sp.points.visible = false;
                sp.active = false;
            }
        }

        // 4. Обновление пула конфетти
        for (let i = 0; i < confettiPool.length; i++) {
            const c = confettiPool[i];
            if (!c.active) continue;
            c.mesh.position.x += c.vx;
            c.mesh.position.y += c.vy;
            c.mesh.position.z += c.vz;
            c.vy -= 0.008; // гравитация
            c.mesh.rotation.x += c.rotX;
            c.mesh.rotation.y += c.rotY;
            c.mesh.rotation.z += c.rotZ;
            c.life -= c.decay;
            c.mat.opacity = Math.max(0, c.life);
            if (c.life <= 0 || c.mesh.position.y < -0.5) {
                c.mesh.visible = false;
                c.active = false;
            }
        }

        // 5. Анимация 3D текста "ГОЛ!" / "GOAL!" с масштабированием
        if (goalTextActive && goalTextMesh) {
            goalTextTimer += dt;
            const t = Math.min(1, goalTextTimer / 0.28);
            // Плавное эластичное масштабирование всплывающего текста (0 -> 1.35 -> 1.0)
            const popScale = t < 1 ? (1.35 * Math.sin(t * Math.PI * 0.5)) : (1.0 + Math.sin(goalTextTimer * 5.5) * 0.06);
            goalTextMesh.scale.set(popScale, popScale, 1);
            goalTextMesh.position.y = 3.2 + Math.min(0.6, goalTextTimer * 0.35);

            if (goalTextTimer > goalTextMaxTime - 0.45) {
                const fadeT = (goalTextMaxTime - goalTextTimer) / 0.45;
                if (goalTextMesh.material) goalTextMesh.material.opacity = Math.max(0, fadeT);
            } else if (goalTextMesh.material) {
                goalTextMesh.material.opacity = 1;
            }

            if (goalTextTimer >= goalTextMaxTime) {
                goalTextMesh.visible = false;
                goalTextActive = false;
            }
        }
    }

    function clear() {
        for (const sw of shockwavesPool) { sw.mesh.visible = false; sw.active = false; }
        for (const sp of sparksPool) { sp.points.visible = false; sp.active = false; }
        for (const c of confettiPool) { c.mesh.visible = false; c.active = false; }
        if (goalTextMesh) { goalTextMesh.visible = false; goalTextActive = false; }
        shakeIntensity = 0;
    }

    return {
        init, setTheme, screenShake, createShockwave, createSparks, createGoalConfetti, triggerGoalCelebration,
        show3DGoalText, update, clear,
        getShake: () => shakeIntensity,
        getShakeOffset: () => shakeOffset
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 9. БОНУСЫ В 3D (POWER-UPS)
// ─────────────────────────────────────────────────────────────────────────
const PowerUpManager3D = (() => {
    let sceneRef = null;
    const items = [];
    let nextSpawnTime = 0;

    const TYPES = [
        { id: 'freeze', hex: 0x00f0ff, duration: 2500 },
        { id: 'multipuck', hex: 0xffca28, duration: 0 },
        { id: 'shield', hex: 0x00ff88, duration: 5000 },
        { id: 'supershot', hex: 0xff2a55, duration: 6000 }
    ];

    function init(scene) {
        sceneRef = scene;
    }

    function reset() {
        for (const item of items) sceneRef?.remove(item.mesh);
        items.length = 0;
        nextSpawnTime = Date.now() + 8000;
    }

    function update(pucks, playerMallet, topMallet, enabled) {
        if (!enabled || !sceneRef) return;
        const now = Date.now();

        if (now > nextSpawnTime && items.length < 2) {
            const type = TYPES[Math.floor(Math.random() * TYPES.length)];
            const x = (Math.random() - 0.5) * (WORLD.HALF_W * 1.4);
            const z = (Math.random() - 0.5) * (WORLD.HALF_L * 0.8);

            // 3D Кристалл
            const geom = new THREE.OctahedronGeometry(0.45, 0);
            const mat = new THREE.MeshStandardMaterial({
                color: type.hex,
                emissive: type.hex,
                emissiveIntensity: 0.6,
                roughness: 0.2,
                metalness: 0.8
            });
            const mesh = new THREE.Mesh(geom, mat);
            mesh.position.set(x, 0.45, z);
            sceneRef.add(mesh);

            items.push({ x, z, r: 0.5, type: type.id, hex: type.hex, duration: type.duration, mesh, time: 0 });
            nextSpawnTime = now + 12000 + Math.random() * 6000;
        }

        for (let i = items.length - 1; i >= 0; i--) {
            const item = items[i];
            item.time += 0.05;
            item.mesh.rotation.y += 0.03;
            item.mesh.rotation.x += 0.02;
            item.mesh.position.y = 0.45 + Math.sin(item.time) * 0.12;

            // Проверка подбора шайбой
            for (const puck of pucks) {
                if (Math.hypot(puck.x - item.x, puck.z - item.z) < WORLD.PUCK_R + item.r) {
                    const beneficiary = puck.vz < 0 ? 'player' : 'top';
                    activate(item, beneficiary, pucks, playerMallet, topMallet);
                    sceneRef.remove(item.mesh);
                    items.splice(i, 1);
                    break;
                }
            }
        }
    }

    function activate(item, user, pucks, playerMallet, topMallet) {
        AudioManager.playPowerup();
        VFX3D.createShockwave(item.x, item.z, item.hex, 2.0);

        if (item.type === 'freeze') {
            AudioManager.playFreeze();
            const target = user === 'player' ? topMallet : playerMallet;
            target.frozenUntil = Date.now() + item.duration;
        } else if (item.type === 'shield') {
            AudioManager.playShield();
            if (user === 'player') playerMallet.shieldUntil = Date.now() + item.duration;
            else topMallet.shieldUntil = Date.now() + item.duration;
        } else if (item.type === 'supershot') {
            const m = user === 'player' ? playerMallet : topMallet;
            m.hasSuperShot = true;
        } else if (item.type === 'multipuck') {
            if (pucks.length < 2) {
                pucks.push({
                    x: 0, z: 0,
                    vx: (Math.random() - 0.5) * 0.2,
                    vz: (Math.random() > 0.5 ? 0.18 : -0.18),
                    mesh: null
                });
            }
        }
    }

    return { init, reset, update };
})();

// ─────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────
// 9.9. КАТАЛОГ 10 ТЕМ АРЕН (THEMES, PROCEDURAL CANVAS TEXTURES, THEME MANAGER)
// ─────────────────────────────────────────────────────────────────────────
function toCssHex(hex) {
    if (typeof hex === 'string') return hex;
    return '#' + hex.toString(16).padStart(6, '0');
}

// Векторные SVG-иконки для всех 10 тем (БЕЗ ЭМОДЗИ)
const THEME_ICONS = {
    classic_pub: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h10v12a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V4z"/><path d="M15 8h3a3 3 0 0 1 0 6h-3"/><line x1="8" y1="9" x2="8" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/></svg>`,
    winter_classic: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#90caf9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="5" y1="19" x2="19" y2="5"/><path d="m9 4 3 3 3-3"/><path d="m9 20 3-3 3 3"/><path d="m4 9 3 3-3 3"/><path d="m20 9-3 3 3 3"/></svg>`,
    minimal_studio: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><circle cx="12" cy="12" r="3.5"/></svg>`,
    deep_space: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-25 12 12)"/><circle cx="19" cy="5" r="1" fill="#00f0ff"/><circle cx="5" cy="19" r="1" fill="#00f0ff"/></svg>`,
    inferno_core: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ff3700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
    sunset_coast: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ffca28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4V2"/><path d="m4.93 6.93 1.41 1.41"/><path d="M2 13h4"/><path d="M20 13h2"/><path d="m17.66 8.34 1.41-1.41"/><path d="M6 13a6 6 0 0 1 12 0"/><path d="M2 17h20"/><path d="M4 21h16"/></svg>`,
    zen_dojo: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M6 7v13"/><path d="M18 7v13"/><path d="M2 4h20"/><path d="M9 11h6"/><circle cx="12" cy="15" r="2"/></svg>`,
    synthwave_arcade: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ff007f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9z"/><line x1="2" y1="16" x2="22" y2="16"/><line x1="4" y1="20" x2="20" y2="20"/><line x1="12" y1="12" x2="8" y2="21"/><line x1="12" y1="12" x2="16" y2="21"/></svg>`,
    underground_garage: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    royal_velvet: `<svg class="arena-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5z"/></svg>`
};

const THEMES = {
    classic_pub: {
        id: 'classic_pub',
        particleType: 'sparks',
        particleColor: 0xffca28,
        hazard: 'none',
        lights: {
            ambient: { color: 0x281810, intensity: 1.05 },
            stadium: { color: 0xffecc4, intensity: 0.85, position: [4, 16, 6] },
            centerSpot: { color: 0xffd59e, intensity: 0, position: [0, 14, 0], angle: 0.85, penumbra: 0.9, distance: 30, decay: 1.0 },
            underGlow: { color: 0xd48820, intensity: 0.6, distance: 8 }
        },
        materials: {
            ice: { color: 0xf8f3e6, roughness: 0.15, metalness: 0.14 },
            railBody: { color: 0x1e1008, roughness: 0.65, metalness: 0.15 },
            neonStrip: { color: 0xd4af37 },
            goalBox: { color: 0x120804, roughness: 0.9 },
            stadiumFloor: { color: 0x120905, roughness: 0.95, metalness: 0.1 },
            stadiumTower: { color: 0x1a0f08, roughness: 0.5, metalness: 0.4 },
            stadiumLamp: { color: 0xffebc0 },
            stadiumNeon: { color: 0xd4af37 },
            mallet: { roughness: 0.28, metalness: 0.60, knobColor: 0xd4af37, rimColor: 0x2a1408 },
            puck: { roughness: 0.22, metalness: 0.35, bodyColor: 0x180b06 }
        },
        background: 0x0c0604,
        fog: { color: 0x0c0604, density: 0.024 }
    },
    winter_classic: {
        id: 'winter_classic',
        particleType: 'ice',
        particleColor: 0xd8eeff,
        hazard: 'boosters',
        lights: {
            ambient: { color: 0x142035, intensity: 1.1 },
            stadium: { color: 0xeaf4ff, intensity: 1.05, position: [5, 18, 8] },
            centerSpot: { color: 0xd8edff, intensity: 0, position: [0, 16, 0], angle: 0.85, penumbra: 0.9, distance: 32, decay: 1.0 },
            underGlow: { color: 0x70c0ff, intensity: 0.8, distance: 8 }
        },
        materials: {
            ice: { color: 0xeef7ff, roughness: 0.25, metalness: 0.08 },
            railBody: { color: 0x0a1424, roughness: 0.35, metalness: 0.75 },
            neonStrip: { color: 0x90caf9 },
            goalBox: { color: 0x060c18, roughness: 0.85 },
            stadiumFloor: { color: 0x060d18, roughness: 0.9, metalness: 0.2 },
            stadiumTower: { color: 0x0c1628, roughness: 0.4, metalness: 0.8 },
            stadiumLamp: { color: 0xf0f8ff },
            stadiumNeon: { color: 0x90caf9 },
            mallet: { roughness: 0.15, metalness: 0.80, knobColor: 0xe0f2fe, rimColor: 0x0c1e36 },
            puck: { roughness: 0.35, metalness: 0.12, bodyColor: 0x0f172a }
        },
        background: 0x030812,
        fog: { color: 0x030812, density: 0.022 }
    },
    minimal_studio: {
        id: 'minimal_studio',
        particleType: 'sparks',
        particleColor: 0xffffff,
        hazard: 'none',
        lights: {
            ambient: { color: 0x282c34, intensity: 1.15 },
            stadium: { color: 0xffffff, intensity: 0.95, position: [3, 18, 5] },
            centerSpot: { color: 0xffffff, intensity: 0, position: [0, 15, 0], angle: 0.85, penumbra: 0.9, distance: 30, decay: 1.0 },
            underGlow: { color: 0xffffff, intensity: 0.4, distance: 6 }
        },
        materials: {
            ice: { color: 0xfcfcfc, roughness: 0.35, metalness: 0.02 },
            railBody: { color: 0xd4d8df, roughness: 0.25, metalness: 0.85 },
            neonStrip: { color: 0x64748b },
            goalBox: { color: 0x2b303c, roughness: 0.7 },
            stadiumFloor: { color: 0x181a1f, roughness: 0.9, metalness: 0.1 },
            stadiumTower: { color: 0x2b303a, roughness: 0.3, metalness: 0.7 },
            stadiumLamp: { color: 0xffffff },
            stadiumNeon: { color: 0x94a3b8 },
            mallet: { roughness: 0.35, metalness: 0.88, knobColor: 0xf1f5f9, rimColor: 0xcfd8dc },
            puck: { roughness: 0.42, metalness: 0.05, bodyColor: 0x334155 }
        },
        background: 0x111317,
        fog: { color: 0x111317, density: 0.020 }
    },
    deep_space: {
        id: 'deep_space',
        particleType: 'plasma',
        particleColor: 0x00f0ff,
        hazard: 'portals',
        hasStars: true,
        lights: {
            ambient: { color: 0x050c18, intensity: 0.85 },
            stadium: { color: 0x00f0ff, intensity: 0.85, position: [6, 18, 7] },
            centerSpot: { color: 0x00e1ff, intensity: 0, position: [0, 15, 0], angle: 0.85, penumbra: 0.9, distance: 32, decay: 1.0 },
            underGlow: { color: 0x00f0ff, intensity: 1.4, distance: 10 }
        },
        materials: {
            ice: { color: 0x060c18, roughness: 0.26, metalness: 0.5 },
            railBody: { color: 0x070d18, roughness: 0.2, metalness: 0.92 },
            neonStrip: { color: 0x00f0ff },
            goalBox: { color: 0x02050b, roughness: 0.9 },
            stadiumFloor: { color: 0x020409, roughness: 0.95, metalness: 0.3 },
            stadiumTower: { color: 0x050c18, roughness: 0.3, metalness: 0.8 },
            stadiumLamp: { color: 0x80f8ff },
            stadiumNeon: { color: 0x00f0ff },
            mallet: { roughness: 0.18, metalness: 0.92, knobColor: 0x00f0ff, rimColor: 0x060f1e },
            puck: { roughness: 0.14, metalness: 0.85, bodyColor: 0x050c18 }
        },
        background: 0x010206,
        fog: { color: 0x010206, density: 0.016 }
    },
    inferno_core: {
        id: 'inferno_core',
        particleType: 'embers',
        particleColor: 0xff3700,
        hazard: 'bumper',
        hasLavaPulse: true,
        lights: {
            ambient: { color: 0x260702, intensity: 1.05 },
            stadium: { color: 0xff5511, intensity: 1.0, position: [4, 17, 6] },
            centerSpot: { color: 0xff7722, intensity: 0, position: [0, 14, 0], angle: 0.85, penumbra: 0.9, distance: 30, decay: 1.0 },
            underGlow: { color: 0xff2200, intensity: 2.0, distance: 10 }
        },
        materials: {
            ice: { color: 0x140502, roughness: 0.22, metalness: 0.35 },
            railBody: { color: 0x0e0402, roughness: 0.5, metalness: 0.6 },
            neonStrip: { color: 0xff3700 },
            goalBox: { color: 0x080201, roughness: 0.9 },
            stadiumFloor: { color: 0x080201, roughness: 0.95, metalness: 0.2 },
            stadiumTower: { color: 0x140502, roughness: 0.5, metalness: 0.5 },
            stadiumLamp: { color: 0xffaa22 },
            stadiumNeon: { color: 0xff4500 },
            mallet: { roughness: 0.45, metalness: 0.60, knobColor: 0xff5500, rimColor: 0x150301 },
            puck: { roughness: 0.32, metalness: 0.40, bodyColor: 0x1f0602 }
        },
        background: 0x070100,
        fog: { color: 0x070100, density: 0.024 }
    },
    sunset_coast: {
        id: 'sunset_coast',
        particleType: 'gold',
        particleColor: 0xffca28,
        hazard: 'boosters',
        lights: {
            ambient: { color: 0x2c1524, intensity: 1.05 },
            stadium: { color: 0xff8833, intensity: 1.15, position: [10, 16, 6] },
            centerSpot: { color: 0xffaa44, intensity: 0, position: [0, 14, 0], angle: 0.85, penumbra: 0.9, distance: 30, decay: 1.0 },
            underGlow: { color: 0xffaa33, intensity: 0.8, distance: 8 }
        },
        materials: {
            ice: { color: 0x148f9c, roughness: 0.28, metalness: 0.10 },
            railBody: { color: 0x24100c, roughness: 0.5, metalness: 0.2 },
            neonStrip: { color: 0xffca28 },
            goalBox: { color: 0x140808, roughness: 0.8 },
            stadiumFloor: { color: 0x120810, roughness: 0.92, metalness: 0.15 },
            stadiumTower: { color: 0x1c0d16, roughness: 0.4, metalness: 0.4 },
            stadiumLamp: { color: 0xffd080 },
            stadiumNeon: { color: 0xffaa33 },
            mallet: { roughness: 0.24, metalness: 0.75, knobColor: 0xffca28, rimColor: 0x2e1208 },
            puck: { roughness: 0.25, metalness: 0.35, bodyColor: 0x1a2e38 }
        },
        background: 0x160814,
        fog: { color: 0x160814, density: 0.022 }
    },
    zen_dojo: {
        id: 'zen_dojo',
        particleType: 'sparks',
        particleColor: 0xdc2626,
        hazard: 'none',
        lights: {
            ambient: { color: 0x1c0f08, intensity: 1.0 },
            stadium: { color: 0xffc480, intensity: 0.9, position: [3, 16, 5] },
            centerSpot: { color: 0xffb266, intensity: 0, position: [0, 13, 0], angle: 0.85, penumbra: 0.9, distance: 28, decay: 1.0 },
            underGlow: { color: 0x8b1a1a, intensity: 0.6, distance: 7 }
        },
        materials: {
            ice: { color: 0x180b06, roughness: 0.25, metalness: 0.18 },
            railBody: { color: 0x0c0503, roughness: 0.2, metalness: 0.25 },
            neonStrip: { color: 0xdc2626 },
            goalBox: { color: 0x070302, roughness: 0.85 },
            stadiumFloor: { color: 0x0c0704, roughness: 0.95, metalness: 0.1 },
            stadiumTower: { color: 0x140804, roughness: 0.35, metalness: 0.3 },
            stadiumLamp: { color: 0xffdc99 },
            stadiumNeon: { color: 0xdc2626 },
            mallet: { roughness: 0.12, metalness: 0.30, knobColor: 0xdc2626, rimColor: 0x140603 },
            puck: { roughness: 0.28, metalness: 0.15, bodyColor: 0x120806 }
        },
        background: 0x1c0c08,
        fog: { color: 0x1c0c08, density: 0.024 }
    },
    synthwave_arcade: {
        id: 'synthwave_arcade',
        particleType: 'synthwave',
        particleColor: 0xff007f,
        hazard: 'bumper',
        lights: {
            ambient: { color: 0x180424, intensity: 1.0 },
            stadium: { color: 0xff007f, intensity: 1.05, position: [-6, 16, 6] },
            centerSpot: { color: 0x00f0ff, intensity: 0, position: [4, 15, 6], angle: 0.85, penumbra: 0.9, distance: 30, decay: 1.0 },
            underGlow: { color: 0xff0088, intensity: 1.6, distance: 10 }
        },
        materials: {
            ice: { color: 0x120220, roughness: 0.22, metalness: 0.45 },
            railBody: { color: 0x0d0118, roughness: 0.18, metalness: 0.85 },
            neonStrip: { color: 0xff007f },
            goalBox: { color: 0x06000c, roughness: 0.85 },
            stadiumFloor: { color: 0x06000e, roughness: 0.9, metalness: 0.4 },
            stadiumTower: { color: 0x140224, roughness: 0.25, metalness: 0.8 },
            stadiumLamp: { color: 0xff2df4 },
            stadiumNeon: { color: 0x00f0ff },
            mallet: { roughness: 0.06, metalness: 0.98, knobColor: 0xffffff, rimColor: 0xff007f },
            puck: { roughness: 0.10, metalness: 0.70, bodyColor: 0x1a022b }
        },
        background: 0x06000e,
        fog: { color: 0x06000e, density: 0.020 }
    },
    underground_garage: {
        id: 'underground_garage',
        particleType: 'sparks',
        particleColor: 0xeab308,
        hazard: 'none',
        hasFlicker: true,
        lights: {
            ambient: { color: 0x161a20, intensity: 1.05 },
            stadium: { color: 0xd8e4e8, intensity: 1.05, position: [5, 17, 7] },
            centerSpot: { color: 0xe0ecf0, intensity: 0, position: [0, 14, 0], angle: 0.85, penumbra: 0.9, distance: 28, decay: 1.0 },
            underGlow: { color: 0xeab308, intensity: 0.6, distance: 7 }
        },
        materials: {
            ice: { color: 0x28303a, roughness: 0.38, metalness: 0.72 },
            railBody: { color: 0x14181f, roughness: 0.45, metalness: 0.8 },
            neonStrip: { color: 0xeab308 },
            goalBox: { color: 0x0d1015, roughness: 0.85 },
            stadiumFloor: { color: 0x0d1014, roughness: 0.95, metalness: 0.25 },
            stadiumTower: { color: 0x181e26, roughness: 0.4, metalness: 0.75 },
            stadiumLamp: { color: 0xdcf0f8 },
            stadiumNeon: { color: 0xeab308 },
            mallet: { roughness: 0.40, metalness: 0.85, knobColor: 0xeab308, rimColor: 0x1f242d },
            puck: { roughness: 0.38, metalness: 0.65, bodyColor: 0x1f242c }
        },
        background: 0x090c0f,
        fog: { color: 0x090c0f, density: 0.026 }
    },
    royal_velvet: {
        id: 'royal_velvet',
        particleType: 'gold',
        particleColor: 0xffd700,
        hazard: 'bumper',
        lights: {
            ambient: { color: 0x061810, intensity: 0.95 },
            stadium: { color: 0xffe6a0, intensity: 1.15, position: [4, 18, 6] },
            centerSpot: { color: 0xffe28a, intensity: 0, position: [0, 14, 0], angle: 0.85, penumbra: 0.9, distance: 30, decay: 1.0 },
            underGlow: { color: 0x00e080, intensity: 0.8, distance: 9 }
        },
        materials: {
            ice: { color: 0x04281a, roughness: 0.22, metalness: 0.35 },
            railBody: { color: 0x1a1204, roughness: 0.22, metalness: 0.92 },
            neonStrip: { color: 0xffd700 },
            goalBox: { color: 0x03120b, roughness: 0.85 },
            stadiumFloor: { color: 0x070e0a, roughness: 0.9, metalness: 0.3 },
            stadiumTower: { color: 0x1a1306, roughness: 0.25, metalness: 0.85 },
            stadiumLamp: { color: 0xfff0c0 },
            stadiumNeon: { color: 0xffd700 },
            mallet: { roughness: 0.12, metalness: 0.95, knobColor: 0xffe066, rimColor: 0x2a1e05 },
            puck: { roughness: 0.15, metalness: 0.80, bodyColor: 0x032b1f }
        },
        background: 0x160309,
        fog: { color: 0x160309, density: 0.022 }
    }
};

if (typeof window !== 'undefined') {
    window.THEMES = THEMES;
}

function drawThemeField(canvas, ctx, themeId) {
    const w = 1024;
    const h = 2048;
    const cx = 512;
    const cy = 1024;

    ctx.save();
    ctx.clearRect(0, 0, w, h);

    function drawAirHoles(color = 'rgba(255, 255, 255, 0.04)', step = 36, r = 2.5) {
        ctx.fillStyle = color;
        for (let x = 40; x < w - 40; x += step) {
            for (let y = 40; y < h - 40; y += step) {
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    if (themeId === 'classic_pub') {
        const woodGrad = ctx.createLinearGradient(0, 0, w, 0);
        woodGrad.addColorStop(0, '#1c0e06');
        woodGrad.addColorStop(0.5, '#2e190e');
        woodGrad.addColorStop(1, '#1c0e06');
        ctx.fillStyle = woodGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.lineWidth = 3;
        for (let y = 0; y < h; y += 128) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        const pad = 36;
        ctx.fillStyle = '#f8f4ec';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
        ctx.shadowBlur = 24;
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(pad, pad, w - pad * 2, h - pad * 2, 28);
        } else {
            ctx.rect(pad, pad, w - pad * 2, h - pad * 2);
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        drawAirHoles('rgba(0, 0, 0, 0.05)', 36, 2.5);

        ctx.strokeStyle = '#d9383a';
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(pad, cy);
        ctx.lineTo(w - pad, cy);
        ctx.stroke();

        ctx.strokeStyle = '#1d4ed8';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(cx, cy, 240, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#d9383a';
        ctx.beginPath();
        ctx.arc(cx, cy, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, 110, 260, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 110, 260, Math.PI, 0);
        ctx.stroke();

        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 8;
        [[pad, pad, 1, 1], [w - pad, pad, -1, 1], [pad, h - pad, 1, -1], [w - pad, h - pad, -1, -1]].forEach(([x, y, sx, sy]) => {
            ctx.beginPath();
            ctx.moveTo(x, y + sy * 90);
            ctx.lineTo(x, y);
            ctx.lineTo(x + sx * 90, y);
            ctx.stroke();
        });

        ctx.font = '700 24px "Georgia", serif';
        ctx.fillStyle = 'rgba(26, 16, 8, 0.35)';
        ctx.textAlign = 'center';
        ctx.fillText('CLASSIC PUB GRAND TABLE', cx, cy + 50);

    } else if (themeId === 'winter_classic') {
        const iceGrad = ctx.createRadialGradient(cx, cy, 200, cx, cy, 1100);
        iceGrad.addColorStop(0, '#eaf4ff');
        iceGrad.addColorStop(0.7, '#cbe3f7');
        iceGrad.addColorStop(1, '#9ec5e8');
        ctx.fillStyle = iceGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.lineWidth = 1.5;
        let seed = 42;
        function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
        for (let i = 0; i < 90; i++) {
            const x1 = 50 + rnd() * (w - 100);
            const y1 = 50 + rnd() * (h - 100);
            const len = 60 + rnd() * 200;
            const ang = rnd() * Math.PI * 2;
            const curve = (rnd() - 0.5) * 40;
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 + rnd() * 0.35})`;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(x1 + Math.cos(ang) * len * 0.5 + curve, y1 + Math.sin(ang) * len * 0.5 + curve, x1 + Math.cos(ang) * len, y1 + Math.sin(ang) * len);
            ctx.stroke();
        }

        drawAirHoles('rgba(255, 255, 255, 0.12)', 36, 2.5);

        ctx.strokeStyle = '#c62828';
        ctx.lineWidth = 12;
        ctx.beginPath();
        ctx.moveTo(20, cy);
        ctx.lineTo(w - 20, cy);
        ctx.stroke();

        ctx.strokeStyle = '#1565c0';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(cx, cy, 240, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#1565c0';
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(129, 212, 250, 0.35)';
        ctx.beginPath();
        ctx.arc(cx, 90, 240, 0, Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#c62828';
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, h - 90, 240, Math.PI, 0);
        ctx.fill();
        ctx.stroke();

        const frostGrad = ctx.createRadialGradient(cx, cy, 800, cx, cy, 1200);
        frostGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        frostGrad.addColorStop(1, 'rgba(235, 245, 255, 0.45)');
        ctx.fillStyle = frostGrad;
        ctx.fillRect(0, 0, w, h);

    } else if (themeId === 'minimal_studio') {
        const studioGrad = ctx.createLinearGradient(0, 0, w, h);
        studioGrad.addColorStop(0, '#faf8f5');
        studioGrad.addColorStop(1, '#eee9e0');
        ctx.fillStyle = studioGrad;
        ctx.fillRect(0, 0, w, h);

        drawAirHoles('rgba(0, 0, 0, 0.03)', 34, 2);

        ctx.fillStyle = '#bfa07e';
        const bw = 12;
        ctx.fillRect(16, 16, bw, h - 32);
        ctx.fillRect(w - 16 - bw, 16, bw, h - 32);

        ctx.strokeStyle = 'rgba(51, 65, 85, 0.65)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(30, cy);
        ctx.lineTo(w - 30, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 220, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, 100, 240, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 100, 240, Math.PI, 0);
        ctx.stroke();

        ctx.font = '600 18px "Segoe UI", sans-serif';
        ctx.fillStyle = 'rgba(51, 65, 85, 0.4)';
        ctx.textAlign = 'center';
        ctx.fillText('MINIMAL STUDIO · NO. 03', cx, cy - 40);

    } else if (themeId === 'deep_space') {
        const spaceGrad = ctx.createRadialGradient(cx, cy, 100, cx, cy, 1200);
        spaceGrad.addColorStop(0, '#0c1a2e');
        spaceGrad.addColorStop(0.5, '#050a14');
        spaceGrad.addColorStop(1, '#010307');
        ctx.fillStyle = spaceGrad;
        ctx.fillRect(0, 0, w, h);

        let seed = 77;
        function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
        for (let i = 0; i < 180; i++) {
            const sx = rnd() * w;
            const sy = rnd() * h;
            const sr = rnd() * 2 + 0.5;
            ctx.fillStyle = rnd() > 0.4 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 240, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();
        }

        // Вентиляционные решётки титанового корпуса станции (slotted ventilation grilles)
        function drawVentGrille(vx, vy, vw, vh, count = 7) {
            ctx.fillStyle = 'rgba(5, 12, 24, 0.92)';
            ctx.fillRect(vx, vy, vw, vh);
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
            ctx.lineWidth = 2;
            ctx.strokeRect(vx, vy, vw, vh);
            const slotH = (vh - 8) / count;
            for (let i = 0; i < count; i++) {
                ctx.fillStyle = '#02050b';
                ctx.fillRect(vx + 6, vy + 4 + i * slotH, vw - 12, slotH * 0.55);
                ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
                ctx.lineWidth = 1;
                ctx.strokeRect(vx + 6, vy + 4 + i * slotH, vw - 12, slotH * 0.55);
            }
        }
        drawVentGrille(44, 260, 44, 180, 7);
        drawVentGrille(w - 88, 260, 44, 180, 7);
        drawVentGrille(44, h - 440, 44, 180, 7);
        drawVentGrille(w - 88, h - 440, 44, 180, 7);

        drawAirHoles('rgba(0, 240, 255, 0.05)', 36, 2.5);

        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 18;
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 6;

        ctx.beginPath();
        ctx.moveTo(30, cy);
        ctx.lineTo(w - 30, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 270, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#00f0ff';
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, 110, 250, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 110, 250, Math.PI, 0);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.font = '800 20px "Courier New", monospace';
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
        ctx.textAlign = 'center';
        ctx.fillText('ORBITAL DOCK // SECTOR-04', cx, cy + 45);

    } else if (themeId === 'inferno_core') {
        const magmaGrad = ctx.createRadialGradient(cx, cy, 80, cx, cy, 1100);
        magmaGrad.addColorStop(0, '#240803');
        magmaGrad.addColorStop(0.6, '#130401');
        magmaGrad.addColorStop(1, '#080100');
        ctx.fillStyle = magmaGrad;
        ctx.fillRect(0, 0, w, h);

        drawAirHoles('rgba(255, 60, 0, 0.06)', 36, 2.5);

        ctx.shadowColor = '#ff4500';
        ctx.shadowBlur = 16;
        const veins = [
            [[120, 300], [280, 480], [350, 620], [240, 850]],
            [[900, 280], [740, 440], [680, 680], [800, 920]],
            [[140, 1750], [320, 1550], [390, 1380], [260, 1150]],
            [[880, 1760], [720, 1580], [650, 1360], [780, 1140]],
            [[cx - 200, cy], [cx - 60, cy - 80], [cx + 60, cy + 80], [cx + 200, cy]]
        ];

        veins.forEach(pts => {
            ctx.strokeStyle = '#ff3300';
            ctx.lineWidth = 7;
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
            ctx.stroke();

            ctx.strokeStyle = '#ffea00';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
            ctx.stroke();
        });

        ctx.strokeStyle = '#ff4500';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffaa00';
        ctx.beginPath();
        ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, 110, 250, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 110, 250, Math.PI, 0);
        ctx.stroke();
        ctx.shadowBlur = 0;

    } else if (themeId === 'sunset_coast') {
        // Светлое тиковое дерево (палуба яхты) по периметру
        const teakBase = ctx.createLinearGradient(0, 0, w, 0);
        teakBase.addColorStop(0, '#a36233');
        teakBase.addColorStop(0.5, '#ba7442');
        teakBase.addColorStop(1, '#a36233');
        ctx.fillStyle = teakBase;
        ctx.fillRect(0, 0, w, h);

        for (let y = 0; y < h; y += 96) {
            ctx.fillStyle = (y / 96) % 2 === 0 ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.06)';
            ctx.fillRect(0, y, w, 96);
            ctx.strokeStyle = 'rgba(50, 20, 10, 0.4)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Внутреннее бирюзовое поле цвета морской волны
        const pad = 44;
        const seaGrad = ctx.createLinearGradient(0, 0, w, h);
        seaGrad.addColorStop(0, '#0c7c8a');
        seaGrad.addColorStop(0.5, '#129ca8');
        seaGrad.addColorStop(1, '#0e6974');
        ctx.fillStyle = seaGrad;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 20;
        ctx.fillRect(pad, pad, w - pad * 2, h - pad * 2);
        ctx.shadowBlur = 0;

        drawAirHoles('rgba(255, 255, 255, 0.1)', 36, 2.5);

        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(pad, cy);
        ctx.lineTo(w - pad, cy);
        ctx.stroke();

        ctx.strokeStyle = '#ffca28';
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ff9100';
        ctx.beginPath();
        ctx.arc(cx, cy, 28, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#00e5ff';
        ctx.beginPath();
        ctx.arc(cx, 110, 250, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 110, 250, Math.PI, 0);
        ctx.stroke();

    } else if (themeId === 'zen_dojo') {
        const urushiGrad = ctx.createRadialGradient(cx, cy, 100, cx, cy, 1100);
        urushiGrad.addColorStop(0, '#1c0c06');
        urushiGrad.addColorStop(1, '#080302');
        ctx.fillStyle = urushiGrad;
        ctx.fillRect(0, 0, w, h);

        const shojiW = 60;
        ctx.fillStyle = 'rgba(255, 245, 230, 0.05)';
        ctx.fillRect(0, 0, shojiW, h);
        ctx.fillRect(w - shojiW, 0, shojiW, h);

        ctx.strokeStyle = 'rgba(180, 120, 80, 0.2)';
        ctx.lineWidth = 2;
        for (let y = 0; y < h; y += 60) {
            ctx.strokeRect(4, y, shojiW - 8, 56);
            ctx.strokeRect(w - shojiW + 4, y, shojiW - 8, 56);
        }

        drawAirHoles('rgba(255, 255, 255, 0.035)', 36, 2.5);

        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(shojiW + 10, cy);
        ctx.lineTo(w - shojiW - 10, cy);
        ctx.stroke();

        ctx.save();
        ctx.strokeStyle = 'rgba(240, 230, 215, 0.85)';
        ctx.lineWidth = 22;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx, cy, 230, -Math.PI * 0.45, Math.PI * 1.35);
        ctx.stroke();

        ctx.fillStyle = '#dc2626';
        ctx.fillRect(cx + 170, cy + 170, 48, 48);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(cx + 174, cy + 174, 40, 40);
        ctx.restore();

        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(cx, 110, 240, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 110, 240, Math.PI, 0);
        ctx.stroke();

    } else if (themeId === 'synthwave_arcade') {
        const synthGrad = ctx.createLinearGradient(0, 0, 0, h);
        synthGrad.addColorStop(0, '#1e0338');
        synthGrad.addColorStop(0.5, '#0c0117');
        synthGrad.addColorStop(1, '#1e0338');
        ctx.fillStyle = synthGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(255, 0, 127, 0.35)';
        ctx.lineWidth = 2;
        for (let y = 80; y < h; y += 80) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
        for (let x = 64; x < w; x += 64) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
        }

        drawAirHoles('rgba(0, 240, 255, 0.08)', 36, 2.5);

        ctx.save();
        ctx.shadowColor = '#ff007f';
        ctx.shadowBlur = 24;
        ctx.strokeStyle = '#ff007f';
        ctx.lineWidth = 8;

        ctx.beginPath();
        ctx.moveTo(30, cy);
        ctx.lineTo(w - 30, cy);
        ctx.stroke();

        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffea00';
        ctx.beginPath();
        ctx.arc(cx, cy, 80, Math.PI, 0);
        ctx.fill();

        ctx.strokeStyle = '#ff007f';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(cx, 110, 250, 0, Math.PI);
        ctx.stroke();
        ctx.strokeStyle = '#00f0ff';
        ctx.beginPath();
        ctx.arc(cx, h - 110, 250, Math.PI, 0);
        ctx.stroke();
        ctx.restore();

        ctx.font = '900 24px "Segoe UI", sans-serif';
        ctx.fillStyle = '#00f0ff';
        ctx.textAlign = 'center';
        ctx.fillText('SYNTHWAVE ARCADE 84', cx, cy + 120);

    } else if (themeId === 'underground_garage') {
        const steelGrad = ctx.createLinearGradient(0, 0, w, h);
        steelGrad.addColorStop(0, '#2d333b');
        steelGrad.addColorStop(0.5, '#1e2228');
        steelGrad.addColorStop(1, '#16191e');
        ctx.fillStyle = steelGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        for (let x = 20; x < w; x += 40) {
            for (let y = 20; y < h; y += 40) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.PI / 4);
                ctx.fillRect(-6, -2, 12, 4);
                ctx.restore();
            }
        }

        drawAirHoles('rgba(0, 0, 0, 0.15)', 36, 2.5);

        function drawHazardStripes(startY, height) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, startY, w, height);
            ctx.clip();
            const stripeW = 32;
            for (let x = -height; x < w + height; x += stripeW * 2) {
                ctx.fillStyle = '#eab308';
                ctx.beginPath();
                ctx.moveTo(x, startY);
                ctx.lineTo(x + stripeW, startY);
                ctx.lineTo(x + stripeW - height, startY + height);
                ctx.lineTo(x - height, startY + height);
                ctx.fill();
                ctx.fillStyle = '#18181b';
                ctx.beginPath();
                ctx.moveTo(x + stripeW, startY);
                ctx.lineTo(x + stripeW * 2, startY);
                ctx.lineTo(x + stripeW * 2 - height, startY + height);
                ctx.lineTo(x + stripeW - height, startY + height);
                ctx.fill();
            }
            ctx.restore();
        }

        drawHazardStripes(0, 48);
        drawHazardStripes(h - 48, 48);

        // Металлические заклёпки по краям плит и разметки безопасности (industrial rivets)
        ctx.fillStyle = '#64748b';
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        function drawRivet(rx, ry) {
            ctx.beginPath();
            ctx.arc(rx, ry, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#94a3b8';
            ctx.beginPath();
            ctx.arc(rx - 1, ry - 1, 1.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#64748b';
        }
        for (let x = 40; x < w; x += 80) {
            drawRivet(x, 56);
            drawRivet(x, h - 56);
        }
        for (let y = 100; y < h - 100; y += 120) {
            drawRivet(36, y);
            drawRivet(w - 36, y);
        }

        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(30, cy);
        ctx.lineTo(w - 30, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.arc(cx, cy, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '900 28px "Arial Black", impact, sans-serif';
        ctx.fillStyle = 'rgba(234, 179, 8, 0.4)';
        ctx.textAlign = 'center';
        ctx.fillText('SECTOR 09 // CAUTION', cx, cy - 50);

    } else if (themeId === 'royal_velvet') {
        const marbleGrad = ctx.createRadialGradient(cx, cy, 150, cx, cy, 1150);
        marbleGrad.addColorStop(0, '#064e3b');
        marbleGrad.addColorStop(0.6, '#022c22');
        marbleGrad.addColorStop(1, '#011c15');
        ctx.fillStyle = marbleGrad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(255, 215, 0, 0.12)';
        ctx.lineWidth = 3;
        const veins = [
            [[60, 200], [220, 420], [380, 520], [420, 800]],
            [[960, 220], [780, 480], [600, 640], [540, 960]],
            [[100, 1850], [260, 1600], [420, 1450], [460, 1150]],
            [[920, 1820], [740, 1580], [580, 1380], [500, 1120]]
        ];
        veins.forEach(v => {
            ctx.beginPath();
            ctx.moveTo(v[0][0], v[0][1]);
            for (let i = 1; i < v.length; i++) ctx.lineTo(v[i][0], v[i][1]);
            ctx.stroke();
        });

        drawAirHoles('rgba(255, 215, 0, 0.05)', 36, 2.5);

        ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
        ctx.shadowBlur = 14;
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 8;

        ctx.beginPath();
        ctx.moveTo(40, cy);
        ctx.lineTo(w - 40, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(cx, cy, 210, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(cx, 110, 250, 0, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, h - 110, 250, Math.PI, 0);
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.font = '700 22px "Times New Roman", serif';
        ctx.fillStyle = 'rgba(255, 215, 0, 0.55)';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '4px';
        ctx.fillText('ROYAL VELVET VIP', cx, cy + 55);
    }

    ctx.restore();
}

const ThemeManager = (() => {
    let sceneRef = null;
    let refs = null;
    let currentThemeId = 'classic_pub';
    const textureCache = new Map();

    let isTransitioning = false;
    let transitionProgress = 1;
    const transitionDuration = 0.55;

    const lerpState = {
        ambientColor: new THREE.Color(),
        ambientIntensity: 1,
        stadiumColor: new THREE.Color(),
        stadiumIntensity: 1,
        stadiumPos: new THREE.Vector3(),
        spotColor: new THREE.Color(),
        spotIntensity: 1,
        spotPos: new THREE.Vector3(),
        underGlowColor: new THREE.Color(),
        underGlowIntensity: 1,
        bgColor: new THREE.Color(),
        fogColor: new THREE.Color(),
        fogDensity: 0.02,
        iceColor: new THREE.Color(),
        iceRoughness: 0.2,
        iceMetalness: 0.1,
        railColor: new THREE.Color(),
        railRoughness: 0.3,
        railMetalness: 0.5,
        neonColor: new THREE.Color(),
        floorColor: new THREE.Color(),
        towerColor: new THREE.Color(),
        lampColor: new THREE.Color(),
        stadiumNeonColor: new THREE.Color(),
        malletRoughness: 0.2,
        malletMetalness: 0.6,
        malletKnobColor: new THREE.Color(0xffffff),
        puckRoughness: 0.2,
        puckMetalness: 0.5,
        puckBodyColor: new THREE.Color(0x142844)
    };

    const targetState = {
        ambientColor: new THREE.Color(),
        ambientIntensity: 1,
        stadiumColor: new THREE.Color(),
        stadiumIntensity: 1,
        stadiumPos: new THREE.Vector3(),
        spotColor: new THREE.Color(),
        spotIntensity: 1,
        spotPos: new THREE.Vector3(),
        underGlowColor: new THREE.Color(),
        underGlowIntensity: 1,
        bgColor: new THREE.Color(),
        fogColor: new THREE.Color(),
        fogDensity: 0.02,
        iceColor: new THREE.Color(),
        iceRoughness: 0.2,
        iceMetalness: 0.1,
        railColor: new THREE.Color(),
        railRoughness: 0.3,
        railMetalness: 0.5,
        neonColor: new THREE.Color(),
        floorColor: new THREE.Color(),
        towerColor: new THREE.Color(),
        lampColor: new THREE.Color(),
        stadiumNeonColor: new THREE.Color(),
        malletRoughness: 0.2,
        malletMetalness: 0.6,
        malletKnobColor: new THREE.Color(0xffffff),
        puckRoughness: 0.2,
        puckMetalness: 0.5,
        puckBodyColor: new THREE.Color(0x142844)
    };

    let flickerTimer = 0;
    let flickerActive = false;
    let pulseTime = 0;

    function init(scene, componentRefs) {
        sceneRef = scene;
        refs = {
            ...componentRefs,
            tableMesh: componentRefs?.tableMesh || componentRefs?.iceMesh,
            iceMesh: componentRefs?.iceMesh || componentRefs?.tableMesh,
            dirLight: componentRefs?.dirLight || componentRefs?.stadiumLight,
            stadiumLight: componentRefs?.stadiumLight || componentRefs?.dirLight,
            spotLight: componentRefs?.spotLight || componentRefs?.centerSpotLight,
            centerSpotLight: componentRefs?.centerSpotLight || componentRefs?.spotLight,
            underGlowLight: componentRefs?.underGlowLight,
            mallets: componentRefs?.mallets || (componentRefs?.playerMalletMesh ? [componentRefs.playerMalletMesh, componentRefs.topMalletMesh].filter(Boolean) : []),
            playerMalletMesh: componentRefs?.playerMalletMesh,
            topMalletMesh: componentRefs?.topMalletMesh,
            puck: componentRefs?.puck || componentRefs?.puckMeshes || [],
            puckMeshes: componentRefs?.puckMeshes || componentRefs?.puck || [],
            starfieldMesh: componentRefs?.starfieldMesh,
            materials: {
                ...(componentRefs?.materials || {}),
                ice: componentRefs?.materials?.ice || componentRefs?.tableMesh?.material || componentRefs?.iceMesh?.material,
                table: componentRefs?.materials?.table || componentRefs?.materials?.ice || componentRefs?.tableMesh?.material,
                railBody: componentRefs?.materials?.railBody || componentRefs?.materials?.walls || componentRefs?.walls?.material,
                walls: componentRefs?.materials?.walls || componentRefs?.materials?.railBody || componentRefs?.walls?.material
            }
        };
    }

    function getTexture(themeId) {
        if (textureCache.has(themeId)) {
            return textureCache.get(themeId);
        }
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');
        drawThemeField(canvas, ctx, themeId);

        const tex = new THREE.CanvasTexture(canvas);
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        textureCache.set(themeId, tex);
        return tex;
    }

    function applyTheme(themeId, animate = true) {
        const cfg = THEMES[themeId] || THEMES.classic_pub;
        currentThemeId = cfg.id;

        if (typeof SaveManager !== 'undefined') {
            SaveManager.get().equippedArena = currentThemeId;
            SaveManager.save();
        }
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.setItem('airhockey_selected_theme', currentThemeId);
            } catch (e) {}
        }

        if (typeof VFX3D !== 'undefined' && VFX3D.setTheme) {
            VFX3D.setTheme(currentThemeId);
        }

        if (refs && refs.starfieldMesh) {
            refs.starfieldMesh.visible = !!cfg.hasStars;
        }

        const texture = getTexture(currentThemeId);
        const targetTable = refs?.tableMesh || refs?.iceMesh;
        if (targetTable?.material) {
            targetTable.material.map = texture;
            targetTable.material.needsUpdate = true;
        }

        if (typeof Arena3D !== 'undefined' && Arena3D.buildHazards) {
            Arena3D.buildHazards();
        }

        targetState.ambientColor.setHex(cfg.lights.ambient.color);
        targetState.ambientIntensity = cfg.lights.ambient.intensity;

        targetState.stadiumColor.setHex(cfg.lights.stadium.color);
        targetState.stadiumIntensity = cfg.lights.stadium.intensity;
        targetState.stadiumPos.set(cfg.lights.stadium.position[0], cfg.lights.stadium.position[1], cfg.lights.stadium.position[2]);

        targetState.spotColor.setHex(cfg.lights.centerSpot.color);
        targetState.spotIntensity = cfg.lights.centerSpot.intensity;
        targetState.spotPos.set(cfg.lights.centerSpot.position[0], cfg.lights.centerSpot.position[1], cfg.lights.centerSpot.position[2]);

        targetState.underGlowColor.setHex(cfg.lights.underGlow.color);
        targetState.underGlowIntensity = cfg.lights.underGlow.intensity;

        targetState.bgColor.setHex(cfg.background);
        targetState.fogColor.setHex(cfg.fog.color);
        targetState.fogDensity = cfg.fog.density;

        targetState.iceColor.setHex(cfg.materials.ice.color);
        targetState.iceRoughness = cfg.materials.ice.roughness;
        targetState.iceMetalness = cfg.materials.ice.metalness;

        targetState.railColor.setHex(cfg.materials.railBody.color);
        targetState.railRoughness = cfg.materials.railBody.roughness;
        targetState.railMetalness = cfg.materials.railBody.metalness;

        targetState.neonColor.setHex(cfg.materials.neonStrip.color);
        targetState.floorColor.setHex(cfg.materials.stadiumFloor.color);
        targetState.towerColor.setHex(cfg.materials.stadiumTower.color);
        targetState.lampColor.setHex(cfg.materials.stadiumLamp.color);
        targetState.stadiumNeonColor.setHex(cfg.materials.stadiumNeon.color);

        if (cfg.materials?.mallet) {
            targetState.malletRoughness = cfg.materials.mallet.roughness;
            targetState.malletMetalness = cfg.materials.mallet.metalness;
            targetState.malletKnobColor.setHex(cfg.materials.mallet.knobColor || 0xffffff);
        }
        if (cfg.materials?.puck) {
            targetState.puckRoughness = cfg.materials.puck.roughness;
            targetState.puckMetalness = cfg.materials.puck.metalness;
            targetState.puckBodyColor.setHex(cfg.materials.puck.bodyColor || 0x142844);
        }

        if (!animate || !refs) {
            for (const key of Object.keys(targetState)) {
                if (targetState[key] instanceof THREE.Color) {
                    lerpState[key].copy(targetState[key]);
                } else if (targetState[key] instanceof THREE.Vector3) {
                    lerpState[key].copy(targetState[key]);
                } else {
                    lerpState[key] = targetState[key];
                }
            }
            transitionProgress = 1;
            isTransitioning = false;
            _applyLerpValues();
        } else {
            _snapshotCurrentValues();
            transitionProgress = 0;
            isTransitioning = true;
        }

        renderUI();
    }

    function _snapshotCurrentValues() {
        if (!refs) return;
        if (refs.ambientLight) {
            lerpState.ambientColor.copy(refs.ambientLight.color);
            lerpState.ambientIntensity = refs.ambientLight.intensity;
        }
        const dir = refs.dirLight || refs.stadiumLight;
        if (dir) {
            lerpState.stadiumColor.copy(dir.color);
            lerpState.stadiumIntensity = dir.intensity;
            lerpState.stadiumPos.copy(dir.position);
        }
        const spot = refs.spotLight || refs.centerSpotLight;
        if (spot) {
            lerpState.spotColor.copy(spot.color);
            lerpState.spotIntensity = spot.intensity;
            lerpState.spotPos.copy(spot.position);
        }
        if (refs.underGlowLight) {
            lerpState.underGlowColor.copy(refs.underGlowLight.color);
            lerpState.underGlowIntensity = refs.underGlowLight.intensity;
        }
        if (sceneRef) {
            if (sceneRef.background) lerpState.bgColor.copy(sceneRef.background);
            if (sceneRef.fog) {
                lerpState.fogColor.copy(sceneRef.fog.color);
                lerpState.fogDensity = sceneRef.fog.density;
            }
        }
        if (refs.materials) {
            const m = refs.materials;
            const tableMat = m.table || m.ice;
            if (tableMat) {
                lerpState.iceColor.copy(tableMat.color);
                lerpState.iceRoughness = tableMat.roughness;
                lerpState.iceMetalness = tableMat.metalness;
            }
            const railMat = m.walls || m.railBody;
            if (railMat) {
                lerpState.railColor.copy(railMat.color);
                lerpState.railRoughness = railMat.roughness;
                lerpState.railMetalness = railMat.metalness;
            }
            if (m.neonStrip) lerpState.neonColor.copy(m.neonStrip.color);
            if (m.stadiumFloor) lerpState.floorColor.copy(m.stadiumFloor.color);
            if (m.stadiumTower) lerpState.towerColor.copy(m.stadiumTower.color);
            if (m.stadiumLamp) lerpState.lampColor.copy(m.stadiumLamp.color);
            if (m.stadiumNeon) lerpState.stadiumNeonColor.copy(m.stadiumNeon.color);
        }

        if (refs.mallets && refs.mallets.length > 0) {
            const firstMallet = refs.mallets[0];
            const baseMat = firstMallet.children?.[0]?.material;
            const knobMat = firstMallet.children?.[2]?.material;
            if (baseMat) {
                lerpState.malletRoughness = baseMat.roughness !== undefined ? baseMat.roughness : 0.2;
                lerpState.malletMetalness = baseMat.metalness !== undefined ? baseMat.metalness : 0.6;
            }
            if (knobMat && knobMat.color) {
                lerpState.malletKnobColor.copy(knobMat.color);
            }
        }
        const pucksList = Array.isArray(refs.puck) ? refs.puck : (refs.puck ? [refs.puck] : []);
        if (pucksList.length > 0 && pucksList[0]) {
            const firstPuck = pucksList[0];
            const bodyMat = firstPuck.userData?.bodyMesh?.material || firstPuck.children?.[0]?.material;
            if (bodyMat) {
                lerpState.puckRoughness = bodyMat.roughness !== undefined ? bodyMat.roughness : 0.2;
                lerpState.puckMetalness = bodyMat.metalness !== undefined ? bodyMat.metalness : 0.5;
                if (bodyMat.color) lerpState.puckBodyColor.copy(bodyMat.color);
            }
        }
    }

    function _applyLerpValues() {
        if (!refs) return;
        if (refs.ambientLight) {
            refs.ambientLight.color.copy(lerpState.ambientColor);
            refs.ambientLight.intensity = lerpState.ambientIntensity;
        }
        const dir = refs.dirLight || refs.stadiumLight;
        if (dir) {
            dir.color.copy(lerpState.stadiumColor);
            dir.intensity = lerpState.stadiumIntensity;
            dir.position.copy(lerpState.stadiumPos);
        }
        const spot = refs.spotLight || refs.centerSpotLight;
        if (spot) {
            spot.color.copy(lerpState.spotColor);
            spot.intensity = lerpState.spotIntensity;
            spot.position.copy(lerpState.spotPos);
        }
        if (refs.underGlowLight) {
            refs.underGlowLight.color.copy(lerpState.underGlowColor);
            refs.underGlowLight.intensity = lerpState.underGlowIntensity;
        }
        if (sceneRef) {
            if (sceneRef.background) sceneRef.background.copy(lerpState.bgColor);
            if (sceneRef.fog) {
                sceneRef.fog.color.copy(lerpState.fogColor);
                sceneRef.fog.density = lerpState.fogDensity;
            }
        }
        const targetTable = refs.tableMesh || refs.iceMesh;
        if (targetTable?.material) {
            targetTable.material.color.copy(lerpState.iceColor);
            targetTable.material.roughness = lerpState.iceRoughness;
            targetTable.material.metalness = lerpState.iceMetalness;
        }
        if (refs.materials) {
            const m = refs.materials;
            const tableMat = m.table || m.ice;
            if (tableMat) {
                tableMat.color.copy(lerpState.iceColor);
                tableMat.roughness = lerpState.iceRoughness;
                tableMat.metalness = lerpState.iceMetalness;
            }
            const railMat = m.walls || m.railBody;
            if (railMat) {
                railMat.color.copy(lerpState.railColor);
                railMat.roughness = lerpState.railRoughness;
                railMat.metalness = lerpState.railMetalness;
            }
            if (m.neonStrip) m.neonStrip.color.copy(lerpState.neonColor);
            if (m.stadiumFloor) m.stadiumFloor.color.copy(lerpState.floorColor);
            if (m.stadiumTower) m.stadiumTower.color.copy(lerpState.towerColor);
            if (m.stadiumLamp) m.stadiumLamp.color.copy(lerpState.lampColor);
            if (m.stadiumNeon) m.stadiumNeon.color.copy(lerpState.stadiumNeonColor);
        }

        if (refs.mallets && Array.isArray(refs.mallets)) {
            for (const m of refs.mallets) {
                if (!m) continue;
                const base = m.children?.[0];
                const dome = m.children?.[1];
                const knob = m.children?.[2];
                if (base?.material) {
                    base.material.roughness = lerpState.malletRoughness;
                    base.material.metalness = lerpState.malletMetalness;
                }
                if (dome?.material) {
                    dome.material.roughness = lerpState.malletRoughness;
                    dome.material.metalness = lerpState.malletMetalness;
                }
                if (knob?.material) {
                    knob.material.roughness = Math.max(0.04, lerpState.malletRoughness * 0.8);
                    knob.material.metalness = lerpState.malletMetalness;
                    if (knob.material.color) knob.material.color.copy(lerpState.malletKnobColor);
                }
            }
        }
        const puckList = Array.isArray(refs.puck) ? refs.puck : (refs.puck ? [refs.puck] : []);
        for (const p of puckList) {
            if (!p) continue;
            const body = p.userData?.bodyMesh || p.children?.[0];
            if (body?.material) {
                body.material.roughness = lerpState.puckRoughness;
                body.material.metalness = lerpState.puckMetalness;
                if (body.material.color) body.material.color.copy(lerpState.puckBodyColor);
            }
        }
    }

    function update(dt = 0.016) {
        if (!refs) return;
        const cfg = THEMES[currentThemeId];

        if (isTransitioning) {
            transitionProgress += dt / transitionDuration;
            const t = Math.min(1, transitionProgress);
            const ease = t * t * (3 - 2 * t);

            lerpState.ambientColor.lerp(targetState.ambientColor, ease * 0.25 + 0.1);
            lerpState.ambientIntensity += (targetState.ambientIntensity - lerpState.ambientIntensity) * (ease * 0.25 + 0.1);

            lerpState.stadiumColor.lerp(targetState.stadiumColor, ease * 0.25 + 0.1);
            lerpState.stadiumIntensity += (targetState.stadiumIntensity - lerpState.stadiumIntensity) * (ease * 0.25 + 0.1);
            lerpState.stadiumPos.lerp(targetState.stadiumPos, ease * 0.25 + 0.1);

            lerpState.spotColor.lerp(targetState.spotColor, ease * 0.25 + 0.1);
            lerpState.spotIntensity += (targetState.spotIntensity - lerpState.spotIntensity) * (ease * 0.25 + 0.1);
            lerpState.spotPos.lerp(targetState.spotPos, ease * 0.25 + 0.1);

            lerpState.underGlowColor.lerp(targetState.underGlowColor, ease * 0.25 + 0.1);
            lerpState.underGlowIntensity += (targetState.underGlowIntensity - lerpState.underGlowIntensity) * (ease * 0.25 + 0.1);

            lerpState.bgColor.lerp(targetState.bgColor, ease * 0.25 + 0.1);
            lerpState.fogColor.lerp(targetState.fogColor, ease * 0.25 + 0.1);
            lerpState.fogDensity += (targetState.fogDensity - lerpState.fogDensity) * (ease * 0.25 + 0.1);

            lerpState.iceColor.lerp(targetState.iceColor, ease * 0.25 + 0.1);
            lerpState.iceRoughness += (targetState.iceRoughness - lerpState.iceRoughness) * (ease * 0.25 + 0.1);
            lerpState.iceMetalness += (targetState.iceMetalness - lerpState.iceMetalness) * (ease * 0.25 + 0.1);

            lerpState.railColor.lerp(targetState.railColor, ease * 0.25 + 0.1);
            lerpState.railRoughness += (targetState.railRoughness - lerpState.railRoughness) * (ease * 0.25 + 0.1);
            lerpState.railMetalness += (targetState.railMetalness - lerpState.railMetalness) * (ease * 0.25 + 0.1);

            lerpState.neonColor.lerp(targetState.neonColor, ease * 0.25 + 0.1);
            lerpState.floorColor.lerp(targetState.floorColor, ease * 0.25 + 0.1);
            lerpState.towerColor.lerp(targetState.towerColor, ease * 0.25 + 0.1);
            lerpState.lampColor.lerp(targetState.lampColor, ease * 0.25 + 0.1);
            lerpState.stadiumNeonColor.lerp(targetState.stadiumNeonColor, ease * 0.25 + 0.1);

            lerpState.malletRoughness += (targetState.malletRoughness - lerpState.malletRoughness) * (ease * 0.25 + 0.1);
            lerpState.malletMetalness += (targetState.malletMetalness - lerpState.malletMetalness) * (ease * 0.25 + 0.1);
            lerpState.malletKnobColor.lerp(targetState.malletKnobColor, ease * 0.25 + 0.1);

            lerpState.puckRoughness += (targetState.puckRoughness - lerpState.puckRoughness) * (ease * 0.25 + 0.1);
            lerpState.puckMetalness += (targetState.puckMetalness - lerpState.puckMetalness) * (ease * 0.25 + 0.1);
            lerpState.puckBodyColor.lerp(targetState.puckBodyColor, ease * 0.25 + 0.1);

            _applyLerpValues();

            if (t >= 1) {
                isTransitioning = false;
                for (const key of Object.keys(targetState)) {
                    if (targetState[key] instanceof THREE.Color) {
                        lerpState[key].copy(targetState[key]);
                    } else if (targetState[key] instanceof THREE.Vector3) {
                        lerpState[key].copy(targetState[key]);
                    } else {
                        lerpState[key] = targetState[key];
                    }
                }
                _applyLerpValues();
            }
        }

        if (cfg && cfg.hasFlicker) {
            flickerTimer += dt;
            if (flickerTimer > 2.5 + Math.random() * 3.0) {
                flickerTimer = 0;
                flickerActive = true;
            }
            if (flickerActive) {
                const flickerJitter = (Math.random() - 0.5) * 0.45;
                const stadium = refs.dirLight || refs.stadiumLight;
                if (stadium) {
                    stadium.intensity = Math.max(0.3, targetState.stadiumIntensity + flickerJitter);
                }
                if (Math.random() > 0.7) {
                    flickerActive = false;
                    if (stadium) stadium.intensity = targetState.stadiumIntensity;
                }
            }
        }

        if (cfg && cfg.hasLavaPulse && refs.underGlowLight) {
            pulseTime += dt * 3.2;
            const pulse = Math.sin(pulseTime) * 0.6;
            refs.underGlowLight.intensity = Math.max(1.0, targetState.underGlowIntensity + pulse);
        }

        if (cfg && cfg.hasStars && refs.starfieldMesh && refs.starfieldMesh.visible) {
            refs.starfieldMesh.rotation.y += dt * 0.015;
        }
    }

    function renderUI() {
        const container = document.getElementById('arenas-grid-container');
        if (!container) return;

        const currentArena = (typeof SaveManager !== 'undefined' ? SaveManager.get().equippedArena : currentThemeId) || currentThemeId;
        const keys = Object.keys(THEMES);

        container.innerHTML = keys.map(id => {
            const isEquipped = currentArena === id;
            const name = (typeof I18n !== 'undefined' ? I18n.t('theme_' + id + '_name') : id) || id;
            const desc = (typeof I18n !== 'undefined' ? I18n.t('theme_' + id + '_desc') : '') || '';
            const btnText = isEquipped 
                ? (typeof I18n !== 'undefined' ? I18n.t('theme_btn_in_game') : 'В игре')
                : (typeof I18n !== 'undefined' ? I18n.t('theme_btn_select') : 'Выбрать');
            const svgIcon = THEME_ICONS[id] || '';

            return `
            <div class="arena-card ${isEquipped ? 'selected' : ''}" data-arena-id="${id}">
                <div class="arena-card-badge">
                    ${svgIcon}
                </div>
                <div class="arena-card-info">
                    <div class="arena-card-name">${name}</div>
                    <div class="arena-card-desc">${desc}</div>
                </div>
                <button class="btn-select-arena" data-arena-id="${id}">${btnText}</button>
            </div>
            `;
        }).join('');

        container.querySelectorAll('.arena-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.arenaId;
                if (!id) return;
                applyTheme(id, true);
                if (typeof Haptics !== 'undefined' && Haptics.tap) {
                    Haptics.tap();
                }
                if (typeof AudioManager !== 'undefined' && AudioManager.playClick) {
                    AudioManager.playClick();
                }
            });
        });
    }

    return {
        init,
        getTexture,
        applyTheme,
        update,
        renderUI,
        getCurrentTheme: () => currentThemeId,
        getThemes: () => THEMES
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 9.5. ПОСТ-ПРОЦЕССИНГ: АВТОНОМНЫЙ UNREALBLOOMPASS & EFFECTCOMPOSER
// Двухпроходный мобильный блум для неонового свечения без внешних CDN-зависимостей
// ─────────────────────────────────────────────────────────────────────────
(function setupPostProcessing() {
    if (typeof THREE === 'undefined' || typeof THREE.ShaderMaterial !== 'function') return;

    if (!THREE.RenderPass) {
        THREE.RenderPass = function(scene, camera) {
            this.scene = scene;
            this.camera = camera;
            this.enabled = true;
            this.clear = true;
            this.needsSwap = false;
        };
        THREE.RenderPass.prototype.render = function(renderer, writeBuffer, readBuffer) {
            const oldAutoClear = renderer.autoClear;
            renderer.autoClear = this.clear;
            renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
            renderer.render(this.scene, this.camera);
            renderer.autoClear = oldAutoClear;
        };
    }

    if (!THREE.UnrealBloomPass) {
        THREE.UnrealBloomPass = function(resolution, strength, radius, threshold) {
            this.resolution = resolution || new THREE.Vector2(1280, 720);
            this.strength = strength !== undefined ? strength : 0.45;
            this.radius = radius !== undefined ? radius : 0.35;
            this.threshold = threshold !== undefined ? threshold : 1.05;
            this.enabled = true;
            this.renderToScreen = false;

            const w = Math.max(128, Math.floor(this.resolution.x * 0.5));
            const h = Math.max(128, Math.floor(this.resolution.y * 0.5));
            const rtParams = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            };

            this.rtBright = new THREE.WebGLRenderTarget(w, h, rtParams);
            this.rtBlur = new THREE.WebGLRenderTarget(w, h, rtParams);

            this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            this.scene = new THREE.Scene();
            this.quadGeom = new THREE.PlaneGeometry(2, 2);

            // 1. High-Pass фильтр (извлечение только ярких emissive-участков)
            this.brightMat = new THREE.ShaderMaterial({
                uniforms: {
                    tDiffuse: { value: null },
                    threshold: { value: this.threshold }
                },
                vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
                fragmentShader: 'uniform sampler2D tDiffuse; uniform float threshold; varying vec2 vUv; void main() { vec4 col = texture2D(tDiffuse, vUv); float luma = dot(col.rgb, vec3(0.299, 0.587, 0.114)); float factor = smoothstep(threshold, threshold + 0.15, luma); gl_FragColor = vec4(col.rgb * factor, 1.0); }',
                depthTest: false,
                depthWrite: false
            });

            // 2. Двухпроходное размытие (Separable Blur)
            this.blurMat = new THREE.ShaderMaterial({
                uniforms: {
                    tDiffuse: { value: null },
                    dir: { value: new THREE.Vector2(1.0 / w, 0.0) }
                },
                vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
                fragmentShader: 'uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv; void main() { vec4 sum = vec4(0.0); sum += texture2D(tDiffuse, vUv - dir * 3.2) * 0.09; sum += texture2D(tDiffuse, vUv - dir * 1.8) * 0.22; sum += texture2D(tDiffuse, vUv) * 0.38; sum += texture2D(tDiffuse, vUv + dir * 1.8) * 0.22; sum += texture2D(tDiffuse, vUv + dir * 3.2) * 0.09; gl_FragColor = sum; }',
                depthTest: false,
                depthWrite: false
            });

            // 3. Аддитивный композитинг
            this.compositeMat = new THREE.ShaderMaterial({
                uniforms: {
                    tDiffuse: { value: null },
                    tBloom: { value: null },
                    strength: { value: this.strength }
                },
                vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
                fragmentShader: 'uniform sampler2D tDiffuse; uniform sampler2D tBloom; uniform float strength; varying vec2 vUv; void main() { vec4 base = texture2D(tDiffuse, vUv); vec4 bloom = texture2D(tBloom, vUv); gl_FragColor = vec4(base.rgb + bloom.rgb * strength, base.a); }',
                depthTest: false,
                depthWrite: false
            });

            this.quad = new THREE.Mesh(this.quadGeom, this.brightMat);
            this.scene.add(this.quad);
        };

        THREE.UnrealBloomPass.prototype.setSize = function(w, h) {
            this.resolution.set(w, h);
            const dw = Math.max(128, Math.floor(w * 0.5));
            const dh = Math.max(128, Math.floor(h * 0.5));
            this.rtBright.setSize(dw, dh);
            this.rtBlur.setSize(dw, dh);
        };

        THREE.UnrealBloomPass.prototype.render = function(renderer, writeBuffer, readBuffer) {
            if (!this.enabled) return;
            const dw = this.rtBright.width;
            const dh = this.rtBright.height;

            // 1. High-Pass: readBuffer -> rtBright
            this.quad.material = this.brightMat;
            this.brightMat.uniforms.tDiffuse.value = readBuffer.texture;
            this.brightMat.uniforms.threshold.value = this.threshold;
            renderer.setRenderTarget(this.rtBright);
            renderer.render(this.scene, this.camera);

            // 2. Horizontal Blur: rtBright -> rtBlur
            this.quad.material = this.blurMat;
            this.blurMat.uniforms.tDiffuse.value = this.rtBright.texture;
            this.blurMat.uniforms.dir.value.set(2.2 / dw, 0.0);
            renderer.setRenderTarget(this.rtBlur);
            renderer.render(this.scene, this.camera);

            // 3. Vertical Blur: rtBlur -> rtBright
            this.blurMat.uniforms.tDiffuse.value = this.rtBlur.texture;
            this.blurMat.uniforms.dir.value.set(0.0, 2.2 / dh);
            renderer.setRenderTarget(this.rtBright);
            renderer.render(this.scene, this.camera);

            // 4. Composite: readBuffer + rtBright -> writeBuffer / screen
            this.quad.material = this.compositeMat;
            this.compositeMat.uniforms.tDiffuse.value = readBuffer.texture;
            this.compositeMat.uniforms.tBloom.value = this.rtBright.texture;
            this.compositeMat.uniforms.strength.value = this.strength;

            renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
            renderer.render(this.scene, this.camera);
        };
    }

    if (!THREE.EffectComposer) {
        THREE.EffectComposer = function(renderer, renderTarget) {
            this.renderer = renderer;
            if (!renderTarget) {
                const size = renderer.getSize ? renderer.getSize(new THREE.Vector2()) : { width: 1280, height: 720 };
                const pixelRatio = renderer.getPixelRatio ? renderer.getPixelRatio() : 1;
                const w = Math.floor(size.width * pixelRatio) || 1280;
                const h = Math.floor(size.height * pixelRatio) || 720;
                const pars = {
                    minFilter: THREE.LinearFilter,
                    magFilter: THREE.LinearFilter,
                    format: THREE.RGBAFormat
                };
                renderTarget = new THREE.WebGLRenderTarget(w, h, pars);
            }
            this.renderTarget1 = renderTarget;
            this.renderTarget2 = renderTarget.clone();
            this.writeBuffer = this.renderTarget1;
            this.readBuffer = this.renderTarget2;
            this.passes = [];
        };

        THREE.EffectComposer.prototype.swapBuffers = function() {
            const tmp = this.readBuffer;
            this.readBuffer = this.writeBuffer;
            this.writeBuffer = tmp;
        };

        THREE.EffectComposer.prototype.addPass = function(pass) {
            this.passes.push(pass);
        };

        THREE.EffectComposer.prototype.setSize = function(width, height) {
            this.renderTarget1.setSize(width, height);
            this.renderTarget2.setSize(width, height);
            for (let i = 0; i < this.passes.length; i++) {
                if (this.passes[i].setSize) this.passes[i].setSize(width, height);
            }
        };

        THREE.EffectComposer.prototype.render = function() {
            this.renderer.setRenderTarget(this.readBuffer);
            for (let i = 0; i < this.passes.length; i++) {
                const pass = this.passes[i];
                if (!pass.enabled) continue;
                pass.renderToScreen = (i === this.passes.length - 1);
                pass.render(this.renderer, this.writeBuffer, this.readBuffer);
                if (pass.needsSwap !== false && !pass.renderToScreen) {
                    this.swapBuffers();
                }
            }
            this.renderer.setRenderTarget(null);
        };
    }
})();

// 10. ТРЕХМЕРНАЯ АРЕНА (THREE.JS SCENE, LIGHTS, PBR MATERIALS)
// ─────────────────────────────────────────────────────────────────────────
const Arena3D = (() => {
    let scene, camera, renderer;
    let iceMesh, railsGroup, stadiumGroup, hazardGroup;
    let playerMalletMesh, topMalletMesh;
    let playerLight, topLight;
    let puckMeshes = [];
    let raycaster, groundPlane;
    let baseCamY = 25.5, baseCamZ = 9.8;
    let ambientLight, stadiumLight, centerSpotLight, underGlowLight, starfieldMesh;
    let puckPointLight;
    let railBodyMat, neonStripMat, goalBoxMat, stadiumFloorMat, stadiumTowerMat, stadiumLampMat, stadiumNeonMat;

    // Пост-процессинг (UnrealBloomPass) и FPS-мониторинг для Mobile 60 FPS
    let composer = null;
    let bloomPass = null;
    let bloomEnabled = true;
    let isBloomSupported = false;
    let fpsFrameCount = 0;
    let fpsLastTime = 0;
    let lowFpsStreak = 0;

    // Плавный динамический трекинг камеры (Camera Damping) вслед за шайбой
    const camTrackingOffset = new THREE.Vector3(0, 0, 0);
    const camLookTarget = new THREE.Vector3(0, 0, 1.8);
    const currentCamLook = new THREE.Vector3(0, 0, 1.8);

    // Мигание бортов цветом забившего игрока при взятии ворот
    let railFlashTimer = 0;
    const railFlashColor = new THREE.Color(0x00f0ff);
    const baseNeonColor = new THREE.Color(0xd4af37);

    function init(canvas) {
        // 1. Сцена и Рендерер
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0c0604);
        scene.fog = new THREE.FogExp2(0x0c0604, 0.024);

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // 2. Камера с перспективой обзора сверху-сзади
        const aspect = canvas.clientWidth / canvas.clientHeight;
        camera = new THREE.PerspectiveCamera(48, aspect, 0.1, 100);
        updateCameraPose();

        // 3. Освещение арены
        ambientLight = new THREE.AmbientLight(0x281810, 0.9);
        scene.add(ambientLight);

        stadiumLight = new THREE.DirectionalLight(0xffecc4, 0.7);
        stadiumLight.position.set(4, 16, 6);
        stadiumLight.castShadow = true;
        stadiumLight.shadow.mapSize.width = 1024;
        stadiumLight.shadow.mapSize.height = 1024;
        stadiumLight.shadow.camera.near = 5;
        stadiumLight.shadow.camera.far = 30;
        stadiumLight.shadow.camera.left = -8;
        stadiumLight.shadow.camera.right = 8;
        stadiumLight.shadow.camera.top = 14;
        stadiumLight.shadow.camera.bottom = -14;
        scene.add(stadiumLight);

        centerSpotLight = new THREE.SpotLight(0xffd59e, 0, 30, 0.85, 0.9, 1.0);
        centerSpotLight.position.set(0, 14, 0);
        centerSpotLight.castShadow = false;
        centerSpotLight.target.position.set(0, 0, 0);
        scene.add(centerSpotLight);
        scene.add(centerSpotLight.target);

        underGlowLight = new THREE.PointLight(0xd48820, 0.45, 8);
        underGlowLight.position.set(0, -0.4, 0);
        scene.add(underGlowLight);

        // Динамический точечный PointLight над шайбой (мягкий ореол без резкого блика на поле)
        puckPointLight = new THREE.PointLight(0x00d4ff, 0.18, 3.8);
        puckPointLight.position.set(0, 0.55, 0);
        scene.add(puckPointLight);

        // Процедурное звездное небо для космических тем
        const starGeom = new THREE.BufferGeometry();
        const starPositions = new Float32Array(800 * 3);
        for (let i = 0; i < 800; i++) {
            const r = 25 + Math.random() * 25;
            const theta = Math.random() * Math.PI * 2;
            const phi = (Math.random() - 0.2) * Math.PI;
            starPositions[i * 3] = r * Math.cos(theta) * Math.cos(phi);
            starPositions[i * 3 + 1] = Math.max(2, r * Math.sin(phi));
            starPositions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);
        }
        starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6, transparent: true, opacity: 0.85 });
        starfieldMesh = new THREE.Points(starGeom, starMat);
        starfieldMesh.visible = false;
        scene.add(starfieldMesh);

        // Свет от биты игрока (мягкий Underglow)
        playerLight = new THREE.PointLight(0x00f0ff, 0.28, 4.2);
        playerLight.position.set(0, 0.5, 6);
        scene.add(playerLight);

        // Свет от биты AI (мягкий Underglow)
        topLight = new THREE.PointLight(0xff2a55, 0.28, 4.2);
        topLight.position.set(0, 0.5, -6);
        scene.add(topLight);

        // Свет в воротах
        const pGoalLight = new THREE.PointLight(0x00ff88, 0.9, 4.5);
        pGoalLight.position.set(0, 0.8, WORLD.HALF_L);
        scene.add(pGoalLight);

        const aiGoalLight = new THREE.PointLight(0xff2a55, 0.9, 4.5);
        aiGoalLight.position.set(0, 0.8, -WORLD.HALF_L);
        scene.add(aiGoalLight);

        // Повторно используемые PBR-материалы для гладкого перехода тем без пересоздания геометрии
        railBodyMat = new THREE.MeshStandardMaterial({ color: 0x121724, roughness: 0.32, metalness: 0.65 });
        neonStripMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, emissive: 0xd4af37, emissiveIntensity: 2.2, roughness: 0.1, metalness: 0.1 });
        goalBoxMat = new THREE.MeshStandardMaterial({ color: 0x0a0e18, roughness: 0.85, metalness: 0.3 });
        stadiumFloorMat = new THREE.MeshStandardMaterial({ color: 0x0a0d14, roughness: 0.92, metalness: 0.12 });
        stadiumTowerMat = new THREE.MeshStandardMaterial({ color: 0x151b26, roughness: 0.45, metalness: 0.55 });
        stadiumLampMat = new THREE.MeshBasicMaterial({ color: 0xffebc0 });
        stadiumNeonMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });

        // 4. Поверхность стола (Ледовое покрытие с процедурной PBR-текстурой)
        buildIceField();

        // 5. 3D Борта с неоновыми каналами
        buildRails();

        // 6. Окружение Гранд-Стадиона
        buildStadium();

        // 6.1. Препятствия и фишки арены
        buildHazards();

        // 7. 3D Биты
        playerMalletMesh = createMalletMesh(0x00f0ff);
        scene.add(playerMalletMesh);

        topMalletMesh = createMalletMesh(0xff2a55);
        scene.add(topMalletMesh);

        // 7.1. Шайба на поле
        const equippedPuck = SaveManager.get().equippedPuck || 'cyber';
        const initialSkin = SKINS.pucks.find(s => s.id === equippedPuck) || SKINS.pucks[0];
        const defaultPuck = createPuckMesh(initialSkin);
        defaultPuck.position.set(0, 0, 0);
        scene.add(defaultPuck);
        puckMeshes.push(defaultPuck);

        // 8. Плоскость для Raycasting управления
        raycaster = new THREE.Raycaster();
        groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

        // 9. Инициализация эффектов
        VFX3D.init(scene);
        PowerUpManager3D.init(scene);

        // 10. Инициализация ThemeManager и применение сохранённой арены
        ThemeManager.init(scene, {
            ambientLight,
            stadiumLight,
            dirLight: stadiumLight,
            centerSpotLight,
            spotLight: centerSpotLight,
            underGlowLight,
            iceMesh,
            tableMesh: iceMesh,
            playerMalletMesh,
            topMalletMesh,
            mallets: [playerMalletMesh, topMalletMesh],
            puck: puckMeshes,
            puckMeshes,
            materials: {
                ice: iceMesh.material,
                table: iceMesh.material,
                railBody: railBodyMat,
                walls: railBodyMat,
                neonStrip: neonStripMat,
                goalBox: goalBoxMat,
                stadiumFloor: stadiumFloorMat,
                stadiumTower: stadiumTowerMat,
                stadiumLamp: stadiumLampMat,
                stadiumNeon: stadiumNeonMat
            },
            starfieldMesh
        });
        const currentArena = SaveManager.get().equippedArena || 'classic_pub';
        ThemeManager.applyTheme(currentArena, false);

        // 11. Оптимизированный UnrealBloomPass для эффекта неонового свечения
        if (typeof THREE !== 'undefined' && typeof THREE.EffectComposer === 'function' && typeof THREE.UnrealBloomPass === 'function' && renderer && renderer.capabilities) {
            try {
                composer = new THREE.EffectComposer(renderer);
                const renderPass = new THREE.RenderPass(scene, camera);
                composer.addPass(renderPass);

                const w = canvas.clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 1280);
                const h = canvas.clientHeight || (typeof window !== 'undefined' ? window.innerHeight : 720);
                const res = new THREE.Vector2(w, h);
                // bloomThreshold = 1.25 чтобы светились исключительно emissive-элементы без засвета поля
                bloomPass = new THREE.UnrealBloomPass(res, 0.32, 0.35, 1.25);
                composer.addPass(bloomPass);
                isBloomSupported = true;
            } catch (e) {
                composer = null;
                isBloomSupported = false;
            }
        }
    }

    function updateCameraPose() {
        if (!camera) return;
        const aspect = window.innerWidth / window.innerHeight;
        const isPortrait = aspect < 1.0;

        if (isPortrait) {
            // Вертикальный экран (мобилки):
            camera.fov = 54;
            baseCamY = 26.0;
            baseCamZ = 9.5;
            camera.position.set(0, baseCamY, baseCamZ);
            camera.lookAt(0, 0, 1.5);
        } else {
            // Горизонтальный экран (ПК, планшет):
            // Оба створа ворот (z = ±10.4) и ближний борт видны со 100% комфортным запасом (~20% от нижнего края экрана)!
            camera.fov = 48;
            baseCamY = 25.5;
            baseCamZ = 9.8;
            camera.position.set(0, baseCamY, baseCamZ);
            camera.lookAt(0, 0, 1.8);
        }
        camera.updateProjectionMatrix();
    }

    function buildIceField() {
        const { HALF_W, HALF_L } = WORLD;
        const currentArena = SaveManager.get().equippedArena || 'classic_pub';
        const texture = ThemeManager.getTexture(currentArena);

        if (!iceMesh) {
            const geom = new THREE.PlaneGeometry(HALF_W * 2, HALF_L * 2, 16, 16);
            geom.rotateX(-Math.PI / 2);
            // Мягкое матово-сатиновое покрытие в шейдере (без слепящего круга света на столе)
            const mat = new THREE.MeshStandardMaterial({
                map: texture,
                roughness: 0.15,
                metalness: 0.14,
                emissive: 0x000000,
                emissiveIntensity: 0.0
            });
            mat.onBeforeCompile = (shader) => {
                shader.fragmentShader = shader.fragmentShader
                    .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = 0.88;')
                    .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor = 0.02;');
            };
            iceMesh = new THREE.Mesh(geom, mat);
            iceMesh.receiveShadow = true;
            scene.add(iceMesh);
        } else {
            iceMesh.material.map = texture;
            iceMesh.material.roughness = 0.15;
            iceMesh.material.metalness = 0.14;
            if (iceMesh.material.emissive) iceMesh.material.emissive.setHex(0x000000);
            iceMesh.material.emissiveIntensity = 0.0;
            iceMesh.material.needsUpdate = true;
        }
    }

    function buildRails() {
        if (railsGroup) scene.remove(railsGroup);
        railsGroup = new THREE.Group();

        const { HALF_W, HALF_L, GOAL_HALF_W } = WORLD;
        const currentArena = SaveManager.get().equippedArena;
        const arenaCfg = SKINS.arenas.find(a => a.id === currentArena) || SKINS.arenas[0];

        const railThickness = 0.6;
        const railHeight = 0.8;

        // Боковые борта (левый и правый)
        [-1, 1].forEach(side => {
            const sideRailGeom = new THREE.BoxGeometry(railThickness, railHeight, HALF_L * 2 + railThickness * 2);
            const sideRail = new THREE.Mesh(sideRailGeom, railBodyMat);
            sideRail.position.set(side * (HALF_W + railThickness / 2), railHeight / 2, 0);
            sideRail.castShadow = true;
            sideRail.receiveShadow = true;
            railsGroup.add(sideRail);

            // Верхняя светящаяся LED-полоса
            const neonGeom = new THREE.BoxGeometry(0.08, 0.15, HALF_L * 2);
            const neon = new THREE.Mesh(neonGeom, neonStripMat);
            neon.position.set(side * (HALF_W - 0.04), 0.35, 0);
            railsGroup.add(neon);

            // Нижняя придонная LED-полоса вдоль стыка со столом (Gutter LED)
            const bottomNeonGeom = new THREE.BoxGeometry(0.05, 0.06, HALF_L * 2);
            const bottomNeon = new THREE.Mesh(bottomNeonGeom, neonStripMat);
            bottomNeon.position.set(side * (HALF_W - 0.025), 0.04, 0);
            railsGroup.add(bottomNeon);
        });

        // Верхний и нижний борта (с открытым проёмом ворот)
        [-1, 1].forEach(end => {
            const segmentW = (HALF_W - GOAL_HALF_W);
            [-1, 1].forEach(sub => {
                const geom = new THREE.BoxGeometry(segmentW, railHeight, railThickness);
                const part = new THREE.Mesh(geom, railBodyMat);
                part.position.set(sub * (GOAL_HALF_W + segmentW / 2), railHeight / 2, end * (HALF_L + railThickness / 2));
                part.castShadow = true;
                railsGroup.add(part);

                // Верхний неон
                const neonGeom = new THREE.BoxGeometry(segmentW, 0.15, 0.08);
                const neon = new THREE.Mesh(neonGeom, neonStripMat);
                neon.position.set(sub * (GOAL_HALF_W + segmentW / 2), 0.35, end * (HALF_L - 0.04));
                railsGroup.add(neon);

                // Придонный неон
                const bottomNeonGeom = new THREE.BoxGeometry(segmentW, 0.06, 0.05);
                const bottomNeon = new THREE.Mesh(bottomNeonGeom, neonStripMat);
                bottomNeon.position.set(sub * (GOAL_HALF_W + segmentW / 2), 0.04, end * (HALF_L - 0.025));
                railsGroup.add(bottomNeon);
            });

            // Ворота: углубление сетки
            const goalBoxGeom = new THREE.BoxGeometry(GOAL_HALF_W * 2, 0.7, 0.8);
            const goalBox = new THREE.Mesh(goalBoxGeom, goalBoxMat);
            goalBox.position.set(0, 0.35, end * (HALF_L + 0.4));
            railsGroup.add(goalBox);
        });

        // 4 Угловых скоса-дефлектора (Chamfer Bumpers под 45°)
        const cornerSize = 1.85;
        const chamferLen = cornerSize * 1.414;
        [-1, 1].forEach(side => {
            [-1, 1].forEach(end => {
                const cornerGeom = new THREE.BoxGeometry(railThickness * 1.1, railHeight, chamferLen);
                const cornerMesh = new THREE.Mesh(cornerGeom, railBodyMat);
                cornerMesh.position.set(side * (HALF_W - cornerSize * 0.45), railHeight / 2, end * (HALF_L - cornerSize * 0.45));
                cornerMesh.rotation.y = -side * end * (Math.PI / 4);
                cornerMesh.castShadow = true;
                railsGroup.add(cornerMesh);

                const cNeonGeom = new THREE.BoxGeometry(0.08, 0.15, chamferLen * 0.88);
                const cNeon = new THREE.Mesh(cNeonGeom, neonStripMat);
                cNeon.position.set(side * (HALF_W - cornerSize * 0.42), 0.35, end * (HALF_L - cornerSize * 0.42));
                cNeon.rotation.y = -side * end * (Math.PI / 4);
                railsGroup.add(cNeon);

                const cBottomNeonGeom = new THREE.BoxGeometry(0.05, 0.06, chamferLen * 0.88);
                const cBottomNeon = new THREE.Mesh(cBottomNeonGeom, neonStripMat);
                cBottomNeon.position.set(side * (HALF_W - cornerSize * 0.41), 0.04, end * (HALF_L - cornerSize * 0.41));
                cBottomNeon.rotation.y = -side * end * (Math.PI / 4);
                railsGroup.add(cBottomNeon);
            });
        });

        scene.add(railsGroup);
    }

    function buildStadium() {
        if (stadiumGroup) scene.remove(stadiumGroup);
        stadiumGroup = new THREE.Group();

        // 1. Внешний пол арены вокруг стола
        const floorGeom = new THREE.PlaneGeometry(32, 44);
        floorGeom.rotateX(-Math.PI / 2);
        const floor = new THREE.Mesh(floorGeom, stadiumFloorMat);
        floor.position.y = -0.06;
        floor.receiveShadow = true;
        stadiumGroup.add(floor);

        // 2. 4 Угловые световые вышки стадиона
        const towerPositions = [
            [-6.8, -12.2],
            [ 6.8, -12.2],
            [-6.8,  12.2],
            [ 6.8,  12.2]
        ];

        const towerMat = stadiumTowerMat;
        const lampMat = stadiumLampMat;
        const neonAccentMat = stadiumNeonMat;

        towerPositions.forEach(([tx, tz]) => {
            const tower = new THREE.Group();
            tower.position.set(tx, 0, tz);

            // Основная колонна вышки
            const colGeom = new THREE.CylinderGeometry(0.22, 0.35, 5.2, 8);
            const col = new THREE.Mesh(colGeom, towerMat);
            col.position.y = 2.6;
            col.castShadow = true;
            tower.add(col);

            // Неоновая светящаяся полоса вдоль вышки
            const stripGeom = new THREE.BoxGeometry(0.08, 4.6, 0.08);
            const strip = new THREE.Mesh(stripGeom, neonAccentMat);
            strip.position.set(0, 2.6, 0.26);
            tower.add(strip);

            // Прожекторная головка
            const headGeom = new THREE.BoxGeometry(0.9, 0.45, 0.7);
            const head = new THREE.Mesh(headGeom, towerMat);
            head.position.set(0, 5.2, 0);
            head.lookAt(0, 0.5, 0);
            tower.add(head);

            // Светящаяся линза прожектора
            const lensGeom = new THREE.PlaneGeometry(0.75, 0.35);
            const lens = new THREE.Mesh(lensGeom, lampMat);
            lens.position.set(0, 5.2, 0.36);
            lens.lookAt(0, 0.5, 0);
            tower.add(lens);

            stadiumGroup.add(tower);
        });

        // 3. Боковые неоновые барьеры арены
        [-1, 1].forEach(side => {
            const signGeom = new THREE.BoxGeometry(0.2, 0.9, 14);
            const sign = new THREE.Mesh(signGeom, railBodyMat);
            sign.position.set(side * 6.6, 0.45, 0);
            stadiumGroup.add(sign);

            const neonLineGeom = new THREE.BoxGeometry(0.06, 0.1, 13.6);
            const neonLine = new THREE.Mesh(neonLineGeom, stadiumNeonMat);
            neonLine.position.set(side * 6.5, 0.85, 0);
            stadiumGroup.add(neonLine);
        });

        scene.add(stadiumGroup);
    }

    function buildHazards() {
        if (!scene) return;
        if (hazardGroup) scene.remove(hazardGroup);
        hazardGroup = new THREE.Group();

        const enabled = SaveManager.get().hazardsEnabled !== false;
        if (!enabled) {
            scene.add(hazardGroup);
            return;
        }

        const currentArena = SaveManager.get().equippedArena;
        const arenaCfg = SKINS.arenas.find(a => a.id === currentArena) || SKINS.arenas[0];

        if (arenaCfg.hazard === 'bumper') {
            const bGroup = new THREE.Group();
            bGroup.name = 'bumper_root';

            const cylGeom = new THREE.CylinderGeometry(0.72, 0.76, 0.44, 32);
            const cylMat = new THREE.MeshStandardMaterial({
                color: 0x08162d,
                roughness: 0.25,
                metalness: 0.8
            });
            const cyl = new THREE.Mesh(cylGeom, cylMat);
            cyl.position.y = 0.22;
            cyl.castShadow = true;
            bGroup.add(cyl);

            const topGeom = new THREE.CylinderGeometry(0.55, 0.55, 0.04, 32);
            const topMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
            const topCap = new THREE.Mesh(topGeom, topMat);
            topCap.position.y = 0.45;
            bGroup.add(topCap);

            const ringGeom = new THREE.TorusGeometry(0.75, 0.06, 16, 32);
            ringGeom.rotateX(Math.PI / 2);
            const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
            const ring = new THREE.Mesh(ringGeom, ringMat);
            ring.position.y = 0.22;
            bGroup.add(ring);

            const bLight = new THREE.PointLight(0x00f0ff, 1.8, 4.5);
            bLight.position.y = 0.6;
            bGroup.add(bLight);

            hazardGroup.add(bGroup);
        } else if (arenaCfg.hazard === 'boosters') {
            const boostGroup = new THREE.Group();
            boostGroup.name = 'boosters_root';

            [-3.2, 3.2].forEach(bx => {
                const laneGeom = new THREE.PlaneGeometry(1.4, 4.2);
                laneGeom.rotateX(-Math.PI / 2);
                const laneMat = new THREE.MeshBasicMaterial({
                    color: 0x00f0ff,
                    transparent: true,
                    opacity: 0.22
                });
                const lane = new THREE.Mesh(laneGeom, laneMat);
                lane.position.set(bx, 0.015, 0);
                boostGroup.add(lane);

                for (let c = -1.4; c <= 1.4; c += 0.9) {
                    const arrGeom = new THREE.RingGeometry(0.2, 0.35, 3, 1, 0, Math.PI);
                    arrGeom.rotateX(-Math.PI / 2);
                    const arrMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, side: THREE.DoubleSide, transparent: true, opacity: 0.75 });
                    const arr = new THREE.Mesh(arrGeom, arrMat);
                    arr.position.set(bx, 0.02, c);
                    boostGroup.add(arr);
                }
            });
            hazardGroup.add(boostGroup);
        } else if (arenaCfg.hazard === 'portals') {
            const portalGroup = new THREE.Group();
            portalGroup.name = 'portals_root';

            [-4.0, 4.0].forEach((px, idx) => {
                const pMesh = new THREE.Group();
                pMesh.name = `portal_${idx}`;
                pMesh.position.set(px, 0.35, 0);

                const ringGeom = new THREE.TorusGeometry(0.72, 0.08, 16, 32);
                ringGeom.rotateY(Math.PI / 2);
                const ringMat = new THREE.MeshBasicMaterial({ color: 0xb537f2 });
                const ring = new THREE.Mesh(ringGeom, ringMat);
                pMesh.add(ring);

                const discGeom = new THREE.CircleGeometry(0.66, 32);
                discGeom.rotateY(Math.PI / 2);
                const discMat = new THREE.MeshBasicMaterial({
                    color: 0xff00bb,
                    transparent: true,
                    opacity: 0.45,
                    side: THREE.DoubleSide
                });
                const disc = new THREE.Mesh(discGeom, discMat);
                pMesh.add(disc);

                const pLight = new THREE.PointLight(0xb537f2, 1.8, 4.0);
                pMesh.add(pLight);

                portalGroup.add(pMesh);
            });
            hazardGroup.add(portalGroup);
        }

        scene.add(hazardGroup);
    }

    function createMalletMesh(hexColor) {
        const group = new THREE.Group();

        // Основание биты
        const baseGeom = new THREE.CylinderGeometry(WORLD.MALLET_R * 0.95, WORLD.MALLET_R, 0.35, 32);
        const baseMat = new THREE.MeshStandardMaterial({
            color: hexColor,
            roughness: 0.2,
            metalness: 0.6
        });
        const base = new THREE.Mesh(baseGeom, baseMat);
        base.position.y = 0.175;
        base.castShadow = true;
        group.add(base);

        // Светящееся неоновое кольцо на бите
        const neonRingGeom = new THREE.TorusGeometry(WORLD.MALLET_R * 0.94, 0.04, 16, 32);
        neonRingGeom.rotateX(Math.PI / 2);
        const neonRingMat = new THREE.MeshBasicMaterial({ color: hexColor });
        const neonRing = new THREE.Mesh(neonRingGeom, neonRingMat);
        neonRing.position.y = 0.08;
        neonRing.name = 'mallet_neon_ring';
        group.add(neonRing);
        group.userData.neonRing = neonRing;

        // Купол
        const domeGeom = new THREE.SphereGeometry(WORLD.MALLET_R * 0.75, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
        const domeMat = new THREE.MeshStandardMaterial({
            color: hexColor,
            roughness: 0.15,
            metalness: 0.7
        });
        const dome = new THREE.Mesh(domeGeom, domeMat);
        dome.position.y = 0.28;
        group.add(dome);

        // Рукоятка (Knob)
        const knobGeom = new THREE.CylinderGeometry(0.35, 0.28, 0.55, 24);
        const knobMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.9 });
        const knob = new THREE.Mesh(knobGeom, knobMat);
        knob.position.y = 0.65;
        knob.castShadow = true;
        group.add(knob);

        return group;
    }

    function updateMalletSkin() {
        const equippedId = SaveManager.get().equippedMallet;
        const skin = SKINS.mallets.find(m => m.id === equippedId) || SKINS.mallets[0];

        playerMalletMesh.traverse(child => {
            if (child.isMesh && child.material) child.material.color.setHex(skin.hex);
        });
        playerLight.color.setHex(skin.hex);
        if (playerMalletMesh.userData.neonRing && playerMalletMesh.userData.neonRing.material) {
            playerMalletMesh.userData.neonRing.material.color.setHex(skin.hex);
        }
    }

    function createPuckMesh(pSkin) {
        const puckGroup = new THREE.Group();

        const geom = new THREE.CylinderGeometry(WORLD.PUCK_R, WORLD.PUCK_R, 0.22, 32);
        const mat = new THREE.MeshStandardMaterial({
            color: pSkin.bodyHex,
            roughness: 0.18,
            metalness: 0.5
        });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.y = 0.11;
        mesh.castShadow = true;
        puckGroup.add(mesh);

        // Верхнее светящееся кольцо
        const ringGeom = new THREE.RingGeometry(WORLD.PUCK_R * 0.3, WORLD.PUCK_R * 0.75, 24);
        ringGeom.rotateX(-Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({ color: pSkin.ringHex, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeom, ringMat);
        ring.position.y = 0.225;
        puckGroup.add(ring);

        // Внешнее светящееся неоновое кольцо по периметру шайбы
        const rimGeom = new THREE.TorusGeometry(WORLD.PUCK_R * 0.96, 0.024, 12, 32);
        rimGeom.rotateX(Math.PI / 2);
        const rimMat = new THREE.MeshBasicMaterial({ color: pSkin.ringHex });
        const rimMesh = new THREE.Mesh(rimGeom, rimMat);
        rimMesh.position.y = 0.11;
        puckGroup.add(rimMesh);

        // Шлейф лазерных колец (в мировом пространстве сцены, пул 10 сегментов)
        const trailGroup = new THREE.Group();
        const TRAIL_COUNT = 10;
        for (let t = 0; t < TRAIL_COUNT; t++) {
            const trGeom = new THREE.RingGeometry(WORLD.PUCK_R * 0.25, WORLD.PUCK_R * (0.92 - t * 0.06), 20);
            trGeom.rotateX(-Math.PI / 2);
            const trMat = new THREE.MeshBasicMaterial({
                color: pSkin.trailColor,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.65 * Math.pow(0.72, t)
            });
            const trMesh = new THREE.Mesh(trGeom, trMat);
            trMesh.position.y = 0.02;
            trMesh.visible = false;
            trailGroup.add(trMesh);
        }
        scene.add(trailGroup);

        puckGroup.userData.bodyMesh = mesh;
        puckGroup.userData.ringMesh = ring;
        puckGroup.userData.rimMesh = rimMesh;
        puckGroup.userData.trailGroup = trailGroup;

        return puckGroup;
    }

    function updatePuckSkin() {
        const equippedPuck = SaveManager.get().equippedPuck || 'cyber';
        const pSkin = SKINS.pucks.find(s => s.id === equippedPuck) || SKINS.pucks[0];
        if (puckMeshes.length === 0 && scene) {
            const defaultPuck = createPuckMesh(pSkin);
            defaultPuck.position.set(0, 0, 0);
            scene.add(defaultPuck);
            puckMeshes.push(defaultPuck);
            return;
        }
        for (const m of puckMeshes) {
            const body = m.userData.bodyMesh || m.children[0];
            const ring = m.userData.ringMesh || m.children[1];
            const rim = m.userData.rimMesh;
            if (body?.material) body.material.color.setHex(pSkin.bodyHex);
            if (ring?.material) ring.material.color.setHex(pSkin.ringHex);
            if (rim?.material) rim.material.color.setHex(pSkin.ringHex);
            const tg = m.userData.trailGroup;
            if (tg) {
                for (const tr of tg.children) {
                    if (tr.material) tr.material.color.setHex(pSkin.trailColor);
                }
            }
        }
    }

    function updatePucks(pucks) {
        const equippedPuck = SaveManager.get().equippedPuck || 'cyber';
        const pSkin = SKINS.pucks.find(s => s.id === equippedPuck) || SKINS.pucks[0];

        // Синхронизируем количество мешей шайб со списком шайб
        while (puckMeshes.length < pucks.length) {
            const puckGroup = createPuckMesh(pSkin);
            scene.add(puckGroup);
            puckMeshes.push(puckGroup);
        }

        while (puckMeshes.length > pucks.length) {
            const mesh = puckMeshes.pop();
            if (mesh.userData.trailGroup) scene.remove(mesh.userData.trailGroup);
            scene.remove(mesh);
        }

        let ringColorHex = pSkin.ringHex;
        let trailColorHex = pSkin.trailColor;
        if (pSkin.isChroma) {
            const hue = (Date.now() * 0.001) % 1;
            const c = new THREE.Color().setHSL(hue, 1, 0.55);
            ringColorHex = c.getHex();
            trailColorHex = c.getHex();
        }

        // Динамический точечный PointLight над ведущей шайбой (мягкий ореол без резкого блика на поле)
        if (puckPointLight && pucks.length > 0) {
            const mainP = pucks[0];
            puckPointLight.position.set(mainP.x, 0.45, mainP.z);
            const spd = Math.hypot(mainP.vx || 0, mainP.vz || 0);
            const spdFactor = Math.min(1, spd / 0.52);

            puckPointLight.color.setRGB(
                spdFactor,
                0.831 * (1 - spdFactor) + 0.165 * spdFactor,
                1.0 * (1 - spdFactor)
            );
            puckPointLight.intensity = 0.16 + spdFactor * 0.22;
        }

        for (let i = 0; i < pucks.length; i++) {
            const p = pucks[i];
            const m = puckMeshes[i];
            m.position.set(p.x, 0, p.z);
            const ring = m.userData.ringMesh || m.children[1];
            const rim = m.userData.rimMesh;
            const body = m.userData.bodyMesh || m.children[0];
            const colorHex = p.onFire ? 0xff2a55 : ringColorHex;
            if (ring?.material) ring.material.color.setHex(colorHex);
            if (rim?.material) rim.material.color.setHex(colorHex);
            if (body?.material) {
                body.material.color.setHex(pSkin.bodyHex);
            }

            // Шлейф шайбы (Puck Trail): длина и яркость зависят от текущей скорости полёта
            const pSpeed = Math.hypot(p.vx || 0, p.vz || 0);
            const pSpeedFactor = Math.min(1, pSpeed / 0.52);
            const activeSegments = Math.round(pSpeedFactor * 10);

            const tg = m.userData.trailGroup;
            if (tg) {
                for (let t = 0; t < tg.children.length; t++) {
                    const trMesh = tg.children[t];
                    if (p.trail && p.trail[t] && t <= activeSegments && pSpeedFactor > 0.05) {
                        trMesh.visible = true;
                        trMesh.position.set(p.trail[t].x, 0.02, p.trail[t].z);
                        trMesh.material.color.setHex(p.onFire ? 0xff2a55 : trailColorHex);
                        trMesh.material.opacity = (0.75 * Math.pow(0.72, t)) * pSpeedFactor;
                        const scl = Math.max(0.4, 1.0 - t * 0.05);
                        trMesh.scale.set(scl, scl, 1);
                    } else {
                        trMesh.visible = false;
                    }
                }
            }
        }
    }

    let bossForcefieldMesh = null;
    let trickshotGroup = null;
    let movingObstacles = [];

    function setBossForcefield(active) {
        if (!scene) return;
        if (active) {
            if (!bossForcefieldMesh) {
                const geom = new THREE.BoxGeometry(WORLD.GOAL_HALF_W * 2.2, 0.65, 0.12);
                const mat = new THREE.MeshStandardMaterial({
                    color: 0x00f0ff,
                    emissive: 0x00f0ff,
                    emissiveIntensity: 0.9,
                    transparent: true,
                    opacity: 0.85
                });
                bossForcefieldMesh = new THREE.Mesh(geom, mat);
                bossForcefieldMesh.position.set(0, 0.35, -WORLD.HALF_L + 0.6);
                scene.add(bossForcefieldMesh);
            }
            bossForcefieldMesh.visible = true;
        } else if (bossForcefieldMesh) {
            bossForcefieldMesh.visible = false;
        }
    }

    function buildTrickshotObstacles(level) {
        clearTrickshotObstacles();
        if (!scene || !level || !level.obstacles) return;

        trickshotGroup = new THREE.Group();
        movingObstacles = [];

        for (const obs of level.obstacles) {
            if (obs.initialX === undefined) obs.initialX = obs.x;
            obs.x = obs.initialX;
            if (obs.type === 'bumper') {
                const bGroup = new THREE.Group();
                bGroup.position.set(obs.x, 0, obs.z);

                const cylGeom = new THREE.CylinderGeometry(obs.r, obs.r * 1.05, 0.44, 32);
                const cylMat = new THREE.MeshStandardMaterial({ color: 0x08162d, roughness: 0.25, metalness: 0.8 });
                const cyl = new THREE.Mesh(cylGeom, cylMat);
                cyl.position.y = 0.22;
                bGroup.add(cyl);

                const topGeom = new THREE.CylinderGeometry(obs.r * 0.75, obs.r * 0.75, 0.04, 32);
                const topMat = new THREE.MeshBasicMaterial({ color: obs.color || 0x00f0ff });
                const topCap = new THREE.Mesh(topGeom, topMat);
                topCap.position.y = 0.45;
                bGroup.add(topCap);

                const ringGeom = new THREE.TorusGeometry(obs.r, 0.05, 16, 32);
                ringGeom.rotateX(Math.PI / 2);
                const ringMat = new THREE.MeshBasicMaterial({ color: obs.color || 0x00f0ff });
                const ring = new THREE.Mesh(ringGeom, ringMat);
                ring.position.y = 0.22;
                bGroup.add(ring);

                trickshotGroup.add(bGroup);
            } else if (obs.type === 'barrier' || obs.type === 'moving_barrier') {
                const barGroup = new THREE.Group();
                barGroup.position.set(obs.x, 0, obs.z);

                const barGeom = new THREE.BoxGeometry(obs.w, obs.h, obs.d);
                const barMat = new THREE.MeshStandardMaterial({ color: 0x0a1630, roughness: 0.3, metalness: 0.8 });
                const bar = new THREE.Mesh(barGeom, barMat);
                bar.position.y = obs.h / 2;
                barGroup.add(bar);

                const neonGeom = new THREE.BoxGeometry(obs.w * 0.96, 0.1, 0.08);
                const neonMat = new THREE.MeshBasicMaterial({ color: obs.color || 0xff2a55 });
                const neon = new THREE.Mesh(neonGeom, neonMat);
                neon.position.set(0, obs.h * 0.6, obs.d / 2 + 0.01);
                barGroup.add(neon);

                trickshotGroup.add(barGroup);

                if (obs.type === 'moving_barrier') {
                    movingObstacles.push({
                        group: barGroup,
                        obs,
                        baseX: obs.initialX,
                        rangeX: obs.rangeX || 1.5,
                        speed: obs.speed || 0.04,
                        phase: 0
                    });
                }
            } else if (obs.type === 'portal') {
                const inGroup = new THREE.Group();
                inGroup.position.set(obs.inX, 0.35, obs.inZ);
                const ringGeom = new THREE.TorusGeometry(0.72, 0.08, 16, 32);
                ringGeom.rotateY(Math.PI / 2);
                const inMat = new THREE.MeshBasicMaterial({ color: obs.color || 0xb537f2 });
                inGroup.add(new THREE.Mesh(ringGeom, inMat));
                trickshotGroup.add(inGroup);

                const outGroup = new THREE.Group();
                outGroup.position.set(obs.outX, 0.35, obs.outZ);
                const outMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
                outGroup.add(new THREE.Mesh(ringGeom.clone(), outMat));
                trickshotGroup.add(outGroup);
            }
        }
        scene.add(trickshotGroup);
    }

    function clearTrickshotObstacles() {
        for (const mo of movingObstacles) {
            if (mo.obs && mo.obs.initialX !== undefined) {
                mo.obs.x = mo.obs.initialX;
            }
        }
        if (trickshotGroup && scene) {
            scene.remove(trickshotGroup);
            trickshotGroup = null;
        }
        movingObstacles = [];
    }

    function resetTrickshotMovingObstacles() {
        for (const mo of movingObstacles) {
            mo.phase = 0;
            if (mo.obs && mo.obs.initialX !== undefined) {
                mo.obs.x = mo.obs.initialX;
            }
            if (mo.group) {
                mo.group.position.x = mo.baseX;
            }
        }
    }

    function update(playerMallet, topMallet) {
        playerMalletMesh.position.set(playerMallet.x, 0, playerMallet.z);
        playerLight.position.set(playerMallet.x, 0.6, playerMallet.z);

        topMalletMesh.position.set(topMallet.x, 0, topMallet.z);
        topLight.position.set(topMallet.x, 0.6, topMallet.z);

        if (bossForcefieldMesh && bossForcefieldMesh.visible) {
            bossForcefieldMesh.material.opacity = 0.55 + Math.sin(Date.now() * 0.012) * 0.35;
        }

        for (const mo of movingObstacles) {
            mo.phase += mo.speed;
            mo.obs.x = mo.baseX + Math.sin(mo.phase) * mo.rangeX;
            mo.group.position.x = mo.obs.x;
        }

        if (hazardGroup) {
            const portals = hazardGroup.getObjectByName('portals_root');
            if (portals) {
                portals.children.forEach(p => {
                    p.rotation.y += 0.03;
                });
            }
        }

        // Анимация Chroma шайбы в режиме паузы/меню
        const equippedPuck = SaveManager.get().equippedPuck || 'cyber';
        const pSkin = SKINS.pucks.find(s => s.id === equippedPuck) || SKINS.pucks[0];
        if (pSkin.isChroma) {
            const hue = (Date.now() * 0.001) % 1;
            const c = new THREE.Color().setHSL(hue, 1, 0.55);
            for (const m of puckMeshes) {
                const ring = m.userData.ringMesh || m.children[1];
                if (ring?.material) ring.material.color.copy(c);
            }
        }

        VFX3D.update();
    }

    let slowMoTimer = 0;
    let slowMoTargetZ = 0;
    let replayCameraActive = false;
    let replayIsP1 = true;
    let replayTargetCamZ = 0;
    const replayLookTarget = new THREE.Vector3(0, 0, 0);

    function setReplayCamera(active, isP1 = true) {
        replayCameraActive = active;
        replayIsP1 = isP1;
        if (active) {
            replayTargetCamZ = isP1 ? -WORLD.HALF_L * 0.4 : WORLD.HALF_L * 0.4;
        } else if (camera) {
            updateCameraPose();
        }
    }

    function updateReplayCameraPose(puckX, puckZ, progress) {
        if (!replayCameraActive) return;
        replayLookTarget.set(puckX, 0.2, puckZ);
        const startZ = replayIsP1 ? -WORLD.HALF_L * 0.35 : WORLD.HALF_L * 0.35;
        const endZ = replayIsP1 ? -WORLD.HALF_L * 0.75 : WORLD.HALF_L * 0.75;
        replayTargetCamZ = startZ + (endZ - startZ) * progress;
    }

    function triggerSlowMo(isP1Scored) {
        slowMoTimer = 1.6;
        slowMoTargetZ = isP1Scored ? -WORLD.HALF_L : WORLD.HALF_L;
    }

    function triggerGoalFlash(isPlayer) {
        railFlashTimer = 1.8;
        railFlashColor.setHex(isPlayer ? 0x00f0ff : 0xff2a55);
    }

    function render(dt = 0.016) {
        ThemeManager.update(dt);

        // 1. Мигание неоновых бортов цветом забившего игрока при взятии ворот
        if (railFlashTimer > 0) {
            railFlashTimer -= dt;
            const flashFactor = (Math.sin(railFlashTimer * 18) * 0.5 + 0.5) * Math.min(1, railFlashTimer / 0.4);
            if (neonStripMat && neonStripMat.color) {
                neonStripMat.color.copy(baseNeonColor).lerp(railFlashColor, flashFactor);
            }
        } else if (neonStripMat && neonStripMat.color) {
            neonStripMat.color.copy(baseNeonColor);
        }

        // 2. Позиционирование камеры: Кинематографичный повтор, Слоу-мо или Плавный динамический трекинг
        const shakeOff = VFX3D.getShakeOffset ? VFX3D.getShakeOffset() : null;
        const sx = shakeOff ? shakeOff.x : 0;
        const sy = shakeOff ? shakeOff.y : 0;
        const sz = shakeOff ? shakeOff.z : 0;

        if (replayCameraActive) {
            // Кинематографичный ракурс повтора (Instant Replay)
            const targetX = replayIsP1 ? 8.2 : -8.2;
            const targetY = 7.2;
            const targetZ = replayTargetCamZ;
            camera.position.x += (targetX - camera.position.x) * 0.10;
            camera.position.y += (targetY - camera.position.y) * 0.10;
            camera.position.z += (targetZ - camera.position.z) * 0.10;
            camera.lookAt(replayLookTarget.x, 0.2, replayLookTarget.z);
        } else if (slowMoTimer > 0) {
            slowMoTimer -= dt;
            const targetCamY = 17.5;
            const targetCamZ = slowMoTargetZ * 0.45;
            camera.position.x += (0 - camera.position.x) * 0.08;
            camera.position.y += (targetCamY - camera.position.y) * 0.08;
            camera.position.z += (targetCamZ - camera.position.z) * 0.08;
            camera.lookAt(0, 0, slowMoTargetZ);
        } else {
            // Динамический наклон и смещение камеры вслед за положением шайбы (subtle lerp, ТВ-трансляция)
            const mainPuck = puckMeshes[0];
            const targetTrackX = mainPuck ? mainPuck.position.x * 0.16 : 0;
            const targetTrackZ = mainPuck ? mainPuck.position.z * 0.12 : 0;
            const targetLookX = mainPuck ? mainPuck.position.x * 0.25 : 0;
            const targetLookZ = mainPuck ? 1.8 + mainPuck.position.z * 0.20 : 1.8;

            camTrackingOffset.x += (targetTrackX - camTrackingOffset.x) * 0.06;
            camTrackingOffset.z += (targetTrackZ - camTrackingOffset.z) * 0.06;
            currentCamLook.x += (targetLookX - currentCamLook.x) * 0.08;
            currentCamLook.z += (targetLookZ - currentCamLook.z) * 0.08;

            camera.position.x = camTrackingOffset.x + sx;
            camera.position.y = (camera.position.y + (baseCamY - camera.position.y) * 0.06) + sy;
            camera.position.z = (baseCamZ + camTrackingOffset.z) + sz;
            camera.lookAt(currentCamLook.x, 0, currentCamLook.z);

            if (shakeOff && (shakeOff.rotX || shakeOff.rotZ)) {
                camera.rotation.x += shakeOff.rotX || 0;
                camera.rotation.z += shakeOff.rotZ || 0;
            }
        }

        // 3. FPS-мониторинг для автоматического отключения блума при падении производительности (< 45 FPS)
        fpsFrameCount++;
        const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
        if (!fpsLastTime) fpsLastTime = now;
        if (now - fpsLastTime >= 1000) {
            const currentFps = (fpsFrameCount * 1000) / (now - fpsLastTime);
            fpsFrameCount = 0;
            fpsLastTime = now;
            if (currentFps < 45) {
                lowFpsStreak++;
                if (lowFpsStreak >= 3) {
                    bloomEnabled = false; // Автоматическое отключение bloom для гарантии 60 FPS на слабых устройствах
                }
            } else {
                lowFpsStreak = 0;
                bloomEnabled = true;
            }
        }

        // 4. Пост-процессинг: UnrealBloomPass или прямой WebGLRenderer
        if (composer && bloomEnabled && isBloomSupported) {
            composer.render();
        } else {
            renderer.render(scene, camera);
        }
    }

    function resize(w, h) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
        if (composer) {
            composer.setSize(w, h);
        }
        updateCameraPose();
    }

    function getRayIntersection(clientX, clientY, canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera({ x, y }, camera);
        const hit = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(groundPlane, hit)) {
            return hit;
        }
        return null;
    }

    function resetPuckPosition() {
        if (puckMeshes[0]) {
            puckMeshes[0].position.set(0, 0, 0);
        }
    }

    return {
        init, resize, buildIceField, buildRails, buildStadium, buildHazards,
        ThemeManager: () => ThemeManager,
        updateMalletSkin, updatePuckSkin, updatePucks, update, render,
        getRayIntersection, triggerSlowMo, triggerGoalFlash, resetPuckPosition,
        setReplayCamera, updateReplayCameraPose,
        setBossForcefield, buildTrickshotObstacles, clearTrickshotObstacles, resetTrickshotMovingObstacles,
        getTopMalletMesh: () => topMalletMesh,
        getPlayerMalletMesh: () => playerMalletMesh,
        getTopLight: () => topLight,
        getTableMesh: () => iceMesh,
        getPuckMeshes: () => puckMeshes
    };
})();

// ─────────────────────────────────────────────────────────────────────────
// 10.1. РЕЖИМ ИСПЫТАНИЙ (TRICKSHOT LEVELS & MANAGER)
// ─────────────────────────────────────────────────────────────────────────
function getStarSvg(isFilled) {
    const fill = isFilled ? '#ffca28' : 'rgba(255,255,255,0.18)';
    const stroke = isFilled ? '#ffd700' : 'rgba(255,255,255,0.35)';
    return `<svg class="ts-star-svg" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="1.6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
}

const TRICKSHOT_LEVELS = [
    {
        id: 1,
        name_ru: "Прямой удар",
        name_en: "Straight Drive",
        name_tr: "Direkt Vurus",
        maxShots: 3,
        star3: 1,
        star2: 2,
        bounty: 100,
        puckStart: { x: 0, z: 4.2 },
        obstacles: [
            { type: 'bumper', x: -2.4, z: -1.2, r: 0.8, color: 0x00f0ff },
            { type: 'bumper', x: 2.4, z: -1.2, r: 0.8, color: 0x00f0ff }
        ]
    },
    {
        id: 2,
        name_ru: "Центральные ворота",
        name_en: "Center Gate",
        name_tr: "Merkez Kapi",
        maxShots: 3,
        star3: 1,
        star2: 2,
        bounty: 120,
        puckStart: { x: 0, z: 4.2 },
        obstacles: [
            { type: 'barrier', x: -3.2, z: 0, w: 3.8, d: 0.6, h: 0.45, color: 0xff2a55 },
            { type: 'barrier', x: 3.2, z: 0, w: 3.8, d: 0.6, h: 0.45, color: 0xff2a55 }
        ]
    },
    {
        id: 3,
        name_ru: "Двойной рикошет",
        name_en: "Twin Bank",
        name_tr: "Cift Carpis",
        maxShots: 3,
        star3: 1,
        star2: 2,
        bounty: 140,
        puckStart: { x: 0, z: 4.5 },
        obstacles: [
            { type: 'barrier', x: 0, z: -4.5, w: 3.8, d: 0.6, h: 0.45, color: 0xff2a55 },
            { type: 'bumper', x: -3.8, z: -1.8, r: 0.85, color: 0x00ff88 },
            { type: 'bumper', x: 3.8, z: -1.8, r: 0.85, color: 0x00ff88 }
        ]
    },
    {
        id: 4,
        name_ru: "Движущаяся стена",
        name_en: "Moving Wall",
        name_tr: "Hareketli Duvar",
        maxShots: 4,
        star3: 1,
        star2: 2,
        bounty: 160,
        puckStart: { x: 0, z: 4.2 },
        obstacles: [
            { type: 'moving_barrier', x: 0, z: -1.5, w: 3.6, d: 0.6, h: 0.45, color: 0xffca28, rangeX: 1.8, speed: 0.035 },
            { type: 'bumper', x: 0, z: -6.0, r: 0.75, color: 0x00f0ff }
        ]
    },
    {
        id: 5,
        name_ru: "Квантовый телепорт",
        name_en: "Quantum Portal",
        name_tr: "Kuantum Gecit",
        maxShots: 3,
        star3: 1,
        star2: 2,
        bounty: 180,
        puckStart: { x: 0, z: 4.5 },
        obstacles: [
            { type: 'barrier', x: 0, z: -2.5, w: 8.8, d: 0.6, h: 0.45, color: 0xff2a55 },
            { type: 'portal', inX: 0, inZ: 1.0, outX: 0, outZ: -6.2, outVx: 0, outVz: -0.22, color: 0xb537f2 }
        ]
    },
    {
        id: 6,
        name_ru: "Пинбол-аллея",
        name_en: "Pinball Alley",
        name_tr: "Pinball Yolu",
        maxShots: 4,
        star3: 1,
        star2: 2,
        bounty: 200,
        puckStart: { x: 0, z: 4.5 },
        obstacles: [
            { type: 'bumper', x: 0, z: 0.6, r: 0.85, color: 0xffca28 },
            { type: 'bumper', x: -2.6, z: -2.5, r: 0.85, color: 0x00f0ff },
            { type: 'bumper', x: 2.6, z: -2.5, r: 0.85, color: 0x00f0ff },
            { type: 'barrier', x: 0, z: -5.6, w: 2.4, d: 0.5, h: 0.45, color: 0xff2a55 }
        ]
    },
    {
        id: 7,
        name_ru: "Двойная щель",
        name_en: "Double Weave",
        name_tr: "Cift Yarık",
        maxShots: 4,
        star3: 1,
        star2: 2,
        bounty: 220,
        puckStart: { x: 0, z: 4.5 },
        obstacles: [
            { type: 'moving_barrier', x: -1.0, z: -0.5, w: 3.2, d: 0.6, h: 0.45, color: 0x00f0ff, rangeX: 2.0, speed: 0.04 },
            { type: 'moving_barrier', x: 1.0, z: -4.0, w: 3.2, d: 0.6, h: 0.45, color: 0xff2a55, rangeX: -2.0, speed: 0.045 }
        ]
    },
    {
        id: 8,
        name_ru: "Портальный лабиринт",
        name_en: "Portal Maze",
        name_tr: "Portal Labirenti",
        maxShots: 4,
        star3: 1,
        star2: 2,
        bounty: 250,
        puckStart: { x: -2.2, z: 4.2 },
        obstacles: [
            { type: 'barrier', x: -1.6, z: -1.0, w: 6.2, d: 0.6, h: 0.45, color: 0xff2a55 },
            { type: 'portal', inX: 3.2, inZ: 1.6, outX: -2.2, outZ: -6.5, outVx: 0.16, outVz: -0.22, color: 0xb537f2 },
            { type: 'bumper', x: -3.6, z: -4.5, r: 0.8, color: 0x00ff88 }
        ]
    },
    {
        id: 9,
        name_ru: "Цитадель",
        name_en: "Fortress Guard",
        name_tr: "Kale Muhafizi",
        maxShots: 4,
        star3: 1,
        star2: 2,
        bounty: 280,
        puckStart: { x: 0, z: 4.5 },
        obstacles: [
            { type: 'moving_barrier', x: 0, z: -7.8, w: 2.6, d: 0.5, h: 0.45, color: 0xffca28, rangeX: 1.6, speed: 0.048 },
            { type: 'barrier', x: -2.8, z: -3.0, w: 3.2, d: 0.6, h: 0.45, color: 0xff2a55 },
            { type: 'barrier', x: 2.8, z: -3.0, w: 3.2, d: 0.6, h: 0.45, color: 0xff2a55 },
            { type: 'bumper', x: 0, z: 0.2, r: 0.85, color: 0x00f0ff }
        ]
    },
    {
        id: 10,
        name_ru: "Гроссмейстер",
        name_en: "Grandmaster",
        name_tr: "Buyuk Usta",
        maxShots: 5,
        star3: 1,
        star2: 2,
        bounty: 350,
        puckStart: { x: 0, z: 4.8 },
        obstacles: [
            { type: 'moving_barrier', x: 0, z: -6.5, w: 3.2, d: 0.6, h: 0.45, color: 0xff2a55, rangeX: 2.0, speed: 0.052 },
            { type: 'bumper', x: -2.8, z: -2.6, r: 0.8, color: 0x00ff88 },
            { type: 'bumper', x: 2.8, z: -2.6, r: 0.8, color: 0x00ff88 },
            { type: 'portal', inX: 0, inZ: -0.8, outX: 0, outZ: -4.4, outVx: 0, outVz: -0.25, color: 0xb537f2 }
        ]
    }
];

const TrickshotManager = (() => {
    function renderGrid() {
        const grid = document.getElementById('trickshot-levels-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const progress = SaveManager.getTrickshotLevels();
        const lang = I18n.getLang();

        for (const lvl of TRICKSHOT_LEVELS) {
            const data = progress[lvl.id] || { unlocked: lvl.id === 1, completed: false, stars: 0 };
            const isUnlocked = !!data.unlocked;
            const isCompleted = !!data.completed;
            const stars = data.stars || 0;

            const card = document.createElement('div');
            card.className = `trickshot-card ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;

            const name = lvl['name_' + lang] || lvl.name_ru;
            const starsHtml = isUnlocked ? `
                <div class="trickshot-stars">
                    ${getStarSvg(stars >= 1)}
                    ${getStarSvg(stars >= 2)}
                    ${getStarSvg(stars >= 3)}
                </div>
            ` : `<div style="font-size:10px; color:rgba(255,255,255,0.4);">LOCK</div>`;

            card.innerHTML = `
                <div class="trickshot-num">${lvl.id}</div>
                <div class="trickshot-name">${name}</div>
                ${starsHtml}
            `;

            if (isUnlocked) {
                card.addEventListener('click', () => {
                    Game.startTrickshot(lvl.id);
                });
            }

            grid.appendChild(card);
        }
    }

    return { renderGrid };
})();

// ─────────────────────────────────────────────────────────────────────────
// 10.2. ПУТЬ ЧЕМПИОНА (TROPHY ROAD MILESTONES & MANAGER)
// ─────────────────────────────────────────────────────────────────────────
const TROPHY_ROAD_MILESTONES = [
    { cups: 1, rewardType: 'coins', rewardVal: 200, title_ru: '200 Монет', title_en: '200 Coins', title_tr: '200 Altin', desc_ru: 'Первая кубковая победа', desc_en: 'First tournament cup', desc_tr: 'Ilk kupa zaferi' },
    { cups: 2, rewardType: 'coins', rewardVal: 300, title_ru: '300 Монет', title_en: '300 Coins', title_tr: '300 Altin', desc_ru: 'Двойной триумф', desc_en: 'Double triumph', desc_tr: 'Cifte zafer' },
    { cups: 3, rewardType: 'mallet', rewardVal: 'titan', title_ru: 'Бита "Titan Cyber"', title_en: 'Mallet "Titan Cyber"', title_tr: 'Vurucu "Titan Cyber"', desc_ru: 'Эксклюзивная неоновая бита титана', desc_en: 'Exclusive neon titan mallet', desc_tr: 'Ozel neon titan vurucu' },
    { cups: 5, rewardType: 'coins', rewardVal: 500, title_ru: '500 Монет', title_en: '500 Coins', title_tr: '500 Altin', desc_ru: 'Пять победных кубков', desc_en: 'Five championship cups', desc_tr: 'Bes kupa zaferi' },
    { cups: 8, rewardType: 'goalfx', rewardVal: 'lasernova', title_ru: 'Гол "Laser Nova"', title_en: 'Goal "Laser Nova"', title_tr: 'Gol "Laser Nova"', desc_ru: 'Эксклюзивный салют лазеров', desc_en: 'Exclusive laser radial celebration', desc_tr: 'Ozel lazer kutlamasi' },
    { cups: 12, rewardType: 'puck', rewardVal: 'solarnova', title_ru: 'Шайба "Solar Nova"', title_en: 'Puck "Solar Nova"', title_tr: 'Disk "Solar Nova"', desc_ru: 'Огненная звезда чемпиона', desc_en: 'Fiery champion nova puck', desc_tr: 'Atesli sampiyon diski' },
    { cups: 20, rewardType: 'coins', rewardVal: 1000, title_ru: '1000 Монет + Гроссмейстер', title_en: '1000 Coins + Grandmaster', title_tr: '1000 Altin + Buyuk Usta', desc_ru: 'Легендарный титул и гора золота', desc_en: 'Legendary status and gold bounty', desc_tr: 'Efsanevi unvan ve altin' }
];

const TrophyRoadManager = (() => {
    function render() {
        const container = document.getElementById('trophy-road-container');
        const cupsCountEl = document.getElementById('trophy-road-cups-count');
        if (!container) return;

        const currentCups = SaveManager.get().tourneyWins || 0;
        if (cupsCountEl) cupsCountEl.textContent = currentCups;

        container.innerHTML = '';
        const lang = I18n.getLang();

        for (const m of TROPHY_ROAD_MILESTONES) {
            const isClaimed = SaveManager.isTrophyClaimed(m.cups);
            const canClaim = currentCups >= m.cups && !isClaimed;
            const isLocked = currentCups < m.cups;

            const card = document.createElement('div');
            card.className = `trophy-item-card ${canClaim ? 'can-claim' : ''} ${isClaimed ? 'is-claimed' : ''} ${isLocked ? 'is-locked' : ''}`;

            const title = m['title_' + lang] || m.title_ru;
            const desc = m['desc_' + lang] || m.desc_ru;

            let btnClass = 'btn-trophy-claim locked';
            let btnText = I18n.t('trophy_locked').replace('{N}', m.cups);

            if (isClaimed) {
                btnClass = 'btn-trophy-claim claimed';
                btnText = I18n.t('trophy_claimed');
            } else if (canClaim) {
                btnClass = 'btn-trophy-claim active';
                btnText = I18n.t('trophy_claim');
            }

            card.innerHTML = `
                <div class="trophy-item-left">
                    <div class="trophy-cup-marker">
                        <div class="trophy-cup-req">${m.cups}</div>
                        <div class="trophy-cup-sub">CUP</div>
                    </div>
                    <div class="trophy-reward-info">
                        <div class="trophy-reward-title">${title}</div>
                        <div class="trophy-reward-desc">${desc}</div>
                    </div>
                </div>
                <button class="${btnClass}">${btnText}</button>
            `;

            const btn = card.querySelector('button');
            if (canClaim) {
                btn.addEventListener('click', () => {
                    SaveManager.claimTrophyMilestone(m.cups, m.rewardType, m.rewardVal);
                    AudioManager.playFanfare();
                    Haptics.superShot();
                    VFX3D.screenShake(0.3);
                    Announcer.show(title, '#ffd700');
                    render();
                });
            }

            container.appendChild(card);
        }
    }

    return { render };
})();

// ─────────────────────────────────────────────────────────────────────────
// 11. ГЛАВНЫЙ ИГРОВОЙ ЦИКЛ И ЛОГИКА
// ─────────────────────────────────────────────────────────────────────────
const Game = (() => {
    let canvas;
    let overlayMenu, overlayGoal, overlayEnd, overlayTourney, overlayShop, overlayQuests, overlayLeaderboard, overlayWheel, overlayArenas;
    let overlayTrickshot, overlayTrickshotResult, overlayTrophy, overlayAchievements, overlayBattlePass, overlayPause;
    let matchStartTime = 0, matchGoalDeficit = 0;
    let checkHazards, btnShortcut;
    let btnHome, btnPause, goalFlash, goalScorerText;
    let pauseScoreP1, pauseScoreP2, btnPauseResume, btnPauseRestart, btnPauseMenu;
    let hudScoreboard, hudP1Score, hudP2Score, hudP1Name, hudP2Name;
    let hudUltimate, ultimateBar, btnUltimate;
    let hudTrickshot, hudTsLevel, hudTsShots;
    let hudBossBadge, hudBossBadgeText, hudBossBadgeIcon;
    let bossBadgeTimer = null;
    let ultimateCharge = 0;

    let bossAbilityCooldown = 0;
    let bossAbilityActive = false;
    let bossAbilityTimer = 0;
    let bossQuakeSmashArmed = false;

    let trickshotCurrentLevel = null;
    let trickshotShotsLeft = 3;
    let trickshotShotsTaken = 0;
    let trickshotPuckInMotion = false;
    let trickshotRestFrames = 0;

    const state = {
        mode: 'ai',
        phase: 'menu',
        scoreP1: 0,
        scoreP2: 0,
        difficulty: 'medium',
        powerupsEnabled: true,
        tourneyStage: 0,
        isPaused: false,
        lastTime: 0
    };

    let pucks = [];
    const playerMallet = { x: 0, z: 6, vx: 0, vz: 0, r: WORLD.MALLET_R };
    const topMallet = { x: 0, z: -6, vx: 0, vz: 0, r: WORLD.MALLET_R };

    let p1InputX = 0, p1InputZ = 6;
    let p2InputX = 0, p2InputZ = -6;
    const keys = {};

    function chargeUltimate(amount) {
        if (playerMallet.hasSuperShot) return;
        ultimateCharge = Math.min(100, ultimateCharge + amount);
        if (ultimateBar) ultimateBar.style.width = `${ultimateCharge}%`;
        if (ultimateCharge >= 100) {
            btnUltimate?.classList.add('ready');
        }
    }

    function _activateUltimate() {
        if (ultimateCharge < 100 || playerMallet.hasSuperShot) return;
        ultimateCharge = 0;
        if (ultimateBar) ultimateBar.style.width = '0%';
        btnUltimate?.classList.remove('ready');

        playerMallet.hasSuperShot = true;
        AudioManager.playSuperShot();
        Haptics.superShot();
        VFX3D.screenShake(0.35);
        VFX3D.createShockwave(playerMallet.x, playerMallet.z, 0xffca28, 2.5);
        QuestManager.onUltimate();
        if (typeof AchievementManager !== 'undefined') AchievementManager.checkAll();
    }

    function setPaused(p) {
        state.isPaused = !!p;
        if (!p) {
            state.lastTime = performance.now();
        }
    }

    function togglePause(forced) {
        if (state.phase !== 'playing' && !state.isPaused) return;
        const next = forced !== undefined ? forced : !state.isPaused;
        setPaused(next);
        if (next) {
            if (pauseScoreP1) pauseScoreP1.textContent = state.scoreP1;
            if (pauseScoreP2) pauseScoreP2.textContent = state.scoreP2;
            if (overlayPause) overlayPause.classList.add('active');
            AudioManager.stopBGM();
        } else {
            if (overlayPause) overlayPause.classList.remove('active');
            if (state.phase === 'playing') AudioManager.startBGM();
        }
    }

    function init() {
        SaveManager.load();
        I18n.setLang(SaveManager.get().lang || 'ru');

        // Восстанавливаем сохраненное состояние звука и музыки
        const savedSound = SaveManager.get().sound !== false;
        AudioManager.setUserMute(!savedSound);
        const muteBtn = document.getElementById('btn-mute');
        if (muteBtn) muteBtn.classList.toggle('muted', !savedSound);

        const savedMusic = SaveManager.get().music !== false;
        SynthwaveAudio.setMuted(!savedMusic);
        const musicBtn = document.getElementById('btn-music');
        if (musicBtn) {
            musicBtn.classList.toggle('active', savedMusic);
            musicBtn.classList.toggle('muted', !savedMusic);
        }

        // Подписываемся на реактивное обновление облачных сохранений
        SaveManager.onSync(() => {
            Arena3D.updateMalletSkin();
            Arena3D.updatePuckSkin();
            Arena3D.buildIceField();
            Arena3D.buildRails();
            Arena3D.buildStadium();
            Arena3D.buildHazards();
            QuestManager.renderQuests();
            LuckyWheel.updateUI();
            if (overlayLeaderboard?.classList.contains('active')) {
                _updateLeaderboardModal();
            }
            if (overlayShop?.classList.contains('active')) {
                const activeTab = document.querySelector('.shop-tab.active')?.dataset.tab || 'mallets';
                _renderShopItems(activeTab);
            }
            if (overlayTrickshot?.classList.contains('active')) {
                TrickshotManager.renderGrid();
            }
            if (overlayTrophy?.classList.contains('active')) {
                TrophyRoadManager.render();
            }
            if (overlayArenas?.classList.contains('active')) {
                ThemeManager.renderUI();
            }
            if (typeof AchievementManager !== 'undefined') {
                AchievementManager.checkAll();
                AchievementManager.updateMenuBadge();
                if (overlayAchievements?.classList.contains('active')) AchievementManager.render();
            }
            if (typeof BattlePassManager !== 'undefined') {
                BattlePassManager.updateMenuBadge();
                if (overlayBattlePass?.classList.contains('active')) BattlePassManager.render();
            }
        });

        canvas = document.getElementById('gameCanvas');

        overlayMenu = document.getElementById('overlay-menu');
        overlayGoal = document.getElementById('overlay-goal');
        overlayEnd = document.getElementById('overlay-end');
        overlayTourney = document.getElementById('overlay-tournament');
        overlayShop = document.getElementById('overlay-shop');
        overlayQuests = document.getElementById('overlay-quests');
        overlayLeaderboard = document.getElementById('overlay-leaderboard');
        overlayWheel = document.getElementById('overlay-wheel');
        overlayTrickshot = document.getElementById('overlay-trickshot');
        overlayTrickshotResult = document.getElementById('overlay-trickshot-result');
        overlayTrophy = document.getElementById('overlay-trophy-road');
        overlayArenas = document.getElementById('overlay-arenas');
        overlayAchievements = document.getElementById('overlay-achievements');
        overlayBattlePass = document.getElementById('overlay-battle-pass');
        overlayPause = document.getElementById('overlay-pause');

        hudTrickshot = document.getElementById('hud-trickshot');
        hudTsLevel = document.getElementById('hud-ts-level');
        hudTsShots = document.getElementById('hud-ts-shots');

        hudBossBadge = document.getElementById('hud-boss-badge');
        hudBossBadgeText = document.getElementById('hud-boss-badge-text');
        hudBossBadgeIcon = document.getElementById('hud-boss-badge-icon');

        checkHazards = document.getElementById('check-hazards');
        if (checkHazards) {
            checkHazards.checked = SaveManager.get().hazardsEnabled !== false;
        }

        btnShortcut = document.getElementById('btn-add-shortcut');
        if (btnShortcut) {
            if (SaveManager.get().shortcutClaimed) {
                btnShortcut.style.display = 'none';
            } else {
                VKService.canShowShortcut().then(canShow => {
                    if (canShow && !SaveManager.get().shortcutClaimed) {
                        btnShortcut.style.display = 'flex';
                    } else {
                        btnShortcut.style.display = 'none';
                    }
                });
            }
        }

        hudUltimate = document.getElementById('hud-ultimate');
        ultimateBar = document.getElementById('ultimate-bar');
        btnUltimate = document.getElementById('btn-ultimate');

        btnHome = document.getElementById('btn-home');
        btnPause = document.getElementById('btn-pause');
        pauseScoreP1 = document.getElementById('pause-score-p1');
        pauseScoreP2 = document.getElementById('pause-score-p2');
        btnPauseResume = document.getElementById('btn-pause-resume');
        btnPauseRestart = document.getElementById('btn-pause-restart');
        btnPauseMenu = document.getElementById('btn-pause-menu');
        goalFlash = document.getElementById('goal-flash');
        goalScorerText = document.getElementById('goal-scorer-text');

        hudScoreboard = document.getElementById('hud-scoreboard');
        hudP1Score = document.getElementById('hud-p1-score');
        hudP2Score = document.getElementById('hud-p2-score');
        hudP1Name = document.getElementById('hud-p1-name');
        hudP2Name = document.getElementById('hud-p2-name');

        // Инициализируем 3D сцену Three.js
        Arena3D.init(canvas);
        Arena3D.updateMalletSkin();
        Arena3D.updatePuckSkin();
        _handleResize();

        _setupEvents();
        VKService.init();
        LuckyWheel.init();
        if (typeof AchievementManager !== 'undefined') AchievementManager.init();
        if (typeof BattlePassManager !== 'undefined') BattlePassManager.init();

        showOverlay('menu');
        requestAnimationFrame(_loop);
    }

    function _updateScoreboard(scorer) {
        if (!hudScoreboard) return;
        if (hudP1Score) hudP1Score.textContent = state.scoreP1;
        if (hudP2Score) hudP2Score.textContent = state.scoreP2;

        const isRu = I18n.getLang() === 'ru';
        if (hudP1Name) {
            hudP1Name.textContent = state.mode === 'pvp' ? (isRu ? 'ИГРОК 1' : 'P1') : (isRu ? 'ВЫ' : 'YOU');
        }
        if (hudP2Name) {
            if (state.mode === 'pvp') {
                hudP2Name.textContent = isRu ? 'ИГРОК 2' : 'P2';
            } else if (state.mode === 'tournament') {
                const stageNameKey = 'enemy_' + (state.tourneyStage + 1);
                hudP2Name.textContent = I18n.t(stageNameKey).toUpperCase();
            } else if (state.mode === 'ranked' || state.mode === 'ranked_p2p') {
                const rival = typeof MultiplayerManager !== 'undefined' ? MultiplayerManager.getCurrentRival() : null;
                hudP2Name.textContent = rival ? rival.name.toUpperCase() : (isRu ? 'СОПЕРНИК' : 'RIVAL');
            } else {
                hudP2Name.textContent = isRu ? 'БОТ' : 'BOT';
            }
        }

        // Индикаторы флага страны, пинга и дивизиона в HUD
        const p2FlagEl = document.getElementById('hud-p2-flag');
        const p2PingEl = document.getElementById('hud-p2-ping');
        const p1DivEl = document.getElementById('hud-p1-division');
        if (state.mode === 'ranked' || state.mode === 'ranked_p2p') {
            const rival = typeof MultiplayerManager !== 'undefined' ? MultiplayerManager.getCurrentRival() : null;
            if (p2FlagEl) {
                p2FlagEl.style.display = 'inline-flex';
                p2FlagEl.innerHTML = rival ? MultiplayerManager.getCountryFlagSVG(rival.country, 18, 12) : '';
            }
            if (p2PingEl) {
                p2PingEl.style.display = 'inline';
                p2PingEl.textContent = (rival ? rival.ping : 24) + ' ms';
            }
            if (p1DivEl) {
                p1DivEl.style.display = 'inline';
                const curRP = SaveManager.get().rankedRP || 0;
                const curDiv = typeof RankedManager !== 'undefined' ? RankedManager.getDivision(curRP) : null;
                if (curDiv) {
                    p1DivEl.textContent = RankedManager.getDivisionName(curDiv, isRu ? 'ru' : 'en');
                    p1DivEl.style.color = curDiv.color;
                }
            }
        } else {
            if (p2FlagEl) p2FlagEl.style.display = 'none';
            if (p2PingEl) p2PingEl.style.display = 'none';
            if (p1DivEl) p1DivEl.style.display = 'none';
        }

        if (scorer === 'player' && hudP1Score) {
            hudP1Score.classList.add('score-bump');
            setTimeout(() => hudP1Score.classList.remove('score-bump'), 250);
        } else if (scorer === 'top' && hudP2Score) {
            hudP2Score.classList.add('score-bump');
            setTimeout(() => hudP2Score.classList.remove('score-bump'), 250);
        }

        // Адаптивный темп синтвейва: стандартный 116 BPM, при напряжении (Match Point / 6:6) -> 136 BPM
        const isTense = (state.scoreP1 >= 6 || state.scoreP2 >= 6);
        SynthwaveAudio.setTension(isTense);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 4.2. СИСТЕМА ПОВТОРА ГОЛОВ (ReplayManager)
    // Кольцевой буфер на 180 кадров (3 секунды физики 60 FPS)
    // Slow-Mo 0.35x · Кинематографичный ракурс камеры в Arena3D · Letterbox · UI
    // ─────────────────────────────────────────────────────────────────────────
    let p1GoalStreak = 0;
    let p2GoalStreak = 0;

    const ReplayManager = (() => {
        const BUFFER_SIZE = 180;
        const ringBuffer = new Array(BUFFER_SIZE);
        let head = 0;
        let recordedFrames = 0;

        let isPlaying = false;
        let playbackFrame = 0;
        let replayFrames = [];
        let onFinishCallback = null;

        function recordFrame(puck, p1, p2) {
            if (isPlaying || !puck || !p1 || !p2) return;

            ringBuffer[head] = {
                puckX: puck.x,
                puckZ: puck.z,
                puckVx: puck.vx,
                puckVz: puck.vz,
                onFire: !!puck.onFire,
                p1X: p1.x,
                p1Z: p1.z,
                p2X: p2.x,
                p2Z: p2.z
            };

            head = (head + 1) % BUFFER_SIZE;
            recordedFrames++;
        }

        function shouldTriggerReplay({ isMatchPoint, scoreP1, scoreP2, puckSpeed, onFire, isBounceGoal, isStreak }) {
            if (isMatchPoint) return true;
            if (scoreP1 === 6 || scoreP2 === 6) return true;
            if (puckSpeed > 0.24) return true;
            if (onFire) return true;
            if (isBounceGoal) return true;
            if (isStreak) return true;
            return false;
        }

        function startReplay({ onComplete, isP1Scored }) {
            const count = Math.min(recordedFrames, BUFFER_SIZE);
            if (count < 15) {
                if (onComplete) onComplete();
                return;
            }

            replayFrames = [];
            const startIdx = recordedFrames < BUFFER_SIZE ? 0 : head;
            for (let i = 0; i < count; i++) {
                const frame = ringBuffer[(startIdx + i) % BUFFER_SIZE];
                if (frame) replayFrames.push(frame);
            }

            if (replayFrames.length < 15) {
                if (onComplete) onComplete();
                return;
            }

            isPlaying = true;
            playbackFrame = 0;
            onFinishCallback = onComplete;

            const hud = document.getElementById('replay-hud');
            if (hud) {
                hud.style.display = 'flex';
                hud.classList.add('active');
            }

            Arena3D.setReplayCamera(true, isP1Scored);
        }

        function stopReplay() {
            if (!isPlaying) return;
            isPlaying = false;

            const hud = document.getElementById('replay-hud');
            if (hud) {
                hud.classList.remove('active');
                hud.style.display = 'none';
            }

            Arena3D.setReplayCamera(false);

            if (onFinishCallback) {
                const cb = onFinishCallback;
                onFinishCallback = null;
                cb();
            }
        }

        function update(dtSeconds) {
            if (!isPlaying || replayFrames.length === 0) return;

            // Замедление времени Slow-Mo 0.35x
            playbackFrame += (dtSeconds * 60) * 0.35;

            if (playbackFrame >= replayFrames.length - 1) {
                stopReplay();
                return;
            }

            const idx0 = Math.floor(playbackFrame);
            const idx1 = Math.min(idx0 + 1, replayFrames.length - 1);
            const frac = playbackFrame - idx0;

            const f0 = replayFrames[idx0];
            const f1 = replayFrames[idx1];

            const puckX = f0.puckX + (f1.puckX - f0.puckX) * frac;
            const puckZ = f0.puckZ + (f1.puckZ - f0.puckZ) * frac;
            const p1X = f0.p1X + (f1.p1X - f0.p1X) * frac;
            const p1Z = f0.p1Z + (f1.p1Z - f0.p1Z) * frac;
            const p2X = f0.p2X + (f1.p2X - f0.p2X) * frac;
            const p2Z = f0.p2Z + (f1.p2Z - f0.p2Z) * frac;

            const pMeshes = Arena3D.getPuckMeshes ? Arena3D.getPuckMeshes() : null;
            if (pMeshes && pMeshes[0]) {
                pMeshes[0].position.set(puckX, 0.15, puckZ);
            }

            const p1Mesh = Arena3D.getPlayerMalletMesh ? Arena3D.getPlayerMalletMesh() : null;
            if (p1Mesh) {
                p1Mesh.position.set(p1X, 0.25, p1Z);
            }

            const p2Mesh = Arena3D.getTopMalletMesh ? Arena3D.getTopMalletMesh() : null;
            if (p2Mesh) {
                p2Mesh.position.set(p2X, 0.25, p2Z);
            }

            Arena3D.updateReplayCameraPose(puckX, puckZ, playbackFrame / replayFrames.length);
        }

        function clear() {
            head = 0;
            recordedFrames = 0;
            isPlaying = false;
            replayFrames = [];
        }

        return {
            recordFrame,
            shouldTriggerReplay,
            startReplay,
            stopReplay,
            update,
            clear,
            isPlaying: () => isPlaying,
            getRecordedCount: () => Math.min(recordedFrames, BUFFER_SIZE)
        };
    })();

    if (typeof window !== 'undefined') {
        window.ReplayManager = ReplayManager;
    }

    function startMatch() {
        if (state.mode === 'trickshot' || state.mode === 'shop' || state.mode === 'trophy') {
            state.mode = 'ai';
            document.querySelectorAll('.mode-card').forEach(c => c.classList.toggle('selected', c.dataset.mode === 'ai'));
            const diffPanel = document.getElementById('difficulty-panel');
            if (diffPanel) diffPanel.style.display = 'block';
        }

        state.scoreP1 = 0;
        state.scoreP2 = 0;
        state.phase = 'playing';
        p1GoalStreak = 0;
        p2GoalStreak = 0;
        ReplayManager.clear();
        SynthwaveAudio.setTension(false);
        trickshotCurrentLevel = null;
        matchStartTime = Date.now();
        matchGoalDeficit = 0;

        _updateScoreboard();
        showOverlay(null);
        btnHome.style.display = 'flex';
        if (btnPause) btnPause.style.display = 'flex';
        VFX3D.clear();
        PowerUpManager3D.reset();

        Arena3D.clearTrickshotObstacles();
        Arena3D.setBossForcefield(false);

        if (state.mode === 'tournament') {
            bossAbilityCooldown = Date.now() + 3500;
            bossAbilityActive = false;
            bossQuakeSmashArmed = false;
        }

        _resetPucks(true);
        _resetMallets();

        AudioManager.boot();
        AudioManager.startBGM();
    }

    function _resetPucks(p1Serves) {
        if (state.mode === 'tournament') {
            bossAbilityActive = false;
            bossQuakeSmashArmed = false;
            bossAbilityCooldown = Date.now() + 3000;
            Arena3D.setBossForcefield(false);
            if (hudBossBadge) hudBossBadge.style.display = 'none';
        }
        pucks = [{
            x: 0,
            z: p1Serves ? 3.0 : -3.0,
            vx: (Math.random() - 0.5) * 0.04,
            vz: p1Serves ? -0.10 : 0.10,
            onFire: false,
            stuckFrames: 0
        }];
    }

    function _resetMallets() {
        playerMallet.x = 0;
        playerMallet.z = WORLD.HALF_L - 2.5;
        playerMallet.vx = 0; playerMallet.vz = 0;
        playerMallet.frozenUntil = 0;
        playerMallet.shieldUntil = 0;
        playerMallet.hasSuperShot = false;

        topMallet.x = 0;
        topMallet.z = -WORLD.HALF_L + 2.5;
        topMallet.vx = 0; topMallet.vz = 0;
        topMallet.frozenUntil = 0;
        topMallet.shieldUntil = 0;
        topMallet.hasSuperShot = false;

        p1InputX = playerMallet.x; p1InputZ = playerMallet.z;
        p2InputX = topMallet.x; p2InputZ = topMallet.z;
    }

    function _handleGoal(scorer) {
        state.phase = 'goal';
        const isP1 = scorer === 'player';
        if (isP1) {
            state.scoreP1++;
            SaveManager.get().totalGoals = (SaveManager.get().totalGoals || 0) + 1;
            SaveManager.save();
            p1GoalStreak++;
            p2GoalStreak = 0;
            if (typeof AchievementManager !== 'undefined') {
                AchievementManager.unlock('first_goal');
                const p = pucks[0];
                if (p && p.lastHitter === 'player' && (p.wallRicochets || 0) >= 3) {
                    AchievementManager.unlock('ricochet_sniper');
                }
                AchievementManager.checkAll();
            }
            if (typeof BattlePassManager !== 'undefined') {
                BattlePassManager.addXP(10, 'goal');
            }
        } else {
            state.scoreP2++;
            p2GoalStreak++;
            p1GoalStreak = 0;
        }
        matchGoalDeficit = Math.max(matchGoalDeficit, state.scoreP2 - state.scoreP1);
        _updateScoreboard(scorer);

        QuestManager.onGoal();
        Haptics.goal();

        const isMatchPoint = state.scoreP1 >= 7 || state.scoreP2 >= 7;
        const mainPuck = pucks[0] || {};
        const puckSpd = Math.hypot(mainPuck.vx || 0, mainPuck.vz || 0);
        const wallBounces = mainPuck.wallRicochets || 0;
        const activeStreak = isP1 ? p1GoalStreak : p2GoalStreak;

        if (isMatchPoint) {
            Arena3D.triggerSlowMo(isP1);
        }

        goalFlash.style.background = isP1 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(255, 42, 85, 0.45)';
        goalFlash.classList.add('flash');
        setTimeout(() => goalFlash.classList.remove('flash'), 180);

        const equippedFX = SaveManager.get().equippedGoalFX || 'confetti';
        VFX3D.triggerGoalCelebration(isP1, equippedFX);
        AudioManager.playGoalCelebration(equippedFX);

        let goalMsg = I18n.t('goal_you');
        if (state.mode === 'pvp') goalMsg = isP1 ? I18n.t('goal_you') : I18n.t('goal_p2');
        else if (!isP1) goalMsg = I18n.t('goal_ai');

        goalScorerText.textContent = goalMsg;
        goalScorerText.style.color = isP1 ? '#00f0ff' : '#ff2a55';
        showOverlay('goal');

        // Озвучка событий через ArcadeAnnouncer (Web Speech API + процедурные джинглы)
        const isFirstGoal = (state.scoreP1 + state.scoreP2 === 1);
        if (isFirstGoal) {
            ArcadeAnnouncer.firstGoal();
        } else if (isMatchPoint) {
            ArcadeAnnouncer.matchPoint();
        } else if (state.scoreP1 === 6 || state.scoreP2 === 6) {
            ArcadeAnnouncer.matchPoint();
        } else if (mainPuck.onFire || puckSpd > 0.40) {
            ArcadeAnnouncer.megaSmash();
        } else if (wallBounces >= 2) {
            ArcadeAnnouncer.doubleBounce();
        } else if (activeStreak >= 3) {
            ArcadeAnnouncer.unstoppable();
        } else {
            Announcer.show(I18n.t('callout_goal'), isP1 ? '#00f0ff' : '#ff2a55');
        }

        // Проверка условия для кинематографичного повтора (Instant Replay)
        const shouldReplay = ReplayManager.shouldTriggerReplay({
            isMatchPoint: isMatchPoint || (state.scoreP1 === 6 && state.scoreP2 === 6),
            scoreP1: state.scoreP1,
            scoreP2: state.scoreP2,
            puckSpeed: puckSpd,
            onFire: !!mainPuck.onFire,
            isBounceGoal: wallBounces >= 2,
            isStreak: activeStreak >= 3
        });

        setTimeout(() => {
            showOverlay(null);
            if (shouldReplay) {
                ReplayManager.startReplay({
                    isP1Scored: isP1,
                    onComplete: () => {
                        if (isMatchPoint) {
                            _handleEnd();
                        } else {
                            state.phase = 'playing';
                            _resetPucks(!isP1);
                        }
                    }
                });
            } else {
                if (isMatchPoint) {
                    _handleEnd();
                } else {
                    state.phase = 'playing';
                    _resetPucks(!isP1);
                }
            }
        }, shouldReplay ? 1150 : (isMatchPoint ? 2600 : 2000));
    }

    function _handleEnd() {
        state.phase = 'end';
        AudioManager.stopBGM();

        const won = state.scoreP1 >= 7;
        const matchDuration = Date.now() - (matchStartTime || Date.now());
        const d = SaveManager.get();
        d.totalMatches = (d.totalMatches || 0) + 1;

        if (won) {
            d.totalWins = (d.totalWins || 0) + 1;
            d.winStreak = (d.winStreak || 0) + 1;
            d.bestWinStreak = Math.max(d.bestWinStreak || 0, d.winStreak);
            SaveManager.save();

            if (typeof AchievementManager !== 'undefined') {
                if (d.winStreak >= 5) AchievementManager.unlock('win_streak_5');
                if (d.winStreak >= 10) AchievementManager.unlock('win_streak_10');
                if (state.scoreP2 === 0) AchievementManager.unlock('clean_sheet');
                if (matchGoalDeficit >= 3) AchievementManager.unlock('epic_comeback');
                if (matchDuration <= 60000) AchievementManager.unlock('speed_demon');
            }
        } else {
            d.winStreak = 0;
            SaveManager.save();
        }

        const endTitle = document.getElementById('end-result');
        const coinsEarnedEl = document.getElementById('end-coins-earned');

        let earned = won ? 50 : 20;

        if (state.mode === 'tournament') {
            if (won) {
                if (state.tourneyStage === 2) {
                    endTitle.textContent = I18n.t('tourney_win');
                    earned = 500;
                    QuestManager.onTourneyWin();
                    VKService.checkAndPromptReview();
                    SaveManager.get().tourneyWins = (SaveManager.get().tourneyWins || 0) + 1;
                    SaveManager.save();
                    if (typeof AchievementManager !== 'undefined') {
                        AchievementManager.unlock('tourney_champ');
                        AchievementManager.unlock('boss_slayer');
                    }
                    state.tourneyStage = 0;
                } else {
                    endTitle.textContent = (I18n.t('tourney_stage_cleared') || 'РАУНД {N} ПРОЙДЕН!').replace('{N}', state.tourneyStage + 1);
                    earned = 100;
                    state.tourneyStage++;
                }
            } else {
                endTitle.textContent = I18n.t('lose_title');
                state.tourneyStage = 0;
            }
        } else {
            endTitle.textContent = won ? I18n.t('win_title') : I18n.t('lose_title');
        }

        if (typeof AchievementManager !== 'undefined') {
            AchievementManager.checkAll();
        }

        // Начисление XP в Сезонный Боевой Пропуск
        const matchBaseXp = won ? 100 : 40;
        let totalXpEarned = matchBaseXp + (state.scoreP1 * 10);
        if (typeof BattlePassManager !== 'undefined') {
            BattlePassManager.addXP(matchBaseXp, won ? 'win' : 'loss');
        }

        const xpBanner = document.getElementById('end-xp-banner');
        const xpText = document.getElementById('end-xp-earned');
        if (xpBanner && xpText) {
            xpText.textContent = I18n.t('bp_xp_earned').replace('{N}', totalXpEarned);
            xpBanner.style.display = 'flex';
        }

        endTitle.className = won ? 'result-win' : 'result-lose';
        document.getElementById('end-score').textContent = `${state.scoreP1} : ${state.scoreP2}`;
        coinsEarnedEl.textContent = `+${earned} ${I18n.t('coins')}`;
        SaveManager.addCoins(earned);

        // Обработка рейтинговой системы (Ranked & Ranked P2P)
        const rankedBannerEl = document.getElementById('ranked-end-banner');
        if (state.mode === 'ranked' || state.mode === 'ranked_p2p') {
            const rankRes = RankedManager.recordMatch(won);
            if (rankedBannerEl) {
                rankedBannerEl.style.display = 'block';
                const deltaEl = document.getElementById('ranked-end-delta-val');
                const streakBadgeEl = document.getElementById('ranked-end-streak-badge');
                const divTitleEl = document.getElementById('ranked-end-division-title');
                const rpValEl = document.getElementById('ranked-end-rp-val');
                const barEl = document.getElementById('ranked-end-bar');

                if (deltaEl) {
                    deltaEl.textContent = (rankRes.delta >= 0 ? '+' : '') + rankRes.delta + ' RP';
                    deltaEl.className = 'ranked-end-delta-val ' + (rankRes.delta >= 0 ? 'win' : 'loss');
                }
                if (streakBadgeEl) {
                    streakBadgeEl.style.display = rankRes.streakBonus > 0 ? 'inline-block' : 'none';
                    if (rankRes.streakBonus > 0) {
                        streakBadgeEl.textContent = '+10 RP ' + (I18n.getLang() === 'ru' ? 'СЕРИЯ' : 'STREAK');
                    }
                }
                const progress = RankedManager.getProgress(rankRes.newRP);
                if (divTitleEl) {
                    divTitleEl.textContent = RankedManager.getDivisionName(progress.division, I18n.getLang ? I18n.getLang() : 'ru').toUpperCase();
                    divTitleEl.style.color = progress.division.color;
                }
                if (rpValEl) {
                    rpValEl.textContent = rankRes.newRP + ' RP';
                }
                if (barEl) {
                    barEl.style.width = progress.percent + '%';
                }
            }
            if (rankRes.isPromo) {
                AudioManager.playRankUp();
            } else if (rankRes.isDemote) {
                AudioManager.playRankDown();
            }
        } else {
            if (rankedBannerEl) rankedBannerEl.style.display = 'none';
        }

        showOverlay('end');
        if (won) {
            ArcadeAnnouncer.victory();
            AudioManager.playWin();
        } else {
            AudioManager.playLose();
        }

        VKService.showInterstitial();
    }

    function showOverlay(name) {
        overlayMenu.classList.toggle('active', name === 'menu');
        overlayGoal.classList.toggle('active', name === 'goal');
        overlayEnd.classList.toggle('active', name === 'end');
        overlayTourney.classList.toggle('active', name === 'tournament');
        overlayShop.classList.toggle('active', name === 'shop');
        if (overlayQuests) overlayQuests.classList.toggle('active', name === 'quests');
        if (overlayLeaderboard) overlayLeaderboard.classList.toggle('active', name === 'leaderboard');
        if (overlayWheel) overlayWheel.classList.toggle('active', name === 'wheel');
        if (overlayTrickshot) overlayTrickshot.classList.toggle('active', name === 'trickshot');
        if (overlayTrickshotResult) overlayTrickshotResult.classList.toggle('active', name === 'trickshot-result');
        if (overlayTrophy) overlayTrophy.classList.toggle('active', name === 'trophy');
        if (overlayArenas) overlayArenas.classList.toggle('active', name === 'arenas');
        if (overlayAchievements) overlayAchievements.classList.toggle('active', name === 'achievements');
        if (overlayBattlePass) overlayBattlePass.classList.toggle('active', name === 'battle-pass');
        if (overlayPause) overlayPause.classList.toggle('active', name === 'pause');
        const overlayRanked = document.getElementById('overlay-ranked');
        if (overlayRanked) overlayRanked.classList.toggle('active', name === 'ranked');

        if (name === 'ranked' && typeof RankedManager !== 'undefined') {
            RankedManager.renderUI();
        }
        if (name === 'arenas') {
            ThemeManager.renderUI();
        }
        if (name === 'achievements' && typeof AchievementManager !== 'undefined') {
            AchievementManager.render();
        }
        if (name === 'battle-pass' && typeof BattlePassManager !== 'undefined') {
            BattlePassManager.render();
        }
        if (name === 'wheel') {
            LuckyWheel.updateUI();
        } else {
            LuckyWheel.stopCountdown();
        }
        if (name === 'trickshot') {
            TrickshotManager.renderGrid();
        }
        if (name === 'trophy') {
            TrophyRoadManager.render();
        }
        if (name === 'end') {
            if (btnPause) btnPause.style.display = 'none';
        }
        if (name === 'menu') {
            if (btnHome) btnHome.style.display = 'none';
            if (btnPause) btnPause.style.display = 'none';
            if (overlayPause) overlayPause.classList.remove('active');
            if (state.mode !== 'ai' && state.mode !== 'pvp') {
                state.mode = 'ai';
                document.querySelectorAll('.mode-card').forEach(c => {
                    c.classList.toggle('selected', c.dataset.mode === 'ai');
                });
            }
            const diffPanel = document.getElementById('difficulty-panel');
            if (diffPanel) diffPanel.style.display = state.mode === 'ai' ? 'block' : 'none';
            const btnStart = document.getElementById('btn-start');
            if (btnStart) btnStart.style.display = 'inline-flex';
            LuckyWheel.updateUI();
            if (typeof AchievementManager !== 'undefined') AchievementManager.updateMenuBadge();
            if (typeof BattlePassManager !== 'undefined') BattlePassManager.updateMenuBadge();
            Arena3D.resetPuckPosition();
            Arena3D.clearTrickshotObstacles();
            Arena3D.setBossForcefield(false);
            if (hudBossBadge) hudBossBadge.style.display = 'none';
        }

        if (hudScoreboard) {
            hudScoreboard.style.display = (name === null || name === 'goal') && state.mode !== 'trickshot' ? 'flex' : 'none';
        }
        if (hudUltimate) {
            hudUltimate.style.display = (name === null) && state.mode !== 'trickshot' ? 'flex' : 'none';
        }
        if (hudTrickshot) {
            hudTrickshot.style.display = (name === null || name === 'goal') && state.mode === 'trickshot' ? 'flex' : 'none';
        }
        if (hudBossBadge && name !== null) {
            hudBossBadge.style.display = 'none';
        }
    }

    function _showBossBadge(type, text) {
        if (!hudBossBadge) return;
        hudBossBadge.className = `hud-boss-badge boss-${type}`;
        if (hudBossBadgeText) hudBossBadgeText.textContent = text;
        if (hudBossBadgeIcon) {
            if (type === 'shield') {
                hudBossBadgeIcon.innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffca28" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
            } else if (type === 'smash') {
                hudBossBadgeIcon.innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="#ff2a55"><polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2"/></svg>`;
            } else {
                hudBossBadgeIcon.innerHTML = `<svg class="svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="#00f0ff"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
            }
        }
        hudBossBadge.style.display = 'flex';

        if (bossBadgeTimer) clearTimeout(bossBadgeTimer);
        bossBadgeTimer = setTimeout(() => {
            if (hudBossBadge) hudBossBadge.style.display = 'none';
        }, 1800);
    }

    function startTrickshot(lvlId) {
        state.mode = 'trickshot';
        state.phase = 'playing';

        const lvl = TRICKSHOT_LEVELS.find(l => l.id === Number(lvlId)) || TRICKSHOT_LEVELS[0];
        trickshotCurrentLevel = lvl;
        trickshotShotsLeft = lvl.maxShots;
        trickshotShotsTaken = 0;
        trickshotPuckInMotion = false;
        trickshotRestFrames = 0;

        // Отключаем и убираем биту бота за пределы поля
        topMallet.x = 0;
        topMallet.z = -999;
        topMallet.vx = 0;
        topMallet.vz = 0;

        _resetTrickshotPositions(lvl);

        // Строим 3D препятствия (бамперы, барьеры, порталы)
        Arena3D.buildTrickshotObstacles(lvl);
        Arena3D.setBossForcefield(false);

        _updateTrickshotHUD();

        showOverlay(null);
        btnHome.style.display = 'flex';
        if (btnPause) btnPause.style.display = 'flex';
        VFX3D.clear();
        PowerUpManager3D.reset();

        AudioManager.boot();
        AudioManager.startBGM();
    }

    function _resetTrickshotPositions(lvl) {
        playerMallet.x = 0;
        playerMallet.z = WORLD.HALF_L - 2.0;
        playerMallet.vx = 0;
        playerMallet.vz = 0;
        playerMallet.frozenUntil = 0;
        playerMallet.shieldUntil = 0;
        playerMallet.hasSuperShot = false;

        p1InputX = playerMallet.x;
        p1InputZ = playerMallet.z;

        const startX = lvl.puckStart ? lvl.puckStart.x : 0;
        const startZ = lvl.puckStart ? lvl.puckStart.z : 4.2;

        pucks = [{
            x: startX,
            z: startZ,
            vx: 0,
            vz: 0,
            onFire: false,
            stuckFrames: 0
        }];
        trickshotPuckInMotion = false;
        trickshotRestFrames = 0;

        if (lvl && lvl.obstacles) {
            for (const obs of lvl.obstacles) {
                if (obs.type === 'portal') obs.lastWarp = 0;
            }
        }
        Arena3D.resetTrickshotMovingObstacles();
    }

    function _updateTrickshotHUD() {
        if (!hudTrickshot || !trickshotCurrentLevel) return;
        const lang = I18n.getLang();
        const lvlName = trickshotCurrentLevel['name_' + lang] || trickshotCurrentLevel.name_ru;
        if (hudTsLevel) {
            hudTsLevel.textContent = `${(I18n.t('trickshot_level') || 'УРОВЕНЬ').toUpperCase()} ${trickshotCurrentLevel.id} — ${lvlName.toUpperCase()}`;
        }
        if (hudTsShots) {
            hudTsShots.textContent = `${trickshotShotsLeft} / ${trickshotCurrentLevel.maxShots}`;
        }
    }

    function _handleTrickshotGoal() {
        state.phase = 'goal';
        QuestManager.onGoal();
        Haptics.goal();

        const equippedFX = SaveManager.get().equippedGoalFX || 'confetti';
        VFX3D.triggerGoalCelebration(true, equippedFX);
        AudioManager.playGoalCelebration(equippedFX);
        VFX3D.screenShake(0.45);

        // Расчет звезд
        let stars = 1;
        if (trickshotShotsTaken <= trickshotCurrentLevel.star3) {
            stars = 3;
        } else if (trickshotShotsTaken <= trickshotCurrentLevel.star2) {
            stars = 2;
        }

        SaveManager.saveTrickshotResult(trickshotCurrentLevel.id, stars);
        SaveManager.addCoins(trickshotCurrentLevel.bounty);
        if (typeof AchievementManager !== 'undefined') AchievementManager.checkAll();
        if (typeof BattlePassManager !== 'undefined') BattlePassManager.addXP(50, 'trickshot');

        const lvl = trickshotCurrentLevel;
        const lang = I18n.getLang();
        const lvlName = lvl['name_' + lang] || lvl.name_ru;

        const resTitle = document.getElementById('ts-result-title');
        const resSub = document.getElementById('ts-result-sub');
        const resStars = document.getElementById('ts-result-stars');
        const resCoins = document.getElementById('ts-reward-coins');
        const nextBtn = document.getElementById('btn-ts-next');

        if (resTitle) {
            resTitle.className = 'result-win';
            resTitle.textContent = I18n.t('trickshot_cleared');
        }
        if (resSub) {
            resSub.textContent = `${lvlName} (${trickshotShotsTaken} / ${lvl.maxShots})`;
        }
        if (resStars) {
            resStars.innerHTML = `
                ${getStarSvg(stars >= 1)}
                ${getStarSvg(stars >= 2)}
                ${getStarSvg(stars >= 3)}
            `;
        }
        if (resCoins) {
            resCoins.textContent = `+${lvl.bounty} ${I18n.t('coins')}`;
        }
        const coinBanner = document.getElementById('ts-reward-coins-banner');
        if (coinBanner) coinBanner.style.display = 'inline-flex';

        if (nextBtn) {
            nextBtn.style.display = lvl.id < 10 ? 'block' : 'none';
        }

        setTimeout(() => {
            showOverlay('trickshot-result');
            AudioManager.playWin();
            VKService.showInterstitial();
        }, 1400);
    }

    function _handleTrickshotFailed() {
        state.phase = 'end';
        AudioManager.playLose();

        const lvl = trickshotCurrentLevel;
        const lang = I18n.getLang();
        const lvlName = lvl['name_' + lang] || lvl.name_ru;

        const resTitle = document.getElementById('ts-result-title');
        const resSub = document.getElementById('ts-result-sub');
        const resStars = document.getElementById('ts-result-stars');
        const nextBtn = document.getElementById('btn-ts-next');
        const coinBanner = document.getElementById('ts-reward-coins-banner');

        if (resTitle) {
            resTitle.className = 'result-lose';
            resTitle.textContent = I18n.t('trickshot_failed');
        }
        if (resSub) {
            resSub.textContent = lvlName;
        }
        if (resStars) {
            resStars.innerHTML = `
                ${getStarSvg(false)}
                ${getStarSvg(false)}
                ${getStarSvg(false)}
            `;
        }
        if (coinBanner) coinBanner.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';

        setTimeout(() => {
            showOverlay('trickshot-result');
        }, 600);
    }

    let hitstopTimer = 0;
    function triggerHitstop(ms = 40) {
        hitstopTimer = ms;
    }

    function _loop(ts) {
        requestAnimationFrame(_loop);
        const deltaMs = state.lastTime ? (ts - state.lastTime) : 16.667;
        const dt = Math.min(deltaMs / 16.667, 2.5);
        state.lastTime = ts;
        const dtSeconds = Math.min(0.05, Math.max(0.001, deltaMs * 0.001));

        // Воспроизведение кинематографичного повтора голов (Instant Replay Slow-Mo 0.35x)
        if (ReplayManager.isPlaying()) {
            ReplayManager.update(dtSeconds);
            _render(dtSeconds);
            return;
        }

        // Хитстоп (Hitstop / Micro-freeze): микро-задержка на 30-50 мс при мощных ударах
        if (hitstopTimer > 0) {
            hitstopTimer -= deltaMs;
            _render(dtSeconds);
            return;
        }

        _update(dt);
        _render(dtSeconds);
    }

    function _updateTrickshotMode(dt) {
        const lvl = trickshotCurrentLevel;
        if (!lvl) return;
        const puck = pucks[0];
        if (!puck) return;

        // 1. Движение биты игрока
        const kbSpeed = 0.22;
        if (keys['ArrowLeft'] || keys['KeyA']) p1InputX -= kbSpeed;
        if (keys['ArrowRight'] || keys['KeyD']) p1InputX += kbSpeed;
        if (keys['ArrowUp'] || keys['KeyW']) p1InputZ -= kbSpeed;
        if (keys['ArrowDown'] || keys['KeyS']) p1InputZ += kbSpeed;

        const tX = Math.max(-WORLD.HALF_W + WORLD.MALLET_R, Math.min(WORLD.HALF_W - WORLD.MALLET_R, p1InputX));
        let tZ = Math.max(0.5, Math.min(WORLD.HALF_L - WORLD.MALLET_R, p1InputZ));
        if (!trickshotPuckInMotion) {
            tZ = Math.max(puck.z + WORLD.MALLET_R + WORLD.PUCK_R * 0.4, tZ);
        }

        const prevX = playerMallet.x;
        const prevZ = playerMallet.z;
        const dx = tX - playerMallet.x;
        const dz = tZ - playerMallet.z;
        const dist = Math.hypot(dx, dz);
        const moveStep = Math.min(dist * 0.45, WORLD.MAX_MALLET_SPEED);
        if (dist > 0.001) {
            playerMallet.x += (dx / dist) * moveStep;
            playerMallet.z += (dz / dist) * moveStep;
        }
        playerMallet.vx = playerMallet.x - prevX;
        playerMallet.vz = playerMallet.z - prevZ;

        topMallet.x = 0;
        topMallet.z = -999;

        // 2. Физика шайбы
        puck.vx *= Math.pow(WORLD.PUCK_FRICTION, dt);
        puck.vz *= Math.pow(WORLD.PUCK_FRICTION, dt);

        const spd = Math.hypot(puck.vx, puck.vz);
        const substeps = Math.max(1, Math.ceil(spd / (WORLD.PUCK_R * 0.4)));

        for (let s = 0; s < substeps; s++) {
            puck.x += puck.vx / substeps;
            puck.z += puck.vz / substeps;

            Physics.resolveWalls(puck, false, false);
            Physics.resolveMalletPuck(playerMallet, puck, true);
            Physics.resolveTrickshotObstacles(puck, lvl.obstacles);

            const goal = Physics.checkGoal(puck);
            if (goal === 'player') {
                _handleTrickshotGoal();
                return;
            } else if (goal === 'top') {
                if (trickshotShotsLeft > 0) {
                    _resetTrickshotPositions(lvl);
                    Announcer.show(I18n.t('trickshot_retry') || 'ПОВТОРИ!', '#ffca28');
                } else {
                    _handleTrickshotFailed();
                }
                return;
            }
        }

        // Фиксация выстрела
        if (!trickshotPuckInMotion && spd > 0.06) {
            trickshotPuckInMotion = true;
            trickshotShotsTaken++;
            trickshotShotsLeft--;
            _updateTrickshotHUD();
        }

        if (trickshotPuckInMotion && spd < 0.025) {
            trickshotRestFrames++;
            if (trickshotRestFrames > 45) {
                if (trickshotShotsLeft > 0) {
                    _resetTrickshotPositions(lvl);
                    Announcer.show(I18n.t('trickshot_retry') || 'ПОВТОРИ!', '#ffca28');
                } else {
                    _handleTrickshotFailed();
                }
                return;
            }
        } else {
            trickshotRestFrames = 0;
        }

        // Лазерный шлейф
        puck.trail = puck.trail || [];
        if (spd > 0.04) {
            puck.trail.unshift({ x: puck.x, z: puck.z });
            if (puck.trail.length > 5) puck.trail.pop();
        } else if (puck.trail.length > 0) {
            puck.trail.pop();
        }

        Arena3D.updatePucks(pucks);
        Arena3D.update(playerMallet, topMallet);
    }

    function _update(dt) {
        if (state.phase !== 'playing' || state.isPaused) {
            Arena3D.update(playerMallet, topMallet);
            return;
        }

        // Запись кадра в кольцевой буфер Instant Replay (180 кадров)
        if (pucks && pucks[0]) {
            ReplayManager.recordFrame(pucks[0], playerMallet, topMallet);
        }

        if (state.mode === 'trickshot') {
            _updateTrickshotMode(dt);
            return;
        }

        // 1. Игрок 1
        const isP1Frozen = playerMallet.frozenUntil && Date.now() < playerMallet.frozenUntil;
        if (!isP1Frozen) {
            const kbSpeed = 0.22;
            if (keys['ArrowLeft']) p1InputX -= kbSpeed;
            if (keys['ArrowRight']) p1InputX += kbSpeed;
            if (keys['ArrowUp']) p1InputZ -= kbSpeed;
            if (keys['ArrowDown']) p1InputZ += kbSpeed;

            const tX = Math.max(-WORLD.HALF_W + WORLD.MALLET_R, Math.min(WORLD.HALF_W - WORLD.MALLET_R, p1InputX));
            const tZ = Math.max(0.25, Math.min(WORLD.HALF_L - WORLD.MALLET_R, p1InputZ));

            const prevX = playerMallet.x;
            const prevZ = playerMallet.z;

            const dx = tX - playerMallet.x;
            const dz = tZ - playerMallet.z;
            const dist = Math.hypot(dx, dz);

            // Плавное следование за курсором/пальцем с органичным сглаживанием
            const moveStep = Math.min(dist * 0.45, WORLD.MAX_MALLET_SPEED);
            if (dist > 0.001) {
                playerMallet.x += (dx / dist) * moveStep;
                playerMallet.z += (dz / dist) * moveStep;
            }

            // Честная физическая скорость биты для удара по шайбе
            playerMallet.vx = playerMallet.x - prevX;
            playerMallet.vz = playerMallet.z - prevZ;
        }

        // 2. Игрок 2 или AI
        if (state.mode === 'pvp') {
            const isP2Frozen = topMallet.frozenUntil && Date.now() < topMallet.frozenUntil;
            if (!isP2Frozen) {
                const kbSpeed = 0.22;
                if (keys['KeyA']) p2InputX -= kbSpeed;
                if (keys['KeyD']) p2InputX += kbSpeed;
                if (keys['KeyW']) p2InputZ -= kbSpeed;
                if (keys['KeyS']) p2InputZ += kbSpeed;

                const tX = Math.max(-WORLD.HALF_W + WORLD.MALLET_R, Math.min(WORLD.HALF_W - WORLD.MALLET_R, p2InputX));
                const tZ = Math.max(-WORLD.HALF_L + WORLD.MALLET_R, Math.min(-0.25, p2InputZ));

                const prevX = topMallet.x;
                const prevZ = topMallet.z;

                const dx = tX - topMallet.x;
                const dz = tZ - topMallet.z;
                const dist = Math.hypot(dx, dz);

                const moveStep = Math.min(dist * 0.45, WORLD.MAX_MALLET_SPEED);
                if (dist > 0.001) {
                    topMallet.x += (dx / dist) * moveStep;
                    topMallet.z += (dz / dist) * moveStep;
                }

                topMallet.vx = topMallet.x - prevX;
                topMallet.vz = topMallet.z - prevZ;
            }
        } else {
            const aiCfg = state.mode === 'tournament'
                ? { ...TOURNAMENT_ENEMIES[state.tourneyStage] }
                : (state.difficulty === 'easy' ? { speed: 0.14, reaction: 0.10, attackBias: 0.35, predSteps: 8, noise: 0.22 }
                   : state.difficulty === 'hard' ? { speed: 0.26, reaction: 0.25, attackBias: 0.85, predSteps: 20, noise: 0.02 }
                   : { speed: 0.20, reaction: 0.18, attackBias: 0.60, predSteps: 14, noise: 0.10 });

            // Спец-способности боссов в турнире
            if (state.mode === 'tournament') {
                const now = Date.now();
                const puck = pucks[0];

                if (state.tourneyStage === 0) {
                    // Босс 1: Спиди (Турбо-Рывок)
                    if (now > bossAbilityCooldown && puck && (puck.z > 0 || puck.vz < -0.05)) {
                        bossAbilityActive = true;
                        bossAbilityTimer = now + 1400;
                        bossAbilityCooldown = now + 8000;
                        AudioManager.playTurboDash();
                        Haptics.tap();
                        _showBossBadge('dash', I18n.t('boss_dash'));
                    }
                    if (bossAbilityActive) {
                        if (now < bossAbilityTimer) {
                            aiCfg.speed *= 2.3;
                            aiCfg.reaction *= 2.5;
                            VFX3D.createSparks(topMallet.x, 0.2, topMallet.z, -topMallet.vx, -topMallet.vz, 0x00f0ff, 2);
                        } else {
                            bossAbilityActive = false;
                        }
                    }
                } else if (state.tourneyStage === 1) {
                    // Босс 2: Стена (Силовой Барьер)
                    if (now > bossAbilityCooldown && puck && puck.z < -2.0 && puck.vz < -0.12) {
                        bossAbilityActive = true;
                        bossAbilityTimer = now + 2400;
                        bossAbilityCooldown = now + 11000;
                        Arena3D.setBossForcefield(true);
                        AudioManager.playShield();
                        _showBossBadge('shield', I18n.t('boss_shield'));
                    }
                    if (bossAbilityActive) {
                        if (now >= bossAbilityTimer) {
                            bossAbilityActive = false;
                            Arena3D.setBossForcefield(false);
                        }
                    }
                } else if (state.tourneyStage === 2) {
                    // Босс 3: Брут (Сейсмо-Удар)
                    if (now > bossAbilityCooldown && puck && Math.hypot(puck.x - topMallet.x, puck.z - topMallet.z) < 2.5) {
                        bossQuakeSmashArmed = true;
                        bossAbilityTimer = now + 3000;
                        bossAbilityCooldown = now + 9000;
                        _showBossBadge('smash', I18n.t('boss_smash'));
                    }
                    if (bossQuakeSmashArmed && now > bossAbilityTimer) {
                        bossQuakeSmashArmed = false;
                    }
                }
            }

            AIAgent.update(topMallet, pucks[0], aiCfg);
        }

        // 3. Бонусы
        PowerUpManager3D.update(pucks, playerMallet, topMallet, state.powerupsEnabled);

        // 4. Физика шайб
        const pShield = playerMallet.shieldUntil && Date.now() < playerMallet.shieldUntil;
        const tShield = topMallet.shieldUntil && Date.now() < topMallet.shieldUntil;

        for (let i = pucks.length - 1; i >= 0; i--) {
            const puck = pucks[i];
            puck.vx *= Math.pow(WORLD.PUCK_FRICTION, dt);
            puck.vz *= Math.pow(WORLD.PUCK_FRICTION, dt);

            const spd = Math.hypot(puck.vx, puck.vz);
            const substeps = Math.max(1, Math.ceil(spd / (WORLD.PUCK_R * 0.4)));

            for (let s = 0; s < substeps; s++) {
                puck.x += puck.vx / substeps;
                puck.z += puck.vz / substeps;

                ArenaHazards.checkHazards(puck, playerMallet, topMallet, SaveManager.get().equippedArena);

                Physics.resolveWalls(puck, pShield, tShield);
                Physics.checkBossForcefield(puck, bossAbilityActive && state.mode === 'tournament' && state.tourneyStage === 1 && Date.now() < bossAbilityTimer);
                Physics.resolveMalletPuck(playerMallet, puck, true);
                if (Physics.resolveMalletPuck(topMallet, puck, false)) {
                    if (bossQuakeSmashArmed && state.mode === 'tournament' && state.tourneyStage === 2) {
                        bossQuakeSmashArmed = false;
                        puck.onFire = true;
                        puck.vz = Math.abs(puck.vz) * 1.5 + 0.08;
                        puck.vx *= 1.25;
                        AudioManager.playQuakeSmash();
                        Haptics.superShot();
                        VFX3D.screenShake(0.65);
                        VFX3D.createShockwave(topMallet.x, topMallet.z, 0xff2a55, 3.0);
                        VFX3D.createSparks(topMallet.x, 0.2, topMallet.z, 0, 1, 0xff4500, 24);
                        VFX3D.createSparks(puck.x, 0.2, puck.z, puck.vx, puck.vz, 0xffca28, 18);
                        Announcer.show(I18n.t('boss_smash'), '#ff2a55');
                    }
                }

                const goal = Physics.checkGoal(puck);
                if (goal) {
                    _handleGoal(goal);
                    return;
                }
            }

            // Система воздушных сопел стола (Anti-Stuck Table Air Jets)
            // Если шайба где-либо замедлилась или застряла дольше 1 сек — стол дает мягкий воздушный импульс к центру
            if (spd < 0.04) {
                puck.stuckFrames = (puck.stuckFrames || 0) + 1;
                if (puck.stuckFrames > 60) {
                    const toCenterX = -puck.x;
                    const toCenterZ = -puck.z;
                    const dist = Math.hypot(toCenterX, toCenterZ) || 1;
                    puck.vx = (toCenterX / dist) * 0.16 + (Math.random() - 0.5) * 0.04;
                    puck.vz = (toCenterZ / dist) * 0.16;
                    puck.stuckFrames = 0;
                    VFX3D.createShockwave(puck.x, puck.z, 0x00f0ff, 1.4);
                    AudioManager.playWall();
                }
            } else {
                puck.stuckFrames = 0;
            }

            // Запись лазерного шлейфа
            puck.trail = puck.trail || [];
            if (spd > 0.04) {
                puck.trail.unshift({ x: puck.x, z: puck.z });
                if (puck.trail.length > 5) puck.trail.pop();
            } else if (puck.trail.length > 0) {
                puck.trail.pop();
            }
        }

        Arena3D.updatePucks(pucks);
        Arena3D.update(playerMallet, topMallet);
    }

    function _render(dt = 0.016) {
        Arena3D.render(dt);
    }

    function _setupEvents() {
        window.addEventListener('resize', _handleResize);
        window.addEventListener('orientationchange', () => setTimeout(_handleResize, 300));

        window.addEventListener('keydown', e => {
            keys[e.code] = true;
            if (e.code === 'Escape' || e.code === 'KeyP') {
                if (state.phase === 'playing' || state.isPaused) {
                    togglePause();
                }
            }
        });
        window.addEventListener('keyup', e => { keys[e.code] = false; });

        // Raycasting управление мышью
        canvas.addEventListener('mousemove', e => {
            const hit = Arena3D.getRayIntersection(e.clientX, e.clientY, canvas);
            if (hit) {
                p1InputX = hit.x;
                p1InputZ = hit.z;
            }
        });

        // Сенсорное управление
        canvas.addEventListener('touchstart', _onTouch, { passive: false });
        canvas.addEventListener('touchmove', _onTouch, { passive: false });

        document.addEventListener('visibilitychange', () => {
            state.isPaused = document.hidden;
            if (document.hidden) AudioManager.stopBGM();
            else if (state.phase === 'playing') AudioManager.startBGM();
        });

        document.getElementById('btn-lang').addEventListener('click', () => {
            I18n.toggleLang();
            _updateScoreboard();
        });

        const muteBtn = document.getElementById('btn-mute');
        if (muteBtn) {
            muteBtn.addEventListener('click', () => {
                const m = !AudioManager.getUserMute();
                AudioManager.setUserMute(m);
                muteBtn.classList.toggle('muted', m);
                SaveManager.get().sound = !m;
                SaveManager.save();
            });
        }

        const musicBtn = document.getElementById('btn-music');
        if (musicBtn) {
            musicBtn.addEventListener('click', () => {
                const nextMuted = !SynthwaveAudio.isMuted();
                SynthwaveAudio.setMuted(nextMuted);
                musicBtn.classList.toggle('active', !nextMuted);
                musicBtn.classList.toggle('muted', nextMuted);
                SaveManager.get().music = !nextMuted;
                SaveManager.save();
            });
        }

        const skipReplayBtn = document.getElementById('btn-skip-replay');
        if (skipReplayBtn) {
            skipReplayBtn.addEventListener('click', () => {
                ReplayManager.stopReplay();
            });
        }

        btnHome?.addEventListener('click', () => {
            if (state.isPaused) togglePause(false);
            ReplayManager.stopReplay();
            AudioManager.stopBGM();
            state.phase = 'menu';
            showOverlay('menu');
        });

        btnPause?.addEventListener('click', () => {
            togglePause();
        });

        btnPauseResume?.addEventListener('click', () => {
            togglePause(false);
        });

        btnPauseRestart?.addEventListener('click', () => {
            togglePause(false);
            startMatch();
        });

        btnPauseMenu?.addEventListener('click', () => {
            togglePause(false);
            ReplayManager.stopReplay();
            AudioManager.stopBGM();
            state.phase = 'menu';
            showOverlay('menu');
        });

        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.mode = card.dataset.mode;

                const diffPanel = document.getElementById('difficulty-panel');
                if (diffPanel) diffPanel.style.display = state.mode === 'ai' ? 'block' : 'none';
                const btnStart = document.getElementById('btn-start');
                if (btnStart) btnStart.style.display = 'inline-flex';

                if (state.mode === 'shop') _openShop();
                else if (state.mode === 'tournament') _openTournament();
                else if (state.mode === 'trickshot') showOverlay('trickshot');
                else if (state.mode === 'trophy') showOverlay('trophy');
                else if (state.mode === 'ranked') {
                    if (typeof RankedManager !== 'undefined') RankedManager.showView('hub');
                    showOverlay('ranked');
                }
            });
        });

        document.getElementById('check-powerups').addEventListener('change', e => {
            state.powerupsEnabled = e.target.checked;
        });

        document.getElementById('check-hazards')?.addEventListener('change', e => {
            SaveManager.get().hazardsEnabled = e.target.checked;
            SaveManager.save();
            Arena3D.buildHazards();
        });

        document.getElementById('btn-open-wheel')?.addEventListener('click', () => {
            showOverlay('wheel');
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && overlayWheel?.classList.contains('active')) {
                LuckyWheel.updateUI();
            }
        });

        document.getElementById('btn-wheel-back')?.addEventListener('click', () => {
            showOverlay('menu');
        });

        document.getElementById('btn-wheel-spin-free')?.addEventListener('click', () => {
            if (SaveManager.canFreeSpin() && !LuckyWheel.isSpinning()) {
                LuckyWheel.spin(true);
            }
        });

        document.getElementById('btn-wheel-spin-ad')?.addEventListener('click', () => {
            if (LuckyWheel.isSpinning()) return;
            VKService.showRewarded({
                onRewarded: () => {
                    LuckyWheel.spin(false);
                }
            });
        });

        document.getElementById('btn-add-shortcut')?.addEventListener('click', async () => {
            const success = await VKService.showShortcutPrompt();
            if (success) {
                SaveManager.get().shortcutClaimed = true;
                SaveManager.addCoins(100);
                const btn = document.getElementById('btn-add-shortcut');
                if (btn) btn.style.display = 'none';
                Announcer.show('+100 COINS!', '#ffd700');
            }
        });

        document.querySelectorAll('.btn-diff').forEach(b => {
            b.addEventListener('click', () => {
                document.querySelectorAll('.btn-diff').forEach(btn => btn.classList.remove('selected'));
                b.classList.add('selected');
                state.difficulty = b.dataset.diff;
            });
        });

        document.getElementById('btn-start').addEventListener('click', () => {
            if (state.mode === 'trickshot') {
                showOverlay('trickshot');
                return;
            }
            if (state.mode === 'tournament') {
                _openTournament();
                return;
            }
            if (state.mode === 'shop') {
                _openShop();
                return;
            }
            if (state.mode === 'trophy') {
                showOverlay('trophy');
                return;
            }
            if (state.mode === 'ranked') {
                if (typeof RankedManager !== 'undefined') RankedManager.showView('hub');
                showOverlay('ranked');
                return;
            }
            startMatch();
        });
        document.getElementById('btn-restart').addEventListener('click', () => startMatch());
        document.getElementById('btn-end-home').addEventListener('click', () => showOverlay('menu'));

        document.getElementById('btn-tourney-back').addEventListener('click', () => showOverlay('menu'));
        document.getElementById('btn-tourney-play').addEventListener('click', () => startMatch());

        document.getElementById('btn-open-quests')?.addEventListener('click', () => {
            showOverlay('quests');
            QuestManager.renderQuests();
        });
        document.getElementById('btn-quests-back')?.addEventListener('click', () => showOverlay('menu'));

        document.getElementById('btn-open-leaderboard')?.addEventListener('click', () => {
            showOverlay('leaderboard');
            _updateLeaderboardModal();
        });
        document.getElementById('btn-lead-back')?.addEventListener('click', () => showOverlay('menu'));
        const refreshLbBtn = document.getElementById('btn-vk-lb') || document.getElementById('btn-yandex-lb');
        refreshLbBtn?.addEventListener('click', () => {
            VKService.submitScore(SaveManager.get().tourneyWins || 0);
            _renderLeaderboardTable();
        });

        btnUltimate?.addEventListener('click', () => _activateUltimate());

        let arenasOrigin = 'menu';
        document.getElementById('btn-open-arenas')?.addEventListener('click', () => {
            arenasOrigin = 'menu';
            const backBtn = document.getElementById('btn-arenas-back');
            if (backBtn) backBtn.textContent = I18n.t('btn_back');
            showOverlay('arenas');
        });
        document.getElementById('btn-arenas-hud')?.addEventListener('click', () => {
            arenasOrigin = (state.phase === 'menu' || !state.phase) ? 'menu' : 'game';
            const backBtn = document.getElementById('btn-arenas-back');
            if (backBtn) backBtn.textContent = arenasOrigin === 'game' ? I18n.t('theme_btn_to_game') : I18n.t('btn_back');
            showOverlay('arenas');
        });
        document.getElementById('btn-arenas-back')?.addEventListener('click', () => {
            if (arenasOrigin === 'game' && state.phase && state.phase !== 'menu') {
                showOverlay(null);
            } else {
                showOverlay('menu');
            }
        });
        document.getElementById('btn-shop-back').addEventListener('click', () => showOverlay('menu'));
        document.getElementById('btn-free-coins').addEventListener('click', () => _showRewardCoins());
        document.getElementById('btn-shop-ad').addEventListener('click', () => _showRewardCoins());
        document.getElementById('btn-reward-x2').addEventListener('click', () => {
            VKService.showRewarded({
                onRewarded: () => {
                    SaveManager.addCoins(50);
                    document.getElementById('end-coins-earned').textContent = `x2! (+100 ${I18n.t('coins')})`;
                }
            });
        });

        document.getElementById('btn-trickshot-back')?.addEventListener('click', () => showOverlay('menu'));
        document.getElementById('btn-ts-next')?.addEventListener('click', () => {
            if (trickshotCurrentLevel && trickshotCurrentLevel.id < 10) {
                startTrickshot(trickshotCurrentLevel.id + 1);
            } else {
                showOverlay('trickshot');
            }
        });
        document.getElementById('btn-ts-retry')?.addEventListener('click', () => {
            if (trickshotCurrentLevel) {
                startTrickshot(trickshotCurrentLevel.id);
            }
        });
        document.getElementById('btn-ts-to-levels')?.addEventListener('click', () => {
            showOverlay('trickshot');
        });

        document.getElementById('btn-trophy-back')?.addEventListener('click', () => showOverlay('menu'));
        document.getElementById('btn-lead-trophy-road')?.addEventListener('click', () => showOverlay('trophy'));

        document.getElementById('btn-open-achievements')?.addEventListener('click', () => {
            showOverlay('achievements');
        });
        document.getElementById('btn-achievements-back')?.addEventListener('click', () => showOverlay('menu'));

        document.getElementById('btn-open-battle-pass')?.addEventListener('click', () => {
            showOverlay('battle-pass');
        });
        document.getElementById('btn-bp-back')?.addEventListener('click', () => showOverlay('menu'));

        // Рейтинг и P2P комнаты (Ranked & Multiplayer)
        document.getElementById('btn-ranked-back')?.addEventListener('click', () => {
            if (typeof MultiplayerManager !== 'undefined') MultiplayerManager.cancelMatchmaking();
            showOverlay('menu');
        });
        document.getElementById('btn-ranked-find-match')?.addEventListener('click', () => {
            if (typeof MultiplayerManager !== 'undefined') MultiplayerManager.startMatchmaking();
        });
        document.getElementById('btn-ranked-cancel-search')?.addEventListener('click', () => {
            if (typeof MultiplayerManager !== 'undefined') MultiplayerManager.cancelMatchmaking();
        });
        document.getElementById('btn-ranked-open-rooms')?.addEventListener('click', () => {
            if (typeof RankedManager !== 'undefined') RankedManager.showView('rooms');
        });
        document.getElementById('btn-rooms-back')?.addEventListener('click', () => {
            if (typeof RankedManager !== 'undefined') RankedManager.showView('hub');
        });
        document.getElementById('btn-room-create')?.addEventListener('click', () => {
            if (typeof MultiplayerManager !== 'undefined') MultiplayerManager.createRoom();
        });
        document.getElementById('btn-room-join')?.addEventListener('click', () => {
            const input = document.getElementById('input-room-code');
            if (input && typeof MultiplayerManager !== 'undefined') {
                MultiplayerManager.joinRoom(input.value);
            }
        });
        document.getElementById('btn-room-copy')?.addEventListener('click', () => {
            const code = document.getElementById('room-code-display')?.textContent;
            if (code && navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code).then(() => {
                    if (typeof Announcer !== 'undefined' && Announcer.show) {
                        Announcer.show(I18n.t('code_copied') || 'Код скопирован', '#00f0ff');
                    }
                }).catch(() => {});
            }
        });

        _setupShopTabs();
    }

    async function _renderLeaderboardTable() {
        const container = document.getElementById('lead-table-container');
        if (!container) return;
        container.innerHTML = `<div class="lead-empty-msg">Загрузка таблицы лидеров...</div>`;

        const entries = await VKService.fetchLeaderboard(10);
        if (!entries || entries.length === 0) {
            container.innerHTML = `<div class="lead-empty-msg">Таблица лидеров пуста</div>`;
            return;
        }

        let html = `
            <table class="lead-table">
                <thead>
                    <tr>
                        <th style="width: 38px; text-align: center;">#</th>
                        <th style="text-align: left;">Игрок</th>
                        <th style="text-align: right;">Кубки</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (const e of entries) {
            const badgeClass = e.rank === 1 ? 'rank-1' : e.rank === 2 ? 'rank-2' : e.rank === 3 ? 'rank-3' : 'rank-other';
            const rowClass = e.isUser ? 'lead-row is-current' : 'lead-row';
            const initial = (e.name && e.name[0]) ? e.name[0].toUpperCase() : 'P';

            html += `
                <tr class="${rowClass}">
                    <td style="text-align: center;">
                        <span class="lead-rank-badge ${badgeClass}">${e.rank}</span>
                    </td>
                    <td>
                        <div class="lead-player-cell">
                            <div class="lead-avatar-placeholder">${initial}</div>
                            <span>${e.name}</span>
                        </div>
                    </td>
                    <td style="text-align: right; font-weight: 800; color: #ffd700;">${e.score}</td>
                </tr>
            `;
        }

        html += `</tbody></table>`;
        container.innerHTML = html;
    }

    function _updateLeaderboardModal() {
        const d = SaveManager.get();
        const cupsEl = document.getElementById('lead-cups');
        const goalsEl = document.getElementById('lead-goals');
        const rankEl = document.getElementById('lead-rank');
        if (cupsEl) cupsEl.textContent = d.tourneyWins || 0;
        if (goalsEl) goalsEl.textContent = d.totalGoals || 0;
        if (rankEl) {
            const wins = d.tourneyWins || 0;
            let rank = I18n.t('rank_novice');
            if (wins >= 10) rank = I18n.t('rank_champ');
            else if (wins >= 5) rank = I18n.t('rank_master');
            else if (wins >= 2) rank = I18n.t('rank_veteran');
            rankEl.textContent = rank.toUpperCase();
        }

        VKService.submitScore(d.tourneyWins || 0);
        _renderLeaderboardTable();
    }

    function _showRewardCoins() {
        VKService.showRewarded({ onRewarded: () => SaveManager.addCoins(150) });
    }

    function _openTournament() {
        showOverlay('tournament');
        document.getElementById('stage-quarter').className = `tournament-stage ${state.tourneyStage === 0 ? 'current' : state.tourneyStage > 0 ? 'completed' : ''}`;
        document.getElementById('stage-semi').className = `tournament-stage ${state.tourneyStage === 1 ? 'current' : state.tourneyStage > 1 ? 'completed' : ''}`;
        document.getElementById('stage-final').className = `tournament-stage ${state.tourneyStage === 2 ? 'current' : ''}`;
    }

    function _openShop() {
        showOverlay('shop');
        _renderShopItems('mallets');
    }

    function _setupShopTabs() {
        document.querySelectorAll('.shop-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                _renderShopItems(tab.dataset.tab);
            });
        });
    }

    function toCssHex(colorVal, fallback = '#00f0ff') {
        if (typeof colorVal === 'number') {
            return '#' + ((colorVal >>> 0) & 0xffffff).toString(16).padStart(6, '0');
        }
        return colorVal || fallback;
    }

    function _renderShopItems(category) {
        const container = document.getElementById('shop-container');
        container.innerHTML = '';

        const items = SKINS[category] || [];
        const isMallet = category === 'mallets';
        const isPuck = category === 'pucks';
        const isGoalFX = category === 'goalfx';

        if (!SaveManager.get().unlockedPucks) SaveManager.get().unlockedPucks = ['cyber'];
        if (!SaveManager.get().unlockedMallets) SaveManager.get().unlockedMallets = ['cyan'];
        if (!SaveManager.get().unlockedArenas) SaveManager.get().unlockedArenas = ['cyber'];
        if (!SaveManager.get().unlockedGoalFX) SaveManager.get().unlockedGoalFX = ['confetti'];

        const equippedId = isMallet
            ? SaveManager.get().equippedMallet
            : isPuck
                ? (SaveManager.get().equippedPuck || 'cyber')
                : isGoalFX
                    ? (SaveManager.get().equippedGoalFX || 'confetti')
                    : SaveManager.get().equippedArena;
        const unlockedList = isMallet
            ? SaveManager.get().unlockedMallets
            : isPuck
                ? SaveManager.get().unlockedPucks
                : isGoalFX
                    ? SaveManager.get().unlockedGoalFX
                    : SaveManager.get().unlockedArenas;

        for (const item of items) {
            const isUnlocked = unlockedList.includes(item.id);
            const isEquipped = equippedId === item.id;
            const isExclusive = !!item.exclusive;
            const reqCups = item.reqCups || (item.exclusive === 'trophy_3' ? 3 : item.exclusive === 'trophy_12' ? 12 : 0);

            const div = document.createElement('div');
            div.className = `shop-item ${isEquipped ? 'equipped' : ''} ${!isUnlocked && isExclusive ? 'exclusive-locked' : ''}`;

            let previewInner = '';
            if (isMallet) {
                const col = toCssHex(item.color || item.hex);
                previewInner = `<div style="width:28px; height:28px; border-radius:50%; background:${col}; box-shadow:0 0 10px ${col}; border:2px solid #fff;"></div>`;
            } else if (isPuck) {
                const ringCol = toCssHex(item.ringHex !== undefined ? item.ringHex : item.ringColor);
                const bodyCol = toCssHex(item.bodyHex !== undefined ? item.bodyHex : 0x142844);
                const trailCol = toCssHex(item.trailColor);
                const chromaCls = item.isChroma ? ' is-chroma' : '';
                previewInner = `
                    <div class="puck-preview-ring${chromaCls}" style="border-color:${ringCol}; box-shadow:0 0 10px ${ringCol}; background:${bodyCol};">
                        <div class="puck-preview-dot" style="background:${ringCol};"></div>
                        <div class="puck-trail-dots">
                            <span class="puck-dot" style="background:${trailCol};"></span>
                            <span class="puck-dot" style="background:${trailCol};"></span>
                            <span class="puck-dot" style="background:${trailCol};"></span>
                        </div>
                    </div>
                `;
            } else if (isGoalFX) {
                const col = toCssHex(item.color);
                let svgIcon = '';
                if (item.id === 'confetti') {
                    svgIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="4" width="5" height="5" rx="1" fill="#00f0ff" transform="rotate(15 5 6)"/><rect x="15" y="3" width="5" height="5" rx="1" fill="#ff2a55" transform="rotate(-20 17 5)"/><rect x="10" y="14" width="5" height="5" rx="1" fill="#ffca28" transform="rotate(40 12 16)"/><rect x="4" y="16" width="4" height="4" rx="1" fill="#00ff88"/><circle cx="18" cy="16" r="2.5" fill="#b537f2"/></svg>`;
                } else if (item.id === 'lasernova') {
                    svgIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="${col}" stroke-width="2"><line x1="12" y1="2" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="2" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="8.46" y2="8.46"/><line x1="15.54" y1="15.54" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="8.46" y2="15.54"/><line x1="15.54" y1="8.46" x2="19.07" y2="4.93"/></svg>`;
                } else if (item.id === 'goldenspark') {
                    svgIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="${col}" stroke="#fff" stroke-width="0.8"><polygon points="12 2 14.5 9 22 9.5 16.5 14.5 18.5 22 12 17.5 5.5 22 7.5 14.5 2 9.5 9.5 9"/></svg>`;
                } else {
                    svgIcon = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="${col}" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="4 2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="${col}"/></svg>`;
                }
                previewInner = `<div class="goalfx-preview" style="border: 1.5px solid ${col}; box-shadow: 0 0 10px ${col}; background: rgba(0,0,0,0.6);">${svgIcon}</div>`;
            } else {
                const railCol = toCssHex(item.railColor);
                previewInner = `<div style="width:32px; height:20px; border-radius:4px; background:${item.bg1}; border:1.5px solid ${railCol}; box-shadow:0 0 8px ${railCol};"></div>`;
            }

            const coinSvg = `<svg class="svg-icon svg-coin" viewBox="0 0 24 24" width="14" height="14" fill="none" style="margin-right:2px;"><circle cx="12" cy="12" r="10" stroke="#ffca28" stroke-width="2" fill="#ff9800" fill-opacity="0.2"/><circle cx="12" cy="12" r="6" stroke="#ffca28" stroke-width="1.5"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" fill="#ffca28">C</text></svg>`;

            let priceHtml = '';
            if (isUnlocked) {
                priceHtml = isEquipped ? I18n.t('equipped') : I18n.t('equip');
            } else if (isExclusive) {
                const cupSvg = `<svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#ffca28" stroke-width="2" style="margin-right:2px;"><path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3"></path><path d="M18 9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3"></path><path d="M6 3h12v7a6 6 0 0 1-12 0V3z"></path><path d="M9 21h6"></path><path d="M12 16v5"></path></svg>`;
                priceHtml = `${cupSvg} ${I18n.t('shop_exclusive_trophy').replace('{N}', reqCups)}`;
            } else {
                priceHtml = `${coinSvg} ${item.price}`;
            }

            div.innerHTML = `
                <div class="item-preview" style="background: rgba(0,0,0,0.5);">
                    ${previewInner}
                </div>
                <div class="item-title">${item.name}</div>
                <div class="item-price">${priceHtml}</div>
            `;

            div.addEventListener('click', () => {
                if (isUnlocked) {
                    if (isMallet) {
                        SaveManager.get().equippedMallet = item.id;
                        Arena3D.updateMalletSkin();
                    } else if (isPuck) {
                        SaveManager.get().equippedPuck = item.id;
                        Arena3D.updatePuckSkin();
                    } else if (isGoalFX) {
                        SaveManager.get().equippedGoalFX = item.id;
                        AudioManager.playGoalCelebration(item.id);
                        VFX3D.triggerGoalCelebration(true, item.id);
                    } else {
                        ThemeManager.applyTheme(item.id, true);
                    }
                    SaveManager.save();
                    _renderShopItems(category);
                } else if (isExclusive) {
                    AudioManager.playWall();
                    Haptics.tap();
                    Announcer.show(I18n.t('exclusive_locked_msg').replace('{N}', reqCups), '#ffca28');
                } else if (SaveManager.get().coins >= item.price) {
                    SaveManager.addCoins(-item.price);
                    unlockedList.push(item.id);
                    if (isMallet) {
                        SaveManager.get().equippedMallet = item.id;
                        Arena3D.updateMalletSkin();
                    } else if (isPuck) {
                        SaveManager.get().equippedPuck = item.id;
                        Arena3D.updatePuckSkin();
                    } else if (isGoalFX) {
                        SaveManager.get().equippedGoalFX = item.id;
                        AudioManager.playGoalCelebration(item.id);
                        VFX3D.triggerGoalCelebration(true, item.id);
                    } else {
                        ThemeManager.applyTheme(item.id, true);
                    }
                    SaveManager.save();
                    _renderShopItems(category);
                } else {
                    _showRewardCoins();
                }
            });

            container.appendChild(div);
        }
    }

    function _onTouch(e) {
        e.preventDefault();
        for (let i = 0; i < e.touches.length; i++) {
            const touch = e.touches[i];
            const hit = Arena3D.getRayIntersection(touch.clientX, touch.clientY, canvas);
            if (hit) {
                if (state.mode === 'trickshot') {
                    p1InputX = hit.x;
                    p1InputZ = Math.max(0.5, hit.z);
                } else if (hit.z > 0) {
                    p1InputX = hit.x;
                    p1InputZ = hit.z;
                } else if (state.mode === 'pvp') {
                    p2InputX = hit.x;
                    p2InputZ = hit.z;
                }
            }
        }
        AudioManager.boot();
    }

    function _handleResize() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        canvas.width = vw;
        canvas.height = vh;
        canvas.style.width = vw + 'px';
        canvas.style.height = vh + 'px';
        Arena3D.resize(vw, vh);
    }

    return {
        init,
        startMatch,
        setPaused,
        togglePause,
        chargeUltimate,
        triggerHitstop,
        isPaused: () => state.isPaused,
        getState: () => state
    };
})();

if (typeof window !== 'undefined') {
    window.Game = Game;
}

document.addEventListener('DOMContentLoaded', () => Game.init());
