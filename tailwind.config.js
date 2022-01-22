module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'infinite-carousel': {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '100%': {
                        transform: 'translateX(calc(-250px * 7))',
                    },
                },
                'infinite-up-and-down': {
                    '0%': {
                        transform: 'translateY(1px)',
                    },
                    '50%': {
                        transform: 'translateY(35px)',
                    },
                    '100%': {
                        transform: 'translateY(1px)',
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 0.5s ease-in-out infinite',
                'infinite-carousel': 'infinite-carousel 38s infinite linear',
                'infinite-up-and-down': 'infinite-up-and-down 4s infinite ease-out',
            },
            colors: {
                primary: '#FFB900',
                'semi-black': '#12181B',
            },
            fontFamily: {
                rubik: 'Rubik',
            },
        },
    },
    plugins: [],
}
