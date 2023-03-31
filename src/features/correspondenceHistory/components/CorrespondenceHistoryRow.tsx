import { Box, Button } from "@chakra-ui/react";
import dayjs from "dayjs";
import { createTRPCJotai } from "jotai-trpc";
import { httpLink } from "@trpc/client";
import { atom } from "jotai";
import { helpdesk_supports } from "../../../../../back/src/schema/zod.ts/index";
import { toYYYYMMDDHHmmss } from "../../../utils/wrapper";
import { Status } from "../../../../../back/src/api/v4/helpdesk-supports/types/helpdeskSupportsSchema";
import { trpc } from "../../../utils/trpc";

type CorrespondenceHistoryRowProps = {
  helpdesk_support: helpdesk_supports;
};

export const CorrespondenceHistoryRow = ({ helpdesk_support: helpdesk }: CorrespondenceHistoryRowProps) => {
  const util = trpc.useContext();
  const mutation = trpc.changeStatus.useMutation({
    onSuccess: () => {
      util.helpdeskSupports.invalidate();
    },
  });

  const changeStatus = (id: number, status: Status) => {
    mutation.mutate({ id, status });
  };
  console.log({ helpdesk });
  return (
    <Box display="flex" className="gap-4 mb-2" key={helpdesk.id}>
      <Box>{helpdesk.id}</Box>
      <Box>{toYYYYMMDDHHmmss(dayjs(helpdesk.supported_at))}</Box>
      <Box>{helpdesk.phone_number}</Box>
      <Box>{helpdesk.user_id}</Box>
      <Box color={helpdesk.status === "done" ? "blue" : "red"}>{helpdesk.status}</Box>
      <Box>{Math.random()}</Box>
      <Button
        size="sm"
        colorScheme="blue"
        onClick={() => {
          changeStatus(helpdesk.id, "done");
        }}
      >
        done
      </Button>
      <Button
        size="sm"
        colorScheme="red"
        onClick={() => {
          changeStatus(helpdesk.id, "undone");
        }}
      >
        undone
      </Button>
    </Box>
  );
};
