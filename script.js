'use strict';

// ==================== CATÁLOGO COMPLETO ACTUALIZADO ====================
const D = [
    // SECCIÓN 1: CARTULINA LAMINAS POR PLIEGO (Mínimo 5 unidades)
    {
        id: 'laminas',
        tabName: 'CARTULINA LAMINAS POR PLIEGO',
        tabIcon: 'maximize-2',
        tabColor: 'bg-sky-500',
        accent: '#38BDF8',
        gradient: 'from-sky-500/15 to-blue-500/15',
        minQty: 5,
        category: 'laminas',
        subs: [
            {
                id: 'full-escarcha',
                name: 'Full Escarcha',
                size: '50×70 cm',
                icon: 'sparkles',
                tex: 'esc',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Azul Zafiro', h: '#0F52BA' }, { n: 'Blanco Nácar', h: '#F5F0E8' }, { n: 'Fucsia Ágata', h: '#E91E8C' },
                    { n: 'Lila Kumzita', h: '#C8A2C8' }, { n: 'Negro Azabache', h: '#1A1A1A' }, { n: 'Oro Callao', h: '#DAA520' },
                    { n: 'Plata Alpaca', h: '#C0C0C0' }, { n: 'Rojo Rubí', h: '#9B111E' }, { n: 'Verde Esmeralda', h: '#00A86B' }
                ]
            },
            {
                id: 'micro-escarchada',
                name: 'Micro Escarchada (350g)',
                size: '50×70 cm',
                icon: 'snowflake',
                tex: 'micro',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Lila Kunzita', h: '#C8A2C8' }, { n: 'Azul Turquesa', h: '#40E0D0' }, { n: 'Blanco Nácar', h: '#F5F0E8' },
                    { n: 'Cobre Aroa', h: '#CD7F32' }, { n: 'Azul Zafiro', h: '#0F52BA' }, { n: 'Salmón', h: '#FA8072' },
                    { n: 'Plata', h: '#D3D3D3' }, { n: 'Dorado Claro', h: '#F0D58C' }, { n: 'Dorado Oscuro', h: '#B8860B' },
                    { n: 'Verde Esmeralda', h: '#00A86B' }, { n: 'Rojo Rubí', h: '#9B111E' }, { n: 'Fucsia Ágata', h: '#E91E8C' },
                    { n: 'Melón', h: '#FDBCB4' }, { n: 'Beige', h: '#F5F0DC' }
                ]
            },
            {
                id: 'estampada-escarchada',
                name: 'Estampada Escarchada (350g)',
                size: '50×70 cm',
                icon: 'palette',
                tex: 'esc',
                type: 'patterns',
                desc: 'Venta mínima 5 und',
                patterns: [
                    { n: 'Oro Puntos', h: '#FFD700' }, { n: 'Oro Trazos', h: '#DAA520' }, { n: 'Rojo Corazón', h: '#DC143C' },
                    { n: 'Fucsia', h: '#E91E8C' }, { n: 'Lila', h: '#BB8FCE' }, { n: 'Morado', h: '#7B2D8E' },
                    { n: 'Estrellas Azules', h: '#1A3C8F' }, { n: 'Turquesa', h: '#40E0D0' }, { n: 'Verde', h: '#50C878' },
                    { n: 'Flor Cobre', h: '#B87333' }, { n: 'Negro', h: '#1A1A1A' }, { n: 'Plata', h: '#C0C0C0' }
                ]
            },
            {
                id: 'metalica-espejo',
                name: 'Metalizada Brillante Espejo (Lisa/Doble Faz)',
                size: '50×70 cm',
                icon: 'sun',
                tex: 'espejo',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Oro', h: '#FFD700' }, { n: 'Oro Claro', h: '#F5E6A3' }, { n: 'Rosado', h: '#FFB6C1' },
                    { n: 'Fucsia', h: '#E91E8C' }, { n: 'Celeste', h: '#87CEEB' }, { n: 'Azul', h: '#1A3C8F' },
                    { n: 'Verde', h: '#00A86B' }, { n: 'Plata', h: '#C0C0C0' }, { n: 'Negro', h: '#1A1A1A' },
                    { n: 'Violeta', h: '#8B00FF' }, { n: 'Rojo', h: '#DC143C' }
                ]
            },
            {
                id: 'metalica-holografica',
                name: 'Metalizada Holográfica (Diseños)',
                size: '50×70 cm',
                icon: 'sparkles',
                tex: 'espejo',
                type: 'patterns',
                desc: 'Venta mínima 5 und',
                patterns: [
                    { n: 'Oro Lunares', h: '#FFD700' }, { n: 'Rojo Corazones', h: '#DC143C' }, { n: 'Rosado Estrella', h: '#FFB6C1' },
                    { n: 'Azul Estrella', h: '#1A3C8F' }, { n: 'Verde Ondas', h: '#00A86B' }, { n: 'Verde Geométrico', h: '#50C878' },
                    { n: 'Celeste Cuadros', h: '#87CEEB' }, { n: 'Rosado Floral', h: '#FF69B4' }, { n: 'Plata Clásico', h: '#C0C0C0' }
                ]
            },
            {
                id: 'fluorescente',
                name: 'Fluorescente',
                size: '50×70 cm',
                icon: 'zap',
                tex: 'fluor',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Azul', h: '#00BFFF', glow: '#00BFFF' }, { n: 'Amarillo', h: '#CCFF00', glow: '#CCFF00' },
                    { n: 'Naranja', h: '#FF6600', glow: '#FF6600' }, { n: 'Fucsia', h: '#FF00CC', glow: '#FF00CC' },
                    { n: 'Verde', h: '#39FF14', glow: '#39FF14' }
                ]
            },
            {
                id: 'doble-faz-importada',
                name: 'Doble Faz Importada',
                size: '50×70 cm',
                icon: 'file-text',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Piel Canela', h: '#D2B48C' }, { n: 'Piel Catire', h: '#F5DEB3' }, { n: 'Amarillo Bandera', h: '#FFD700' },
                    { n: 'Naranja Medio', h: '#FF8C00' }, { n: 'Rojo Bandera', h: '#CE1126' }, { n: 'Rosado Bebé', h: '#FFB6C1' },
                    { n: 'Fucsia', h: '#E91E8C' }, { n: 'Lila Orquídea', h: '#DA70D6' }, { n: 'Blanco Nieve', h: '#FAFAFA' },
                    { n: 'Negro Ébano', h: '#1A1A1A' }, { n: 'Violeta Mora', h: '#4B0082' }, { n: 'Azul Bandera', h: '#00308F' },
                    { n: 'Azul Cielo', h: '#87CEEB' }, { n: 'Verde Esmeralda', h: '#00A86B' }, { n: 'Verde Manzana', h: '#8DB600' },
                    { n: 'Verde Navidad', h: '#1B5E20' }, { n: 'Marrón Chocolate', h: '#3E2723' }, { n: 'Marrón Tabaco', h: '#5D4037' }
                ]
            },
            {
                id: 'school-120g',
                name: 'Colores Vivos School Importada (120g)',
                size: '66×48 cm',
                icon: 'graduation-cap',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Blanco', h: '#FAFAFA' }, { n: 'Amarillo Bandera', h: '#FFD700' }, { n: 'Naranja', h: '#FF8C00' },
                    { n: 'Rojo Bandera', h: '#CE1126' }, { n: 'Rosado', h: '#FF69B4' }, { n: 'Fucsia', h: '#E91E8C' },
                    { n: 'Lila', h: '#BB8FCE' }, { n: 'Violeta', h: '#8B00FF' }, { n: 'Negro Ébano', h: '#1A1A1A' },
                    { n: 'Azul Bandera', h: '#00308F' }, { n: 'Azul Celeste', h: '#87CEEB' }, { n: 'Azul Turquesa', h: '#40E0D0' },
                    { n: 'Verde Oscuro', h: '#006400' }, { n: 'Verde Navidad', h: '#1B5E20' }, { n: 'Verde Manzana', h: '#8DB600' },
                    { n: 'Marrón', h: '#6F4E37' }, { n: 'Gris Perla', h: '#B0B0B0' }
                ]
            },
            {
                id: 'school-160g',
                name: 'Colores Vivos School Importada (160g)',
                size: '66×48 cm',
                icon: 'graduation-cap',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Blanco', h: '#FAFAFA' }, { n: 'Amarillo Bandera', h: '#FFD700' }, { n: 'Naranja', h: '#FF8C00' },
                    { n: 'Rojo Bandera', h: '#CE1126' }, { n: 'Rosado', h: '#FF69B4' }, { n: 'Fucsia', h: '#E91E8C' },
                    { n: 'Lila', h: '#BB8FCE' }, { n: 'Violeta', h: '#8B00FF' }, { n: 'Negro Ébano', h: '#1A1A1A' },
                    { n: 'Azul Bandera', h: '#00308F' }, { n: 'Azul Celeste', h: '#87CEEB' }, { n: 'Azul Turquesa', h: '#40E0D0' },
                    { n: 'Verde Oscuro', h: '#006400' }, { n: 'Verde Navidad', h: '#1B5E20' }, { n: 'Verde Manzana', h: '#8DB600' },
                    { n: 'Marrón', h: '#6F4E37' }, { n: 'Gris Perla', h: '#B0B0B0' }
                ]
            },
            {
                id: 'school-180g',
                name: 'Colores Vivos School Importada (180g)',
                size: '66×48 cm',
                icon: 'graduation-cap',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Blanco', h: '#FAFAFA' }, { n: 'Amarillo Bandera', h: '#FFD700' }, { n: 'Naranja', h: '#FF8C00' },
                    { n: 'Rojo Bandera', h: '#CE1126' }, { n: 'Rosado', h: '#FF69B4' }, { n: 'Fucsia', h: '#E91E8C' },
                    { n: 'Lila', h: '#BB8FCE' }, { n: 'Violeta', h: '#8B00FF' }, { n: 'Negro Ébano', h: '#1A1A1A' },
                    { n: 'Azul Bandera', h: '#00308F' }, { n: 'Azul Celeste', h: '#87CEEB' }, { n: 'Azul Turquesa', h: '#40E0D0' },
                    { n: 'Verde Oscuro', h: '#006400' }, { n: 'Verde Navidad', h: '#1B5E20' }, { n: 'Verde Manzana', h: '#8DB600' },
                    { n: 'Marrón', h: '#6F4E37' }, { n: 'Gris Perla', h: '#B0B0B0' }
                ]
            },
            {
                id: 'school-220g',
                name: 'Colores Vivos School Importada (220g)',
                size: '66×48 cm',
                icon: 'graduation-cap',
                type: 'colors',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Blanco', h: '#FAFAFA' }, { n: 'Amarillo Bandera', h: '#FFD700' }, { n: 'Naranja', h: '#FF8C00' },
                    { n: 'Rojo Bandera', h: '#CE1126' }, { n: 'Rosado', h: '#FF69B4' }, { n: 'Fucsia', h: '#E91E8C' },
                    { n: 'Lila', h: '#BB8FCE' }, { n: 'Violeta', h: '#8B00FF' }, { n: 'Negro Ébano', h: '#1A1A1A' },
                    { n: 'Azul Bandera', h: '#00308F' }, { n: 'Azul Celeste', h: '#87CEEB' }, { n: 'Azul Turquesa', h: '#40E0D0' },
                    { n: 'Verde Oscuro', h: '#006400' }, { n: 'Verde Navidad', h: '#1B5E20' }, { n: 'Verde Manzana', h: '#8DB600' },
                    { n: 'Marrón', h: '#6F4E37' }, { n: 'Gris Perla', h: '#B0B0B0' }
                ]
            },
            {
                id: 'bitono-pastel',
                name: 'Doble Faz Bitono Pastel',
                size: '50×70 cm',
                icon: 'blend',
                type: 'bitono',
                desc: 'Venta mínima 5 und',
                colors: [
                    { n: 'Lila / Gris', h1: '#BB8FCE', h2: '#808080' }, { n: 'Amarillo / Gris', h1: '#FFFACD', h2: '#808080' }
                ]
            },
            {
                id: 'opalina-pliego',
                name: 'Opalina Pliego Completo (200g)',
                size: '66×96 cm',
                icon: 'file',
                type: 'simple',
                desc: 'Venta mínima 5 und',
                items: [{ n: 'Blanco Nieve', h: '#F8F8FF' }]
            },
            {
                id: 'bristol-escolar',
                name: 'Bristol Escolar',
                size: 'Pliego estándar',
                icon: 'file-stack',
                type: 'simple',
                desc: 'Venta mínima 5 und',
                items: [{ n: 'Blanco', h: '#FFFFFF' }]
            }
        ]
    },
    // SECCIÓN 2: PAQUETES TAMAÑO CARTA (sin mínimo)
    {
        id: 'tamano-carta',
        tabName: 'PAQUETES TAMAÑO CARTA',
        tabIcon: 'file',
        tabColor: 'bg-emerald-500',
        accent: '#10B981',
        gradient: 'from-emerald-500/15 to-teal-500/15',
        minQty: 0,
        category: 'paquetes',
        subs: [
            {
                id: 'opalina-resma',
                name: 'Opalina en Resma',
                size: 'Tamaño Carta',
                icon: 'package',
                type: 'packages',
                desc: 'Paquete de 100 unidades',
                items: [
                    { n: 'Opalina Blanca 160g', h: '#F0F0F5', size: 'Paquete x100 und' },
                    { n: 'Opalina Blanca 210g', h: '#F8F8FF', size: 'Paquete x100 und' },
                    { n: 'Opalina Crema 200g', h: '#FFF8E7', size: 'Paquete x100 und' }
                ]
            },
            {
                id: 'carta-120g',
                name: 'Cartulina de Color Carta 120g',
                size: 'Tamaño Carta',
                icon: 'layers',
                type: 'packages',
                desc: 'Paquete de 25 unidades',
                items: [
                    { n: 'Paquete Surtido', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Blanco', h: '#FAFAFA', size: 'Paquete de 25 und' }, { n: 'Amarillo Bandera', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Naranja', h: '#FF8C00', size: 'Paquete de 25 und' }, { n: 'Rojo Bandera', h: '#CE1126', size: 'Paquete de 25 und' },
                    { n: 'Rosado', h: '#FF69B4', size: 'Paquete de 25 und' }, { n: 'Fucsia', h: '#E91E8C', size: 'Paquete de 25 und' },
                    { n: 'Lila', h: '#BB8FCE', size: 'Paquete de 25 und' }, { n: 'Violeta', h: '#8B00FF', size: 'Paquete de 25 und' },
                    { n: 'Negro Ébano', h: '#1A1A1A', size: 'Paquete de 25 und' }, { n: 'Azul Bandera', h: '#00308F', size: 'Paquete de 25 und' },
                    { n: 'Azul Celeste', h: '#87CEEB', size: 'Paquete de 25 und' }, { n: 'Azul Turquesa', h: '#40E0D0', size: 'Paquete de 25 und' },
                    { n: 'Verde Oscuro', h: '#006400', size: 'Paquete de 25 und' }, { n: 'Verde Navidad', h: '#1B5E20', size: 'Paquete de 25 und' },
                    { n: 'Verde Manzana', h: '#8DB600', size: 'Paquete de 25 und' }, { n: 'Marrón', h: '#6F4E37', size: 'Paquete de 25 und' },
                    { n: 'Gris Perla', h: '#B0B0B0', size: 'Paquete de 25 und' }
                ]
            },
            {
                id: 'carta-160g',
                name: 'Cartulina de Color Carta 160g',
                size: 'Tamaño Carta',
                icon: 'layers',
                type: 'packages',
                desc: 'Paquete de 25 unidades',
                items: [
                    { n: 'Paquete Surtido', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Blanco', h: '#FAFAFA', size: 'Paquete de 25 und' }, { n: 'Amarillo Bandera', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Naranja', h: '#FF8C00', size: 'Paquete de 25 und' }, { n: 'Rojo Bandera', h: '#CE1126', size: 'Paquete de 25 und' },
                    { n: 'Rosado', h: '#FF69B4', size: 'Paquete de 25 und' }, { n: 'Fucsia', h: '#E91E8C', size: 'Paquete de 25 und' },
                    { n: 'Lila', h: '#BB8FCE', size: 'Paquete de 25 und' }, { n: 'Violeta', h: '#8B00FF', size: 'Paquete de 25 und' },
                    { n: 'Negro Ébano', h: '#1A1A1A', size: 'Paquete de 25 und' }, { n: 'Azul Bandera', h: '#00308F', size: 'Paquete de 25 und' },
                    { n: 'Azul Celeste', h: '#87CEEB', size: 'Paquete de 25 und' }, { n: 'Azul Turquesa', h: '#40E0D0', size: 'Paquete de 25 und' },
                    { n: 'Verde Oscuro', h: '#006400', size: 'Paquete de 25 und' }, { n: 'Verde Navidad', h: '#1B5E20', size: 'Paquete de 25 und' },
                    { n: 'Verde Manzana', h: '#8DB600', size: 'Paquete de 25 und' }, { n: 'Marrón', h: '#6F4E37', size: 'Paquete de 25 und' },
                    { n: 'Gris Perla', h: '#B0B0B0', size: 'Paquete de 25 und' }
                ]
            },
            {
                id: 'carta-180g',
                name: 'Cartulina de Color Carta 180g',
                size: 'Tamaño Carta',
                icon: 'layers',
                type: 'packages',
                desc: 'Paquete de 25 unidades',
                items: [
                    { n: 'Paquete Surtido', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Blanco', h: '#FAFAFA', size: 'Paquete de 25 und' }, { n: 'Amarillo Bandera', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Naranja', h: '#FF8C00', size: 'Paquete de 25 und' }, { n: 'Rojo Bandera', h: '#CE1126', size: 'Paquete de 25 und' },
                    { n: 'Rosado', h: '#FF69B4', size: 'Paquete de 25 und' }, { n: 'Fucsia', h: '#E91E8C', size: 'Paquete de 25 und' },
                    { n: 'Lila', h: '#BB8FCE', size: 'Paquete de 25 und' }, { n: 'Violeta', h: '#8B00FF', size: 'Paquete de 25 und' },
                    { n: 'Negro Ébano', h: '#1A1A1A', size: 'Paquete de 25 und' }, { n: 'Azul Bandera', h: '#00308F', size: 'Paquete de 25 und' },
                    { n: 'Azul Celeste', h: '#87CEEB', size: 'Paquete de 25 und' }, { n: 'Azul Turquesa', h: '#40E0D0', size: 'Paquete de 25 und' },
                    { n: 'Verde Oscuro', h: '#006400', size: 'Paquete de 25 und' }, { n: 'Verde Navidad', h: '#1B5E20', size: 'Paquete de 25 und' },
                    { n: 'Verde Manzana', h: '#8DB600', size: 'Paquete de 25 und' }, { n: 'Marrón', h: '#6F4E37', size: 'Paquete de 25 und' },
                    { n: 'Gris Perla', h: '#B0B0B0', size: 'Paquete de 25 und' }
                ]
            },
            {
                id: 'carta-220g',
                name: 'Cartulina de Color Carta 220g',
                size: 'Tamaño Carta',
                icon: 'layers',
                type: 'packages',
                desc: 'Paquete de 25 unidades',
                items: [
                    { n: 'Paquete Surtido', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Blanco', h: '#FAFAFA', size: 'Paquete de 25 und' }, { n: 'Amarillo Bandera', h: '#FFD700', size: 'Paquete de 25 und' },
                    { n: 'Naranja', h: '#FF8C00', size: 'Paquete de 25 und' }, { n: 'Rojo Bandera', h: '#CE1126', size: 'Paquete de 25 und' },
                    { n: 'Rosado', h: '#FF69B4', size: 'Paquete de 25 und' }, { n: 'Fucsia', h: '#E91E8C', size: 'Paquete de 25 und' },
                    { n: 'Lila', h: '#BB8FCE', size: 'Paquete de 25 und' }, { n: 'Violeta', h: '#8B00FF', size: 'Paquete de 25 und' },
                    { n: 'Negro Ébano', h: '#1A1A1A', size: 'Paquete de 25 und' }, { n: 'Azul Bandera', h: '#00308F', size: 'Paquete de 25 und' },
                    { n: 'Azul Celeste', h: '#87CEEB', size: 'Paquete de 25 und' }, { n: 'Azul Turquesa', h: '#40E0D0', size: 'Paquete de 25 und' },
                    { n: 'Verde Oscuro', h: '#006400', size: 'Paquete de 25 und' }, { n: 'Verde Navidad', h: '#1B5E20', size: 'Paquete de 25 und' },
                    { n: 'Verde Manzana', h: '#8DB600', size: 'Paquete de 25 und' }, { n: 'Marrón', h: '#6F4E37', size: 'Paquete de 25 und' },
                    { n: 'Gris Perla', h: '#B0B0B0', size: 'Paquete de 25 und' }
                ]
            },
            {
                id: 'perlada',
                name: 'Cartulina Perlada',
                size: 'Tamaño Carta',
                icon: 'gem',
                type: 'packages',
                desc: 'Paquete de 25 unidades',
                items: [
                    { n: 'Crema', h: '#FFF8E7', size: 'Paquete de 25 und' }, { n: 'Dorado', h: '#DAA520', size: 'Paquete de 25 und' },
                    { n: 'Rosado', h: '#FFB6C1', size: 'Paquete de 25 und' }, { n: 'Menta', h: '#98FF98', size: 'Paquete de 25 und' },
                    { n: 'Verde Lima', h: '#CDDC39', size: 'Paquete de 25 und' }, { n: 'Gris', h: '#808080', size: 'Paquete de 25 und' }
                ]
            },
            {
                id: 'hilo',
                name: 'Cartulina de Hilo (230g)',
                size: 'Tamaño Carta',
                icon: 'file',
                type: 'simple',
                desc: 'Paquete de 20 unidades',
                items: [{ n: 'Blanco', h: '#F5F0E0', size: 'Paquete de 20 und' }]
            }
        ]
    },
    // SECCIÓN 3: CARTON EN KILO GRIS Y MARRON (sin mínimo, unidad suelta)
    {
        id: 'carton-kilo',
        tabName: 'CARTON EN KILO GRIS Y MARRON',
        tabIcon: 'box',
        tabColor: 'bg-orange-500',
        accent: '#F97316',
        gradient: 'from-orange-500/15 to-amber-500/15',
        minQty: 0,
        category: 'carton',
        subs: [
            {
                id: 'carton-gris',
                name: 'Cartón Gris',
                size: '100×70 cm',
                icon: 'box',
                type: 'simple',
                desc: 'Venta por unidad',
                items: [
                    { n: 'Cartón Gris 0.5kg', h: '#808080', size: '100×70 cm · 0.5kg' },
                    { n: 'Cartón Gris 1kg', h: '#808080', size: '100×70 cm · 1kg' },
                    { n: 'Cartón Gris 2kg', h: '#808080', size: '100×70 cm · 2kg' },
                    { n: 'Cartón Gris 3kg', h: '#808080', size: '100×70 cm · 3kg' },
                    { n: 'Cartón Gris 4kg', h: '#808080', size: '100×70 cm · 4kg' }
                ]
            },
            {
                id: 'carton-marron',
                name: 'Cartón Marrón',
                size: '100×70 cm',
                icon: 'box',
                type: 'simple',
                desc: 'Venta por unidad',
                items: [
                    { n: 'Cartón Marrón 0.5kg', h: '#8B5A2B', size: '100×70 cm · 0.5kg' },
                    { n: 'Cartón Marrón 1kg', h: '#8B5A2B', size: '100×70 cm · 1kg' },
                    { n: 'Cartón Marrón 2kg', h: '#8B5A2B', size: '100×70 cm · 2kg' },
                    { n: 'Cartón Marrón 3kg', h: '#8B5A2B', size: '100×70 cm · 3kg' },
                    { n: 'Cartón Marrón 4kg', h: '#8B5A2B', size: '100×70 cm · 4kg' }
                ]
            }
        ]
    }
];

// ==================== COLOR DINÁMICO DEL CARRITO ====================
function getCartColor(totalItems) {
    let t = Math.min(totalItems, 20) / 20;
    let hue = 150 - (t * 125);      // 150° (verde) → 25° (naranja)
    let sat = 70 + (t * 20);        // 70% → 90%
    let light = 45 + (t * 10);      // 45% → 55%
    return `hsl(${hue}, ${sat}%, ${light}%)`;
}

// ==================== ESTADO GLOBAL ====================
let cart = [];
let openSubs = {};

// ==================== UTILIDADES ====================
function isLight(hex) {
    if (!hex) return false;
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return (r*0.299 + g*0.587 + b*0.114) > 210;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, m => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;' }[m]));
}

// ==================== RENDER TABS ====================
function renderTabs() {
    const tabBar = document.getElementById('tabBar');
    if (!tabBar) return;
    tabBar.innerHTML = D.map(g => `
        <button id="tab-${g.id}" onclick="scrollToGrp('${g.id}')" class="cat-tab flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/[0.06] flex-shrink-0 transition-all">
            <div class="w-2 h-2 rounded-full ${g.tabColor}"></div>
            <span class="text-xs font-medium text-zinc-300 whitespace-nowrap">${g.tabName}</span>
            ${g.minQty ? `<span class="text-[9px] font-semibold px-1.5 py-0.5 rounded-md bg-orange-500/15 text-orange-400">mín.${g.minQty}</span>` : ''}
        </button>
    `).join('');
    lucide.createIcons();
}

// ==================== RENDER SECCIONES ====================
function renderAll() {
    const container = document.getElementById('allSections');
    if (!container) return;
    let html = '';
    D.forEach((grp, gi) => {
        html += `<section id="section-${grp.id}" class="mb-12 fade-in" style="animation-delay:${gi * 0.06}s">
            <div class="space-y-2">
                <h2 class="text-xl font-bold text-white mb-4 flex items-center gap-2"><div class="w-1 h-6 rounded-full ${grp.tabColor}"></div>${grp.tabName}</h2>`;
        grp.subs.forEach((sub, si) => {
            const sk = `${grp.id}-${si}`;
            const isOpen = !!openSubs[sk];
            let count = 0;
            if (sub.type === 'colors') count = sub.colors?.length || 0;
            else if (sub.type === 'patterns') count = sub.patterns?.length || 0;
            else if (sub.type === 'bitono') count = sub.colors?.length || 0;
            else if (sub.type === 'simple') count = sub.items?.length || 0;
            else if (sub.type === 'packages') count = sub.items?.length || 0;
            html += `<div id="subwrap-${sk}" class="sub-section rounded-xl border border-white/[0.04] overflow-hidden bg-white/[0.01] ${isOpen ? 'sub-open' : ''}">
                <div class="sub-toggle px-4 py-3 flex items-center justify-between cursor-pointer" onclick="toggleSub('${sk}')">
                    <div class="flex items-center gap-3">
                        <i data-lucide="${sub.icon}" class="w-4 h-4 text-zinc-500"></i>
                        <div>
                            <h3 class="text-sm font-semibold text-zinc-200">${sub.name}</h3>
                            <p class="text-[10px] text-zinc-500">${sub.size} · ${count} ${sub.type === 'packages' ? 'opciones' : 'colores'} · ${sub.desc || ''}</p>
                        </div>
                    </div>
                    <i data-lucide="chevron-down" class="w-4 h-4 text-zinc-500 chev-icon ${isOpen ? 'rotated' : ''}"></i>
                </div>
                <div id="sub-${sk}" class="${isOpen ? '' : 'hidden'}">
                    <div class="px-3 pb-3 pt-1">
                        <div class="${sub.type === 'packages' || (sub.type === 'simple' && sub.name.includes('Hilo')) ? 'space-y-2' : (sub.type === 'simple' ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5' : 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5')}">
                            ${renderSubContent(sub, grp.minQty, grp.category)}
                        </div>
                    </div>
                </div>
            </div>`;
        });
        html += `</div></section>`;
    });
    container.innerHTML = html;
    lucide.createIcons();
}

function renderSubContent(sub, defaultMinQty, category) {
    const minQty = sub.minQty !== undefined ? sub.minQty : defaultMinQty;
    if (sub.type === 'colors') {
        return sub.colors.map(col => {
            const textureClass = sub.tex === 'esc' ? 'esc-texture' : (sub.tex === 'micro' ? 'micro-esc-texture' : (sub.tex === 'espejo' ? 'espejo-effect' : ''));
            const borderLight = isLight(col.h) ? 'border border-white/30' : '';
            const glowStyle = col.glow ? `--glow:${col.glow}` : '';
            const fluorCls = sub.tex === 'fluor' ? 'fluor-glow' : '';
            return `<div class="swatch-item relative rounded-xl bg-white/[0.03] border border-white/[0.05] p-2.5 flex flex-col items-center text-center group cursor-pointer transition-all hover:bg-white/[0.08]"
                        onclick="addToCart('${escapeHtml(sub.name)}', '${escapeHtml(sub.size)}', '${col.n}', '${col.n}', '${col.h}', ${minQty}, false, '${category}')">
                    <div class="${textureClass} relative w-full aspect-square rounded-lg ${borderLight} ${fluorCls} mb-2 flex items-center justify-center overflow-hidden" style="${glowStyle} background-color:${col.h}">
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                            <div class="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-md"><i data-lucide="plus" class="w-3.5 h-3.5 text-black"></i></div>
                        </div>
                    </div>
                    <span class="text-[10px] text-zinc-300 mt-0.5">${escapeHtml(col.n)}</span>
                </div>`;
        }).join('');
    } else if (sub.type === 'patterns') {
        return sub.patterns.map(pat => {
            const textureClass = sub.tex === 'esc' ? 'esc-texture' : (sub.tex === 'espejo' ? 'espejo-effect' : '');
            const borderLight = isLight(pat.h) ? 'border border-white/30' : '';
            return `<div class="swatch-item relative rounded-xl bg-white/[0.03] border border-white/[0.05] p-2.5 flex flex-col items-center text-center group cursor-pointer transition-all hover:bg-white/[0.08]"
                        onclick="addToCart('${escapeHtml(sub.name)}', '${escapeHtml(sub.size)}', '${pat.n}', '${pat.n}', '${pat.h}', ${minQty}, false, '${category}')">
                    <div class="${textureClass} relative w-full aspect-square rounded-lg ${borderLight} mb-2 flex items-center justify-center overflow-hidden" style="background-color:${pat.h}">
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                            <div class="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-md"><i data-lucide="plus" class="w-3.5 h-3.5 text-black"></i></div>
                        </div>
                    </div>
                    <span class="text-[10px] text-zinc-300 mt-0.5">${escapeHtml(pat.n)}</span>
                </div>`;
        }).join('');
    } else if (sub.type === 'bitono') {
        return sub.colors.map(col => `
            <div class="swatch-item rounded-xl bg-white/[0.03] border border-white/[0.05] p-3 flex flex-col items-center text-center group cursor-pointer sm:col-span-2 lg:col-span-1"
                onclick="addToCart('${escapeHtml(sub.name)}', '${escapeHtml(sub.size)}', '${col.n}', '${col.n}', '${col.h1}', ${minQty}, false, '${category}')">
                <div class="relative w-full aspect-[2/1] rounded-lg overflow-hidden mb-2 espejo-effect" style="background:linear-gradient(135deg, ${col.h1} 50%, ${col.h2} 50%)">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <div class="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center"><i data-lucide="plus" class="w-3.5 h-3.5 text-black"></i></div>
                    </div>
                </div>
                <span class="text-[10px] text-zinc-300">${escapeHtml(col.n)}</span>
            </div>
        `).join('');
    } else if (sub.type === 'simple') {
        return sub.items.map(it => `
            <div class="flex items-center gap-4 p-3 rounded-xl glass cursor-pointer transition-all hover:bg-white/[0.08] package-item" onclick="addToCart('${escapeHtml(sub.name)}', '${escapeHtml(sub.size)}', '${it.n}', '${it.n}', '${it.h}', ${minQty}, false, '${category}')">
                <div class="w-12 h-12 rounded-lg flex-shrink-0 border ${isLight(it.h) ? 'border-zinc-700' : ''}" style="background-color:${it.h}"></div>
                <div class="flex-1 text-left">
                    <p class="text-sm font-medium text-white">${escapeHtml(it.n)}</p>
                    <p class="text-[10px] text-zinc-400">${it.size || sub.size}</p>
                    ${minQty ? `<p class="text-[9px] text-orange-400">Mín. ${minQty} und</p>` : ''}
                </div>
                <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><i data-lucide="plus" class="w-4 h-4 text-zinc-400"></i></div>
            </div>
        `).join('');
    } else if (sub.type === 'packages') {
        return sub.items.map(it => `
            <div class="flex items-center gap-4 p-3 rounded-xl glass cursor-pointer transition-all hover:bg-white/[0.08] package-item" onclick="addToCart('${escapeHtml(sub.name)}', '${escapeHtml(it.size) || escapeHtml(sub.size)}', '${it.n}', '${it.n}', '${it.h}', 0, true, '${category}')">
                <div class="w-12 h-12 rounded-lg flex-shrink-0 border ${isLight(it.h) ? 'border-zinc-700' : ''}" style="background-color:${it.h}"></div>
                <div class="flex-1 text-left">
                    <p class="text-sm font-medium text-white">${escapeHtml(it.n)}</p>
                    <p class="text-[10px] text-zinc-400">${it.size || sub.size}</p>
                    <p class="text-[9px] text-emerald-400">1 paquete</p>
                </div>
                <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><i data-lucide="plus" class="w-4 h-4 text-zinc-400"></i></div>
            </div>
        `).join('');
    }
    return '';
}

// ==================== INTERACCIONES ====================
function toggleSub(sk) {
    openSubs[sk] = !openSubs[sk];
    const el = document.getElementById(`sub-${sk}`);
    const wrap = document.getElementById(`subwrap-${sk}`);
    if (!wrap) return;
    const chev = wrap.querySelector('.chev-icon');
    if (openSubs[sk]) {
        el?.classList.remove('hidden');
        chev?.classList.add('rotated');
        wrap.classList.add('sub-open');
    } else {
        el?.classList.add('hidden');
        chev?.classList.remove('rotated');
        wrap.classList.remove('sub-open');
    }
}

function scrollToGrp(grpId) {
    const section = document.getElementById(`section-${grpId}`);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    const tab = document.getElementById(`tab-${grpId}`);
    if (tab) tab.classList.add('active');
}

function setupSpy() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const gid = entry.target.id.replace('section-', '');
                document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
                const tab = document.getElementById(`tab-${gid}`);
                if (tab) tab.classList.add('active');
            }
        });
    }, { rootMargin: '-20% 0px -60% 0px' });
    D.forEach(g => {
        const el = document.getElementById(`section-${g.id}`);
        if (el) observer.observe(el);
    });
}

