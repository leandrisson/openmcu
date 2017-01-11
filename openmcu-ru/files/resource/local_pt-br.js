window.l_welcome = 'OpenMCU-ru';
window.l_status = 'Estado';

window.l_connections = 'ConexÃµes';
window.l_connections_OFFLINE_PREFIX    = "<B>[Offline] </B>"   ;
window.l_connections_OFFLINE_SUFFIX    = ""                    ;
window.l_connections_HIDDEN_PREFIX     = "<B>[Oculto] </B>"    ;
window.l_connections_HIDDEN_SUFFIX     = ""                    ;
window.l_connections_AUDIO_OUT_STR     = "SaÃ­da de Ãudio"      ;
window.l_connections_AUDIO_IN_STR      = "Entrada de Ãudio"    ;
window.l_connections_VIDEO_OUT_STR     = "SaÃ­da de VÃ­deo"      ;
window.l_connections_VIDEO_IN_STR      = "Entrada de VÃ­deo"    ;
window.l_connections_AI_NEG_ERR        = "Sem entrada de Ã¡udio";
window.l_connections_AO_NEG_ERR        = "Sem saÃ­da de Ã¡udio"  ;
window.l_connections_VI_NEG_ERR        = "Sem entrada de vÃ­deo";
window.l_connections_VO_NEG_ERR        = "Sem saÃ­da de vÃ­deo"  ;
window.l_connections_BUTTON_TEXT       = "Entre Texto"         ;
window.l_connections_BUTTON_FORUM      = "Entre BBCode"        ;
window.l_connections_BUTTON_HTML       = "entre HTML"          ;
window.l_connections_BUTTON_CLOSE      = "Feche cÃ³digo"        ;
window.l_connections_CODE_TOOLTIP      = "Copiar, pressione Ctrl+C";
window.l_connections_DAYS_STR          = "dia(s)"              ;
window.l_connections_COL_NAME          = "Nome"                ;
window.l_connections_COL_DURATION      = "DuraÃ§Ã£o"             ;
window.l_connections_COL_RTP           = "RTP Canal: Codec"    ;
window.l_connections_COL_PACKETS       = "Pacotes"             ;
window.l_connections_COL_BYTES         = "Bytes"               ;
window.l_connections_COL_KBPS          = "Kbit/s"              ;
window.l_connections_COL_FPS           = "FPS"                 ;
window.l_connections_word_room         = "Sala"                ;
window.l_connections_COL_LOSTPCN       = "60s perdas"          ;

window.l_records = 'GravaÃ§Ãµes';
window.l_control = 'Controle';
window.l_rooms = 'Salas';
window.l_invite = 'Convida';
window.l_invite_s = 'Convite bem sucedido';
window.l_invite_f = 'Convite falhou';
window.l_settings = 'ConfiguraÃ§Ã£o';
window.l_param_general = 'Geral';
window.l_param_registrar = 'Registrar';
window.l_param_conference = 'ConferÃªncia';
window.l_param_export = 'Export(named pipe)';
window.l_param_managing_users = 'Utilizadores';
window.l_param_managing_groups = 'Grupos';
window.l_param_control_codes = 'CÃ³digo de Controle';
window.l_param_room_codes = 'CÃ³digo de Sala';
window.l_param_h323_endpoints = 'Terminais H.323';
window.l_param_sip_endpoints = 'Terminais SIP';
window.l_param_rtsp = 'ParÃ¢metros RTSP';
window.l_param_rtsp_servers = 'Servidores RTSP';
window.l_param_rtsp_endpoints = 'Terminais RTSP';
window.l_param_video = 'VÃ­deo';
window.l_param_record = 'Gravar';
window.l_param_h323 = 'ParÃ¢metros H323';
window.l_param_sip = 'ParÃ¢metros SIP';
window.l_param_sip_proxy = 'InformaÃ§Ã£oãde Conta';
window.l_param_access_rules = 'Regras de Acesso';
window.l_param_receive_sound = 'Codecs de Ã¡udio (recepÃ§Ã£oo)';
window.l_param_transmit_sound = 'Codecs de Ã¡udio (transmissÃ£o)';
window.l_param_receive_video = 'Codecs de vÃ­deo (recepÃ§Ã£o)';
window.l_param_transmit_video = 'Codecs de vÃ­deo (transmissÃ£o)';
window.l_param_sip_sound = 'Codecs Ã¡udio';
window.l_param_sip_video = 'Codecs vÃ­deo';
window.l_help = 'Ajuda';
window.l_forum = 'Forum';
window.l_manual = 'Manual';
window.l_support = 'Suporte';

