import React from 'react'
import Header from '../components/Header'

function Profile() {
  return (
    <>
      <Header isBack={true} />
      <div style={styles.container}>
        <h1>About Me</h1>
        <img style={styles.profile} src="/profile.jpg" alt="" />

        <p>
          Hi, Saya <b>Rafli Adnan Ridwan </b>, saya merupakan seorang mahasiswa Universitas Nusa Putra dengan program studi Teknik Informatika 
          dan sekarang saya sedang duduk dibangku semester 5. Saya tertarik dibidang IT pada saat saya menginjak di Sekolah Menengah Pertama. 
        Pada saat itu saya bergabung di sebuah group facebook dimana grup tersebut membahas tentang IT, Decompile Recompile APK. dan lain-lain
        </p>
  

      </div>
    </>
  )
}



const styles = {
  container: {
    padding: "1.5em 2em",
    marginTop: "4em"
  },
  profile: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    marginBottom: "1em"
  },

}


export default Profile