// ==================== CARRITO ====================
function addToCart(subName, subSize, code, name, hex, minQty, isPackage = false, category = '') {
    const key = `${subName}|${code}`;
    const existing = cart.find(i => i.key === key);
    if (existing) existing.qty++;
    else cart.push({ key, subName, subSize, code, name: escapeHtml(name), hex, minQty: minQty || 0, isPackage, category, qty: 1 });
    updateCartUI();
    const unidadTexto = isPackage ? 'paquete' : 'unidad';
    showToast(`+1 ${unidadTexto} · ${escapeHtml(name)}`, hex);
}

function changeQty(idx, delta) {
    if (!cart[idx]) return;
    const newQty = cart[idx].qty + delta;
    if (newQty <= 0) cart.splice(idx, 1);
    else cart[idx].qty = newQty;
    updateCartUI();
}

function removeItem(idx) {
    cart.splice(idx, 1);
    updateCartUI();
    showToast('Item eliminado', '#ef4444');
}

function clearCart() {
    cart = [];
    updateCartUI();
    showToast('Carrito vaciado', '#6b7280');
}

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    
    // ========== COLOR DINÁMICO ==========
    const cartColor = getCartColor(totalItems);
    const badgeEl = document.getElementById('cartBadge');
    if (badgeEl) {
        badgeEl.style.backgroundColor = cartColor;
        badgeEl.style.transition = 'background-color 0.2s ease';
    }
    const floatingBtn = document.getElementById('floatingCartBtn');
    if (floatingBtn) {
        floatingBtn.style.borderColor = cartColor;
        floatingBtn.style.boxShadow = `0 0 8px ${cartColor}`;
    }
    const cartIcon = document.querySelector('header button i');
    if (cartIcon) {
        if (totalItems > 0) cartIcon.style.color = cartColor;
        else cartIcon.style.color = '';
    }
    
    // ========== RESTO DEL UI ==========
    const fbadge = document.getElementById('floatingBadge');
    const emptyDiv = document.getElementById('cartEmpty');
    const itemsDiv = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const countSpan = document.getElementById('cartCount');
    const totalSpan = document.getElementById('cartTotal');
    const summaryLines = document.getElementById('cartSummaryLines');

    if (cart.length > 0) {
        badgeEl?.classList.remove('hidden'); badgeEl?.classList.add('flex','badge-bounce');
        badgeEl.textContent = totalItems > 99 ? '99+' : totalItems;
        if (fbadge) { fbadge.textContent = totalItems > 99 ? '99+' : totalItems; fbadge.classList.remove('hidden'); fbadge.classList.add('flex'); }
        floatingBtn?.classList.remove('hidden'); floatingBtn?.classList.add('flex');
        emptyDiv?.classList.add('hidden'); itemsDiv?.classList.remove('hidden');
        footer?.classList.remove('hidden'); footer?.classList.add('flex','flex-col');
        setTimeout(() => badgeEl?.classList.remove('badge-bounce'), 400);
    } else {
        badgeEl?.classList.add('hidden'); badgeEl?.classList.remove('flex');
        if (fbadge) fbadge.classList.add('hidden');
        floatingBtn?.classList.add('hidden'); floatingBtn?.classList.remove('flex');
        emptyDiv?.classList.remove('hidden'); itemsDiv?.classList.add('hidden');
        footer?.classList.add('hidden'); footer?.classList.remove('flex','flex-col');
    }
    countSpan.textContent = `(${totalItems})`;
    totalSpan.textContent = `${totalItems}`;

    // Desglose por categoría
    const categorias = { laminas: 0, paquetes: 0, carton: 0 };
    cart.forEach(item => {
        if (item.category === 'laminas') categorias.laminas += item.qty;
        else if (item.category === 'paquetes') categorias.paquetes += item.qty;
        else if (item.category === 'carton') categorias.carton += item.qty;
        else {
            if (item.isPackage) categorias.paquetes += item.qty;
            else if (item.minQty > 0) categorias.laminas += item.qty;
            else categorias.carton += item.qty;
        }
    });
    const tiposDistintos = cart.length;
    let desgloseHtml = '';
    if (categorias.laminas) desgloseHtml += `<span class="inline-flex items-center gap-1"><i data-lucide="maximize-2" class="w-3 h-3"></i>Láminas: ${categorias.laminas}</span>`;
    if (categorias.paquetes) desgloseHtml += `<span class="inline-flex items-center gap-1 ml-2"><i data-lucide="package" class="w-3 h-3"></i>Paquetes: ${categorias.paquetes}</span>`;
    if (categorias.carton) desgloseHtml += `<span class="inline-flex items-center gap-1 ml-2"><i data-lucide="box" class="w-3 h-3"></i>Cartón: ${categorias.carton}</span>`;
    summaryLines.innerHTML = `<div class="flex flex-wrap items-center gap-2 text-xs text-zinc-300">${desgloseHtml} <span class="ml-auto text-amber-400">${tiposDistintos} producto(s) distinto(s)</span></div>`;
    lucide.createIcons();

    // Renderizar items agrupados por orden: láminas, paquetes, cartón
    const laminasItems = cart.filter(i => i.category === 'laminas' || (i.category === '' && i.minQty > 0 && !i.isPackage));
    const paquetesItems = cart.filter(i => i.category === 'paquetes' || (i.category === '' && i.isPackage));
    const cartonItems = cart.filter(i => i.category === 'carton' || (i.category === '' && i.minQty === 0 && !i.isPackage));
    const groupedItems = [...laminasItems, ...paquetesItems, ...cartonItems];

    itemsDiv.innerHTML = groupedItems.map((item, idx) => {
        const warn = item.minQty > 0 && item.qty < item.minQty;
        const unidadTexto = item.isPackage ? 'paquete(s)' : 'unidad(es)';
        let catBadge = '';
        if (item.category === 'laminas' || (item.minQty > 0 && !item.isPackage)) catBadge = '<span class="text-[8px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded-full">Lámina</span>';
        else if (item.category === 'paquetes' || item.isPackage) catBadge = '<span class="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full">Paquete</span>';
        else if (item.category === 'carton' || (item.minQty === 0 && !item.isPackage)) catBadge = '<span class="text-[8px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded-full">Cartón</span>';
        return `<div class="flex items-center gap-3 p-3 rounded-xl glass bg-black/40 slide-in" style="animation-delay:${idx*0.03}s">
            <div class="w-9 h-9 rounded-lg border ${isLight(item.hex) ? 'border-white/30' : ''}" style="background:${item.hex}"></div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2"><p class="text-sm font-medium text-white truncate">${item.name}</p>${catBadge}</div>
                <p class="text-[10px] text-zinc-500">${escapeHtml(item.subName)} · ${escapeHtml(item.subSize)}</p>
                ${warn ? `<p class="text-[9px] text-amber-400">⚠ Mínimo ${item.minQty} ${item.isPackage ? 'paquetes' : 'unidades'}</p>` : `<p class="text-[9px] text-zinc-500">${item.qty} ${unidadTexto}</p>`}
            </div>
            <div class="flex items-center gap-1">
                <button onclick="changeQty(${cart.indexOf(item)}, -1)" class="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center"><i data-lucide="minus" class="w-3 h-3 text-white"></i></button>
                <span class="w-6 text-center text-sm text-white">${item.qty}</span>
                <button onclick="changeQty(${cart.indexOf(item)}, 1)" class="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center"><i data-lucide="plus" class="w-3 h-3 text-white"></i></button>
                <button onclick="removeItem(${cart.indexOf(item)})" class="w-6 h-6 rounded-md hover:bg-red-500/20 flex items-center justify-center ml-1"><i data-lucide="trash-2" class="w-3 h-3 text-red-400"></i></button>
            </div>
        </div>`;
    }).join('');
    lucide.createIcons();
}

