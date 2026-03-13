
// ═══════════════════════════════════════════════════════════════════
// LAGOTECH 360 — config.js v8.0
// Central de configuração - CONECTADO AO SUPABASE!
// ═══════════════════════════════════════════════════════════════════

const CONFIG = {

  // ── SUPABASE (O Cérebro da LagoTech 360) ─────────────────────────
  supabase: {
    url:     'https://pjejmlhxqvsiufhyvgfz.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZWptbGh4cXZzaXVmaHl2Z2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNjkyMzEsImV4cCI6MjA4ODk0NTIzMX0.QKfwC7Jl3R2_dhdJ1rueSQJsMMJ5BiwtcCM-hL5wA8M',
  },

  // ── Z-API / W-API (Deixe vazio por enquanto) ─────────────────────
  zapi: {
    instanceId:  '',
    token:       '',
  },

  // ── ASAAS (Deixe vazio por enquanto) ─────────────────────────────
  asaas: {
    apiKey: '',       
    env:    'sandbox', 
  },

  // ── FEATURE FLAGS ─────────────────────────────────────────────────
  features: {
    pwa:              true,   // Instalar como app no celular
    realtime:         true,   // Fila e painel TV em tempo real
    offlineFallback:  true,   // Mostrar cache se cair a internet
    imageCompression: true,   // Comprimir fotos antes de subir
  },

  // ── LIMITES / PERFORMANCE ─────────────────────────────────────────
  limits: {
    customersPerPage:   20,   // Paginação de clientes
    searchDebounceMs:  300,   // Delay na busca (economiza queries e internet 4G)
    imageMaxKB:        200,   
    imageQuality:     0.75,   
    cacheExpiryMin:     30,   // Cache offline de 30 min
  },

  // ── PLANOS E GATILHOS FINANCEIROS ─────────────────────────────────
  plans: {
    start: {
      label: '🥉 Plano Start',
      price: 127.90,
      setup: 297.00,
      maxUsers: 2,
      color: '#6b7280',
    },
    pro: {
      label: '🥈 Plano Pro',
      price: 227.90,
      setup: 297.00,
      maxUsers: 5,
      color: '#16a34a',
    },
    elite: {
      label: '🥇 Plano Elite',
      price: 327.90,
      setup: 297.00,
      maxUsers: 999,
      color: '#f59e0b',
    },
  },

  // ── NICHOS DE ATUAÇÃO ─────────────────────────────────────────────
  nichos: {
    barbearia: { label: 'Barbearia', icon: '✂️',  color: '#1d4ed8' },
    salao:     { label: 'Salão',     icon: '💅',  color: '#db2777' },
    estetica:  { label: 'Estética',  icon: '🌿',  color: '#059669' },
    petshop:   { label: 'Pet Shop',  icon: '🐾',  color: '#d97706' },
    tatuagem:  { label: 'Tatuagem',  icon: '🎨',  color: '#7c3aed' },
  },

  // ── UTM SOURCES (Mapeamento de Marketing) ─────────────────────────
  utmSources:[
    { key: 'instagram',  label: 'Instagram',    icon: '📸' },
    { key: 'facebook',   label: 'Facebook',     icon: '👥' },
    { key: 'google',     label: 'Google Maps',  icon: '📍' },
    { key: 'whatsapp',   label: 'WhatsApp',     icon: '💬' },
    { key: 'indicacao',  label: 'Indicação',    icon: '🤝' },
    { key: 'site',       label: 'Site Próprio', icon: '🌐' },
    { key: 'presencial', label: 'Presencial',   icon: '🚶' },
  ],

  // ── APP META ──────────────────────────────────────────────────────
  app: {
    name:        'LagoTech 360',
    shortName:   'LT360',
    description: 'A Máquina de Vendas do seu Negócio',
    version:     '8.0.0',
    themeColor:  '#16a34a',
    bgColor:     '#0d0d0c',
  },
};

// Exportar para uso nos outros arquivos
if (typeof module !== 'undefined') module.exports = CONFIG;