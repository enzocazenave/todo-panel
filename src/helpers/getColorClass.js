export const getColorClass = (color, type) => {
    if (type == 'title') {

        if (color === 'red') return 'red-span';
        else if (color === 'purple') return 'purple-span';
        else if (color === 'blue') return 'blue-span';
        else if (color === 'green') return 'green-span';

    } else if (type == 'background') {

        if (color === 'red') return 'red-background';
        else if (color === 'purple') return 'purple-background';
        else if (color === 'blue') return 'blue-background';
        else if (color === 'green') return 'green-background';

    }
}