window.l_info_welcome ='\
<p>\
O serviÃ§o OpenMCU-ru estÃ¡ funcionando e a aceitando conexÃµes.\
</p>\
<p>\
ConferÃªncia iniciada a partir de algum terminal irÃ¡ funcionar no modo nÃ£o controlado. Todos os participantes irÃ£o receber a mesma imagem. No modo nÃ£o controlado, OpenMCU-ru trocarÃ¡ o layout automaticamente a depender do nÃºmero de participantes na conferÃªncia na ordem determinada no ficheiro "layouts.conf". Depois de atingir 100 participantes os prÃ³ximos nÃ£o serÃ£o vistos mas verÃ£o os outros.<br />\
O Ã¡udio estÃ¡ em modo nÃ£o controlado, recebendo e transmitindo para todos os participantes.<br />\
</p>\
<p>\
Para testar o servidor faÃ§a uma chamada para a sala "echo" ou para a sala "testroomN" onde N Ã© um nÃºmero de 1 Ã  100.<br />\
</p>\
<p>\
A gestÃ£o do servidor Ã© feita a partir do menu principal no topo da pÃ¡gina.<br />\
A pÃ¡gina <b>Estado</b> mostra as conexÃµes existentes e os parÃ¢metros dos terminais.<br />\
Na pÃ¡gina <b>Controle</b> as salas podem ser controladas.<br />\
Na pÃ¡ginas <b>ConfiguraÃ§Ãµes</b> pode ser feita a configuraÃ§Ã£oão global de parÃ¢metros do servidor.<br />\
Mais informaÃ§Ã£o pode ser obtida em <b>Ajuda</b> (link para o site oficial na Internet).<br />\
</p>\
<p>Segue abaixo um sumÃ¡rio sobre o servidor.</p>\
';
window.l_welcome_logo ='\
<p>\
<b>Imagem do seu logotipo personalizado</b>\
</p>\
<p>\
Esta imagem serÃ¡ apresentada quando nÃ£o houver recepÃ§Ã£o de vÃ­deo. Aceita somente BMP, JPEG(com um mÃ¡ximo de 500KB), PNG, GIF.\
</p>\
';

window.l_info_invite ='';
window.l_info_invite_f ='';
window.l_info_invite_s ='';
window.l_info_rooms ='Clique no nome da sala para ver e gerir a mesma.';

window.l_info_control ='\
<div id=\'tip\' name=\'tip\'\
  onclick=\'if(typeof savedhelpcontent=="undefined"){savedhelpcontent=this.innerHTML;this.innerHTML="Esta pÃ¡gina Ã© utilizada para gerir sua conferÃªncia. VocÃª pode escolher os participantes a partir da lista e colocÃ¡-lo no local da tela que lhe convier utilizando o controle de layout (drag-and-drop ou drop-down). Cada posiÃ§Ã£oão pode ser designada a um participante directamente (estÃ¡tica) ou pode ser activada por voz.<br>A posiÃ§Ã£o Voice-activated pode ser marcada como VAD ou VAD2 (os participantes mais activos seremãmovidos de VAD para VAD2 automaticamente).";}else {this.innerHTML=savedhelpcontent; try {delete savedhelpcontent;} catch(e){savedhelpcontent=undefined;};}\'\
>Esta pÃ¡gina Ã© usada para\
 <span style=\'cursor:pointer;font-weight:bold;color:#095\'> ...</span>\
</div>';

window.l_info_records ='\
Esta pÃ¡gina permite mostrar as gravaÃ§Ãµes de vÃ­deo no servidor \
e baixar as mesmas.';

