import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loader() {
  return (
    <Box>
      <div className="loader"></div>
    </Box>
  );
}
