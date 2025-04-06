import { getServerSession } from 'next-auth';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { authOptions } from '@/lib/auth';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-4">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Добро пожаловать, {session.user.name}!</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="stats">Статистика</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p>Email: {session.user.email}</p>
            </TabsContent>
            <TabsContent value="stats">
              <p>Статистика пользователя</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
