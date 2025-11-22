import { Badge } from "@/libs/shadcn/ui/badge";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { CheckCircle2, CreditCard } from "lucide-react";
import { QrCodePreview } from "../../../_components/QrCodePreview";
import { Alert, AlertDescription, AlertTitle } from "@/libs/shadcn/ui/alert";
import _ from "lodash";
import { Link } from "@navigation";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";

export default function PaymentDetails({
  status,
  metaData,
}: FromTypePointTransactionStripe) {
  return (
    <ContainerSection className="w-full" classNames={{ content: "space-y-6" }}>
      <div className="flex gap-6 @max-2xl:flex-col">
        {/* Main Transaction Info - Left Column (2/3 width) */}
        <Card className="grow">
          <CardHeader className="pb-4">
            {/* <Link
              href={metaData.next_action?.promptpay_display_qr_code?.data}
              target="_blank"
            >
              TESt
            </Link> */}
            <div className="flex items-center justify-between">
              <Alert className="w-fit">
                <AlertTitle className="flex items-center gap-1">
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-success" />
                  {status && _.capitalize(_.startCase(status))}
                </AlertTitle>
                <AlertDescription className="text-xs">
                  Nov 21, 2025 at 10:42 AM
                </AlertDescription>
              </Alert>
            </div>
            <CardDescription className="rounded-lg bg-secondary p-3">
              <div className="relative mx-auto size-50">
                {metaData?.next_action?.promptpay_display_qr_code
                  ?.image_url_svg && (
                  <QrCodePreview
                    image={{
                      src: metaData?.next_action?.promptpay_display_qr_code
                        ?.image_url_svg,
                      alt: metaData.client_secret ?? "unknown",
                    }}
                  />
                )}
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="@container">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold tracking-tighter">
                $1,250.00
              </span>
              <span className="mt-1 text-muted-foreground">USD</span>
            </div>

            <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
              <div className="rounded-lg border bg-muted/50 p-3">
                <div className="mb-1 text-xs font-medium text-muted-foreground">
                  Payment Method
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-12 items-center justify-center rounded border bg-white dark:bg-black">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      Visa ending in 4242
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Expires 12/28
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-muted/50 p-3">
                <div className="mb-1 text-xs font-medium text-muted-foreground">
                  Merchant
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-md border">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="Acme Inc"
                    />
                    <AvatarFallback className="rounded-md">AI</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Acme Inc.</span>
                    <span className="text-xs text-muted-foreground">
                      Software Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Enterprise Plan (Annual)
                </span>
                <span className="font-medium">$1,200.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Additional Seats (2)
                </span>
                <span className="font-medium">$50.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Discount (Welcome)
                </span>
                <span className="font-medium text-emerald-600">-$50.00</span>
              </div>
            </div>
            <Separator />
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$1,200.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (VAT 20%)</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between pt-2 text-base font-bold">
                <span>Total Paid</span>
                <span>$1,250.00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <section className="flex flex-col gap-6 @md:flex-row">
        <Card className="flex-3">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Customer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">
                  john.doe@example.com
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-1">
              <div className="text-xs font-medium text-muted-foreground">
                Billing Address
              </div>
              <div className="text-sm">
                123 Innovation Drive
                <br />
                Tech Valley, CA 94043
                <br />
                United States
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-6 border-l border-muted pl-4">
              <div className="relative">
                <div className="absolute top-1 -left-[21px] h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-background" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Payment Completed</span>
                  <span className="text-xs text-muted-foreground">
                    Nov 21, 10:42 AM
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-1 -left-[21px] h-2.5 w-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    Payment Processing
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Nov 21, 10:41 AM
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-1 -left-[21px] h-2.5 w-2.5 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    Invoice Created
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Nov 21, 10:40 AM
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="h-8 w-full text-xs">
              View Full Logs
            </Button>
          </CardFooter>
        </Card>

        {/* Security Note */}
        {/* <div className="flex gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300">
                Secure Transaction
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-400">
                This payment was processed securely with 256-bit encryption.
              </p>
            </div>
          </div> */}
      </section>
    </ContainerSection>
  );
}

export const DetailPointTransactionForm = ({
  form,
}: {
  form: FromTypePointTransactionStripe;
}) => {
  return (
    <form className="contents">
      <PaymentDetails {...form} />
    </form>
  );
};
