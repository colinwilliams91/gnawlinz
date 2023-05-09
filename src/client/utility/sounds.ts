import { sfxr } from 'jsfxr';
import { Howl, Howler } from 'howler';

/*
  **************************
  ***************************
  *******  SERIALIZED  *******
  *****************************
  ******************************
*/

const completeSound = {
  'oldParams': true,
  'wave_type': 1,
  'p_env_attack': 0,
  'p_env_sustain': 0.0061845641634239445,
  'p_env_punch': 0.33112352575202575,
  'p_env_decay': 0.42224467679257993,
  'p_base_freq': 0.6163338371900126,
  'p_freq_limit': 0,
  'p_freq_ramp': 0,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0.46100390698685967,
  'p_arp_speed': 0.615375664299941,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.017,
  'sample_rate': 44100,
  'sample_size': 8
};

const hitSound = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.00497446798196104,
  'p_env_punch': 0,
  'p_env_decay': 0.27305602036773946,
  'p_base_freq': 0.702415552635868,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.40721222573401317,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.013,
  'sample_rate': 44100,
  'sample_size': 8
};

const dodgeSound = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0.17438131008273375,
  'p_env_sustain': 0.15637345181284174,
  'p_env_punch': 0.588797374183849,
  'p_env_decay': 0.29876599486352895,
  'p_base_freq': 0.9816929500795846,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.3851615968243691,
  'p_freq_dramp': 0,
  'p_vib_strength': 0.4055071933338548,
  'p_vib_speed': 0.5738050940935221,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.31945267901102975,
  'p_pha_offset': 0.11394128305612272,
  'p_pha_ramp': -0.17563871418784363,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.9767327697072554,
  'p_hpf_ramp': 0,
  'sound_vol': 0.019,
  'sample_rate': 44100,
  'sample_size': 8
};

const evacuateSound = {
  'oldParams': true,
  'wave_type': 0,
  'p_env_attack': 0,
  'p_env_sustain': 0.333,
  'p_env_punch': 0,
  'p_env_decay': 0.265313020026675,
  'p_base_freq': 0.364,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.025,
  'p_freq_dramp': -0.313,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': -0.012,
  'p_arp_speed': 0.005,
  'p_duty': 0.11399599462626381,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.332,
  'p_pha_offset': 0.49,
  'p_pha_ramp': 0.164,
  'p_lpf_freq': 0.747,
  'p_lpf_ramp': -0.17,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.231,
  'p_hpf_ramp': -0.306,
  'sound_vol': 0.012,
  'sample_rate': 44100,
  'sample_size': 8
};

const wildCardSound = {
  'oldParams': true,
  'wave_type': 0,
  'p_env_attack': 0,
  'p_env_sustain': 0.12975759808014056,
  'p_env_punch': 0,
  'p_env_decay': 0.4366670390268864,
  'p_base_freq': 0.26150843740474156,
  'p_freq_limit': 0,
  'p_freq_ramp': 0.22123755074333254,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0.5395903671219403,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.4229457144736907,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.019,
  'sample_rate': 44100,
  'sample_size': 8
};

const terminator = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.32279621528598357,
  'p_env_punch': 0.5986362017834299,
  'p_env_decay': 0.3825302387063124,
  'p_base_freq': 0.042851606687422,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.3017604244048227,
  'p_freq_dramp': 0,
  'p_vib_strength': 0.11263370286703937,
  'p_vib_speed': 0.2595364546663241,
  'p_arp_mod': 0.5276094143998613,
  'p_arp_speed': 0.7475277782776559,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.3258507366785141,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.097,
  'sample_rate': 44100,
  'sample_size': 8
};

const batflying = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.36010786351586044,
  'p_env_punch': 0.37914350035364347,
  'p_env_decay': 0.27766589396405994,
  'p_base_freq': 0.09337241584949481,
  'p_freq_limit': 0,
  'p_freq_ramp': 0,
  'p_freq_dramp': 0,
  'p_vib_strength': 0.5948722975251431,
  'p_vib_speed': 0.21335580806123558,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': -0.167178036313927,
  'p_pha_ramp': -0.22900361316829876,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.064,
  'sample_rate': 44100,
  'sample_size': 8
};

const popBurn = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.33728909569224036,
  'p_env_punch': 0.573722527234594,
  'p_env_decay': 0.429202826199502,
  'p_base_freq': 0.5129251864764769,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.31681442277662747,
  'p_freq_dramp': 0,
  'p_vib_strength': 0.25483380067234823,
  'p_vib_speed': 0.11015038021883274,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0.1667113059792873,
  'p_pha_ramp': -0.21718457208422506,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.129,
  'sample_rate': 44100,
  'sample_size': 8
};

