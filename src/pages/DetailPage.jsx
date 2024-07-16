import LoaderComponent from "@/components/LoaderComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GET_SINGLE_USER } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SINGLE_USER, {
    variables: { id: id },
  });

  const navigate = useNavigate();

  if (loading) return <LoaderComponent />;
  if (error) return "Fail to get user";

  const user = data.user_by_pk;

  return (
    <div className="max-w-[60rem] my-[5rem] mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <Button onClick={() => navigate("/")}>Back</Button>
            <Badge>
              {(user.user_type === "job" && "Job Seeking") ||
                (user.user_type === "service" && "Service") ||
                (user.user_type === "partner" && "Partnership")}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm font-bold">User Contact</p>

          <div>
            <label className="text-sm text-slate-500">Name</label>
            <p>{user.name}</p>
          </div>
          {user.company_name && (
            <div>
              <label className="text-sm text-slate-500">
                Company&apos;s Name
              </label>
              <p>{user.company_name}</p>
            </div>
          )}
          <div>
            <label className="text-sm text-slate-500">
              Content Information
            </label>
            <p>{user.content_infromation}</p>
          </div>
          <div>
            <label className="text-sm text-slate-500">Type</label>
            <p>
              {(user.user_type === "job" && "Job Seeking") ||
                (user.user_type === "service" && "Service") ||
                (user.user_type === "partner" && "Partnership")}
            </p>
          </div>
          <Separator className="my-2" />
          {user.clients.length > 0 && (
            <>
              <p className="text-sm font-bold">Service Detail</p>
              <div>
                <label className="text-sm text-slate-500">
                  Want to service from us
                </label>
                <p>{user.clients[0]?.service_type}</p>
              </div>
              <div>
                <label className="text-sm text-slate-500">
                  Client&apos;s Business Type
                </label>
                <p>{user.clients[0]?.business_type}</p>
              </div>
            </>
          )}

          {user.job_seekers.length > 0 && (
            <>
              <p className="text-sm font-bold">Job Seeking Detail</p>
              <div>
                <label className="text-sm text-slate-500">Education</label>
                <p>{user.job_seekers[0].eduction}</p>
              </div>
              <div>
                <label className="text-sm text-slate-500">
                  Currently Employee?
                </label>
                <p>
                  {user.job_seekers[0].isWorking ? (
                    <Badge>Yes</Badge>
                  ) : (
                    <Badge variant="destructive">No</Badge>
                  )}
                </p>
              </div>
              {user.job_seekers[0].isWorking && (
                <div>
                  <label className="text-sm text-slate-500">
                    Working Industries
                  </label>
                  <p>{user.job_seekers[0].working_industries}</p>
                </div>
              )}
              <div>
                <label className="text-sm text-slate-500">Skills</label>
                <p>{user.job_seekers[0].skills}</p>
              </div>
              <div>
                <label className="text-sm text-slate-500">
                  Interested jobs in our company
                </label>
                <p>{user.job_seekers[0].job_type}</p>
              </div>
            </>
          )}

          {user.partners.length > 0 && (
            <>
              <p className="text-sm font-bold">Partnership Detail</p>
              <div>
                <label className="text-sm text-slate-500">
                  Want to service from us
                </label>
                <p>{user.partners[0]?.service_type}</p>
              </div>
              <div>
                <label className="text-sm text-slate-500">
                  Partner&apos;s Business Type
                </label>
                <p>{user.partners[0]?.business_type}</p>
              </div>
              <div>
                <label className="text-sm text-slate-500">
                  Reason of why partner with us
                </label>
                <p>{user.partners[0]?.why_partner}</p>
              </div>
              <div>
                <label className="text-sm text-slate-500">
                  What they can offer to us
                </label>
                <p>{user.partners[0]?.offer}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailPage;
