import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Card, CardTitle, CardText } from 'material-ui/Card';
const MainComponent = () => (
    <div>
        <AppBar
            title="Very simple ( but cute ❤ ) react application"
        />
        <div>
            <Card style={{ width: '80%', margin: '0 auto', marginTop: '25px' }}>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        </div>
    </div >
);

export default MainComponent;