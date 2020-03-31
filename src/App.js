import React from 'react';
import CommentDetails from './CommentDetails';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <CommentDetails
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    commentTime="today at 8:20 PM"
                    comment="Nice blog post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    commentTime="today at 6:40 PM"
                    comment="Nice thought"

                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    commentTime="today at 3:20 PM"
                    comment="Nice video"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    commentTime="yesterday at 9:30 AM"
                    comment="Awesome visualisation"
                />
            </ApprovalCard>




        </div>
    );
};
export default App;