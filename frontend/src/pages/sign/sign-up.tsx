import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import Grid from "@mui/material/Grid";
import { CopyRightText } from "src/components/elements/text/copy-right-text";
import * as React from "react";
import { LinkText } from "src/components/elements/text/link-text";
import { AMPERSAND_PAGE, SIGN_IN_PAGE } from "src/services/constraints/url/page-url";
import { SignForm } from "@/components/organisms/sign";
import { useAuth } from "@/services/hooks/use-auth";
import { useRouter } from "next/router";

export default function SignUp() {
  const { user, signUp } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const text = "会員登録";

  return (
    <Container maxWidth={"xs"}>
      <Space height={8} />

      {/* ログインアイコン */}
      <SignIcon
        text={text}
        color={theme.palette.common.white}
        backGroundColor={theme.palette.primary.main}
      ></SignIcon>

      {/* サインインフォーム */}
      <SignForm text={text} user={user} router={router} signUp={signUp} />

      {/* 下部のコンテンツ */}
      <Grid container>
        <Grid item xs>
          <LinkText text={"パスワードを忘れた場合"} pageUrl={"#"} />
        </Grid>
        <Grid item>
          <LinkText text={"ログイン"} pageUrl={SIGN_IN_PAGE} />
        </Grid>
      </Grid>
      <Space height={8} />

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
}