const longBurn = { // **
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.33728909569224036,
  'p_env_punch': 0.573722527234594,
  'p_env_decay': 0.792,
  'p_base_freq': 0.5129251864764769,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.307,
  'p_freq_dramp': -0.063,
  'p_vib_strength': 0.25483380067234823,
  'p_vib_speed': 0.11015038021883274,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0.1667113059792873,
  'p_pha_ramp': -0.21718457208422506,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.129,
  'sample_rate': 44100,
  'sample_size': 8
};

const enterSound = { // **
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.32279621528598357,
  'p_env_punch': 0.5986362017834299,
  'p_env_decay': 0.535,
  'p_base_freq': 0.042851606687422,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.122,
  'p_freq_dramp': 0.241,
  'p_vib_strength': 0.486,
  'p_vib_speed': 0.318,
  'p_arp_mod': 0.071,
  'p_arp_speed': 0.803,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.3258507366785141,
  'p_pha_offset': -0.234,
  'p_pha_ramp': -0.117,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.097,
  'sample_rate': 44100,
  'sample_size': 8
};

const longSlide = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.3095102323830176,
  'p_env_punch': 0.25787778773830994,
  'p_env_decay': 0.741,
  'p_base_freq': 0.127686041604414,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.038,
  'p_freq_dramp': 0,
  'p_vib_strength': 0.21762095619600505,
  'p_vib_speed': 0.24683051053037722,
  'p_arp_mod': 0.42447187662669705,
  'p_arp_speed': 0.7775140898009093,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.3738668124989096,
  'p_pha_offset': -0.036441424778258735,
  'p_pha_ramp': -0.0902635518753034,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.179,
  'sample_rate': 44100,
  'sample_size': 8
};

const clickSound = {
  'oldParams': true,
  'wave_type': 0,
  'p_env_attack': 0,
  'p_env_sustain': 0.015801133073791596,
  'p_env_punch': 0,
  'p_env_decay': 0.043,
  'p_base_freq': 0.727,
  'p_freq_limit': 0,
  'p_freq_ramp': 0.12169843284841453,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0.5257613394880012,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.202,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.336,
  'p_hpf_ramp': 0,
  'sound_vol': 0.084,
  'sample_rate': 44100,
  'sample_size': 8
};

const pointUpSound = {
  'oldParams': true,
  'wave_type': 1,
  'p_env_attack': 0,
  'p_env_sustain': 0.05333414667562269,
  'p_env_punch': 0.447,
  'p_env_decay': 0.251,
  'p_base_freq': 0.296,
  'p_freq_limit': 0,
  'p_freq_ramp': 0.198,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.332,
  'p_lpf_ramp': 0.001,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.013,
  'sample_rate': 44100,
  'sample_size': 8
};

const pointDownSound = {
  'oldParams': true,
  'wave_type': 1,
  'p_env_attack': 0,
  'p_env_sustain': 0.05333414667562269,
  'p_env_punch': 0.447,
  'p_env_decay': 0.251,
  'p_base_freq': 0.321,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.197,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.332,
  'p_lpf_ramp': 0.001,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.013,
  'sample_rate': 44100,
  'sample_size': 8
};

const neutralSound = {
  'oldParams': true,
  'wave_type': 1,
  'p_env_attack': 0,
  'p_env_sustain': 0.07063965143659512,
  'p_env_punch': 0.4176416103125491,
  'p_env_decay': 0.11333750331584112,
  'p_base_freq': 0.423,
  'p_freq_limit': 0,
  'p_freq_ramp': 0,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0.2234806839543853,
  'p_arp_speed': 0.5295919129111916,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.193,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.024,
  'sample_rate': 44100,
  'sample_size': 8
};

const cancelSound = {
  'oldParams': true,
  'wave_type': 1,
  'p_env_attack': 0,
  'p_env_sustain': 0.314,
  'p_env_punch': 0.128,
  'p_env_decay': 0.096,
  'p_base_freq': 0.191,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.157,
  'p_freq_dramp': -0.033,
  'p_vib_strength': 0.85,
  'p_vib_speed': 0.329,
  'p_arp_mod': 0.026,
  'p_arp_speed': 0.927,
  'p_duty': 0.918,
  'p_duty_ramp': 1,
  'p_repeat_speed': 0,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 1,
  'p_lpf_ramp': -0.8637981626041724,
  'p_lpf_resonance': 0.5566874729499105,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.01,
  'sample_rate': 44100,
  'sample_size': 8
};

const heartBeatSound = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.373,
  'p_env_punch': 0,
  'p_env_decay': 0.15173070763555474,
  'p_base_freq': 0.319,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.596814201137551,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.398,
  'p_pha_offset': 0,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.187,
  'p_lpf_ramp': -0.178,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.21,
  'p_hpf_ramp': -0.67,
  'sound_vol': 0.028,
  'sample_rate': 44100,
  'sample_size': 8
};

