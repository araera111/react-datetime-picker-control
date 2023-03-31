import { Box } from "@chakra-ui/react";
import { isNil } from "ramda";
import { trpc } from "../../../utils/trpc";
import { CorrespondenceHistoryRow } from "./CorrespondenceHistoryRow";

export const CorrespondenceHistory = () => {
  const helpdeskQuery = trpc.helpdeskSupports.useQuery({ take: 100 });

  if (isNil(helpdeskQuery.data)) return <div>Loading...</div>;

  return (
    <Box>
      {helpdeskQuery.data.map((helpdesk) => (
        <CorrespondenceHistoryRow helpdesk_support={helpdesk} key={helpdesk.id} />
      ))}
    </Box>
  );
};