window.l_info_connections ='\
Esta pÃ¡gina mostra as conexÃµes existentes e parÃ¢mteros dos terminais.\
';
window.l_info_param_general ='ParÃ¢metros globais do servidor.';
window.l_info_param_registrar = '';
window.l_info_param_conference ='';
window.l_info_param_managing_users = '';
window.l_info_param_managing_groups = '';
window.l_info_param_control_codes = '';
window.l_info_param_room_codes = '';
window.l_info_param_video ='Qualidade do vÃ­deo de saÃ­da.';
window.l_info_param_record ='Qualidade de gravaÃ§Ã£o.';
window.l_info_param_h323 ='';
window.l_info_param_sip ='';
window.l_info_param_access_rules ='';
window.l_info_param_sip_proxy ='';
window.l_info_param_receive_sound = '';
window.l_info_param_transmit_sound = '';
window.l_info_param_receive_video = '';
window.l_info_param_transmit_video = '';

window.l_select_create =       'Cria sala'
window.l_select_enter =        'Entre na sala'
window.l_select_record =       'Grave'
window.l_select_moderated =    'Modere'
window.l_select_moderated_yes ='Sim'
window.l_select_moderated_no = 'NÃ£o'
window.l_select_visible =      'Membros VisÃ­veis'
window.l_select_unvisible =    'Membros InvisÃ­veis'
window.l_select_duration =     'DuraÃ§Ã£o'
window.l_select_delete =       'Remove sala'

window.l_not_found = 'não encontrado';

window.l_name_accept         = 'Aceita';
window.l_name_reset          = 'Reset';
window.l_name_user           = 'Utilizador';
window.l_name_host           = 'Host';
window.l_name_group          = 'Grupo';
window.l_name_password       = 'Senha';
window.l_name_roomname       = 'Nome da sala';
window.l_name_access         = 'Acesso';
window.l_name_action         = 'AcÃ§Ã£o';
window.l_name_code           = 'CÃ³digo';
window.l_name_message        = 'Mensagem';
window.l_name_address        = 'EndereÃ§o';
window.l_name_address_book   = 'Agenda de endereÃ§os';
window.l_name_save           = 'Salva';
window.l_name_cancel         = 'Cancela';
window.l_name_advanced       = 'AvanÃ§ado';
window.l_name_auto_create              = 'Auto criaÃ§Ã£o';
window.l_name_auto_delete_empty        = 'Auto eliminaÃ§Ã£o';
window.l_name_auto_record_start        = 'Auto gravaÃ§Ã£o';
window.l_name_recall_last_template     = 'Recarrega Ãºltimo modelo';
window.l_name_time_limit               = 'Limite de tempo';

window.l_name_display_name                         = 'SobrepÃµe o nome mostrado';
window.l_name_frame_rate_from_mcu                  = 'Frame rate da MCU';
window.l_name_bandwidth_from_mcu                   = 'Banda da MCU, Kbit/s';
window.l_name_bandwidth_to_mcu                     = 'Banda para MCU, Kbit/s';
window.l_name_transport                            = 'Transporte';
window.l_name_port                                 = 'porta';

window.l_name_registrar                            = 'Registrar';
window.l_name_account                              = 'Conta';
window.l_name_register                             = 'Registra';
window.l_name_address_sip_proxy                    = 'EndereÃ§o do SIP-proxy';
window.l_name_expires                              = 'Expira em';
window.l_name_path                                 = 'Caminho';
window.l_name_enable                               = 'Habilita';

window.l_name_registered                           = 'Registrado';
window.l_name_connected                            = 'Conectado';
window.l_name_last_ping_response                   = 'Ãºltima resposta';

window.l_name_codec                                = 'Codec';
window.l_name_audio                                = 'Ãudio';
window.l_name_video                                = 'VÃ­deo';
window.l_name_audio_receive                        = 'Ãudio (recebe)';
window.l_name_audio_transmit                       = 'Ãudio (transmite)';
window.l_name_video_receive                        = 'VÃ­deo (recebe)';
window.l_name_video_transmit                       = 'VÃ­deo (transmite)';
window.l_name_audio_codec                          = 'Codec de Ã¡udio';
window.l_name_video_codec                          = 'Codec de vÃ­deo';
window.l_name_audio_codec_receive                  = 'Codec de Ã¡udio (recebe)';
window.l_name_video_codec_receive                  = 'Codec de vÃ­deo (recebe)';
window.l_name_audio_codec_transmit                 = 'Codec de Ã¡udio (transmite)';
window.l_name_video_codec_transmit                 = 'Codec de vÃ­deo (transmite)';
window.l_name_video_resolution                     = 'ResoluÃ§Ã£o de vÃ­deo';

