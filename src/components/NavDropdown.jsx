import { Menu, Button } from "@mantine/core";

const NavDropDown = () => {
  return ( 
    <Menu shadow="md" radius='0' width={200}>
    <Menu.Target>
        <Button
        color='#FFFDF6' radius={0} className='uppercase text-xs tracking-widest font-light' 
        width='target'
        styles={{ label: { color: 'black' } }}
        >Navigate</Button>
    </Menu.Target>
    <Menu.Dropdown className='bg-[#333] border-b-2 border-[#333]'>
        <Menu.Item color='#dedede' className='uppercase text-xs  text-white'>Geographic Introduction</Menu.Item>
        <Menu.Item color='#dedede' className='uppercase text-xs  text-white'>Interactive TDOP</Menu.Item>
        <Menu.Item color='#dedede' className='uppercase text-xs  text-white'>Data Dashboards</Menu.Item>
    </Menu.Dropdown>
</Menu>
   );
}
 
export default NavDropDown;