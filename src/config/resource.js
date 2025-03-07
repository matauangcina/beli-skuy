import promoOne from '@/assets/gallery/promoOne.svg';
import promoTwo from '@/assets/gallery/promoTwo.svg';
import promoThree from '@/assets/gallery/promoThree.svg';
import allBg from '@/assets/gallery/all.svg';
import topBg from '@/assets/gallery/clothes.svg';
import bottomBg from '@/assets/gallery/pants.svg';
import footwearBg from '@/assets/gallery/shoes.svg';
import beigeHoodie from '@/assets/gallery/beige-hoodie.svg';
import greyShorts from '@/assets/gallery/gray-shorts.svg';
import peachBlouse from '@/assets/gallery/peach-blouse.svg';
import airMax from '@/assets/gallery/airmax.svg';

const bannerList = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus dolorum sunt.', 
    'Eligendi est aliquid distinctio corrupti eveniet atque aspernatur consequatur iure accusantium a veniam!', 
    'Pariatur veniam dicta autem blanditiis quibusdam distinctio, deleniti maiores ea minima ipsam.',
    'Aliquam recusandae, dicta reprehenderit nostrum quod qui perferendis enim laborum ratione labore amet harum velit expedita fuga sequi blanditiis vero odit quidem?',
    'Nihil excepturi expedita eum dignissimos deleniti nisi rerum molestias voluptates quia repudiandae!'
];

const promoList = [
    promoOne, 
    promoTwo, 
    promoThree
];

const catalogList = {
    all: allBg,
    top: topBg,
    bottom: bottomBg,
    footwear: footwearBg
};

const productList = [
    {
        name: 'Beige Hoodie',
        category: 'top',
        image: beigeHoodie
    },
    {
        name: 'Peach Blouse',
        category: 'top',
        image: peachBlouse
    },
    {
        name: 'Grey Shorts',
        category: 'bottom',
        image: greyShorts
    },
    {
        name: 'Nike Air Max',
        category: 'footwear',
        image: airMax
    }
];

export {bannerList, promoList, catalogList, productList};