# Generated by Django 4.1.7 on 2023-08-27 15:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("raaznotes", "0004_alter_notes_created_at"),
    ]

    operations = [
        migrations.AlterField(
            model_name="notes",
            name="cover_url",
            field=models.TextField(),
        ),
    ]
