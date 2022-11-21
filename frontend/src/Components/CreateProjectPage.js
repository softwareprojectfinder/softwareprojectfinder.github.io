import React from 'react'

class CreateProjectPage extends React.Component {
    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="usr">Name of Project:</label>
                    <input type="text" class="form-control" id="name" />
                </div>
                <div class="form-group">
                    <label for="usr">Tech Stack</label>
                    <input type="text" class="form-control" id="tech_stack" />
                </div>
                <div class="form-group">
                    <label for="usr">Contact Info</label>
                    <input type="text" class="form-control" id="contact" />
                </div>
                <div class="form-group">
                    <label for="usr">Github Link</label>
                    <input type="text" class="form-control" id="github" />
                </div>
                <div class="form-group">
                    <label for="comment">Description</label>
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        )
    }
}

export default CreateProjectPage