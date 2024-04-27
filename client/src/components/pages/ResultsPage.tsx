import React from "react";
import { Link } from "react-router-dom";

const ResultsPage: React.FC = () => {
  return (
    <div className="antialiased bg-body text-body font-body">
      <section className="mt-4 pt-6 py-12 md:py-2">
        <div className="container mx-auto px-4 pb-5">
          <div className="mb-20">
            <h2 className="mb-12 text-5xl font-semibold font-subheading">
              Your Results
            </h2>
            <div className="mb-5 text-xl text-neutral-700 font-medium">
              <p className="mb-5">
                Out of <span className="font-bold">50</span> dogs, you selected{" "}
                <span className="font-bold">20</span> that appeared to be pit
                bulls based on the criteria you set at the beginning of the test
              </p>
              <p className="mb-5">
                Of the <span className="font-bold">20</span> that you selected,{" "}
                only <span className="font-bold">17</span> would be classified
                as pit bulls based on your identification criteria
              </p>
              <p className="mb-5">
                <span className="font-bold">10</span> out of the{" "}
                <span className="font-bold">20</span> dogs that were shown were
                identified incorrectly based on your critera
              </p>
              <p className="mb-5">
                Of these, <span className="font-bold">5</span> were within{" "}
                <span className="font-bold">10%</span> of the threshold for what
                you classify as a pit bull
              </p>
              <p className="mb-5">
                The average accuracy for all participants is currently{" "}
                <span className="font-bold">45.3%</span>
              </p>
              <p className="mb-5">
                Your overall accuracy was <span className="font-bold">33%</span>
              </p>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Total Results
            </h2>
            <h6 className="mb-5 font-bold">(All Participants)</h6>
            <p className="mb-6">
              These results are based on the criteria set by all participants
              and broken down based on how participants identified themselves.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Alignment</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Pro-pit bull</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">Neutral</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">Anti-pit bull</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold">(Pro-pit bull)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as pro-pit bull.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold">(Neutral)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as neutral.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-20">
            <h2 className="text-5xl font-semibold font-subheading">
              Breakdown
            </h2>
            <h6 className="mb-5 font-bold">(Anti-pit bull)</h6>
            <p className="mb-6">
              These results are based on the criteria set by participants who
              identified as anti-pit bull.
            </p>
            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Breed Selection</th>
                  <th className="py-2">Count</th>
                  <th className="py-2">Avg. Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">APBT</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
                <tr>
                  <td className="py-2">All Breeds *</td>
                  <td className="py-2">0</td>
                  <td className="py-2">0</td>
                </tr>
              </tbody>
            </table>

            {/* top scores */}

            <h2 className="pt-6 text-5xl font-semibold font-subheading">
              Top Scores
            </h2>
            <h6 className="mb-5 font-bold">(All Participants)</h6>

            <table className="w-full mb-5 text-xl text-neutral-700 font-medium">
              <thead>
                <tr>
                  <th className="py-2">Username</th>
                  <th className="py-2">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">User1</td>
                  <td className="py-2">48%</td>
                </tr>
                <tr>
                  <td className="py-2">User2</td>
                  <td className="py-2">47%</td>
                </tr>
                <tr>
                  <td className="py-2">User3</td>
                  <td className="py-2">45%</td>
                </tr>
                <tr>
                  <td className="py-2">User4</td>
                  <td className="py-2">44%</td>
                </tr>
                <tr>
                  <td className="py-2">User5</td>
                  <td className="py-2">43%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link
            to="/1"
            className="mb-6 inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-white tracking-tight bg-neutral-900 hover:bg-neutral-200 focus:bg-neutral-200 rounded-lg focus:ring-4 focus:ring-neutral-300 transition duration-200"
          >
            Go Back
          </Link>

          <div>
            * All Breeds includes the American Pit Bull Terrier (APBT), American
            Staffordshire Terrier, Staffordshire Bull Terrier, and American
            Bully.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
