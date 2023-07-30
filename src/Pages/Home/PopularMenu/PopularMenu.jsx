import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <section className='mb-12 gap-10'>
            <SectionTitle
             heading="From Our Classes"
             subHeading="Popular Classes"

            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
        </section>
    );
};
export default PopularMenu;