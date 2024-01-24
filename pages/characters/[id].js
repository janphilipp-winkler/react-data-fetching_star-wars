import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { StyledLink } from "..";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  if (isLoading) {
    return <Loader />;
  }

  const WhiteStyledLink = styled(StyledLink)`
    color: white;
    padding-bottom: 1rem;
  `;

  return (
    <Layout>
      <WhiteStyledLink href="/">back to overview</WhiteStyledLink>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