const spraySound = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.056506214804851476,
  'p_env_punch': 0.5088597829070519,
  'p_env_decay': 0.4799075933836988,
  'p_base_freq': 0.239,
  'p_freq_limit': 0,
  'p_freq_ramp': 0,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0.43,
  'p_arp_speed': 0.57,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.82,
  'p_pha_offset': 0.524,
  'p_pha_ramp': 0.005,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.678,
  'p_hpf_ramp': 0,
  'sound_vol': 0.024,
  'sample_rate': 44100,
  'sample_size': 8
};

const onCharSound = {
  'oldParams': true,
  'wave_type': 1,
  'p_env_attack': 0,
  'p_env_sustain': 0.009972700035535721,
  'p_env_punch': 0,
  'p_env_decay': 0.346,
  'p_base_freq': 0.281,
  'p_freq_limit': 0,
  'p_freq_ramp': 0.198,
  'p_freq_dramp': 0.399,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': -0.032,
  'p_arp_speed': 0,
  'p_duty': 1,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.563,
  'p_pha_offset': -0.001,
  'p_pha_ramp': 0,
  'p_lpf_freq': 0.383,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0,
  'p_hpf_ramp': 0,
  'sound_vol': 0.018,
  'sample_rate': 44100,
  'sample_size': 8
};

const onLocationSound = {
  'oldParams': true,
  'wave_type': 3,
  'p_env_attack': 0,
  'p_env_sustain': 0.09608861695562265,
  'p_env_punch': 0,
  'p_env_decay': 0.12487521273216765,
  'p_base_freq': 0.4942441859104051,
  'p_freq_limit': 0,
  'p_freq_ramp': -0.6511823808202913,
  'p_freq_dramp': 0,
  'p_vib_strength': 0,
  'p_vib_speed': 0,
  'p_arp_mod': 0,
  'p_arp_speed': 0,
  'p_duty': 0,
  'p_duty_ramp': 0,
  'p_repeat_speed': 0.695,
  'p_pha_offset': 0.005,
  'p_pha_ramp': 0,
  'p_lpf_freq': 1,
  'p_lpf_ramp': 0,
  'p_lpf_resonance': 0,
  'p_hpf_freq': 0.14,
  'p_hpf_ramp': 0,
  'sound_vol': 0.023,
  'sample_rate': 44100,
  'sample_size': 8
};

/*
  ***********************************
  **********************************
  *******  CLOUDINARY SRCS  *******
  ********************************
  *******************************
*/

const completeUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1677436049/sounds/pickupCoin_uwwaos.wav';
const hitUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1677436361/sounds/hit_xznp0f.wav';
const dodgeUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1677444831/sounds/evade_mlgwsf.wav';
const evacuateUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1679937776/sounds/evacuate_hmrhhi.wav';
const wildCardUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1677466376/sounds/wildcard_ndvygk.wav';
const enterUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1679800513/sounds/enter_vb3mmd.wav';
const heartBeatUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1679937367/sounds/heartBeat_sfodbu.wav';
const bunnyUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1680221674/sounds/bunny_nqoxaq.wav';
const vampireUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1680656621/sounds/vampire2_owkjdp.wav';
const nationalTreasureUrl = 'https://res.cloudinary.com/de0mhjdfg/video/upload/v1680656629/sounds/nationaltreasure_ghpzbu.wav';

/*
  *******************************
  ********************************
  *******  GENERATE SOUNDS  *******
  **********************************
  ***********************************
*/

export const click = sfxr.toAudio(clickSound);
export const pointUp = sfxr.toAudio(pointUpSound);
export const pointDown = sfxr.toAudio(pointDownSound);
export const neutral = sfxr.toAudio(neutralSound);
export const cancel = sfxr.toAudio(cancelSound);
export const spray = sfxr.toAudio(spraySound);
export const onChar = sfxr.toAudio(onCharSound);
export const onLocation = sfxr.toAudio(onLocationSound);

export const complete = new Howl({
  src: [completeUrl],
  volume: 1.0
});

export const hit = new Howl({
  src: [hitUrl],
  volume: 1.0
});

export const dodge = new Howl({
  src: [dodgeUrl],
  volume: 1.0
});

export const evacuate = new Howl({
  src: [evacuateUrl],
  volume: 0.7
});

export const wildCard = new Howl({
  src: [wildCardUrl],
  volume: 1.0
});

export const enter = new Howl({
  src: [enterUrl],
  volume: 0.9
});

export const heartBeat = new Howl({
  src: [heartBeatUrl],
  volume: 1.0
});

export const bunny = new Howl({
  src: [bunnyUrl],
  volume: 1.5
});

export const vampire = new Howl({
  src: [vampireUrl],
  volume: 1.5
});

export const nationalTreasure = new Howl({
  src: [nationalTreasureUrl],
  volume: 1.5
});

// Howler.volume(0.7);
