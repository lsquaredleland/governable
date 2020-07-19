import { useEffect, useState } from 'react';


// Other APIs
// > https://api.compound.finance/api/v2/governance/history
// => top level network data (# token holders + # voting addresses)
// > https://api.compound.finance/api/v2/governance/comp
// => comp distribution mechanism data
// > https://api.compound.finance/api/v2/governance/accounts?page_size=100
// => good for building current delegation tree

const useInitData = () => {
  const [voters, setVoters] = useState([])
  const [proposals, setProposals] = useState([])
  const [currentProposal, setCurrentProposal] = useState()
  const [initialLoad, setInitiateLoad] = useState(false)

  useEffect(() => {
    if (initialLoad === false) return;

    if (!Number.isInteger(currentProposal)) {
      setCurrentProposal(proposals.length);
      return;
    }

    const additional = `?proposal_id=${currentProposal}&page_size=100`;
    fetch("https://api.compound.finance/api/v2/governance/proposal_vote_receipts"+ additional)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result", result)
          const votes = result.proposal_vote_receipts.map(v => {
            const { support, votes, voter: { address, display_name, image_url } } = v
            return {
              support,
              address,
              display_name,
              image_url,
              votes: parseFloat(votes),
              time: "4/27 - 12:00"
            }
          });
          setVoters(votes);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [currentProposal, initialLoad]);

  useEffect(() => {
    if (initialLoad) return;

    const additional = "?with_detail=true&page_size=100";
    fetch("https://api.compound.finance/api/v2/governance/proposals" + additional)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("proposals", result)
          setProposals(result.proposals);
          setInitiateLoad(true);
        },
        (error) => {
          console.log(error);
        }
      );
  })

  return [{ voters, proposals, currentProposal }, setCurrentProposal]
}

export default useInitData;
