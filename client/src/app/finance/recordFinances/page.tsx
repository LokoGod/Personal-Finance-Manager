import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const RecordFinances = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Record</h2>
      <Tabs defaultValue="overview">
        <Card className="w-fit mb-2">
          <TabsList>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="receivables" disabled>
            Receivables
            </TabsTrigger>
            <TabsTrigger value="payables" disabled>
            Payables
            </TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="expenses">
        </TabsContent>

        <TabsContent value="income">
            
        </TabsContent>

        <TabsContent value="receivables">
        </TabsContent>

        <TabsContent value="payables">
        </TabsContent>

      </Tabs>
    </div>
  )
}

export default RecordFinances