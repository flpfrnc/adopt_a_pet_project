import type { NextPage } from "next";
import PetList from "../ui/components/PetList/PetList";
import Title from "../ui/components/Title/Title";
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Adopt a Pet</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg"></link>
      </Head>
      <Title 
      title="" 
      subtitle={
      <span>
        Com nosso sistema, você que deseja cuidar de um <br/>
        animalzinho de estimação pode <strong>adotar um pet virtualmente</strong>
      </span>
      }
      />
      <PetList pets={[
        {
          id: 1,
          name: 'Rodolfo',
          story: 'Gatinho lindo e animado',
          picture: 'https://www.petlove.com.br/dicas/wp-content/uploads/2018/12/gatinho-filhote-deitado.jpg'  
        }
      ]} />
    </div>
  );
};

export default Home;
