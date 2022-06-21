import Head from "next/head";
import { useRouter } from "next/router";
import { Card, CardContent, Link, Spacer, Text, View } from "vcc-ui";

const Learn = () => {
  const router = useRouter();
  const { model } = router.query;

  return (
    <>
      <Head>
        <title>Volvo - Learn - {model}</title>
      </Head>

      <View>
        <Card>
          <CardContent>
            <Text variant="ootah">Learn</Text>
            <Spacer />
            <Text>{model}</Text>
            <Spacer />
            <Link href="/">Back</Link>
          </CardContent>
        </Card>
      </View>
    </>
  );
};

export default Learn;
