import React from 'react';
import { MdiInstagram, MdiWhatsapp, PhTiktokLogoFill, PhYoutubeLogo, RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from './Icons';

export default function SocialMedias(){
  return  <div style={{
    display: 'flex',
    flexDirection: 'column',
    background: '#d9272e',
    position: 'absolute',
    top: '40%',
    borderTopLeftRadius: 10,
    borderEndStartRadius: 10,
    padding: 10,
    right: 0,
    gap: 8
  }}>

    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <MdiWhatsapp width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>
    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <RiFacebookFill width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>
    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <RiTwitterXFill width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>
    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <PhYoutubeLogo width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>
    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <MdiInstagram width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>
    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <RiLinkedinFill width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>
    <div style={{
      background: 'white',
      borderRadius: '5px',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <PhTiktokLogoFill width={'1.5rem'} height={'1.5rem'} fill='#d9272e'/>
    </div>

  </div>;
}