function sendWhatsApp() {
    if (!cart.length) return;
    const phone = '584122891366';
    let msg = '🛒 *PEDIDO DE CARTULINAS GUICAR 2026*\n\n';
    const grouped = {};
    cart.forEach(i => {
        const key = `${i.subName} (${i.subSize})`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(i);
    });
    for (const [sub, items] of Object.entries(grouped)) {
        msg += `📝 *${sub}*\n`;
        items.forEach(i => {
            const unidadTexto = i.isPackage ? 'paquete' : 'unidad';
            let line = `  • ${i.name} → ${i.qty} ${unidadTexto}${i.qty !== 1 ? 's' : ''}`;
            if (i.minQty > 0 && i.qty < i.minQty) line += ` ⚠️ (mín.${i.minQty})`;
            msg += line + '\n';
        });
        msg += '\n';
    }
    const total = cart.reduce((s, i) => s + i.qty, 0);
    msg += '───────────\n✅ *Total de ítems:* ' + total + '\n';
    if (cart.some(i => i.minQty > 0 && i.minQty === 5 && !i.isPackage)) msg += '⚠️ Láminas sueltas: venta mínima 5 unidades por tipo.\n';
    msg += '✨ *Favor confirmar disponibilidad y precios.*';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function showToast(message, color) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast-enter pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl glass backdrop-blur-md border border-white/15 max-w-xs shadow-xl';
    toast.innerHTML = `<div class="w-3 h-3 rounded-full shadow-md" style="background-color:${color}"></div><span class="text-sm text-white font-medium">${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
}

function openCart() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    if (!panel || !overlay) return;
    panel.classList.remove('closed');
    panel.classList.add('open');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    if (!panel || !overlay) return;
    panel.classList.remove('open');
    panel.classList.add('closed');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    openSubs['laminas-0'] = true;
    openSubs['laminas-1'] = true;
    openSubs['laminas-10'] = true;
    openSubs['tamano-carta-0'] = true;
    openSubs['tamano-carta-1'] = true;
    openSubs['carton-kilo-0'] = true;
    openSubs['carton-kilo-1'] = true;
    renderTabs();
    renderAll();
    setupSpy();
    lucide.createIcons();
});

window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeItem = removeItem;
window.clearCart = clearCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.sendWhatsApp = sendWhatsApp;
window.toggleSub = toggleSub;
window.scrollToGrp = scrollToGrp;