window.l_name_parameters_for_sending               = "ParÃ¢metros para envio";
window.l_name_codec_parameters                     = "ParÃ¢metros de Codec<br>(sobrepÃµe o recebido)";
window.l_name_default_parameters                   = "ParÃ¢metros por defeito";

window.l_room_invite_all_inactive_members          = 'Convida TODOS os membros inativos';
window.l_room_drop_all_active_members              = 'Desliga TODAS conexÃµes ativas';
window.l_room_remove_all_inactive_members          = 'Remove TODOS membros inativos da lista';
window.l_room_drop_connection_with                 = 'Desliga conexÃµes com';
window.l_room_remove_from_list                     = 'Remove da lista';

window.l_room_deletion_text = ["",                   "Closing room &laquo;%&raquo;: desconectando participantes",
                                                     "Closing room &laquo;%&raquo;: aguardando participante sair da sala",
                                                     "Closing room &laquo;%&raquo;: desconectando membros ocultos de sistema",
                                                     "Closing room &laquo;%&raquo;: aguardando saÃ­da de membros da sala",
                                                     "Room &laquo;%&raquo; ELIMINADO"
];
window.l_takecontrol                               = "A conferencia atual esta no modo automatico (nao-moderada). Clique para fazer a moderação da sala (take control).";
window.l_decontrol                                 = "A conferencia atual está sendo moderada (por voce). Clique para parar a moderação e voltar para o modo nao-moderado (automatico)";
window.l_vadsetup                                  = "Paametros de detecção de atividade de voz (VAD)";
window.l_globalmute                                = "Membros ocultos SEM-MUTE. Clique para mute.";
window.l_globalunmute                              = "Membros ocultos  MUTADOS. Clique para desmuta-los.";
window.l_filtermode                                = [
                                                       "Selecionado atualmente escalonamento de video FASTEST, qualidade ruim."
                                                      ,"Selecionado atualmente escalonamento de video BILINEAR, bom para a maioria dos casos."
                                                      ,"Selecionado atualmente escalonamento de video BOX FILTER - excelente, mas lento."
                                                     ];
window.l_videorecorder                             = "Iniciar gravacao de video";
window.l_videorecorderstop                         = "Parar gravacao de video";
window.l_pleasetakecontrol                         = "Não pode ser efetuado pois a conferencia esta em modo nao-moderado (automatico).";
window.l_decontrolmixersconfirm                    = "você esta convertendo a convferencia para o modo nao-moderado..\r\n videos adicionais no mixer serão removidos e só um será mantido.\r\n Tem certeza, voce quer continuar?";
window.l_templatedeleteconfirm                     = "Template * será excluido";
window.l_changelogo                                = "Modifica: ";
window.l_dir_no_records                            = "Esta pasta nao tem gravacoes no momento.";
window.l_download                                  = "Download";
window.l_totaldrivesize                            = "Capacidade do HD: * GiB.";
window.l_recordstakesup                            = "Grava ate: * GiB (%).";
window.l_freespaceleft                             = "Espaço livre disponivel:  * GiB (%).";
window.l_delete                                    = "Deletar";
window.l_recwilldeleted                            = "* será deletado!!!";
window.l_recwilldeleted_ok                         = "[OK]";
window.l_recwilldeleted_cancel                     = "Cancelar";
window.l_recwasdeleted                             = "* foi deletado";
window.l_filesize                                  = "Tamanho do Arquivo";
window.l_resolution                                = "Resolucao";
window.l_startdatetime                             = "Inicio Data/Hora";
window.l_lock_tpl_default                          = "Template tranca a conferencia por padrão";
window.l_name_force_split_video        = "Cache e controle via navegador web";
window.l_name_auto_record_stop         = 'Auto gravacao (parar)';

