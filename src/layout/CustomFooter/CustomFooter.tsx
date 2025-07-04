import { FC } from "react";

import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const styles = {
  footer: {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    bottom: "0",
    backgroundColor: "transparent"
  }
} as const;

const CustomFooter: FC = () => {
  return (
    <Footer style={styles.footer}>
      <Typography>
        <Text>
          Leave a ⭐️ on this{" "}
          <a href="https://github.com/wibowo-id/web3-blockchain.git" target="_blank" rel="noopener noreferrer">
            Web3 Blockchain
          </a>{" "}
          if you like it!
        </Text>
      </Typography>
    </Footer>
  );
};

export default CustomFooter;