///
window.l_restore_defaults                          = "RESTAURAR PADROES";
window.l_language                                  = "Linguagem";
window.l_server_id                                 = "OpenMCU-ru Server Id";
window.l_default_protocol_for_outgoing_calls       = "Protocolo padrão para chamadas recebidas";
window.l_http_secure                               = "segurança HTTP";
window.l_http_certificate                          = "HTTP certificado";
window.l_http_ip                                   = "IP HTTP";
window.l_http_port                                 = "Porta HTTP ";
window.l_rtp_base_port                             = "Porta Base RTP";
window.l_rtp_max_port                              = "Porta maxima RTP";
window.l_trace_level                               = "Trace level";
window.l_rotate_trace                              = "Rotate trace files at startup";
window.l_log_level                                 = "Log Level";
window.l_call_log_filename                         = "Call log filename";
window.l_room_control_event_buffer_size            = "Room control event buffer size";
window.l_copy_web_log                              = "Copy web log to call log";
window.l_default_room                              = "Default room";
window.l_reject_duplicate_name                     = "Reject duplicate name";
window.l_allow_loopback_calls                      = "Allow loopback calls";
///
window.l_allow_internal_calls                      = "Allow internal calls";
window.l_sip_allow_reg_without_auth                = "SIP allow registration without authentication";
window.l_sip_allow_mcu_calls_without_auth          = "SIP allow MCU calls without authentication";
window.l_sip_allow_internal_calls_without_auth     = "SIP allow internal calls without authentication";
window.l_sip_registrar_minimum_expiration          = "SIP registrar minimum expiration";
window.l_sip_registrar_maximum_expiration          = "SIP registrar maximum expiration";
window.l_h323_gatekeeper_enable                    = "H.323 gatekeeper enable";
window.l_h323_allow_reg_without_auth               = "H.323 allow registration without authentication";
window.l_h323_allow_mcu_calls_without_reg          = "H.323 allow MCU calls without registration";
window.l_h323_allow_internal_calls_without_reg     = "H.323 allow internal calls without registration";
window.l_h323_allow_duplicate_aliases              = "H.323 allow duplicate aliases";
window.l_h323_gatekeeper_minimum_ttl               = "H.323 gatekeeper minimum Time To Live";
window.l_h323_gatekeeper_maximum_ttl               = "H.323 gatekeeper maximum Time To Live";
///
window.l_enable_video                              = "Enable video";
window.l_max_bit_rate                              = "Max bit rate";
window.l_tx_key_frame_period                       = "Tx key frame period";
window.l_encoding_threads                          = "Encoding threads";
window.l_encoding_cpu_used                         = "Encoding CPU used";
///
window.l_enable_export                             = "Enable export";
window.l_video_frame_rate                          = "Video frame rate";
window.l_video_frame_width                         = "Video frame width";
window.l_video_frame_height                        = "Video frame height";
window.l_audio_sample_rate                         = "Audio sample rate";
window.l_audio_channels                            = "Audio channels";
window.l_video_bitrate                             = "Video bitrate";
window.l_audio_bitrate                             = "Audio bitrate";
///
window.l_listener                                  = "Listener";
window.l_interface                                 = "Interface";
window.l_nat_router_ip                             = "NAT Router IP";
window.l_treat_as_global_for_nat                   = "Treat as global for NAT";
window.l_disable_fast_start                        = "Disable Fast-Start";
window.l_disable_h245_tunneling                    = "Disable H.245 Tunneling";
window.l_gk_mode                                   = "Gatekeeper Mode";
window.l_gk_reg_ttl                                = "Gatekeeper registration TTL(Time To Live)";
window.l_gk_reg_retry_interval                     = "Gatekeeper request retry interval";
window.l_gk_host                                   = "Gatekeeper host";
window.l_gk_username                               = "Gatekeeper username";
window.l_gk_password                               = "Gatekeeper password";
window.l_gk_room_names                             = "Gatekeeper room names";
///
window.l_server                                    = "Server";
window.l_server_list                               = "Server list";
///
window.l_directory                                 = "Directory";
window.l_rtp_input_timeout                         = "RTP Input Timeout";
window.l_received_vfu_delay                        = "Limitation VFU, r/s";
window.l_video_cache                               = "Video cache";
window.l_interval                                  = "interval";
window.l_internal_call_processing                  = "Internal call processing";
window.l_room_auto_create_when_connecting          = "Auto create when connecting";
window.l_enter_template_name                       = "Enter template id";
window.l_disconnect                                = "Disconnect";
window.l_add_to_abook                              = "Add to address book";
window.l_accounts                                  = "Accounts";
///
window.l_room_mute_all                             = 'Mute all participants (microphones)';
window.l_room_unmute_all                           = 'Unmute all participants (microphones)';
window.l_room_dial_all_members                     = 'Run continuous dialing ALL members';
///
window.l_param_telserver = 'Telnet server';
window.l_info_telserver = '';
window.l_auto_dial_delay                           = "Auto dial delay, s";
///
